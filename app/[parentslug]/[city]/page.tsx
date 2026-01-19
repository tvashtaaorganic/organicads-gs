import { notFound } from 'next/navigation';
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
import { getPageBySlug, getPaginatedPages, getPageByHierarchy } from '@/lib/googleSheets';

// Use React cache to deduplicate requests within the same render
const fetchPageData = cache(async (parent: string, city: string) => {
    console.log('!!! FETCHING PAGE DATA FOR HIERARCHY:', parent, city);
    return await getPageByHierarchy(parent, city);
});

type Props = {
    params: Promise<{
        parentslug: string;
        city: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { parentslug, city } = await params;
    // Construct the slug from parent and city
    // Example: website-design + tumakuru -> website-design-tumakuru
    // const slug = `${parentslug}-${city}`; // No longer needed for fetching

    console.log('!!! GENERATING METADATA FOR HIERARCHY:', parentslug, city);
    const data = await fetchPageData(parentslug, city);

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

// Generate static params if possible, or allow dynamic
// Since we have many combinations, we might want to generate some key ones at build time
// But for now let's keep it dynamic-first with caching
export const dynamicParams = true;

export default async function Page({ params }: Props) {
    const { parentslug, city } = await params;

    console.log('!!! RENDERING PAGE FOR HIERARCHY:', parentslug, city);
    const service = await fetchPageData(parentslug, city);

    if (!service) {
        console.log('!!! NO DATA FOUND FOR HIERARCHICAL PAGE:', parentslug, city);
        return notFound();
    }

    // Render the correct component based on servicename
    const servicename = service.servicename.toLowerCase();

    if (servicename === 'dm' || servicename.includes('digital')) {
        return <DMService service={service} />;
    } else if (servicename === 'seo') {
        return <SEOService service={service} />;
    } else if (servicename === 'whatsapp') {
        return <WhatsAppService service={service} />;
    } else if (servicename === 'webdev' || servicename.includes('web')) {
        return <WebDevService service={service} />;
    } else if (servicename.includes('cloud') || servicename.includes('backend')) {
        return <BackendCloudService service={service} />;
    } else if (servicename.includes('sms') || servicename.includes('bulk')) {
        return <BulkSMSService service={service} />;
    } else if (servicename.includes('chat') || servicename.includes('bot')) {
        return <ChatbotService service={service} />;
    } else if (servicename.includes('app') || servicename.includes('mobile')) {
        return <MobileAppService service={service} />;
    } else if (servicename.includes('multi') || servicename.includes('channel')) {
        return <MultiChannelService service={service} />;
    } else if (servicename.includes('rcs')) {
        return <RCSService service={service} />;
    } else if (servicename.includes('social') || servicename.includes('ads')) {
        return <SocialMediaAdsService service={service} />;
    } else if (servicename.includes('ui') || servicename.includes('ux') || servicename.includes('design')) {
        return <UIUXService service={service} />;
    } else if (servicename.includes('voice') || servicename.includes('call')) {
        return <VoiceService service={service} />;
    }

    // Default fallback
    return <SEOService service={service} />;
}
