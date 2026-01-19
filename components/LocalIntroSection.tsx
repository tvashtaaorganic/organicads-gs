'use client';

import { MapPin, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface LocalIntroSectionProps {
    serviceName: string;
    cityin: string;
    locationin?: string; // Specific area/location (e.g. Adugodi)
    citytype?: string; // metro, district-hq, tourist-city, town, industrial
    businesstypes?: string; // e.g. "educational institutions, manufacturing units"
    landmarks?: string; // e.g. "Siddaganga Mutt, Devarayanadurga"
}

export default function LocalIntroSection({
    serviceName,
    cityin,
    locationin,
    citytype = 'district-hq',
    businesstypes,
    landmarks
}: LocalIntroSectionProps) {

    // Dynamic Intro Content Generator
    const getIntroContent = () => {
        // Use location+city or just city
        const locString = locationin ? `${locationin}, ${cityin}` : cityin;
        const baseIntro = `${locString} is a vibrant and growing hub with a diverse business landscape.`;

        let businessContext = '';
        if (businesstypes) {
            businessContext = `Home to thriving ${businesstypes}, the area is rapidly evolving digitally.`;
        }

        let landmarkContext = '';
        if (landmarks) {
            const landmarkList = landmarks.split(',').slice(0, 2).join(' and ');
            landmarkContext = `From the areas around ${landmarkList} to the bustling centers, businesses are looking to expand their reach.`;
        }

        return {
            headline: `Elevate Your Business in ${locString}`,
            subheadline: `Professional ${serviceName} Services tailored for ${cityin}'s unique market.`,
            paragraph: `${baseIntro} ${businessContext} many local businesses in ${locString} are now seeking professional ${serviceName.toLowerCase()} services to establish a strong online presence. ${landmarkContext} We help you stand out in the local ${locString} market.`
        };
    };

    const content = getIntroContent();
    const displayLocation = locationin ? `${locationin}, ${cityin}` : cityin;

    return (
        <section className="py-20 px-4 relative overflow-hidden bg-gray-50 dark:bg-background">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-card border border-gray-200 dark:border-gray-800 shadow-sm text-sm font-medium text-gray-900 dark:text-gray-100">
                            <MapPin className="w-4 h-4 text-blue-500" />
                            <span>Proudly Serving {displayLocation}</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                            Top-Rated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                {serviceName}
                            </span> in {displayLocation}
                        </h2>

                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                            {content.paragraph}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-white dark:bg-card px-5 py-3 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                <TrendingUp className="w-5 h-5 text-green-500" />
                                <span className="font-medium text-gray-900 dark:text-white">Local SEO Experts</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white dark:bg-card px-5 py-3 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                <Building2 className="w-5 h-5 text-blue-500" />
                                <span className="font-medium text-gray-900 dark:text-white">{cityin} Market Specialist</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Image Card - REMOVED ROTATION */}
                    <div className="relative">
                        <div className="relative bg-white dark:bg-card rounded-3xl p-2 shadow-2xl border border-gray-100 dark:border-gray-800 transition-transform duration-500">
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 h-full flex flex-col justify-center items-center text-center space-y-6">
                                <div className="w-24 h-24 bg-white dark:bg-gray-900 rounded-full shadow-lg flex items-center justify-center mb-4">
                                    <MapPin className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    Growing in {displayLocation}?
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    Don't let your business get left behind. We help local {cityin} brands dominate the digital space.
                                </p>
                                <div className="w-full h-px bg-gray-200 dark:bg-gray-800 my-4"></div>
                                <div className="grid grid-cols-2 w-full gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                                        <div className="text-sm text-gray-500">Local Clients</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5/5</div>
                                        <div className="text-sm text-gray-500">Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative floating badge */}
                        <div className="absolute -bottom-10 -right-0 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce delay-700">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 dark:text-white">#1 in {displayLocation}</div>
                                    <div className="text-xs text-gray-500">Service Provider</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
