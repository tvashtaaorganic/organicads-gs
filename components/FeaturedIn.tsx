'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const featuredLogos = [
    { name: 'YourStory', url: 'https://res.cloudinary.com/djiki7tvo/image/upload/v1741938408/yourstory-logo_tyha7t.webp' },
    { name: 'EIN', url: 'https://res.cloudinary.com/djiki7tvo/image/upload/v1741938408/ein_kh4kd8.webp' },
    { name: 'TopSEO', url: 'https://res.cloudinary.com/djiki7tvo/image/upload/v1741938408/top-seo-logo_vmgqrr.webp' },
    { name: 'Xing', url: 'https://res.cloudinary.com/djiki7tvo/image/upload/v1741938408/xing-new-logo_zwbbgz.webp' },
    { name: 'BDaily', url: 'https://res.cloudinary.com/djiki7tvo/image/upload/v1741938408/bdaily-logo_k428jz.webp' },
    { name: 'Medium', url: 'https://res.cloudinary.com/djiki7tvo/image/upload/v1741938408/medium-logo_paphqz.webp' },
];

// Duplicate for infinite scroll
const allLogos = [...featuredLogos, ...featuredLogos];

export default function FeaturedIn() {
    return (
        // OPTION: Remove border-y to have NO top/bottom borders
        // <section className="py-12 px-4 bg-muted/30">

        // CURRENT: Has top/bottom borders
        <section className="py-12 px-4 bg-muted/30 border-y border-border/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        As Featured In
                    </p>
                </motion.div>

                {/* Scrolling logos */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll-featured">
                        {allLogos.map((logo, index) => (
                            <div
                                key={`featured-${index}`}
                                className="flex-shrink-0 w-40 mx-4"
                            >
                                <div className="rounded-xl border bg-card shadow-sm h-25 p-4 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                                    <Image
                                        src={logo.url}
                                        alt={logo.name}
                                        width={120}
                                        height={60}
                                        className="w-full h-auto object-contain max-h-16 opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll-featured {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-featured {
          animation: scroll-featured 25s linear infinite;
        }

        .animate-scroll-featured:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
