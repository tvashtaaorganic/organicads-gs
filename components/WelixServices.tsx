'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function WelixServices({ serviceName, locationin }: { serviceName: string; locationin: string }) {
    const services = [
        {
            title: `Strategic ${serviceName} in ${locationin}`,
            desc: `The business ecosystem in ${locationin} is fiercely competitive, and relying solely on traditional marketing methods is no longer sufficient to secure market share. Modern consumers conduct extensive online research before making purchasing decisions, and a lack of digital visibility directly translates to lost revenue opportunities.`,
            features: [
                'Enhanced Local Search Visibility',
                'Hyper-Targeted Ad Campaigns',
                'Data-Driven Decision Making',
                'Higher Conversion Rates'
            ],
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
            reverse: false
        },
        {
            title: `Advanced Performance Marketing for ${locationin}`,
            desc: `A robust digital marketing foundation allows you to target precisely the demographics most likely to convert, eliminating the inefficiencies of broad-spectrum advertising. By analyzing consumer behavior data, businesses in ${locationin} can tailor their messaging and offers to meet exact market demands.`,
            features: [
                'Precise Audience Segmentation',
                'ROI Focused Budgeting',
                'A/B Testing & Optimization',
                'Real-Time Analytics Tracking'
            ],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
            reverse: true
        }
    ];

    return (
        <section className="py-24 space-y-24 bg-white">
            <div className="container mx-auto px-4">
                {services.map((item, index) => (
                    <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${item.reverse ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: item.reverse ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`space-y-8 ${item.reverse ? 'lg:order-2' : ''}`}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-tight">
                                {item.title}
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                {item.desc}
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {item.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <Button className="bg-[#FF4F0F] hover:bg-[#e6460d] text-white rounded-full px-12 py-6 h-auto text-lg font-bold">
                                Start Your Campaign
                            </Button>
                        </motion.div>

                        {/* Image Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`relative h-[500px] rounded-[32px] overflow-hidden shadow-2xl ${item.reverse ? 'lg:order-1' : ''}`}
                        >
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
