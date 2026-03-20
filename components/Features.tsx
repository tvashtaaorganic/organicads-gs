'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Target, Rocket, Shield, Sparkles, TrendingUp } from 'lucide-react';

const features = [
    {
        icon: Target,
        title: 'Commitment',
        description: 'We are dedicated to your success. Every project receives our full attention and expertise.',
        highlights: ['100% Client Focus', 'Transparent Process', 'Regular Updates'],
        accent: 'from-blue-500 to-indigo-600',
        bg: 'bg-blue-50 dark:bg-blue-900/10',
        iconBg: 'bg-blue-600',
    },
    {
        icon: Rocket,
        title: 'Fast Delivery',
        description: 'Speed without compromise. We deliver quality results in record time — often within 4 days.',
        highlights: ['4-Day Response', 'Agile Workflow', 'Quick Turnaround'],
        accent: 'from-pink-500 to-rose-600',
        bg: 'bg-pink-50 dark:bg-pink-900/10',
        iconBg: 'bg-pink-600',
    },
    {
        icon: TrendingUp,
        title: 'SEO Results',
        description: 'Data-driven SEO strategies that get you ranked. Measurable results you can track.',
        highlights: ['Top Rankings', 'Organic Traffic', 'Analytics Reports'],
        accent: 'from-emerald-500 to-teal-600',
        bg: 'bg-emerald-50 dark:bg-emerald-900/10',
        iconBg: 'bg-emerald-600',
    },
    {
        icon: Shield,
        title: 'Quality Assurance',
        description: 'Rigorous testing and quality checks ensure your project exceeds industry standards.',
        highlights: ['Bug-Free Code', 'Performance Optimized', 'Security First'],
        accent: 'from-violet-500 to-purple-600',
        bg: 'bg-violet-50 dark:bg-violet-900/10',
        iconBg: 'bg-violet-600',
    },
    {
        icon: Sparkles,
        title: 'Premium Design',
        description: 'From budget-friendly to high-end custom designs, we create stunning digital experiences.',
        highlights: ['Modern UI/UX', 'Responsive Design', 'Brand Consistency'],
        accent: 'from-orange-500 to-amber-600',
        bg: 'bg-orange-50 dark:bg-orange-900/10',
        iconBg: 'bg-orange-500',
    },
    {
        icon: Clock,
        title: '24/7 Support',
        description: 'Round-the-clock support to keep your business running smoothly at all times.',
        highlights: ['Always Available', 'Quick Resolution', 'Dedicated Team'],
        accent: 'from-cyan-500 to-sky-600',
        bg: 'bg-cyan-50 dark:bg-cyan-900/10',
        iconBg: 'bg-cyan-600',
    },
];

export default function Features() {
    return (
        <section id="why-us" className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Why Choose <span className="gradient-text">Organic Ads</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We combine speed, quality, and expertise to deliver exceptional results
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className={`rounded-[2rem] p-8 ${feature.bg} hover:scale-[1.02] transition-all duration-500 group flex flex-col gap-5`}
                            >
                                <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white tracking-tight">{feature.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base">{feature.description}</p>
                                </div>
                                <ul className="space-y-3 mt-auto">
                                    {feature.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
