import { NextResponse } from 'next/server';
import { getTotalCount } from '@/lib/googleSheets';

const PATTERN_NAMES: Record<number, string> = {
    1: 'direct-slugs',
    2: 'services-main',
    3: 'company-in-location',
    4: 'services-location-prefixed',
    5: 'company-location-city',
    6: 'company-location-short',
    7: 'name-in-location',
    8: 'name-location-city',
    9: 'city-services-location',
    10: 'agency-location',
    11: 'intl-company-location'
};

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://organicads.in';
    const lastModDate = new Date().toISOString();

    try {
        const totalRows = await getTotalCount();
        const pageSize = 1000;
        const totalChunks = Math.ceil(totalRows / pageSize) || 1;

        const patternsCount = 11;
        const sitemaps: string[] = [
            `${baseUrl}/sitemap-static.xml`,
        ];

        for (let pIndex = 1; pIndex <= patternsCount; pIndex++) {
            const name = PATTERN_NAMES[pIndex] || `pattern-${pIndex}`;
            for (let cIndex = 1; cIndex <= totalChunks; cIndex++) {
                const filename = cIndex === 1 
                    ? `sitemap-${name}.xml` 
                    : `sitemap-${name}-c${cIndex}.xml`;
                
                sitemaps.push(`${baseUrl}/sitemaps/${filename}`);
            }
        }

        const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps
            .map(
                (loc) => `
  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${lastModDate}</lastmod>
  </sitemap>`
            )
            .join('\n')}
</sitemapindex>`;

    return new NextResponse(sitemapIndex, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=172800, stale-while-revalidate=604800',
        },
    });
    } catch (error) {
        console.error('Sitemap Index generation error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
