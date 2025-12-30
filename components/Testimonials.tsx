'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'CEO, Hyderabad',
        image: 'P',
        color: 'bg-purple-100 text-purple-600',
        rating: 5,
        text: 'The team built a complete platform for us with Android, iOS, and website integration. They handled everything perfectly. Truly a reliable partner.'
    },
    {
        name: 'Imran Ali',
        role: 'Director, Hyderabad',
        image: 'I',
        color: 'bg-blue-100 text-blue-600',
        rating: 5,
        text: 'Technical support is excellent. They are always available to resolve any issues instantly. Highly recommended for their dedication.'
    },
    {
        name: 'Sanjay Patel',
        role: 'Co-Founder, Kolkata',
        image: 'S',
        color: 'bg-orange-100 text-orange-600',
        rating: 5,
        text: 'Working with Organic Ads was the best decision. They delivered a fully functional MVP in record time, and our customers love the smooth UI.'
    },
    {
        name: 'Daniel Laurent',
        role: 'Founder, France',
        image: 'D',
        color: 'bg-teal-100 text-teal-600',
        rating: 5,
        text: 'Exceptional service quality and very professional team. They understood our European market requirements perfectly and delivered world-class results.'
    },
    {
        name: 'Hassan Mohammed',
        role: 'CEO, Egypt/USA',
        image: 'H',
        color: 'bg-indigo-100 text-indigo-600',
        rating: 5,
        text: 'Organic Ads was our trusted partner during our initial launch. Today we are growing internationally thanks to their scalable MVP.'
    },
    {
        name: 'Sarah Jenkins',
        role: 'CTO, London',
        image: 'S',
        color: 'bg-rose-100 text-rose-600',
        rating: 5,
        text: 'We worked with Organic Ads for our Fintech project. Code quality is high, security is strict. Very impressed with the delivery timeline.'
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Initial check for screen size
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying, isMobile]);

    const nextSlide = () => {
        const itemsToShow = isMobile ? 1 : 3;
        const maxIndex = testimonials.length - itemsToShow;
        // If we reach the end, loop back to 0
        if (currentIndex >= maxIndex) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        const itemsToShow = isMobile ? 1 : 3;
        const maxIndex = testimonials.length - itemsToShow;
        // If we are at 0, loop to end
        if (currentIndex <= 0) {
            setCurrentIndex(maxIndex);
        } else {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <section
            className="py-16 md:py-24 bg-background relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold uppercase tracking-wide">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        Client Reviews
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Trusted by founders globally for our commitment to quality and success.
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Navigation Buttons - Always visible */}
                    <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-20 px-0 md:-px-12 pointer-events-none">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevSlide}
                            className="bg-background/80 hover:bg-background shadow-lg rounded-full w-10 h-10 md:w-12 md:h-12 border-border/50 pointer-events-auto -ml-4 md:-ml-12"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            className="bg-background/80 hover:bg-background shadow-lg rounded-full w-10 h-10 md:w-12 md:h-12 border-border/50 pointer-events-auto -mr-4 md:-mr-12"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </Button>
                    </div>

                    {/* Carousel Container */}
                    <div className="overflow-hidden px-1 md:px-2 py-4">
                        <motion.div
                            animate={{
                                x: `-${currentIndex * (isMobile ? 100 : 33.33)}%`
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="flex"
                        >
                            {testimonials.map((testimonial, idx) => (
                                <div
                                    key={idx}
                                    className={`flex-shrink-0 w-full md:w-1/3 px-3 md:px-4`}
                                >
                                    <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-border h-full flex flex-col items-center text-center group">

                                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mb-4 ${testimonial.color} transform group-hover:scale-110 transition-transform`}>
                                            {testimonial.image}
                                        </div>

                                        {/* <Quote className="w-8 h-8 text-orange-400 opacity-20 mb-4" /> */}

                                        <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed flex-grow">
                                            "{testimonial.text}"
                                        </p>

                                        <div className="flex items-center gap-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-base md:text-lg text-foreground">{testimonial.name}</h4>
                                            <p className="text-xs md:text-sm text-orange-500 font-medium">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6 md:mt-10">
                        {Array.from({ length: testimonials.length - (isMobile ? 0 : 2) }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-primary' : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
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
