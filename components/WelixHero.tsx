'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import Image from 'next/image';

interface WelixHeroProps {
    serviceName: string;
    locationin: string;
    cityin: string;
    servicetype: string;
}

export default function WelixHero({ serviceName, locationin, cityin, servicetype }: WelixHeroProps) {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-slate-950/85 mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm font-medium"
                        >
                            <MapPin className="w-4 h-4 text-orange-500" />
                            Serving {serviceName} {locationin}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
                        >
                            {serviceName} in <br />
                            <span className="text-white">{locationin}, {cityin}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
                        >
                            Looking for top-rated {serviceName} in {locationin}, {cityin}?
                            OrganicAds provides expert solutions to scale your business in the local market.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button className="bg-[#FF4F0F] hover:bg-[#e6460d] text-white rounded-full px-8 py-6 h-auto text-lg font-bold shadow-lg shadow-orange-500/20">
                                Get Free Audit
                            </Button>
                            <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 py-6 h-auto text-lg font-bold backdrop-blur-sm">
                                <Phone className="w-5 h-5 mr-2" />
                                Talk to Expert
                            </Button>
                        </motion.div>

                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-gray-700 overflow-hidden relative">
                                        <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="User" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <p>Join 500+ businesses growing with us</p>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-[24px] p-8 lg:p-10 shadow-2xl relative"
                    >
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                Get a Free Quote in {serviceName} {locationin}
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Fill out the form below and our {servicetype} expert team will get back to you within 2 hours.
                            </p>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-1 block">Full Name *</label>
                                <input type="text" placeholder="John Doe" className="w-full px-4 rounded-xl bg-gray-50 border border-gray-100 h-12 focus:ring-2 focus:ring-blue-500 transition-all outline-none" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 mb-1 block">Phone Number *</label>
                                    <input type="tel" placeholder="98765 43210" className="w-full px-4 rounded-xl bg-gray-50 border border-gray-100 h-12 focus:ring-2 focus:ring-blue-500 transition-all outline-none" required />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 mb-1 block">Email Address *</label>
                                    <input type="email" placeholder="john@example.com" className="w-full px-4 rounded-xl bg-gray-50 border border-gray-100 h-12 focus:ring-2 focus:ring-blue-500 transition-all outline-none" required />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-1 block">Service Required</label>
                                <select className="w-full px-4 rounded-xl bg-gray-50 border border-gray-100 h-12 focus:ring-2 focus:ring-blue-500 transition-all outline-none appearance-none">
                                    <option value="seo">SEO Services</option>
                                    <option value="ppc">PPC Management</option>
                                    <option value="smm">Social Media Marketing</option>
                                    <option value="web">Web Development</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-1 block">Message (Optional)</label>
                                <textarea placeholder="Tell us about your business goals..." className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 min-h-[100px] focus:ring-2 focus:ring-blue-500 transition-all outline-none resize-none" />
                            </div>
                            <Button className="w-full bg-[#5D5FEF] hover:bg-[#4b4dc7] text-white rounded-xl h-14 text-lg font-bold flex items-center justify-center gap-2">
                                Get Callback Now
                                <MessageSquare className="w-5 h-5" />
                            </Button>
                            <p className="text-[10px] text-center text-gray-400 mt-4">
                                Your data is safe with us. We don't spam.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
