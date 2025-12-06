import { NextResponse } from 'next/server';
import turso from '@/lib/turso';

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://organicads.in';

    try {
        // Fetch count of all service slugs from the pages table
        const result = await turso.execute({
            sql: 'SELECT COUNT(*) as total FROM pages ORDER BY id DESC'
        });

        const total = result.rows[0].total as number;
        const pageSize = 1000; // Number of URLs per sitemap
        const totalPages = Math.ceil(total / pageSize);

        const urls = [];
        // Loop backwards so the latest sitemap (highest number) appears first in the index
        for (let i = totalPages; i >= 1; i--) {
            urls.push(`
      <sitemap>
        <loc>${baseUrl}/sitemaps-services/sitemap-services-${i}.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
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
        <lastmod>${new Date().toISOString()}</lastmod>
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
