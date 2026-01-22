import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import { cache } from 'react';
import DMService from '@/components/services/dm/page';
import SEOService from '@/components/services/seo/page';
import WhatsAppService from '@/components/services/whatsapp/page';
import WebDevService from '@/components/services/webdev/page';
import BackendCloudService from '@/components/services/backend-cloud/page';
import BulkSMSService from '@/components/services/bulk-sms/page';
import ChatbotService from '@/components/services/chatbot/page';
import MobileAppService from '@/components/services/mobile-app/page';
import MultiChannelService from '@/components/services/multi-channel/page';
import RCSService from '@/components/services/rcs/page';
import SocialMediaAdsService from '@/components/services/social-media-ads/page';
import UIUXService from '@/components/services/uiux/page';
import VoiceService from '@/components/services/voice/page';
import { getPageBySlug, getPageByHierarchy, getPageByHierarchyWithArea } from '@/lib/googleSheets';

// Use dynamic rendering with ISR - only fetch the specific page requested
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Cache each page for 1 hour after first visit

const fetchPageData = cache(async (slugParts: string[]) => {
    console.log('!!! FETCHING PAGE DATA FOR SLUG PARTS:', slugParts);

    // If 3 parts: hierarchical route with area (parentslug/city/area)
    if (slugParts.length === 3) {
        const [parentslug, city, area] = slugParts;
        return await getPageByHierarchyWithArea(parentslug, city, area);
    }

    // If 2 parts: hierarchical route (parentslug/city)
    if (slugParts.length === 2) {
        const [parentslug, city] = slugParts;
        return await getPageByHierarchy(parentslug, city);
    }

    // If 1 part: flat slug route - this will now primarily be handled by redirect in component,
    // but kept here for potential use in metadata or if redirect logic changes.
    if (slugParts.length === 1) {
        return await getPageBySlug(slugParts[0]);
    }

    return null;
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params;

    // If it's a single slug, we expect a redirect, but for metadata we might try to fetch
    // just in case there is valid data, or return default metadata.
    // However, since the component redirects, this metadata won't matter much for the user.
    const data = await fetchPageData(slug);

    if (!data) {
        return {
            title: 'Page Not Found',
            description: 'This page does not exist.',
        };
    }

    return {
        title: data.titletag as string,
        description: data.descriptiontag as string,
        keywords: (data.keywordstag as string)?.split(',').map((k: string) => k.trim()),
        openGraph: {
            title: data.titletag as string,
            description: data.descriptiontag as string,
            type: 'website',
            locale: 'en_IN',
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;

    // Handle single slug redirect to default city (Bangalore)
    // E.g. /services/digital-marketing -> /services/digital-marketing/bangalore
    if (slug?.length === 1) {
        redirect(`/services/${slug[0]}/bangalore`);
    }

    const data = await fetchPageData(slug);

    if (!data) {
        console.log('!!! NO DATA FOUND, RETURNING 404');
        notFound();
    }

    const serviceComponents: Record<string, React.ComponentType<any>> = {
        'dm': DMService,
        'seo': SEOService,
        'whatsapp': WhatsAppService,
        'webdev': WebDevService,
        'backend-cloud': BackendCloudService,
        'bulk-sms': BulkSMSService,
        'chatbot': ChatbotService,
        'mobile-app': MobileAppService,
        'multi-channel': MultiChannelService,
        'rcs': RCSService,
        'social-media-ads': SocialMediaAdsService,
        'uiux': UIUXService,
        'voice': VoiceService,
    };

    const ServiceComponent = serviceComponents[data.servicename as string];

    if (!ServiceComponent) {
        console.error(`!!! NO COMPONENT FOUND FOR SERVICE: ${data.servicename}`);
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': data.name,
        'description': data.descriptiontag,
        'url': `https://organicads.vercel.app/services/${data.slug}`,
        'telephone': '+918095112200', // Update with real number if available
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': data.locationin || data.cityin,
            'addressRegion': data.cityin,
            'addressCountry': 'IN'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            // Default coords for Bangalore (would need real coords from sheet to be precise)
            'latitude': '12.9716',
            'longitude': '77.5946'
        },
        'areaServed': {
            '@type': 'City',
            'name': data.cityin
        },
        'priceRange': '₹₹'
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServiceComponent service={data} />
        </>
    );
}
