'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, HelpCircle, Info, Lightbulb, MapPin, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';

interface DynamicAEOProps {
    serviceName: string;
    cityin: string;
    expertTips?: string;
    faqsDynamic?: string;
    neighborhoodContext?: string;
    landmarks?: string;
    nearbyAreas?: string;
    localStats?: string;
}

interface FAQ {
    question: string;
    answer: string;
}

export default function DynamicAEO({
    serviceName,
    cityin,
    expertTips,
    faqsDynamic,
    neighborhoodContext,
    landmarks,
    nearbyAreas,
    localStats
}: DynamicAEOProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Parse dynamic FAQs (Format: "Q1:A1;Q2:A2")
    const dynamicFAQs: FAQ[] = faqsDynamic
        ? faqsDynamic.split(';').map(pair => {
            const [q, a] = pair.split(':');
            return { question: q?.trim(), answer: a?.trim() };
        }).filter(f => f.question && f.answer)
        : [];

    // Fallback FAQs if none provided
    const defaultFAQs: FAQ[] = [
        {
            question: `How can ${serviceName} help businesses in ${cityin}?`,
            answer: `Businesses in ${cityin} benefit from specialized ${serviceName} strategies that target local intent, improve brand visibility, and drive qualified leads within the competitive ${cityin} market.`
        },
        {
            question: `What is the cost of ${serviceName} services in ${cityin}?`,
            answer: `Pricing for ${serviceName} in ${cityin} is tailored to the project scope, local competition, and specific business goals. We provide customized quotes to ensure maximum ROI for ${cityin} clients.`
        },
        {
            question: `Why hire a local ${serviceName} agency for ${cityin}?`,
            answer: `A local agency understands the nuances of the ${cityin} market, local consumer behavior, and the geographic significance of areas like ${landmarks || cityin}, ensuring more effective targeting.`
        }
    ];

    const faqs = dynamicFAQs.length > 0 ? dynamicFAQs : defaultFAQs;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden">
            <Script
                id={`aeo-schema-${cityin?.replace(/\s+/g, '-').toLowerCase()}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-7xl mx-auto space-y-24">

                {/* GEO Focus: Local Context & Authority */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-bold uppercase tracking-wider">
                            <MapPin className="w-4 h-4" />
                            Local Authority
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.2]">
                            Serving the Heart of <span className="text-blue-600">{cityin}</span>
                        </h2>

                        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                            {neighborhoodContext || `We are deeply integrated into the ${cityin} ecosystem, providing high-quality ${serviceName} services to local businesses near ${landmarks || 'key landmarks'}. Our local presence allows us to understand the specific needs and search behaviors of customers in the ${cityin} region.`}
                        </div>

                        {localStats && (
                            <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-6">
                                <div className="w-16 h-16 bg-blue-600 flex items-center justify-center rounded-2xl text-white shadow-lg shadow-blue-500/20">
                                    <Target className="w-8 h-8" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Market Insight</div>
                                    <div className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug">{localStats}</div>
                                </div>
                            </div>
                        )}

                        {nearbyAreas && (
                            <div className="space-y-3">
                                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest pl-1">Nearby Areas We Serve</div>
                                <div className="flex flex-wrap gap-2">
                                    {nearbyAreas.split(',').map((area, i) => (
                                        <div key={i} className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-blue-400 transition-colors cursor-default">
                                            {area.trim()}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        className="relative h-[400px] lg:h-[500px] rounded-[48px] overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                            alt={`Expert ${serviceName} in ${cityin}`}
                            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                                <div className="text-sm font-bold opacity-80 mb-1">Top Rated Agency</div>
                                <div className="text-xl font-bold italic">"Leading results for {cityin} brands"</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* AEO Focus: Expert Tips & Direct Answers */}
                <div className="grid lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-8 space-y-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                Strategic Q&A for {cityin}
                            </h2>
                            <p className="text-slate-500 max-w-2xl">
                                Detailed answers to common queries about <span className="font-semibold">{serviceName}</span> in the <span className="font-semibold">{cityin}</span> market.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] overflow-hidden transition-all duration-300"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full text-left p-6 flex justify-between items-center gap-4"
                                    >
                                        <span className={`text-lg font-bold ${openIndex === index ? 'text-blue-600' : 'text-slate-800 dark:text-slate-100'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${openIndex === index ? 'bg-blue-600 border-blue-600 rotate-180' : 'border-slate-200 dark:border-slate-700'}`}>
                                            <ChevronDown className={`w-4 h-4 ${openIndex === index ? 'text-white' : 'text-slate-400'}`} />
                                        </div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            >
                                                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800/50 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Expert Tip (AEO) */}
                        <motion.div
                            className="p-8 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[32px] text-white shadow-xl shadow-indigo-500/20 sticky top-24"
                            whileHover={{ y: -5 }}
                        >
                            <Lightbulb className="w-10 h-10 mb-6 text-yellow-300 drop-shadow-lg" />
                            <h3 className="text-2xl font-bold mb-4">AEO Expert Tip</h3>
                            <div className="text-indigo-100 leading-relaxed italic">
                                "{expertTips || `Focus on 'Answer Engine Optimization' by providing clear, definitive answers to local search queries in ${cityin}. This helps your brand appear in high-intent snippet results and AI-driven search answers.`}"
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">OA</div>
                                <div>
                                    <div className="font-bold">OrganicAds Expert</div>
                                    <div className="text-xs text-indigo-200">Local SEO Strategist</div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] space-y-4">
                            <Info className="w-8 h-8 text-blue-500" />
                            <h4 className="text-lg font-bold">Why AEO & GEO?</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Modern search isn't just about keywords. Answer Engine Optimization (AEO) and Generative Experience Optimization (GEO) ensure your business is the preferred choice for AI models.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
