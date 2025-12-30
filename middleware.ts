import { NextResponse, NextRequest } from 'next/server';

// List of known Chinese bot user agents
const CHINESE_BOT_PATTERNS = [
    'baidu',
    'baiduspider',
    'sogou',
    'yandex',
    'yisouspider',
    '360spider',
    'bytespider',
    'bytedance',
    'toutiao',
    'petalbot',
    'huawei',
    'chinaso',
    'haosou',
];

// Known Chinese IP ranges (major ones - you can expand this list)
const CHINESE_IP_RANGES = [
    '1.0.1.0/24',
    '1.0.2.0/23',
    '1.0.8.0/21',
    '1.0.32.0/19',
    // Add more as needed
];

function isChineseBot(userAgent: string): boolean {
    const ua = userAgent.toLowerCase();
    return CHINESE_BOT_PATTERNS.some(pattern => ua.includes(pattern));
}

function isChineseIP(ip: string): boolean {
    // Basic check for common Chinese IP ranges
    // For production, consider using a proper IP geolocation service
    if (!ip) return false;

    // Check if IP starts with known Chinese ranges
    const chineseIPPrefixes = [
        '1.', '14.', '27.', '36.', '39.', '42.', '49.', '58.', '59.', '60.',
        '61.', '101.', '103.', '106.', '110.', '111.', '112.', '113.', '114.',
        '115.', '116.', '117.', '118.', '119.', '120.', '121.', '122.', '123.',
        '124.', '125.', '180.', '182.', '183.', '202.', '203.', '210.', '211.',
        '218.', '219.', '220.', '221.', '222.', '223.'
    ];

    return chineseIPPrefixes.some(prefix => ip.startsWith(prefix));
}

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const { pathname } = url;

    // ============================================
    // 🚫 CHINA BLOCKING - FIRST PRIORITY
    // ============================================

    // Method 1: Check Cloudflare geo headers (if using Cloudflare)
    const cfCountry = request.headers.get('cf-ipcountry');
    if (cfCountry === 'CN') {
        console.log('🚫 BLOCKED: China request detected via Cloudflare geo header');
        return new NextResponse('Access Denied', {
            status: 403,
            headers: {
                'Content-Type': 'text/plain',
                'X-Blocked-Reason': 'Geographic restriction',
            }
        });
    }

    // Method 2: Check Vercel geo headers (if using Vercel)
    const vercelCountry = (request as any).geo?.country;
    if (vercelCountry === 'CN') {
        console.log('🚫 BLOCKED: China request detected via Vercel geo');
        return new NextResponse('Access Denied', {
            status: 403,
            headers: {
                'Content-Type': 'text/plain',
                'X-Blocked-Reason': 'Geographic restriction',
            }
        });
    }

    // Method 3: Check user agent for Chinese bots
    const userAgent = request.headers.get('user-agent') || '';
    if (isChineseBot(userAgent)) {
        console.log('🚫 BLOCKED: Chinese bot detected:', userAgent);
        return new NextResponse('Access Denied', {
            status: 403,
            headers: {
                'Content-Type': 'text/plain',
                'X-Blocked-Reason': 'Bot restriction',
            }
        });
    }

    // Method 4: Check IP address (fallback)
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim()
        || request.headers.get('x-real-ip')
        || (request as any).ip
        || '';

    if (isChineseIP(ip)) {
        console.log('🚫 BLOCKED: Chinese IP detected:', ip);
        return new NextResponse('Access Denied', {
            status: 403,
            headers: {
                'Content-Type': 'text/plain',
                'X-Blocked-Reason': 'IP restriction',
            }
        });
    }

    // ============================================
    // ✅ ALLOWED TRAFFIC - Continue processing
    // ============================================

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
