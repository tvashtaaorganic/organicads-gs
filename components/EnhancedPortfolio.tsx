'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clientLogos = [
    { name: 'Technacle', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716912234/brand28_i8yefa.png' },
    { name: 'Children Story Time', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716912235/brand29_qyygyf.png' },
    { name: 'Localaids', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716906948/brand11_mevnv5.png' },
    { name: 'Tvashtaa Organic', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716906948/brand12_ol1ltb.png' },
    { name: 'Metric Stream', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398913/ms-logo_cguutc.webp' },
    { name: 'Globe Moving', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398913/globe-moving-logo_fuwae1.webp' },
    { name: 'Mera Transport', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/meratransport_wh7wpy.webp' },
    { name: 'Darby', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/darby-logo_xnyqni.webp' },
    { name: 'Fincare', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/fincare_qujvvh.webp' },
    { name: 'Seefee', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/sefee-logo_jpi629.webp' },
    { name: 'Enigma CG', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/enigma-cg-logo_mvfxsj.webp' },
    { name: 'BHIVE Workspace', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716905628/brand7_f0v3gl.webp' },
    { name: 'Vakil Search', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716905628/brand6_s5lxto.webp' },
    { name: 'IAMPL', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/iampl-logo_jst3ur.webp' },
];

// Duplicate for infinite scroll
const allLogos = [...clientLogos, ...clientLogos, ...clientLogos];

export default function EnhancedPortfolio() {
    return (
        <section id="portfolio" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Trusted by <span className="gradient-text">500+</span> Happy Clients
                    </p>
                    <p className="text-xl text-muted-foreground">
                        Across <span className="gradient-text">15+</span> Countries!
                    </p>
                </motion.div>

                {/* Logo Container with Gradient Fade Edges */}
                <div className="relative">
                    {/* Left Gradient Fade */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
                        style={{
                            background: 'linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 20%, transparent 100%)'
                        }}
                    />

                    {/* Right Gradient Fade */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
                        style={{
                            background: 'linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background)) 20%, transparent 100%)'
                        }}
                    />

                    {/* Row 1 */}
                    <div className="overflow-hidden mb-6">
                        <div className="flex animate-scroll-left">
                            {allLogos.map((logo, index) => (
                                <div
                                    key={`row1-${index}`}
                                    className="flex-shrink-0 w-44 mx-3 bg-card border border-border rounded-xl p-6 flex items-center justify-center hover:border-primary/50 hover:scale-105 transition-all duration-300 shadow-sm"
                                    style={{ height: '100px' }}
                                >
                                    <Image
                                        src={logo.url}
                                        alt={logo.name}
                                        width={150}
                                        height={80}
                                        className="w-full h-auto object-contain max-h-16"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll-right">
                            {allLogos.map((logo, index) => (
                                <div
                                    key={`row2-${index}`}
                                    className="flex-shrink-0 w-44 mx-3 bg-card border border-border rounded-xl p-6 flex items-center justify-center hover:border-primary/50 hover:scale-105 transition-all duration-300 shadow-sm"
                                    style={{ height: '100px' }}
                                >
                                    <Image
                                        src={logo.url}
                                        alt={logo.name}
                                        width={150}
                                        height={80}
                                        className="w-full h-auto object-contain max-h-16"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(-33.333%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-scroll-left {
                    animation: scroll-left 40s linear infinite;
                }

                .animate-scroll-right {
                    animation: scroll-right 40s linear infinite;
                }

                .animate-scroll-left:hover,
                .animate-scroll-right:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
