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
import ServiceStructuredData from '@/components/ServiceStructuredData';
import AboutSection from '@/components/AboutSection';
import EnhancedPortfolio from '@/components/EnhancedPortfolio';
import WorkProcess from '@/components/WorkProcess';
import PricingSection from '@/components/PricingSection';
import PlatformSolutions from '@/components/PlatformSolutions';
import Testimonials from '@/components/Testimonials';

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
            <ServiceStructuredData
                serviceName={service.name}
                serviceType={service.servicename}
                description={service.descriptiontag}
                locationin={service.locationin}
                cityin={service.cityin}
                countryin={service.countryin}
                slug={service.slug}
            />
            <Header />

            <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-indigo-500/10" />

                <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
                    <div className="flex justify-center mb-6 w-full overflow-hidden">
                        <div className="max-w-full">
                            <Breadcrumb items={breadcrumbItems} />
                        </div>
                    </div>

                    <div className="flex justify-center mb-6">
                        <ServiceBadge
                            servicename={service.servicename}
                            name={service.name}
                            locationin={service.locationin}
                            cityin={service.cityin}
                            countryin={service.countryin}
                        />
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight px-2 sm:px-4">
                        <span className="gradient-text block mb-3">{service.name}</span>
                        <span className="text-foreground block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
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
            <AboutSection />
            <EnhancedPortfolio />
            <WorkProcess />
            <SEOResults />
            <Services />
            <PlatformSolutions />
            <Features />
            <PricingSection />
            <Testimonials />
            <CTA />
            <Footer />
            <BackToTop />
        </div>
    );
}
