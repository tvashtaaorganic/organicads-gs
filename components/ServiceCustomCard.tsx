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

        // RCS Messaging
        if (name.includes('rcs')) {
            return `Transform your customer communication with our customized ${serviceName} solutions. Rich Communication Services (RCS) is the next evolution of SMS, offering interactive, app-like messaging experiences directly in your customers' default messaging app. Our RCS services include verified sender badges, rich media carousels, suggested replies, and real-time analytics. Whether you need appointment reminders, promotional campaigns, or customer support automation, we build RCS strategies that boost engagement rates by up to 300%. Leverage the power of branded messaging with read receipts, typing indicators, and high-resolution images to create memorable customer interactions.`;
        }

        // Backend & Cloud Services
        if (name.includes('backend') || name.includes('cloud') || name.includes('aws') || name.includes('server')) {
            return `Build robust, scalable infrastructure with our customized ${serviceName} solutions. We specialize in AWS cloud architecture, database optimization (Turso, SQL Server, PostgreSQL), and Node.js backend development. Our services include microservices architecture, API development, serverless computing, auto-scaling solutions, and 99.99% uptime guarantees. Whether you need real-time data processing, secure authentication systems, or high-performance databases, we create backend solutions that handle millions of requests while maintaining lightning-fast response times. Future-proof your application with enterprise-grade cloud infrastructure.`;
        }

        // Bulk SMS
        if (name.includes('bulk sms') || name.includes('sms')) {
            return `Reach millions instantly with our customized ${serviceName} solutions. Our enterprise SMS platform delivers promotional and transactional messages with 98%+ delivery rates across 200+ countries. Features include personalized messaging, scheduled campaigns, two-way SMS, delivery reports, and API integration. Whether you need OTP verification, appointment reminders, marketing campaigns, or emergency alerts, we provide reliable SMS infrastructure with dedicated sender IDs, DND scrubbing, and real-time analytics. Scale your communication effortlessly with our cost-effective bulk messaging solutions.`;
        }

        // Chatbot Services
        if (name.includes('chatbot') || name.includes('bot') || name.includes('ai chat')) {
            return `Automate customer interactions with our customized ${serviceName} solutions powered by advanced AI and NLP. We build intelligent chatbots for WhatsApp, websites, Facebook Messenger, and mobile apps that understand context, handle complex queries, and provide 24/7 support. Our chatbots integrate with your CRM, process payments, book appointments, and qualify leads automatically. Features include multilingual support, sentiment analysis, human handoff, and continuous learning. Reduce support costs by 60% while improving customer satisfaction with conversational AI that feels natural and helpful.`;
        }

        // Digital Marketing (DM)
        if (name.includes('digital marketing') || name.includes(' dm ') || name === 'dm') {
            return `Accelerate your business growth with our customized ${serviceName} strategies. We design comprehensive digital marketing campaigns that target your ideal audience and deliver measurable results. From social media management and PPC advertising to email marketing and content creation, we cover all aspects of your online presence. Our data-driven approach ensures every dollar spent contributes to your ROI. Whether you're looking to build brand awareness or generate high-quality leads, our expert team creates personalized solutions to help you stay ahead in the competitive digital landscape.`;
        }

        // Mobile App Development
        if (name.includes('mobile app') || name.includes('app development') || name.includes('ios') || name.includes('android')) {
            return `Create powerful mobile experiences with our customized ${serviceName} solutions. We develop native iOS and Android apps, cross-platform solutions using React Native and Flutter, and progressive web apps (PWA). Our development process includes UX/UI design, backend integration, payment gateway setup, push notifications, and App Store optimization. Whether you need e-commerce apps, social platforms, on-demand services, or enterprise solutions, we build high-performance mobile applications with offline capabilities, real-time sync, and seamless user experiences that drive engagement and retention.`;
        }

        // Multi-Channel Marketing
        if (name.includes('multi-channel') || name.includes('omnichannel') || name.includes('multichannel')) {
            return `Unify your customer communication with our customized ${serviceName} solutions. We integrate SMS, WhatsApp, Email, Voice, RCS, and social media into a single powerful platform. Our omnichannel approach ensures consistent messaging across all touchpoints with centralized analytics, automated workflows, and intelligent routing. Features include customer journey mapping, cross-channel campaigns, unified inbox, and real-time engagement tracking. Deliver personalized experiences at scale while reducing operational complexity and improving conversion rates by 40% through coordinated multi-channel strategies.`;
        }

        // SEO Services
        if (name.includes('seo') || name.includes('search engine')) {
            return `Looking for tailored solutions to boost your online presence? Our customized ${serviceName} services are designed to meet your unique business needs, ensuring maximum ROI and growth. From keyword research and on-page optimization to link building and content strategy, we create personalized plans that align with your goals. Whether you're a startup or an established brand, our expert team leverages the latest SEO tools and trends to drive organic traffic, improve rankings, and increase conversions. Let us help you dominate the search results with strategies crafted exclusively for your success.`;
        }

        // Social Media Ads
        if (name.includes('social media ads') || name.includes('facebook ads') || name.includes('instagram ads') || name.includes('paid social')) {
            return `Maximize your social media ROI with our customized ${serviceName} solutions. We create and manage high-converting ad campaigns across Facebook, Instagram, LinkedIn, Twitter, and TikTok. Our services include audience targeting, creative design, A/B testing, retargeting campaigns, and detailed performance analytics. Whether you need brand awareness, lead generation, or e-commerce sales, we optimize every campaign element to reduce cost-per-acquisition while scaling results. Our data-driven approach has helped businesses achieve 5X ROAS through strategic ad placement, compelling creatives, and continuous optimization.`;
        }

        // UI/UX Design
        if (name.includes('ui') || name.includes('ux') || name.includes('design') || name.includes('interface')) {
            return `Create stunning user experiences with our customized ${serviceName} solutions. We design intuitive interfaces that combine beautiful aesthetics with seamless functionality. Our process includes user research, wireframing, prototyping, usability testing, and design systems. Whether you need website redesigns, mobile app interfaces, or SaaS dashboards, we focus on user-centered design principles that increase engagement and conversion rates. Our designs are responsive, accessible, and optimized for performance, ensuring your users enjoy every interaction while achieving your business objectives.`;
        }

        // Voice Services
        if (name.includes('voice') || name.includes('ivr') || name.includes('call')) {
            return `Enhance customer communication with our customized ${serviceName} solutions. We provide enterprise voice services including IVR systems, automated calling, voice broadcasting, and call center solutions. Features include multi-level IVR menus, call recording, real-time analytics, CRM integration, and intelligent call routing. Whether you need appointment reminders, surveys, emergency alerts, or customer support automation, our voice platform delivers crystal-clear audio quality with 99.9% uptime. Scale your voice operations effortlessly while reducing costs and improving customer satisfaction through smart automation.`;
        }

        // Web Development
        if (name.includes('web') || name.includes('website') || name.includes('development')) {
            return `Build a powerful digital foundation with our customized ${serviceName} services. We create high-performance, visually stunning websites that are fast, secure, and mobile-responsive. Our development team focuses on user experience (UX) and conversion optimization to turn visitors into loyal customers. From custom coding to CMS solutions, we deliver websites that not only look great but also perform flawlessly. Elevate your brand image and provide a seamless browsing experience with a website tailored to your specific business goals.`;
        }

        // WhatsApp Business
        if (name.includes('whatsapp')) {
            return `Transform your customer communication with our customized ${serviceName} solutions. We help you leverage the power of the world's most popular messaging app to automate support, send personalized notifications, and drive sales. Our API integration services ensure seamless setup, verified business status, and compliant messaging campaigns. Whether you need chatbots for 24/7 support or broadcast lists for marketing, we build strategies that enhance engagement and customer satisfaction. Connect with your audience instantly and efficiently.`;
        }

        // Default fallback
        return `Accelerate your business growth with our customized ${serviceName} strategies. We design comprehensive solutions that target your ideal audience and deliver measurable results. Our data-driven approach ensures every dollar spent contributes to your ROI. Whether you're looking to build brand awareness or generate high-quality leads, our expert team creates personalized solutions to help you stay ahead in the competitive digital landscape.`;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6 md:p-8 shadow-lg text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 break-words leading-tight">
                    Get Customized {serviceName} On Request, Call Now:{' '}
                    <span className="block sm:inline mt-2 sm:mt-0">{phoneNumber}</span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-7xl mx-auto leading-relaxed">
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
