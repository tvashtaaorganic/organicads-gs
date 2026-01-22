'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Zap, TrendingUp, Award } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6">
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
                                Success in Every Click: Welcome to <span className="gradient-text">Organic Ads Technologies</span>
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Since 2012, we've been pioneering innovative digital marketing solutions, crafting unique narratives, and consistently delivering exceptional results. As a premier SEO company in India, we specialize in Google ranking optimization, website development, and AI-driven digital marketing strategies. Join us in shaping the future of digital excellence!
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Digital Innovation Leaders</h3>
                                    <p className="text-muted-foreground">Shaping digital future with cutting-edge AI-driven SEO solutions for proven Google search results. Expert in organic search optimization and Google Ads management.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Tailored Strategy Experts</h3>
                                    <p className="text-muted-foreground">Ensuring a roadmap to success with SEO-friendly web design, responsive website development, and best-in-class e-commerce solutions. Specialized in local SEO and international SEO services.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Proven Results Achievers</h3>
                                    <p className="text-muted-foreground">Dedicated to achieving your success with millions of impressions and lakhs of clicks delivered. Expertise in conversion rate optimization, content marketing, and social media marketing.</p>
                                </div>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-5 text-sm shadow-xl rounded-xl border-2 border-blue-500"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Find more about us
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Button>
                    </motion.div>

                    {/* Right Image with Stats */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden mb-6">
                            <Image
                                src="https://lh3.googleusercontent.com/pw/AP1GczMLnVa7HDiYU5yWWuNMuBZ2vuOk1JetY6WRNcBDAnxbhDP31IiInX_sTHBJl4snqzwOKrx-gXsk5EsX0NwREmP33Eg9tMCCv7KXtBtpGgZH58MW7nrtNFJXUguS4oTDn7Nniiuw1CwkyoAw7stEmjXw=w1635-h913-s-no-gm?authuser=0"
                                alt="Organic Ads Technologies Team"
                                width={1635}
                                height={913}
                                className="rounded-2xl w-full h-auto"
                            />
                        </div>

                        {/* Achievement Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-card border border-border rounded-xl p-4 text-center">
                                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                                <p className="text-2xl font-bold gradient-text">13+</p>
                                <p className="text-xs text-muted-foreground">Years Experience</p>
                            </div>
                            <div className="bg-card border border-border rounded-xl p-4 text-center">
                                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                <p className="text-2xl font-bold gradient-text">28.6M</p>
                                <p className="text-xs text-muted-foreground">Impressions</p>
                            </div>
                            <div className="bg-card border border-border rounded-xl p-4 text-center">
                                <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                <p className="text-2xl font-bold gradient-text">165K+</p>
                                <p className="text-xs text-muted-foreground">Clicks</p>
                            </div>
                            <div className="bg-card border border-border rounded-xl p-4 text-center">
                                <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
                                <p className="text-2xl font-bold gradient-text">AI-Driven</p>
                                <p className="text-xs text-muted-foreground">Results</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
