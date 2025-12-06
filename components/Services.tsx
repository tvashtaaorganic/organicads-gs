'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Code2,
    Smartphone,
    TrendingUp,
    Globe,
    Megaphone,
    Share2,
    Database,
    Palette,
    MessageCircle,
    MessageSquare,
    Mail,
    Phone
} from 'lucide-react';

const services = [
    {
        icon: Code2,
        title: 'Web Development',
        description: 'Next.js, React, and modern web technologies for lightning-fast, SEO-optimized websites.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn', 'PHP', 'Bootstrap', 'Wordpress'],
        bgColor: 'bg-blue-600'
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Native iOS, Android, and cross-platform apps using React Native. Web-to-app conversions.',
        technologies: ['React Native', 'iOS', 'Android', 'Web-to-App'],
        bgColor: 'bg-purple-600'
    },
    {
        icon: TrendingUp,
        title: 'Digital Marketing',
        description: 'Data-driven SEO, social media marketing, and paid advertising campaigns that deliver results.',
        technologies: ['SEO', 'Google Ads', 'Facebook Ads', 'Instagram Ads'],
        bgColor: 'bg-pink-600'
    },
    {
        icon: MessageCircle,
        title: 'WhatsApp Business API',
        description: 'Build trust, engage customers, and grow your brand with WhatsApp Business API for seamless communication.',
        technologies: ['WhatsApp API', 'Automation', 'Chatbots', 'Broadcasting'],
        bgColor: 'bg-[#25D366]'
    },
    {
        icon: MessageSquare,
        title: 'RCS Messaging',
        description: 'Rich media and guided responses create an app-like experience right in the user\'s SMS inbox.',
        technologies: ['Rich Media', 'Interactive', 'Verified Sender', 'Analytics'],
        bgColor: 'bg-blue-500'
    },
    {
        icon: Mail,
        title: 'Bulk SMS',
        description: 'Send instant, reliable, and high-volume messages for alerts, promotions and transactional updates.',
        technologies: ['Bulk Messaging', 'OTP', 'Alerts', 'Promotions'],
        bgColor: 'bg-purple-500'
    },
    {
        icon: Phone,
        title: 'Voice Solutions',
        description: 'Scale up your conversation rates through automated outbound calls and IVR systems.',
        technologies: ['IVR', 'Outbound Calls', 'Voice OTP', 'Call Tracking'],
        bgColor: 'bg-orange-500'
    },
    {
        icon: MessageCircle,
        title: 'Chatbot',
        description: 'AI-powered chatbots for automated customer support and engagement across multiple channels.',
        technologies: ['AI Chatbot', 'Automation', '24/7 Support', 'Multi-language'],
        bgColor: 'bg-teal-600'
    },
    {
        icon: Share2,
        title: 'Multi Channel Messaging',
        description: 'Unified platform for WhatsApp, RCS, and SMS with intelligent routing and real-time tracking.',
        technologies: ['Omnichannel', 'Smart Routing', 'Analytics', 'Unified API'],
        bgColor: 'bg-emerald-600'
    },
    {
        icon: Database,
        title: 'Backend & Cloud',
        description: 'Scalable server solutions with AWS, Turso, and SQL databases for robust applications.',
        technologies: ['AWS', 'Turso', 'SQL Server', 'Node.js'],
        bgColor: 'bg-indigo-600'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Beautiful, user-centric designs from low-cost templates to high-end custom interfaces.',
        technologies: ['Figma', 'Shadcn UI', 'Custom Design', 'Responsive'],
        bgColor: 'bg-rose-600'
    },
    {
        icon: Megaphone,
        title: 'Social Media Ads',
        description: 'Comprehensive social media advertising across all major platforms for maximum reach.',
        technologies: ['Meta Ads', 'LinkedIn', 'Twitter', 'TikTok'],
        bgColor: 'bg-cyan-600'
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="gradient-text">Our Services</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        End-to-end digital solutions tailored to your business needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="glass-effect h-full group hover:border-primary/50 transition-all duration-300">
                                    <CardHeader>
                                        <div className={`w-14 h-14 rounded-xl ${service.bgColor} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex items-center justify-center`}>
                                            <Icon className="w-full h-full text-white" strokeWidth={2} />
                                        </div>
                                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                                        <CardDescription className="text-base">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
