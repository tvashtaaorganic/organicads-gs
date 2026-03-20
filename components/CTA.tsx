'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, FileText, X, Clock, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
    const [showForm, setShowForm] = useState(false);

    const contacts = [
        {
            label: 'Primary Contact',
            number: '+91 72594 04569',
            whatsapp: '917259404569',
            phone: '+917259404569',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            badge: 'Most Responsive',
        },
        {
            label: 'Alternative Contact',
            number: '+91 97435 04315',
            whatsapp: '919743504315',
            phone: '+919743504315',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            badge: '24 / 7 Support',
        },
    ];

    useEffect(() => {
        if (showForm) {
            const script = document.createElement('script');
            script.src = 'https://server.fillout.com/embed/v1/';
            script.async = true;
            document.body.appendChild(script);
            return () => { document.body.removeChild(script); };
        }
    }, [showForm]);

    return (
        <section id="contact" className="relative py-28 px-4 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-white dark:bg-slate-950" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%), radial-gradient(circle at 75% 75%, #ec4899 0%, transparent 50%)',
            }} />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Heading */}
                <motion.div className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                        <Clock className="w-4 h-4" />
                        Get a Quote in 4 Hours
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-slate-900 dark:text-white tracking-tight">
                        Ready to Elevate Your<br />
                        <span className="gradient-text">Digital Presence?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Achieve top Google &amp; Bing rankings for your website in just 4 days.
                        Talk to our experts right now.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                    {contacts.map((c, i) => (
                        <div key={i} className="relative rounded-3xl overflow-hidden group">
                            {/* Card gradient header strip */}
                            <div className="h-2 w-full" style={{ background: c.gradient }} />
                            <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{c.label}</span>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{c.number}</p>
                                    </div>
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                                        {c.badge}
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => window.open(`https://wa.me/${c.whatsapp}`, '_blank')}
                                        className="flex-1 flex items-center justify-center gap-2 h-12 rounded-2xl text-white text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                                        style={{ background: '#25D366' }}
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        WhatsApp
                                    </button>
                                    <button
                                        onClick={() => window.location.href = `tel:${c.phone}`}
                                        className="flex-1 flex items-center justify-center gap-2 h-12 rounded-2xl text-white text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                                        style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' }}
                                    >
                                        <Phone className="w-4 h-4" />
                                        Call Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Trust badges */}
                <motion.div className="flex flex-wrap justify-center gap-4 mb-10"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                    {[
                        { icon: Star, text: '4.9/5 Rating from 500+ Clients' },
                        { icon: Shield, text: 'Secure & Confidential' },
                        { icon: Clock, text: 'Response within 4 Hours' },
                    ].map(({ icon: Icon, text }, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">
                            <Icon className="w-4 h-4 text-blue-500" />
                            {text}
                        </div>
                    ))}
                </motion.div>

                {/* Request Quote Button */}
                <motion.div className="text-center"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
                    <button
                        onClick={() => {
                            setShowForm(!showForm);
                            if (!showForm) setTimeout(() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' }), 100);
                        }}
                        className="inline-flex items-center gap-3 px-10 h-14 rounded-full text-white text-base font-bold transition-all hover:opacity-90 hover:scale-[1.02] shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
                    >
                        <FileText className="w-5 h-5" />
                        {showForm ? 'Close Quote Form' : 'Request a Free Quote'}
                    </button>
                </motion.div>

                {/* Quote Form */}
                <AnimatePresence>
                    {showForm && (
                        <motion.div id="quote-form"
                            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }}
                            className="mt-12 relative">
                            <div className="relative bg-slate-50 dark:bg-slate-900 rounded-3xl p-2 sm:p-6 overflow-hidden border border-slate-100 dark:border-slate-800">
                                <Button variant="ghost" size="icon"
                                    onClick={() => setShowForm(false)}
                                    className="absolute top-3 right-3 z-10 hover:bg-slate-200 dark:hover:bg-slate-800">
                                    <X className="w-5 h-5" />
                                </Button>
                                <div style={{ width: '100%', height: '500px' }}
                                    data-fillout-id="bBpksmrcG1us"
                                    data-fillout-embed-type="standard"
                                    data-fillout-inherit-parameters
                                    data-fillout-dynamic-resize />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
