'use client';

import WelixHeader from '@/components/WelixHeader';
import WelixHero from '@/components/WelixHero';
import WelixStats from '@/components/WelixStats';
import WelixAbout from '@/components/WelixAbout';
import WelixServices from '@/components/WelixServices';
import DynamicAEO from '@/components/DynamicAEO';
import ServiceStructuredData from '@/components/ServiceStructuredData';
import FeaturedIn from '@/components/FeaturedIn';
import PricingSection from '@/components/PricingSection';
import SEOResults from '@/components/SEOResults';
import LocalTestimonial from '@/components/LocalTestimonial';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

interface WelixServiceLayoutProps {
    service: {
        id: number;
        name: string;
        locationin: string;
        cityin: string;
        countryin: string;
        descpost: string;
        cat: string;
        titletag: string;
        descriptiontag: string;
        keywordstag: string;
        slug: string;
        servicename: string;
        date: string;
        citytype?: string;
        businesstypes?: string;
        nearbyareas?: string;
        landmarks?: string;
        expert_tips?: string;
        faqs_dynamic?: string;
        neighborhood_context?: string;
        local_stats?: string;
    };
}

export default function WelixServiceLayout({ service }: WelixServiceLayoutProps) {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <ServiceStructuredData
                serviceName={service.name}
                serviceType={service.servicename}
                description={service.descriptiontag}
                locationin={service.locationin}
                cityin={service.cityin}
                countryin={service.countryin}
                slug={service.slug}
            />

            <WelixHeader />

            <WelixHero
                serviceName={service.name}
                locationin={service.locationin}
                cityin={service.cityin}
                servicetype={service.servicename}
            />

            <WelixStats />

            <WelixAbout
                serviceName={service.name}
                locationin={service.locationin}
            />

            <div className="container mx-auto px-4 mb-24">
                <DynamicAEO
                    serviceName={service.name}
                    cityin={service.cityin}
                    expertTips={service.expert_tips}
                    faqsDynamic={service.faqs_dynamic}
                    neighborhoodContext={service.neighborhood_context}
                    landmarks={service.landmarks}
                    nearbyAreas={service.nearbyareas}
                    localStats={service.local_stats}
                />
            </div>

            <WelixServices
                serviceName={service.name}
                locationin={service.locationin}
            />

            <FeaturedIn />
            <PricingSection />
            <SEOResults />
            <LocalTestimonial
                serviceName={service.name}
                cityin={service.cityin}
                citytype={service.citytype}
            />
            <CTA />
            <Footer />
            <BackToTop />
        </div>
    );
}
