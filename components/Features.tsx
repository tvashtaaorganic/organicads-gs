'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Clock, Target, Rocket, Shield, Sparkles } from 'lucide-react';

const features = [
    {
        icon: Target,
        title: 'Commitment',
        description: 'We are dedicated to your success. Every project receives our full attention and expertise.',
        highlights: ['100% Client Focus', 'Transparent Process', 'Regular Updates']
    },
    {
        icon: Rocket,
        title: 'Fast Delivery',
        description: 'Speed without compromise. We deliver quality results in record time - often within 4 hours.',
        highlights: ['4-Hour Response', 'Agile Workflow', 'Quick Turnaround']
    },
    {
        icon: TrendingUp,
        title: 'SEO Results',
        description: 'Data-driven SEO strategies that get you ranked. Measurable results you can track.',
        highlights: ['Top Rankings', 'Organic Traffic', 'Analytics Reports']
    },
    {
        icon: Shield,
        title: 'Quality Assurance',
        description: 'Rigorous testing and quality checks ensure your project exceeds industry standards.',
        highlights: ['Bug-Free Code', 'Performance Optimized', 'Security First']
    },
    {
        icon: Sparkles,
        title: 'Premium Design',
        description: 'From budget-friendly to high-end custom designs, we create stunning digital experiences.',
        highlights: ['Modern UI/UX', 'Responsive Design', 'Brand Consistency']
    },
    {
        icon: Clock,
        title: '24/7 Support',
        description: 'Round-the-clock support to keep your business running smoothly at all times.',
        highlights: ['Always Available', 'Quick Resolution', 'Dedicated Team']
    },
];

import { TrendingUp } from 'lucide-react';

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
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="glass-effect h-full border-border/50 hover:border-primary/50 transition-all duration-300 group">
                                    <CardContent className="p-6">
                                        <div className="mb-4">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 p-2.5 inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="w-full h-full text-foreground" />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                        <p className="text-muted-foreground mb-4">{feature.description}</p>
                                        <ul className="space-y-2">
                                            {feature.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-center text-sm">
                                                    <CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
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
