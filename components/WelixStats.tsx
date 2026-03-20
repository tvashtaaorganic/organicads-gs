'use client';

import { motion } from 'framer-motion';

export default function WelixStats() {
    const stats = [
        { value: '300+', label: 'LEADS GENERATED', color: 'text-[#4F46E5]' },
        { value: '5.0', label: 'STAR RATING', color: 'text-[#FF4F0F]' },
        { value: 'No. 1', label: 'AREA AGENCY', color: 'text-[#06B6D4]' },
    ];

    return (
        <section className="relative z-20 -mt-8 sm:-mt-12 container mx-auto px-4">
            <div className="bg-white rounded-[24px] shadow-2xl shadow-slate-200/50 border border-gray-50 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100 overflow-hidden">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex-1 px-8 py-8 md:py-10 text-center"
                    >
                        <div className={`text-4xl md:text-5xl font-black mb-1 ${stat.color}`}>
                            {stat.value}
                        </div>
                        <div className="text-[10px] md:text-xs font-bold text-gray-500 tracking-[0.2em] uppercase">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
