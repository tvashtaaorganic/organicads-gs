import { NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';
import turso from '@/lib/turso';

// Cache the total count query for 1 hour
const getCachedTotalCount = unstable_cache(
    async () => {
        console.log('!!! SITEMAP INDEX: FETCHING TOTAL COUNT FROM DATABASE');
        const result = await turso.execute({
            sql: 'SELECT COUNT(*) as total FROM pages'
        });
        const total = result.rows[0].total as number;
        console.log('!!! SITEMAP INDEX: TOTAL PAGES:', total);
        return total;
    },
    ['sitemap-index-count'],
    {
        revalidate: 3600, // Cache for 1 hour
        tags: ['sitemap-index'],
    }
);

// Cache the lastmod date so it only updates when cache revalidates
const getCachedLastModDate = unstable_cache(
    async () => {
        return new Date().toISOString();
    },
    ['sitemap-index-lastmod'],
    {
        revalidate: 3600, // Cache for 1 hour
        tags: ['sitemap-index'],
    }
);

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://organicads.in';

    try {
        // Use cached count query and cached lastmod date
        const total = await getCachedTotalCount();
        const lastModDate = await getCachedLastModDate();
        const pageSize = 1000; // Number of URLs per sitemap
        const totalPages = Math.ceil(total / pageSize);

        const urls = [];
        // Loop backwards so the latest sitemap (highest number) appears first in the index
        for (let i = totalPages; i >= 1; i--) {
            urls.push(`
      <sitemap>
        <loc>${baseUrl}/sitemaps-services/sitemap-services-${i}.xml</loc>
        <lastmod>${lastModDate}</lastmod>
      </sitemap>
    `);
        }

        const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}
    </sitemapindex>`;

        return new NextResponse(sitemapIndex, {
            status: 200,
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
            },
        });
    } catch (error) {
        console.error('Error generating sitemap index:', error);

        // Return a minimal sitemap index on error
        const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${baseUrl}/sitemaps-services/sitemap-services-1.xml</loc>
        <lastmod>2025-01-01T00:00:00.000Z</lastmod>
      </sitemap>
    </sitemapindex>`;

        return new NextResponse(fallbackSitemap, {
            status: 200,
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    }
}
