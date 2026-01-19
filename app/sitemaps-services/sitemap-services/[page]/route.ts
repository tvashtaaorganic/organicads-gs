import { NextResponse } from 'next/server';
import { getPaginatedPages } from '@/lib/googleSheets';

export async function GET(
    request: Request,
    props: { params: Promise<{ page: string }> }
) {
    const params = await props.params;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://organicads.vercel.app';
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

        // Use cached Google Sheets data with pagination
        const pages = await getPaginatedPages(pageSize, offset);

        if (pages.length === 0) {
            return new NextResponse('Not Found', { status: 404 });
        }

        // Reverse the rows so the "latest" of this batch appears at the top of the XML
        const reversedPages = [...pages].reverse();

        // Static fallback date for pages without a date (prevents dynamic content on every request)
        const fallbackDate = '2025-01-01T00:00:00.000Z';

        const urls = reversedPages.map((page) => {
            const lastmod = page.date
                ? new Date(page.date).toISOString()
                : fallbackDate;

            let loc = `${baseUrl}/services/${page.slug}`;

            // If parentslug, city, and location exist, use clean hierarchical URL structure
            // Format: /services/[parentslug]/[city]/[area]
            if (page.parentslug && page.locationin && page.cityin) {
                const citySlug = page.cityin.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const areaSlug = page.locationin.toLowerCase().replace(/[^a-z0-9]+/g, '-');

                // Clean URL: service/city/area
                loc = `${baseUrl}/services/${page.parentslug}/${citySlug}/${areaSlug}`;
            }

            return `
      <url>
        <loc>${loc}</loc>
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
                'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
            },
        });
    } catch (error) {
        console.error('Error generating service sitemap:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
