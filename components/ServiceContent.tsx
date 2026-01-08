'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { PageData } from '@/lib/googleSheets';
import { getServiceConfig } from '@/lib/serviceContent';

interface ServiceContentProps {
    pageData: PageData;
}

export default function ServiceContent({ pageData }: ServiceContentProps) {
    const [showFullContent, setShowFullContent] = useState(false);
    const phoneNumber = '+917259404569';
    const whatsappNumber = '917259404569';

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleRequestQuote = () => {
        window.open('https://forms.fillout.com/t/bBpksmrcG1us', '_blank');
    };

    // Get dynamic content based on servicename
    const serviceConfig = getServiceConfig(
        pageData.servicename || '',
        pageData.name,
        pageData.locationin,
        pageData.cityin,
        pageData.countryin
    );

    const contentSections = serviceConfig.contentSections;

    const visibleSections = showFullContent ? contentSections : contentSections.slice(0, 2);

    return (
        <div className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Content Sections */}
                <div className="space-y-8">
                    {visibleSections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-card border border-border rounded-xl p-6 shadow-sm"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-foreground">{section.title}</h2>
                            <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                        </motion.div>
                    ))}
                </div>

                {/* View More/Less Button */}
                {contentSections.length > 2 && (
                    <div className="text-center mt-8">
                        <Button
                            onClick={() => setShowFullContent(!showFullContent)}
                            variant="outline"
                            size="lg"
                            className="px-8"
                        >
                            {showFullContent ? (
                                <>
                                    <ChevronUp className="mr-2 w-5 h-5" />
                                    View Less
                                </>
                            ) : (
                                <>
                                    <ChevronDown className="mr-2 w-5 h-5" />
                                    View More
                                </>
                            )}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
