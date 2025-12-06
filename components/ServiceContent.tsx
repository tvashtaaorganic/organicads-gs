'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { PageData } from '@/lib/turso';

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

    // Sample content - this would be dynamic from database
    const contentSections = [
        {
            title: `What is ${pageData.name}?`,
            content: `${pageData.name} is a comprehensive digital solution designed to help businesses in ${pageData.locationin}, ${pageData.cityin}, ${pageData.countryin} achieve their online goals. Our expert team delivers results-driven strategies tailored to your specific needs.`
        },
        {
            title: `Why Choose Our ${pageData.name} Services?`,
            content: `We specialize in providing top-tier ${pageData.name} services to businesses across ${pageData.cityin} and ${pageData.countryin}. With over 500+ happy clients and presence in 15+ countries, we deliver measurable results within 4 hours.`
        },
        {
            title: `Our ${pageData.name} Process`,
            content: `Our proven process ensures maximum ROI for your ${pageData.name} investment. We analyze your business needs, create a customized strategy, implement cutting-edge solutions, and continuously optimize for better performance.`
        },
        {
            title: `Benefits of ${pageData.name}`,
            content: `Increase your online visibility, drive more qualified traffic, boost conversions, and grow your revenue with our ${pageData.name} services. We focus on delivering tangible results that impact your bottom line.`
        },
    ];

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
