import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://organicads.in';

    const robotsTxt = `# *
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemaps-services/sitemap_index.xml

# Disallow admin and API routes
Disallow: /api/
Disallow: /admin/

# Crawl-delay
Crawl-delay: 1
`;

    return new NextResponse(robotsTxt, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
        },
    });
}
