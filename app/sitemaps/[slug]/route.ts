import { NextResponse } from 'next/server';
import { getPaginatedPages } from '@/lib/googleSheets';

const NAME_TO_PATTERN: Record<string, number> = {
    'direct-slugs': 1,
    'services-main': 2,
    'company-in-location': 3,
    'services-location-prefixed': 4,
    'company-location-city': 5,
    'company-location-short': 6,
    'name-in-location': 7,
    'name-location-city': 8,
    'city-services-location': 9,
    'agency-location': 10,
    'intl-company-location': 11
};

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    // Format: sitemap-[name]-c[chunk].xml or sitemap-[name].xml
    const match = slug.match(/^sitemap-(.+?)(?:-c(\d+))?\.xml$/);
    
    if (!match) {
        return new NextResponse('Not Found', { status: 404 });
    }

    const patternName = match[1];
    const chunkIndex = match[2] ? parseInt(match[2]) : 1;
    const patternIndex = NAME_TO_PATTERN[patternName];

    if (!patternIndex) {
        return new NextResponse('Pattern Not Found', { status: 404 });
    }

    const pageSize = 1000;
    const offset = (chunkIndex - 1) * pageSize;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://organicads.in';

    try {
        const pages = await getPaginatedPages(pageSize, offset);
        
        if (pages.length === 0 && chunkIndex > 1) {
            return new NextResponse('Not Found', { status: 404 });
        }

        // Generate URLs for the specific pattern
        const urls = pages.map((p) => {
            const loc = (p.locationin || '').toLowerCase().replace(/\s+/g, '-');
            const city = (p.cityin || '').toLowerCase().replace(/\s+/g, '-');
            const svc = p.parentslug || 'digital-marketing';
            const nameSlug = (p.name || '').toLowerCase().replace(/\s+/g, '-');
            
            // Handle potentially invalid dates
            let dateStr = new Date().toISOString();
            if (p.date) {
                try {
                    dateStr = new Date(p.date).toISOString();
                } catch (e) {
                    // fall back
                }
            }

            let targetPath = '';
            
            switch (patternIndex) {
                case 1: targetPath = p.slug; break; // Pattern 1: [slug]
                case 2: targetPath = `services/${p.slug}`; break; // Pattern 2: services/[slug] - MAIN
                case 3: targetPath = `${svc}-company-in-${loc}`; break;
                case 4: targetPath = `services/${svc}-company-in-${loc}`; break;
                case 5: targetPath = `${svc}-company-in-${loc}-${city}`; break;
                case 6: targetPath = `${svc}-company-${loc}`; break;
                case 7: targetPath = `${nameSlug}-in-${loc}`; break;
                case 8: targetPath = `${nameSlug}-in-${loc}-${city}`; break;
                case 9: targetPath = `${city}/${svc}-services-${loc}`; break;
                case 10: targetPath = `${svc}-agency-${loc}`; break;
                case 11: targetPath = `in/${loc}/${svc}-company-in-${city}`; break;
                default: return null;
            }

            if (!targetPath) return null;

            return `
  <url>
    <loc>${baseUrl}/${targetPath.startsWith('/') ? targetPath.slice(1) : targetPath}</loc>
    <lastmod>${dateStr}</lastmod>
    <priority>${patternIndex === 2 ? 0.9 : 0.7}</priority>
    <changefreq>weekly</changefreq>
  </url>`;
        }).filter(Boolean);

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('\n')}
</urlset>`;

        return new NextResponse(sitemap, {
            status: 200,
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, s-maxage=172800, stale-while-revalidate=604800',
            },
        });
    } catch (error) {
        console.error('Sitemap generation error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
