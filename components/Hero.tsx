'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Projects Delivered', color: '#a855f7' },
  { number: '4hrs', label: 'Average Response', color: '#f59e0b' },
  { number: '98%', label: 'Client Satisfaction', color: '#06b6d4' },
  { number: '24/7', label: 'Support Available', color: '#ec4899' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-32"
      style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #1a1060 40%, #0d1b3e 70%, #0a1628 100%)' }}
    >
      {/* Purple glow top-left */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: '-10%', left: '-5%',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Cyan glow bottom-right */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: '-10%', right: '-5%',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Pink glow center-right */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: '30%', right: '10%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(12px)' }}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white">
              <Zap className="h-3 w-3 fill-current" />
            </span>
            <span className="text-sm font-semibold text-white">
              Top Google &amp; Bing Rankings in 4 Days!
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="gradient-text">Digital Excellence</span>
          <br />
          <span style={{ color: '#ffffff' }}>Delivered Fast</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ color: 'rgba(203,213,225,0.9)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From stunning websites to powerful apps and data-driven marketing campaigns —
          we deliver premium digital solutions with unmatched speed and quality.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="text-base px-8 h-14 rounded-full group font-bold border-0"
            style={{ background: '#ffffff', color: '#0f172a' }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            className="text-base px-8 h-14 rounded-full font-semibold"
            style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(12px)' }}
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Work
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center rounded-2xl py-5 px-4"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}
            >
              <div className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: stat.color }}>
                {stat.number}
              </div>
              <div className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(148,163,184,0.9)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
