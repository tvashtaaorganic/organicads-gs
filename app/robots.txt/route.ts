import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://organicads.in';

    const robotsTxt = `# Global rules for all bots
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemaps-services/sitemap_index.xml

# Disallow admin and API routes
Disallow: /api/
Disallow: /admin/

# Crawl-delay for general bots
Crawl-delay: 1

# ========================================
# BLOCK ALL CHINESE BOTS AND CRAWLERS
# ========================================

# Baidu (China's largest search engine)
User-agent: Baiduspider
User-agent: Baiduspider-video
User-agent: Baiduspider-image
User-agent: Baiduspider-news
User-agent: Baiduspider-mobile
Disallow: /

# Sogou (Chinese search engine)
User-agent: Sogou web spider
User-agent: Sogou inst spider
User-agent: Sogou spider2
User-agent: Sogou blog
User-agent: Sogou News Spider
User-agent: Sogou Orion spider
Disallow: /

# 360 Spider (Chinese search engine)
User-agent: 360Spider
User-agent: HaosouSpider
Disallow: /

# Yisou (Chinese search engine)
User-agent: YisouSpider
User-agent: EasouSpider
Disallow: /

# Bytedance/TikTok/Toutiao bots
User-agent: Bytespider
User-agent: Bytedance
Disallow: /

# Huawei Cloud bot
User-agent: PetalBot
Disallow: /

# Yandex (Russian, but heavy in China)
User-agent: Yandex
User-agent: YandexBot
User-agent: YandexImages
Disallow: /

# Other Chinese crawlers
User-agent: JikeSpider
User-agent: Sosospider
User-agent: YodaoBot
User-agent: ChinasoSpider
User-agent: Gigabot
User-agent: MSNBot-Media
User-agent: Robozilla
Disallow: /

# ========================================
# BLOCK AI SCRAPERS AND TRAINING BOTS
# ========================================

# OpenAI GPTBot
User-agent: GPTBot
Disallow: /

# Common Crawl
User-agent: CCBot
Disallow: /

# Anthropic AI
User-agent: anthropic-ai
User-agent: Claude-Web
Disallow: /

# Google Extended (AI training)
User-agent: Google-Extended
Disallow: /

# Omgili bot
User-agent: omgili
User-agent: omgilibot
Disallow: /

# ========================================
# BLOCK AGGRESSIVE SEO & SCRAPER BOTS
# ========================================

# SemrushBot
User-agent: SemrushBot
Disallow: /

# AhrefsBot
User-agent: AhrefsBot
Disallow: /

# MJ12bot (Majestic)
User-agent: MJ12bot
Disallow: /

# DotBot
User-agent: DotBot
Disallow: /

# Blexbot
User-agent: BLEXBot
Disallow: /

# DataForSeoBot
User-agent: DataForSeoBot
Disallow: /

# ========================================
# BLOCK OTHER BANDWIDTH-HEAVY BOTS
# ========================================

# Archive.org
User-agent: ia_archiver
Disallow: /

# Various scrapers
User-agent: SiteSnagger
User-agent: WebCopier
User-agent: WebZIP
User-agent: HTTrack
User-agent: Teleport
User-agent: TeleportPro
User-agent: WebStripper
User-agent: WebSauger
User-agent: WebReaper
User-agent: Offline Explorer
Disallow: /
`;

    return new NextResponse(robotsTxt, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
        },
    });
}
