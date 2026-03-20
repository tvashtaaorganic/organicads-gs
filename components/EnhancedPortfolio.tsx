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

// Triple for seamless infinite loop
const allLogos = [...clientLogos, ...clientLogos, ...clientLogos];

export default function EnhancedPortfolio() {
    return (
        <section id="portfolio" className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">
                        Trusted by <span className="gradient-text">500+</span> Happy Clients
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Across <span className="gradient-text">15+</span> Countries!
                    </p>
                </motion.div>

                {/* Single scrolling row - no boxes, no borders */}
                <div className="relative overflow-hidden">
                    {/* Left fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, hsl(var(--background)) 0%, transparent 100%)' }}
                    />
                    {/* Right fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to left, hsl(var(--background)) 0%, transparent 100%)' }}
                    />

                    <div className="flex items-center portfolio-scroll-left">
                        {allLogos.map((logo, index) => (
                            <div
                                key={`logo-${index}`}
                                className="flex-shrink-0 w-36 mx-8 flex items-center justify-center"
                            >
                                <Image
                                    src={logo.url}
                                    alt={logo.name}
                                    width={130}
                                    height={65}
                                    className="w-full h-auto object-contain max-h-14 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes portfolio-scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                .portfolio-scroll-left {
                    animation: portfolio-scroll-left 30s linear infinite;
                }
                .portfolio-scroll-left:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
