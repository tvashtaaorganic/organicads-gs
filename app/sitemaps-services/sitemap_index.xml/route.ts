import { NextResponse } from 'next/server';
import { getTotalCount } from '@/lib/googleSheets';

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://organicads.vercel.app';

    try {
        // Use cached count from Google Sheets
        const total = await getTotalCount();
        console.log('!!! SITEMAP INDEX: TOTAL PAGES:', total);

        // Use current date for lastmod
        const lastModDate = new Date().toISOString();
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
                'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
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
