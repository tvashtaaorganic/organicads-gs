import { NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';
import turso from '@/lib/turso';

// Cache the sitemap data fetch for 1 hour
const getCachedSitemapData = unstable_cache(
    async (limit: number, offset: number) => {
        console.log(`!!! FETCHING SITEMAP DATA FROM DB (Limit: ${limit}, Offset: ${offset})`);
        const result = await turso.execute({
            sql: `SELECT slug, date FROM pages ORDER BY id ASC LIMIT ${limit} OFFSET ${offset}`
        });
        return result.rows;
    },
    ['sitemap-services-data'],
    {
        revalidate: 3600, // 1 hour shared cache
        tags: ['sitemap']
    }
);

export async function GET(
    request: Request,
    props: { params: Promise<{ page: string }> }
) {
    const params = await props.params;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://organicads.in';
    const { page } = params;
    console.log('Route: Received page param:', page);

    try {
        const pageSize = 1000;

        // Ensure page is a valid number
        const pageNum = parseInt(page);
        console.log('Route: Parsed page number:', pageNum);

        if (isNaN(pageNum)) {
            throw new Error(`Invalid page number: ${page}`);
        }

        const offset = (pageNum - 1) * pageSize;
        console.log('Route: Calculated offset:', offset);

        // Use cached DB query
        const rows = await getCachedSitemapData(pageSize, offset);

        if (rows.length === 0) {
            return new NextResponse('Not Found', { status: 404 });
        }

        // Reverse the rows so the "latest" of this batch appears at the top of the XML
        const reversedRows = [...rows].reverse();

        // Static fallback date for pages without a date (prevents dynamic content on every request)
        const fallbackDate = '2025-01-01T00:00:00.000Z';

        const urls = reversedRows.map((row) => {
            const lastmod = row.date
                ? new Date(row.date as string).toISOString()
                : fallbackDate;

            return `
      <url>
        <loc>${baseUrl}/services/${row.slug}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
    `;
        });

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('\n')}
  </urlset>`;

        return new NextResponse(sitemap, {
            status: 200,
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
            },
        });
    } catch (error) {
        console.error('Error generating service sitemap:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
