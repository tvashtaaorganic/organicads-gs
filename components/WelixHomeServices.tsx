'use client';

import { motion } from 'framer-motion';
import { Search, Megaphone, Share2, Code, Layout, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WelixHomeServices() {
    const services = [
        {
            icon: Search,
            title: 'Search Engine Optimization',
            desc: 'Drive organic traffic and dominate search results with our advanced SEO strategies that deliver long-term growth.',
            href: '/services/digital-marketing/seo',
            color: 'text-indigo-600',
            bg: 'bg-indigo-50'
        },
        {
            icon: Megaphone,
            title: 'Performance Marketing',
            desc: 'Turbo-charge your leads with data-driven PPC, YouTube Ads, and Meta Ads optimized for maximum ROI.',
            href: '/services/digital-marketing/ppc',
            color: 'text-orange-600',
            bg: 'bg-orange-50'
        },
        {
            icon: Share2,
            title: 'Social Media Management',
            desc: 'Build a powerful brand presence and engage your community across LinkedIn, Instagram, and more.',
            href: '/services/digital-marketing/social-media-marketing',
            color: 'text-cyan-600',
            bg: 'bg-cyan-50'
        },
        {
            icon: Code,
            title: 'Web Development',
            desc: 'Custom-built, fast, and high-converting websites using latest tech stacks like Next.js and React.',
            href: '/services/web-development',
            color: 'text-emerald-600',
            bg: 'bg-emerald-50'
        },
        {
            icon: Layout,
            title: 'UI/UX Design',
            desc: 'Stunning, modern designs focused on user psychology to create seamless digital experiences.',
            href: '/services/design/ui-ux',
            color: 'text-fuchsia-600',
            bg: 'bg-fuchsia-50'
        },
        {
            icon: BarChart3,
            title: 'Data & Analytics',
            desc: 'Unlock insights from your data to identify growth opportunities and refine your marketing funnel.',
            href: '/services/analytics',
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-5xl font-black text-slate-950 leading-tight">
                        Our Expertise at your <br />
                        <span className="text-indigo-600 italic">Command</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        We don't just provide services; we build high-performance digital engines
                        tailored to your specific business goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group"
                        >
                            <div className={`w-20 h-20 rounded-3xl ${service.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <service.icon className={`w-10 h-10 ${service.color}`} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                {service.desc}
                            </p>
                            <Link
                                href={service.href}
                                className="flex items-center gap-2 text-[#5D5FEF] font-black group-hover:gap-4 transition-all"
                            >
                                LEARN MORE
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
