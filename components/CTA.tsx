'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, FileText, X } from 'lucide-react';

export default function CTA() {
    const [showForm, setShowForm] = useState(false);
    const phoneNumber = '+917259404569';
    const whatsappNumber = '917259404569';

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleRequestQuote = () => {
        setShowForm(!showForm);
        // Scroll to form smoothly
        if (!showForm) {
            setTimeout(() => {
                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    useEffect(() => {
        if (showForm) {
            // Load Fillout embed script
            const script = document.createElement('script');
            script.src = 'https://server.fillout.com/embed/v1/';
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [showForm]);

    return (
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Ready to <span className="gradient-text">Elevate Your Digital Presence?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Achieve top Google & Bing rankings for your website in just 4 hours
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <Button
                            size="lg"
                            onClick={handleWhatsApp}
                            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-lg w-full sm:w-auto"
                        >
                            <MessageCircle className="mr-2 w-5 h-5" />
                            WhatsApp Now
                        </Button>
                        <span className="text-sm text-muted-foreground">{phoneNumber}</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Button
                            size="lg"
                            onClick={handleCall}
                            variant="outline"
                            className="border-2 border-foreground bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg w-full sm:w-auto"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            Call Now
                        </Button>
                        <span className="text-sm text-muted-foreground">{phoneNumber}</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Button
                            size="lg"
                            onClick={handleRequestQuote}
                            variant="outline"
                            className="border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg w-full sm:w-auto"
                        >
                            <FileText className="mr-2 w-5 h-5" />
                            Request Quote
                        </Button>
                        <span className="text-sm text-muted-foreground">Get Quote in 4 Hours</span>
                    </div>
                </motion.div>

                {/* Embedded Form */}
                <AnimatePresence>
                    {showForm && (
                        <motion.div
                            id="quote-form"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-12 relative"
                        >
                            <div className="relative bg-card border border-border rounded-xl p-6 shadow-2xl">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setShowForm(false)}
                                    className="absolute top-4 right-4 z-10"
                                    aria-label="Close form"
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                                <div
                                    style={{ width: '100%', height: '500px' }}
                                    data-fillout-id="bBpksmrcG1us"
                                    data-fillout-embed-type="standard"
                                    data-fillout-inherit-parameters
                                    data-fillout-dynamic-resize
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
