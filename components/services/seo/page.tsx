'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedIn from '@/components/FeaturedIn';
import Services from '@/components/Services';
import Features from '@/components/Features';
import SEOResults from '@/components/SEOResults';
import Portfolio from '@/components/Portfolio'; // Kept if needed, but unused
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
import LocalIntroSection from '@/components/LocalIntroSection';
import WhyChooseUsLocal from '@/components/WhyChooseUsLocal';
import LocalAreasServed from '@/components/LocalAreasServed';
import LocalTestimonial from '@/components/LocalTestimonial';
import LocalFAQs from '@/components/LocalFAQs';
import TrustIndicators from '@/components/TrustIndicators';
import Image from 'next/image';

interface SEOServiceProps {
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
        // New local SEO fields
        parentslug?: string;
        citytype?: string;
        businesstypes?: string;
        nearbyareas?: string;
        landmarks?: string;
    };
}

export default function SEOService({ service }: SEOServiceProps) {
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

            {/* Premium Hero Section */}
            <section className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 px-3 sm:px-4 overflow-hidden bg-white dark:bg-background">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                        {/* Left: Text Content */}
                        <div className="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-6 w-full overflow-hidden">
                            <div className="flex justify-center lg:justify-start mb-3 sm:mb-4">
                                <Breadcrumb items={breadcrumbItems} />
                            </div>

                            <div className="flex justify-center lg:justify-start mb-3 sm:mb-4">
                                <ServiceBadge
                                    servicename={service.servicename}
                                    name={service.name}
                                    locationin={service.locationin}
                                    cityin={service.cityin}
                                    countryin={service.countryin}
                                />
                            </div>

                            <h1 className="text-[22px] leading-[1.3] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight text-gray-900 dark:text-gray-100 break-words w-full">
                                <span className="block sm:inline">{service.name}</span> <br className="sm:hidden" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 block sm:inline">
                                    in {service.locationin}, {service.cityin}
                                </span>
                            </h1>

                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-full lg:max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-4 sm:mb-6 md:mb-8">
                                {service.descpost === 'domestic'
                                    ? `Accelerating growth for Indian businesses with targeted ${service.name} campaigns.`
                                    : `Scaling brands globally through high-impact international ${service.name} strategies.`
                                }
                            </p>

                            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 mb-6 sm:mb-8 md:mb-10 w-full">
                                <a href="#contact" className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base md:text-lg text-center whitespace-nowrap">
                                    Get Custom Quote
                                </a>
                                <a href="#portfolio" className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:border-gray-300 dark:hover:border-gray-600 transition-all text-sm sm:text-base md:text-lg text-center whitespace-nowrap">
                                    View Portfolio
                                </a>
                            </div>

                            <div className="flex justify-center lg:justify-start w-full">
                                <TrustIndicators serviceName={service.name} cityin={service.cityin} />
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="hidden lg:block">
                            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                                <Image
                                    src="https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?w=800&q=80"
                                    alt={`${service.name} in ${service.cityin}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceCustomCard serviceName={service.name} />
            <FeaturedIn />

            {/* Local SEO Section 1: Place-Specific Intro */}
            <LocalIntroSection
                serviceName={service.name}
                cityin={service.cityin}
                locationin={service.locationin}
                citytype={service.citytype}
                businesstypes={service.businesstypes}
                landmarks={service.landmarks}
            />

            <ServiceContent pageData={pageData} />

            {/* Local SEO Section 2: Why Choose Us (City-Specific) */}
            <WhyChooseUsLocal
                serviceName={service.name}
                cityin={service.cityin}
                citytype={service.citytype}
            />

            <AboutSection />
            <EnhancedPortfolio />
            <WorkProcess />

            {/* Local SEO Section 3: Areas Served */}
            <LocalAreasServed
                cityin={service.cityin}
                nearbyareas={service.nearbyareas}
                serviceName={service.name}
                citytype={service.citytype}
            />

            <SEOResults />
            <Services />
            <PlatformSolutions />
            <Features />
            <PricingSection />

            {/* Local SEO Section 4: Local Testimonial */}
            <LocalTestimonial
                serviceName={service.name}
                cityin={service.cityin}
                citytype={service.citytype}
            />

            {/* Local SEO Section 5: Local FAQs */}
            <LocalFAQs
                serviceName={service.name}
                cityin={service.cityin}
                servicetype={service.servicename}
            />

            <CTA />
            <Footer />
            <BackToTop />
        </div>
    );
}
