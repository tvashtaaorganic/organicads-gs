'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const solutions = [
    {
        title: 'Ride Sharing Platform',
        description: 'Create a cab network platform like OLA & Uber with advanced booking features.',
        features: [
            'GPS Navigation Integration',
            'Driver Management System',
            'Dynamic Pricing',
            'Multi-payment Options'
        ],
        bg: 'bg-emerald-50',
        accent: 'text-emerald-600',
        button: 'bg-[#1a1a1a] text-white'
    },
    {
        title: 'E-commerce Platform',
        description: 'Create a comprehensive e-commerce platform like Amazon & Flipkart with advanced features.',
        features: [
            'Multi-vendor Marketplace',
            'Payment Gateway Integration',
            'Inventory Management',
            'Analytics Dashboard'
        ],
        bg: 'bg-orange-50',
        accent: 'text-orange-600',
        button: 'bg-[#1a1a1a] text-white'
    },
    {
        title: 'Food Delivery Platform',
        description: 'Build a restaurant network platform like Swiggy and Zomato with seamless ordering.',
        features: [
            'Restaurant Management',
            'Real-time Order Tracking',
            'Delivery Boy Apps',
            'Rating & Review System'
        ],
        bg: 'bg-rose-50',
        accent: 'text-rose-600',
        button: 'bg-[#1a1a1a] text-white'
    },
    {
        title: 'Grocery Platform',
        description: 'Build a comprehensive grocery platform like Grofers with fresh delivery features.',
        features: [
            'Fresh Product Management',
            'Scheduled Delivery',
            'Subscription Services',
            'Quality Assurance'
        ],
        bg: 'bg-lime-50',
        accent: 'text-lime-600',
        button: 'bg-[#1a1a1a] text-white'
    },
    {
        title: 'On-Demand Services',
        description: 'Create an on-demand platform like Urban Clap for home services and maintenance.',
        features: [
            'Service Provider Network',
            'Booking Management',
            'Quality Control',
            'Service Tracking'
        ],
        bg: 'bg-blue-50',
        accent: 'text-blue-600',
        button: 'bg-[#1a1a1a] text-white'
    },
    {
        title: 'Quick Commerce Platform',
        description: 'Build your own quick commerce app like Blinkit & Zepto with instant delivery features.',
        features: [
            'Customer Mobile Apps (Android & iOS)',
            'Seller & Delivery Apps',
            'Master Admin Panel',
            'Web Platform'
        ],
        bg: 'bg-slate-50',
        accent: 'text-slate-600',
        button: 'bg-[#1a1a1a] text-white'
    }
];

export default function PlatformSolutions() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % solutions.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
    };

    const getVisibleCards = () => {
        const items = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + solutions.length) % solutions.length;
            items.push({ ...solutions[index], offset: i });
        }
        return items;
    };

    return (
        <section className="py-20 bg-background overflow-hidden" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                        Our Platform Solutions
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        End-to-end app development for every industry
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto h-[600px] flex items-center justify-center">
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 md:left-4 z-20 p-3 rounded-full bg-secondary/80 hover:bg-secondary transition-colors backdrop-blur-sm"
                        aria-label="Previous solution"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 md:right-4 z-20 p-3 rounded-full bg-secondary/80 hover:bg-secondary transition-colors backdrop-blur-sm"
                        aria-label="Next solution"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Cards Container */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                        <AnimatePresence mode="popLayout">
                            {getVisibleCards().map((item) => (
                                <motion.div
                                    key={`${item.title}-${item.offset}`}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.8,
                                        x: item.offset * 100 + (item.offset === 0 ? 0 : item.offset > 0 ? 50 : -50),
                                        zIndex: item.offset === 0 ? 10 : 0
                                    }}
                                    animate={{
                                        opacity: item.offset === 0 ? 1 : 0.5,
                                        scale: item.offset === 0 ? 1 : 0.8,
                                        x: item.offset === 0 ? 0 : item.offset * 350, // Distance between cards
                                        zIndex: item.offset === 0 ? 10 : 0,
                                        filter: item.offset === 0 ? 'blur(0px)' : 'blur(2px)'
                                    }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className={`absolute w-full max-w-[400px] rounded-3xl p-8 flex flex-col justify-between ${item.bg} ${item.offset === 0 ? 'shadow-2xl h-[450px]' : 'shadow-lg h-[450px]'
                                        }`}
                                >
                                    <div>
                                        <h3 className={`text-2xl font-bold mb-4 ${item.offset === 0 ? 'text-3xl' : ''}`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                                            {item.description}
                                        </p>
                                        <ul className="space-y-4">
                                            {item.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-3">
                                                    <Check className={`w-5 h-5 ${item.accent} flex-shrink-0`} />
                                                    <span className="text-sm font-medium opacity-80">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <motion.button
                                        whileHover={item.offset === 0 ? { scale: 1.02 } : {}}
                                        whileTap={item.offset === 0 ? { scale: 0.98 } : {}}
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                        className={`w-full py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wide transition-all ${item.offset === 0
                                                ? 'bg-[#1a1a1a] text-white shadow-lg hover:bg-black'
                                                : 'bg-white/50 text-muted-foreground cursor-default'
                                            }`}
                                    >
                                        Book Free Consultation
                                    </motion.button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
                        {solutions.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
