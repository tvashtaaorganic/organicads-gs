'use client';

import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp } from 'lucide-react';

export default function WelixAbout({ serviceName, locationin }: { serviceName: string; locationin: string }) {
    const features = [
        {
            icon: Target,
            title: 'Local Audience Focus',
            desc: `Specially designed strategies to capture the high-intent audience in ${locationin}.`,
            color: 'bg-blue-100 text-blue-600'
        },
        {
            icon: Zap,
            title: 'Industry Specialized',
            desc: `Expert teams with deep domain knowledge in ${serviceName} and local market trends.`,
            color: 'bg-orange-100 text-orange-600'
        },
        {
            icon: TrendingUp,
            title: 'Result Focused',
            desc: 'Driven by data and transparency to ensure every campaign translates to measurable growth.',
            color: 'bg-cyan-100 text-cyan-600'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                            About our {serviceName} <br />
                            in {locationin}
                        </h2>
                    </div>
                    <div className="text-gray-500 text-lg leading-relaxed space-y-6">
                        <p>
                            {locationin}, {locationin} is recognized as a rapidly growing commercial hub,
                            making a strong online presence essential for business survival. Our specialized
                            digital marketing strategies are meticulously architected to capture the unique
                            demographic nuances of this dynamic market.
                        </p>
                        <p>
                            We deploy data-driven frameworks designed to elevate your brand above
                            intense local competition. Through rigorous technical optimization, localized
                            content generation, and pinpoint advertising, our team ensures your message
                            resonates powerfully with the target audience.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-[32px] border border-gray-100 bg-slate-50 shadow-sm"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${feature.color}`}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
