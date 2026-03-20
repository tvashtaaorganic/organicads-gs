'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Phone, Star, TrendingUp } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceBadge from '@/components/ServiceBadge';
import TrustIndicators from '@/components/TrustIndicators';

interface PremiumHeroProps {
    serviceName: string;
    locationin: string;
    cityin: string;
    servicetype: string;
    breadcrumbItems: { label: string; href?: string }[];
}

export default function PremiumHero({
    serviceName,
    locationin,
    cityin,
    servicetype,
    breadcrumbItems
}: PremiumHeroProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load Fillout embed script
        const script = document.createElement('script');
        script.src = 'https://server.fillout.com/embed/v1/';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-white dark:bg-slate-950">
            {/* Background Aesthetics */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-400/10 dark:bg-violet-600/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Side Content */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <ServiceBadge
                                servicename={servicetype}
                                name={serviceName}
                                locationin={locationin}
                                cityin={cityin}
                                countryin="India"
                            />
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="block">{serviceName}</span>
                            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                                In {locationin}, {cityin}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Dominate the local market in <span className="font-semibold text-slate-900 dark:text-slate-200">{locationin}</span> with
                            data-driven strategies, result-oriented ROI, and premium digital solutions tailored for {cityin} businesses.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800">
                                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">#1 Result Based Agency</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-full border border-emerald-100 dark:border-emerald-800">
                                <Star className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Google Partner Status</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <TrustIndicators serviceName={serviceName} cityin={cityin} />
                        </motion.div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-slate-900 dark:text-white">48h</div>
                                <div className="text-sm text-slate-500 uppercase tracking-wider">Fast Turnaround</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-slate-900 dark:text-white">100%</div>
                                <div className="text-sm text-slate-500 uppercase tracking-wider">Result Based</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-slate-900 dark:text-white">24/7</div>
                                <div className="text-sm text-slate-500 uppercase tracking-wider">Local Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form (Welix Style) */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className="relative bg-white dark:bg-slate-900 rounded-[32px] p-1 shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                            {/* Decorative gradient bar */}
                            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600" />

                            <div className="p-6 md:p-8 space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Get a Free Quote</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                                        Tailored strategies for <span className="font-semibold text-blue-600">{locationin}</span> area.
                                    </p>
                                </div>

                                {/* Fillout Form Embed */}
                                <div className="min-h-[450px] bg-slate-50 dark:bg-slate-950 rounded-2xl relative">
                                    {mounted && (
                                        <div
                                            style={{ width: '100%', height: '550px' }}
                                            data-fillout-id="bBpksmrcG1us"
                                            data-fillout-embed-type="standard"
                                            data-fillout-inherit-parameters
                                            data-fillout-dynamic-resize
                                        />
                                    )}
                                </div>

                                <div className="flex items-center justify-center gap-6 text-sm text-slate-400 font-medium">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        <span>Instant Response</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        <span>No Obligations</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Help Badge */}
                        <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Support available</div>
                                <div className="font-bold text-slate-900 dark:text-white">+91 72594 04569</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
