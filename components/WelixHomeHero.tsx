'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, CheckCircle2, Star, Zap, TrendingUp, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function WelixHomeHero() {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0F172A]">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -mr-96 -mt-96" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[120px] -ml-72 -mb-72" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <Badge className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-md">
                                <Zap className="w-4 h-4 mr-2 text-orange-500 fill-orange-500" />
                                Ranked #1 Digital Agency in Bangalore
                            </Badge>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05]"
                        >
                            Decoding the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                Pulse of Success
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-xl leading-relaxed"
                        >
                            We combine code, data, and creative strategy to deliver
                            performance-driven digital marketing that scales your business at 2x speed.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-5 items-center"
                        >
                            <Button className="bg-[#5D5FEF] hover:bg-[#4b4dc7] text-white rounded-full px-10 py-7 h-auto text-lg font-bold shadow-xl shadow-indigo-500/20 group">
                                Start Your Journey
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <button className="flex items-center gap-3 text-white font-bold hover:text-indigo-400 transition-colors group">
                                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                                    <Play className="w-5 h-5 fill-white" />
                                </div>
                                Watch Showreel
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="pt-8 flex items-center gap-8 border-t border-white/5"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />)}
                                </div>
                                <span className="text-white font-bold text-sm">4.9/5 Rating</span>
                            </div>
                            <div className="h-4 w-px bg-white/10" />
                            <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                Verified Google Partner
                            </div>
                        </motion.div>
                    </div>

                    {/* Right content - Abstract Graphic/Cards */}
                    <div className="relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            {/* Main large card */}
                            <div className="bg-slate-900/50 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 shadow-[0_0_50px_-12px_rgba(79,70,229,0.3)]">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="space-y-1">
                                        <div className="text-indigo-400 font-bold text-sm uppercase tracking-widest">Global Reach</div>
                                        <div className="text-white text-3xl font-black">Performance Data</div>
                                    </div>
                                    <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-bold font-mono">+12.4%</div>
                                </div>
                                {/* Mock Chart */}
                                <div className="h-48 flex items-end gap-3 px-4">
                                    {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                                            className="flex-1 bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t-lg"
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Status Cards */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl z-20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <div className="text-slate-900 dark:text-white font-black text-xl">240%</div>
                                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Growth Rate</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-2xl z-20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white font-black text-xl">5K+</div>
                                    <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider">Monthly Enquiries</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
