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
import ServiceBadge from '@/components/ServiceBadge';

interface BulkSMSServiceProps {
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

export default function BulkSMSService({ service }: BulkSMSServiceProps) {
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-indigo-500/10" />

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>

                    <ServiceBadge 
                        servicename={service.servicename}
                        name={service.name}
                        locationin={service.locationin}
                        cityin={service.cityin}
                        countryin={service.countryin}
                    />

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span className="gradient-text">{service.name}</span>
                        <br />
                        <span className="text-foreground">
                            in {service.locationin}, {service.cityin}, {service.countryin}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {service.descpost === 'domestic'
                            ? `Reach millions instantly with reliable bulk SMS services for OTP, alerts, promotions, and transactional messages across India.`
                            : `Scale your global outreach with enterprise-grade bulk SMS solutions delivering instant, reliable messages worldwide.`
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
