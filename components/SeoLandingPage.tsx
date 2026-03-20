'use client';

import React from 'react';
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

interface SeoLandingPageProps {
  data: any;
}

export const SeoLandingPage = ({ data }: SeoLandingPageProps) => {
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

  const ServiceComponent = serviceComponents[data.servicename.toLowerCase()] || serviceComponents['dm'];

  const loc = data.locationin.toLowerCase().replace(/\s+/g, '-');
  // Authoritative canonical URL from the Google Sheet slug
  const canonical = `https://organicads.in/${data.slug || `${data.parentslug}-company-in-${loc}`}`;

  const schemas = [
    // 1. LocalBusiness — uses locationin, cityin from sheet
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Organic Ads Technologies",
      "description": data.descriptiontag,
      "url": "https://organicads.in",
      "telephone": "+91-7259404569",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": data.locationin,
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "247"
      }
    },

    // 2. BreadcrumbList — uses name, locationin, cityin from sheet
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://organicads.in" },
        { "@type": "ListItem", "position": 2, "name": data.servicename, "item": `https://organicads.in/services/${data.parentslug}` },
        { "@type": "ListItem", "position": 3, "name": `${data.name} in ${data.locationin}`, "item": canonical }
      ]
    },

    // 3. Service — uses name, locationin, descpost from sheet
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${data.name} in ${data.locationin}`,
      "description": data.descpost,
      "provider": { "@type": "Organization", "name": "Organic Ads Technologies" },
      "areaServed": { "@type": "Place", "name": `${data.locationin}, ${data.cityin}` }
    }
  ];

  // Parse nearbyareas from sheet (comma-separated string)
  const nearby = data.nearbyareas
    ? data.nearbyareas.split(',').map((area: string) => area.trim()).filter(Boolean)
    : [];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      
      <ServiceComponent service={data} />
    </>
  );
};
