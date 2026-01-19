'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LocalFAQsProps {
    serviceName: string;
    cityin: string;
    servicetype?: string;
}

interface FAQ {
    question: string;
    answer: string;
}

export default function LocalFAQs({ serviceName, cityin, servicetype = 'website design' }: LocalFAQsProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQ[] = [
        {
            question: `Do you offer ${serviceName.toLowerCase()} services in ${cityin}?`,
            answer: `Yes, we provide professional ${serviceName.toLowerCase()} services to businesses in ${cityin}. Our team has extensive experience working with local businesses and understands the unique needs of the ${cityin} market.`
        },
        {
            question: `How much does ${serviceName.toLowerCase()} cost in ${cityin}?`,
            answer: `The cost varies based on your requirements. We offer flexible pricing packages tailored for ${cityin} businesses, starting from affordable options for startups to comprehensive solutions for larger enterprises.`
        },
        {
            question: `How long does it take to complete a project in ${cityin}?`,
            answer: `Project timelines typically range from 2-8 weeks. We work efficiently to deliver high-quality results. For ${cityin} clients, we maximize availability for agile iterations and feedback.`
        },
        {
            question: `Can you support local SEO for ${cityin} businesses?`,
            answer: `Absolutely! We specialize in local SEO for ${cityin}. Our strategies include Google My Business optimization, local keyword targeting, and citation building to help you rank higher in ${cityin} search results.`
        },
        {
            question: `Do you provide ongoing support in ${cityin}?`,
            answer: `Yes, we offer comprehensive post-launch support for all ${cityin} clients, including maintenance, updates, and performance optimization.`
        },
        {
            question: `Why choose you for ${serviceName.toLowerCase()} in ${cityin}?`,
            answer: `We understand the ${cityin} business landscape. Our team combines global expertise with local market insights to deliver solutions that drive real growth for ${cityin} enterprises.`
        }
    ];

    return (
        <section className="py-20 px-4 bg-gray-50 dark:bg-background border-t border-gray-200 dark:border-border" id="local-faqs">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                            <HelpCircle className="w-8 h-8" />
                        </div>
                    </div>
                    {/* Fixed title color to be high contrast */}
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Common Questions in <span className="text-blue-600 dark:text-blue-400">{cityin}</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Everything you need to know about our {serviceName.toLowerCase()} services tailored for the {cityin} region.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-card border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left p-6 flex justify-between items-center gap-4"
                            >
                                <span className={`text-lg font-semibold ${openIndex === index ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-gray-100'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-500' : ''}`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
