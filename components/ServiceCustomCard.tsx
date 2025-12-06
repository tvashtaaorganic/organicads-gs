'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, FileText } from 'lucide-react';

interface ServiceCustomCardProps {
    serviceName: string;
}

export default function ServiceCustomCard({ serviceName }: ServiceCustomCardProps) {
    const [showForm, setShowForm] = useState(false);
    const phoneNumber = '+917259404569';
    const whatsappNumber = '917259404569';

    const handleWhatsApp = () => window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    const handleCall = () => window.location.href = `tel:${phoneNumber}`;

    // Toggle form visibility
    const handleRequestQuote = () => {
        setShowForm(!showForm);
    };

    const getDescription = () => {
        const name = serviceName.toLowerCase();

        if (name.includes('seo') || name.includes('search engine')) {
            return `Looking for tailored solutions to boost your online presence? Our customized ${serviceName} services are designed to meet your unique business needs, ensuring maximum ROI and growth. From keyword research and on-page optimization to link building and content strategy, we create personalized plans that align with your goals. Whether you're a startup or an established brand, our expert team leverages the latest SEO tools and trends to drive organic traffic, improve rankings, and increase conversions. Let us help you dominate the search results with strategies crafted exclusively for your success.`;
        }

        if (name.includes('whatsapp')) {
            return `Transform your customer communication with our customized ${serviceName} solutions. We help you leverage the power of the world's most popular messaging app to automate support, send personalized notifications, and drive sales. Our API integration services ensure seamless setup, verified business status, and compliant messaging campaigns. Whether you need chatbots for 24/7 support or broadcast lists for marketing, we build strategies that enhance engagement and customer satisfaction. Connect with your audience instantly and efficiently.`;
        }

        if (name.includes('web') || name.includes('development') || name.includes('design')) {
            return `Build a powerful digital foundation with our customized ${serviceName} services. We create high-performance, visually stunning websites that are fast, secure, and mobile-responsive. Our development team focuses on user experience (UX) and conversion optimization to turn visitors into loyal customers. From custom coding to CMS solutions, we deliver websites that not only look great but also perform flawlessly. Elevate your brand image and provide a seamless browsing experience with a website tailored to your specific business goals.`;
        }

        // Default (Digital Marketing / DM)
        return `Accelerate your business growth with our customized ${serviceName} strategies. We design comprehensive digital marketing campaigns that target your ideal audience and deliver measurable results. From social media management and PPC advertising to email marketing and content creation, we cover all aspects of your online presence. Our data-driven approach ensures every dollar spent contributes to your ROI. Whether you're looking to build brand awareness or generate high-quality leads, our expert team creates personalized solutions to help you stay ahead in the competitive digital landscape.`;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 mb-16">
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Get Customized {serviceName} On Request, Call Now: {phoneNumber}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-7xl mx-auto leading-relaxed">
                    {getDescription()}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        size="lg"
                        onClick={handleWhatsApp}
                        className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-lg w-full sm:w-auto min-w-[200px]"
                    >
                        <MessageCircle className="mr-2 w-5 h-5" />
                        WhatsApp Now
                    </Button>

                    <Button
                        size="lg"
                        onClick={handleCall}
                        variant="outline"
                        className="border-2 border-foreground bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg w-full sm:w-auto min-w-[200px]"
                    >
                        <Phone className="mr-2 w-5 h-5" />
                        Call Now
                    </Button>

                    <Button
                        size="lg"
                        onClick={handleRequestQuote}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg w-full sm:w-auto min-w-[200px]"
                    >
                        <FileText className="mr-2 w-5 h-5" />
                        {showForm ? 'Close Quote Form' : 'Request Quote'}
                    </Button>
                </div>

                {/* Embedded Form Section */}
                {showForm && (
                    <div className="mt-8 w-full h-[800px] border border-border rounded-xl overflow-hidden shadow-inner bg-background animate-in fade-in slide-in-from-top-4 duration-500">
                        <iframe
                            src="https://forms.fillout.com/t/bBpksmrcG1us"
                            width="100%"
                            height="100%"
                            title="Request Quote Form"
                            style={{ border: 'none' }}
                            allow="camera; microphone; autoplay; encrypted-media;"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
