'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedIn from '@/components/FeaturedIn';
import Services from '@/components/Services';
import Features from '@/components/Features';
import SEOResults from '@/components/SEOResults';
import Portfolio from '@/components/Portfolio';
import CTA from '@/components/CTA';
import BackToTop from '@/components/BackToTop';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceContent from '@/components/ServiceContent';
import ServiceCustomCard from '@/components/ServiceCustomCard';
import { Badge } from '@/components/ui/badge';
import { Zap } from 'lucide-react';

interface SocialMediaAdsServiceProps {
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
    };
}

export default function SocialMediaAdsService({ service }: SocialMediaAdsServiceProps) {
    const breadcrumbItems = [
        { label: 'Services', href: '/#services' },
        { label: `${service.name} in ${service.cityin}, ${service.countryin}` },
    ];

    const pageData = {
        id: service.id,
        name: service.name,
        locationin: service.locationin,
        cityin: service.cityin,
        countryin: service.countryin,
        descpost: service.descpost,
        cat: service.cat,
        titletag: service.titletag,
        descriptiontag: service.descriptiontag,
        keywordstag: service.keywordstag,
        slug: service.slug,
        servicename: service.servicename,
        date: service.date,
    };

    return (
        <div className="min-h-screen">
            <Header />

            <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-background to-blue-500/10" />

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>

                    <Badge className="mb-6 px-6 py-3 text-base font-medium bg-cyan-600/20 border-cyan-600/40 hover:bg-cyan-600/30 text-primary-foreground">
                        <Zap className="w-5 h-5 mr-2 inline fill-current" />
                        Meta, LinkedIn, Twitter, TikTok - 5x ROI on Ad Spend!
                    </Badge>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span className="gradient-text">{service.name}</span>
                        <br />
                        <span className="text-foreground">
                            in {service.locationin}, {service.cityin}, {service.countryin}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {service.descpost === 'domestic'
                            ? `Dominate social media with high-performing ad campaigns across Meta, LinkedIn, Twitter, and TikTok - reaching millions across India.`
                            : `Scale your brand globally with data-driven social media advertising strategies delivering maximum ROI across all major platforms.`
                        }
                    </p>
                </div>
            </section>

            <ServiceCustomCard serviceName={service.name} />
            <FeaturedIn />
            <ServiceContent pageData={pageData} />
            <Portfolio />
            <SEOResults />
            <Services />
            <Features />
            <CTA />
            <Footer />
            <BackToTop />
        </div>
    );
}
