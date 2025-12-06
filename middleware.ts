import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const { pathname } = url;

    const host = request.headers.get('host') || 'organicads.in';
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}`;

    // ✅ Rewrite for sitemap-services-*.xml
    if (pathname.startsWith('/sitemaps-services/sitemap-services-') && pathname.endsWith('.xml')) {
        console.log('Middleware: Pattern matched for:', pathname);
        const match = pathname.match(/sitemap-services-(\d+)\.xml$/);
        if (match) {
            const page = match[1];
            console.log('Middleware: Extracted page:', page);
            url.pathname = `/sitemaps-services/sitemap-services/${page}`;
            console.log('Middleware: Rewriting to:', url.pathname);
            const response = NextResponse.rewrite(url);
            response.headers.set('x-base-url', baseUrl);
            response.headers.set('x-pathname', pathname);
            return response;
        }
    }

    // Default flow
    const response = NextResponse.next();
    response.headers.set('x-base-url', baseUrl);
    response.headers.set('x-pathname', pathname);
    return response;
}

export const config = {
    matcher: '/:path*',
};
