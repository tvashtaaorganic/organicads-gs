'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';

interface RelatedKeywordsProps {
    serviceName: string;
    locationin: string;
    cityin: string;
    parentSlug: string;
}

export default function RelatedKeywords({ serviceName, locationin, cityin, parentSlug }: RelatedKeywordsProps) {
    const displayLoc = locationin || cityin;

    // Generate a list of long-tail keywords for the specific area
    const keywords = [
        `Best ${serviceName} in ${displayLoc}`,
        `${serviceName} Agency ${displayLoc}`,
        `Top ${serviceName} Company ${locationin}`,
        `${serviceName} Services in ${cityin}`,
        `Affordable ${serviceName} ${displayLoc}`,
        `Local ${serviceName} Experts ${locationin}`,
        `${serviceName} Solutions ${displayLoc}`,
        `Professional ${serviceName} ${cityin}`,
        `${serviceName} Optimization ${locationin}`,
        `${serviceName} Consultant ${displayLoc}`,
        `Digital Growth with ${serviceName} ${locationin}`,
        `Rank Higher with ${serviceName} in ${displayLoc}`,
        `${serviceName} for Startups in ${locationin}`,
        `${serviceName} for Small Businesses ${displayLoc}`,
        `Enterprise ${serviceName} ${locationin}`
    ];

    return (
        <section className="py-16 px-4 bg-gray-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                        <Search className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Related Searches in {displayLoc}
                    </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                    {keywords.map((keyword, index) => {
                        const citySlug = (cityin || '').toLowerCase().replace(/\s+/g, '-');
                        const locSlug = (locationin || '').toLowerCase().replace(/\s+/g, '-');
                        const svcSlug = (parentSlug || 'digital-marketing').toLowerCase().replace(/\s+/g, '-');
                        
                        // Use the correct optimized Pattern 1: /service-company-in-location
                        const targetUrl = `/${svcSlug}-company-in-${locSlug || citySlug}`;

                        return (
                            <Link
                                key={index}
                                href={targetUrl}
                                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-slate-600 dark:text-slate-400 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
                            >
                                {keyword}
                            </Link>
                        );
                    })}
                </div>

                <p className="mt-8 text-sm text-slate-500 dark:text-slate-500 italic">
                    Serving locally in {displayLoc} and surrounding neighborhoods of {cityin}.
                </p>
            </div>
        </section>
    );
}
