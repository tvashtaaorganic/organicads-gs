'use client';

import { Star, CheckCircle, Headphones } from 'lucide-react';

interface TrustIndicatorsProps {
    serviceName: string;
    cityin: string;
}

export default function TrustIndicators({ serviceName, cityin }: TrustIndicatorsProps) {
    // Schema markup for aggregate rating
    const ratingSchema = {
        "@context": "https://schema.org",
        "@type": "AggregateRating",
        "itemReviewed": {
            "@type": "Service",
            "name": serviceName,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": cityin,
                "addressCountry": "IN"
            }
        },
        "ratingValue": "4.8",
        "bestRating": "5",
        "ratingCount": "2000"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
            />

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">4.8/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">2000+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">Expert Support Team</span>
                </div>
            </div>
        </>
    );
}
