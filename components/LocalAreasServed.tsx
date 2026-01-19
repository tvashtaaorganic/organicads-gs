'use client';

import { MapPin } from 'lucide-react';

interface LocalAreasServedProps {
    cityin: string;
    nearbyareas?: string;
    serviceName: string;
    citytype?: string;
}

export default function LocalAreasServed({ cityin, nearbyareas, serviceName, citytype = 'town' }: LocalAreasServedProps) {
    if (!nearbyareas) return null;

    const areas = nearbyareas.split(',').map(area => area.trim());

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

                {/* Areas Grid - Centered */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className="group flex items-center justify-center gap-3 p-4 bg-white dark:bg-card hover:bg-blue-50 dark:hover:bg-blue-900/10 border border-gray-300 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700/50 rounded-xl transition-all duration-300 hover:shadow-lg cursor-default"
                        >
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors text-sm md:text-base">
                                {area}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 'Cant find area' fallback */}
                <div className="mt-16 inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-card px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
                    <span>Can't find your area?</span>
                    <a href="#contact" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                        Check Availability &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
