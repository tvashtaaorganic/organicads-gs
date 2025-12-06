# Service Landing Pages

This directory contains SEO-optimized landing page components for all OrganicAds services.

## Available Service Pages

### ✅ Existing Services
1. **Web Development** - `/components/services/webdev/page.tsx`
   - Technologies: Next.js, React, TypeScript, Tailwind CSS, Shadcn, PHP, Bootstrap, WordPress
   - Badge: "High-Performance Custom Websites Delivered Fast!"

2. **Digital Marketing** - `/components/services/dm/page.tsx`
   - Technologies: SEO, Google Ads, Facebook Ads, Instagram Ads
   - Badge: "Drive 10x More Traffic & Leads Instantly!"

3. **SEO Services** - `/components/services/seo/page.tsx`
   - Technologies: SEO optimization, Google & Bing rankings
   - Badge: "Top Google & Bing Rankings in 4 Hours!"

4. **WhatsApp Business API** - `/components/services/whatsapp/page.tsx`
   - Technologies: WhatsApp API, Automation, Chatbots, Broadcasting
   - Badge: "Official WhatsApp Business API Partner - Instant Setup!"

### 🆕 Newly Created Services
5. **Mobile App Development** - `/components/services/mobile-app/page.tsx`
   - Technologies: React Native, iOS, Android, Web-to-App
   - Badge: "Native iOS, Android & Cross-Platform Apps Built Fast!"
   - Theme: Purple gradient

6. **RCS Messaging** - `/components/services/rcs/page.tsx`
   - Technologies: Rich Media, Interactive, Verified Sender, Analytics
   - Badge: "Next-Gen Rich Communication Services - App-Like SMS Experience!"
   - Theme: Blue gradient

7. **Bulk SMS** - `/components/services/bulk-sms/page.tsx`
   - Technologies: Bulk Messaging, OTP, Alerts, Promotions
   - Badge: "99.9% Delivery Rate - Send Millions of SMS Instantly!"
   - Theme: Purple/Indigo gradient

8. **Voice Solutions** - `/components/services/voice/page.tsx`
   - Technologies: IVR, Outbound Calls, Voice OTP, Call Tracking
   - Badge: "Automated IVR & Voice OTP - Boost Conversions by 300%!"
   - Theme: Orange/Red gradient

9. **Chatbot** - `/components/services/chatbot/page.tsx`
   - Technologies: AI Chatbot, Automation, 24/7 Support, Multi-language
   - Badge: "AI-Powered 24/7 Customer Support - Reduce Costs by 80%!"
   - Theme: Teal/Emerald gradient

10. **Multi Channel Messaging** - `/components/services/multi-channel/page.tsx`
    - Technologies: Omnichannel, Smart Routing, Analytics, Unified API
    - Badge: "Unified Omnichannel Platform - WhatsApp, RCS, SMS & More!"
    - Theme: Emerald/Green gradient

11. **Backend & Cloud** - `/components/services/backend-cloud/page.tsx`
    - Technologies: AWS, Turso, SQL Server, Node.js
    - Badge: "Scalable AWS Infrastructure - 99.99% Uptime Guaranteed!"
    - Theme: Indigo/Blue gradient

12. **UI/UX Design** - `/components/services/uiux/page.tsx`
    - Technologies: Figma, Shadcn UI, Custom Design, Responsive
    - Badge: "Award-Winning Designs - Increase Conversions by 400%!"
    - Theme: Rose/Pink gradient

13. **Social Media Ads** - `/components/services/social-media-ads/page.tsx`
    - Technologies: Meta Ads, LinkedIn, Twitter, TikTok
    - Badge: "Meta, LinkedIn, Twitter, TikTok - 5x ROI on Ad Spend!"
    - Theme: Cyan/Blue gradient

## Page Structure

Each service page includes:
- **Header** with navigation
- **Hero Section** with:
  - Breadcrumb navigation
  - Eye-catching badge with service USP
  - Dynamic H1 title with location
  - SEO-friendly description (domestic vs international)
- **ServiceCustomCard** - Custom service description with embedded form
- **FeaturedIn** - Brand credibility section
- **ServiceContent** - Dynamic content sections
- **Portfolio** - Project showcase
- **SEOResults** - Performance metrics
- **Services** - All services overview
- **Features** - Key features
- **CTA** - Call to action
- **Footer** - Site footer
- **BackToTop** - Scroll to top button

## SEO Features

✅ **Optimized for Search Engines:**
- Dynamic meta titles and descriptions
- Location-based content (city, country)
- Service-specific keywords
- Structured breadcrumb navigation
- Compelling hero descriptions
- Unique badges highlighting key benefits
- Mobile-responsive design
- Fast loading with Next.js optimization

## Color Themes

Each service has a unique gradient theme for visual distinction:
- Web Dev: Blue
- Mobile App: Purple
- Digital Marketing: Pink
- WhatsApp: WhatsApp Green (#25D366)
- RCS: Blue
- Bulk SMS: Purple
- Voice: Orange
- Chatbot: Teal
- Multi-Channel: Emerald
- Backend & Cloud: Indigo
- UI/UX: Rose
- Social Media Ads: Cyan

## Usage

These components are designed to be used with dynamic routing. They accept a `service` prop containing all necessary data for SEO and content rendering.

```tsx
interface ServiceProps {
    service: {
        id: number;
        name: string;
        locationin: string;
        cityin: string;
        countryin: string;
        descpost: string; // 'domestic' or 'international'
        cat: string;
        titletag: string;
        descriptiontag: string;
        keywordstag: string;
        slug: string;
        servicename: string;
        date: string;
    };
}
```

## Next Steps

To integrate these pages into your routing system, ensure your dynamic route handler in `/app/services/[slug]/page.tsx` maps the appropriate service slugs to these components.
