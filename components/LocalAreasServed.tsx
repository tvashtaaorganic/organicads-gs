'use client';

import { MapPin } from 'lucide-react';
import Link from 'next/link';

interface LocalAreasServedProps {
    cityin: string;
    nearbyareas?: string;
    serviceName: string;
    citytype?: string;
    parentSlug?: string;
}

export default function LocalAreasServed({ 
    cityin, 
    nearbyareas, 
    serviceName, 
    citytype = 'town',
    parentSlug = 'digital-marketing'
}: LocalAreasServedProps) {
    if (!nearbyareas) return null;

    const areas = nearbyareas.split(',').map(area => area.trim()).filter(Boolean);

    const getTitle = () => {
        if (citytype === 'metro') return `Serving All Neighborhoods in ${cityin}`;
        if (citytype === 'district-hq') return `Serving All Areas in & around ${cityin}`;
        return `Serving ${cityin} and Surrounding Areas`;
    };

    return (
        <section className="py-24 px-4 bg-gray-50 dark:bg-background border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto text-center">
                <div className="max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold tracking-wider text-sm uppercase mb-4">
                        Service Locations
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        {getTitle()}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                        Our {serviceName.toLowerCase()} team is active across the entire {cityin} region. <br className="hidden md:inline" />No matter where you are located, we are just a call away.
                    </p>
                </div>

                {/* Highly Optimized Areas Grid - Linkable for SEO */}
                <div className="flex flex-wrap justify-center gap-3 max-w-7xl mx-auto">
                    {areas.map((area, index) => {
                        const svcSlug = parentSlug.toLowerCase().replace(/\s+/g, '-');
                        const areaSlug = area.toLowerCase().replace(/\s+/g, '-');
                        // Use Pattern 1 for internal link building across neighbors
                        const targetUrl = `/${svcSlug}-company-in-${areaSlug}`;

                        return (
                            <Link
                                key={index}
                                href={targetUrl}
                                className="group flex items-center justify-center gap-3 px-6 py-4 bg-white dark:bg-card hover:bg-orange-50 dark:hover:bg-orange-950/20 border border-gray-300 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-900/50 rounded-2xl transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                                </div>
                                <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors text-sm md:text-base">
                                    {area}
                                </span>
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-16 inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-card px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm font-medium">
                    <span>Searching for another area?</span>
                    <a href="/all-services" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                        View All Locations &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
