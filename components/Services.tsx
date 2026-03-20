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
        bgColor: 'bg-blue-600',
        cardBg: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30'
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Native iOS, Android, and cross-platform apps using React Native. Web-to-app conversions.',
        technologies: ['React Native', 'iOS', 'Android', 'Web-to-App'],
        bgColor: 'bg-purple-600',
        cardBg: 'bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30'
    },
    {
        icon: TrendingUp,
        title: 'Digital Marketing',
        description: 'Data-driven SEO, social media marketing, and paid advertising campaigns that deliver results.',
        technologies: ['SEO', 'Google Ads', 'Facebook Ads', 'Instagram Ads'],
        bgColor: 'bg-pink-600',
        cardBg: 'bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/30'
    },
    {
        icon: MessageCircle,
        title: 'WhatsApp Business API',
        description: 'Build trust, engage customers, and grow your brand with WhatsApp Business API for seamless communication.',
        technologies: ['WhatsApp API', 'Automation', 'Chatbots', 'Broadcasting'],
        bgColor: 'bg-[#25D366]',
        cardBg: 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30'
    },
    {
        icon: MessageSquare,
        title: 'RCS Messaging',
        description: 'Rich media and guided responses create an app-like experience right in the user\'s SMS inbox.',
        technologies: ['Rich Media', 'Interactive', 'Verified Sender', 'Analytics'],
        bgColor: 'bg-blue-500',
        cardBg: 'bg-sky-50 dark:bg-sky-900/20 hover:bg-sky-100 dark:hover:bg-sky-900/30'
    },
    {
        icon: Mail,
        title: 'Bulk SMS',
        description: 'Send instant, reliable, and high-volume messages for alerts, promotions and transactional updates.',
        technologies: ['Bulk Messaging', 'OTP', 'Alerts', 'Promotions'],
        bgColor: 'bg-purple-500',
        cardBg: 'bg-violet-50 dark:bg-violet-900/20 hover:bg-violet-100 dark:hover:bg-violet-900/30'
    },
    {
        icon: Phone,
        title: 'Voice Solutions',
        description: 'Scale up your conversation rates through automated outbound calls and IVR systems.',
        technologies: ['IVR', 'Outbound Calls', 'Voice OTP', 'Call Tracking'],
        bgColor: 'bg-orange-500',
        cardBg: 'bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30'
    },
    {
        icon: MessageCircle,
        title: 'Chatbot',
        description: 'AI-powered chatbots for automated customer support and engagement across multiple channels.',
        technologies: ['AI Chatbot', 'Automation', '24/7 Support', 'Multi-language'],
        bgColor: 'bg-teal-600',
        cardBg: 'bg-teal-50 dark:bg-teal-900/20 hover:bg-teal-100 dark:hover:bg-teal-900/30'
    },
    {
        icon: Share2,
        title: 'Multi Channel Messaging',
        description: 'Unified platform for WhatsApp, RCS, and SMS with intelligent routing and real-time tracking.',
        technologies: ['Omnichannel', 'Smart Routing', 'Analytics', 'Unified API'],
        bgColor: 'bg-emerald-600',
        cardBg: 'bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
    },
    {
        icon: Database,
        title: 'Backend & Cloud',
        description: 'Scalable server solutions with AWS, Turso, and SQL databases for robust applications.',
        technologies: ['AWS', 'Turso', 'SQL Server', 'Node.js'],
        bgColor: 'bg-indigo-600',
        cardBg: 'bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Beautiful, user-centric designs from low-cost templates to high-end custom interfaces.',
        technologies: ['Figma', 'Shadcn UI', 'Custom Design', 'Responsive'],
        bgColor: 'bg-rose-600',
        cardBg: 'bg-rose-50 dark:bg-rose-900/20 hover:bg-rose-100 dark:hover:bg-rose-900/30'
    },
    {
        icon: Megaphone,
        title: 'Social Media Ads',
        description: 'Comprehensive social media advertising across all major platforms for maximum reach.',
        technologies: ['Meta Ads', 'LinkedIn', 'Twitter', 'TikTok'],
        bgColor: 'bg-cyan-600',
        cardBg: 'bg-cyan-50 dark:bg-cyan-900/20 hover:bg-cyan-100 dark:hover:bg-cyan-900/30'
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
                                <Card className={`h-full group border-0 shadow-none rounded-[2rem] ${service.cardBg} transition-all duration-500 hover:-translate-y-1 overflow-hidden relative`}>
                                    <CardHeader className="p-8 pb-4">
                                        <div className={`w-14 h-14 rounded-2xl ${service.bgColor} p-3.5 mb-6 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center relative z-10`}>
                                            <Icon className="w-full h-full text-white" strokeWidth={2} />
                                        </div>
                                        <CardTitle className="text-xl font-bold tracking-tight text-slate-900 dark:text-white relative z-10 mb-2">
                                            {service.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm text-slate-500 dark:text-slate-400 relative z-10 leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-8 pt-0 relative z-10">
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs font-semibold rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 uppercase tracking-wider"
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
