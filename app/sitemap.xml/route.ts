import { NextResponse } from 'next/server';

function escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '"': return '&quot;';
            case "'": return '&apos;';
            default: return c;
        }
    });
}

async function generateStaticSitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://organicads.in';

    const staticPages = [
        '/',
        '/#about',
        '/#services',
        '/#portfolio',
        '/#process',
        '/#pricing',
        '/#contact',
        '/about',
        '/contact',
        '/services',
        // Add more static pages as needed
    ];

    const urls = staticPages.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date().toISOString(),
    }));

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map(
                ({ url, lastModified }) => `
  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
            )
            .join('\n')}
</urlset>`;

    return sitemap;
}

export async function GET() {
    const sitemap = await generateStaticSitemap();
    return new NextResponse(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
        },
    });
}
