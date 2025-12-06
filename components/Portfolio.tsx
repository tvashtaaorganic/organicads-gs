'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clientLogos = [
    { name: 'Pikme', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716912231/brand27_lowpw2.png' },
    { name: 'ANR Gardeners', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716912228/brand26_klmi4h.png' },
    { name: 'Technacle', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716912234/brand28_i8yefa.png' },
    { name: 'Children Story Time', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716912235/brand29_qyygyf.png' },
    { name: 'Localaids', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716906948/brand11_mevnv5.png' },
    { name: 'Tvashtaa Organic', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716906948/brand12_ol1ltb.png' },
    { name: 'Metric Stream', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398913/ms-logo_cguutc.webp' },
    { name: 'Globe Moving', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398913/globe-moving-logo_fuwae1.webp' },
    { name: 'Mera Transport', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/meratransport_wh7wpy.webp' },
    { name: 'IAMPL', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/iampl-logo_jst3ur.webp' },
    { name: 'SLK', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398913/slk-logo_jjlgyt.webp' },
    { name: 'Desi Jodi', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398913/desijodi-logo_aehtzm.webp' },
    { name: 'Derby', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/darby-logo_xnyqni.webp' },
    { name: 'Fincare', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/fincare_qujvvh.webp' },
    { name: 'Seefee Amphenol', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/sefee-logo_jpi629.webp' },
    { name: 'Enigma CG', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/enigma-cg-logo_mvfxsj.webp' },
    { name: 'PR Arena', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/ipr-arena_zrrcii.webp' },
    { name: 'BHIVE Workspace', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716905628/brand7_f0v3gl.webp' },
    { name: 'Vakil Search', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716905628/brand6_s5lxto.webp' },
    { name: 'Provident', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716905414/brand5_oqbsa8.webp' },
    { name: 'Apollo Hospitals', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716905304/bran5_v0vrdi.webp' },
    { name: 'Salarpuria Sattva', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716905197/brand4_zfhhkm.webp' },
    { name: 'Purvankara', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716905111/brand3_pjatyt.webp' },
    { name: 'RMZ Marq', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716904751/brand2_zojble.png' },
    { name: 'Plan B Capital', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716904750/brand1_f0hose.png' },
    { name: 'Halli TV', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716912221/brand25_zdidxa.png' },
    { name: 'Manipal Design', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716908993/brand24_rqy9j2.png' },
    { name: 'P66.me', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716908992/brand23_gupihh.png' },
    { name: 'Perfect Web Design', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716908989/brand21_bbswco.png' },
    { name: 'Infostyx Technologies', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716908986/brand20_q8aw1r.png' },
    { name: 'AMC Comforts', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716908986/brand19_w1x49x.png' },
    { name: 'Caprico Facilities', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716907785/brand18_xrfefo.png' },
    { name: 'Unique Wealth Trading', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716907781/brand16_fn3asc.png' },
    { name: 'Westbound Marketing', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716907781/brand17_fjky1u.png' },
    { name: 'Ideal Industrial', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716907364/brand15_poukcu.png' },
    { name: 'VCS Newz', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716907364/brand14_dtyu8x.png' },
    { name: 'Oyokart', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1716907364/brand13_xwpino.png' },
    { name: 'Best Kannada News', url: 'https://res.cloudinary.com/s2ucdn/image/upload/v1735399776/BKlogo_anmtz5.png' },
];

// Split logos into two rows and duplicate for infinite scroll
const row1Logos = [...clientLogos.slice(0, 19), ...clientLogos.slice(0, 19)];
const row2Logos = [...clientLogos.slice(19), ...clientLogos.slice(19)];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
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
                    <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                        Across <span className="gradient-text">15+</span> Countries!
                    </p>
                </motion.div>

                {/* Row 1 - Scrolling Right to Left */}
                <div className="relative mb-8 overflow-hidden">
                    <div className="flex animate-scroll-left">
                        {row1Logos.map((logo, index) => (
                            <div
                                key={`row1-${index}`}
                                className="flex-shrink-0 w-40 mx-3 bg-card border border-border rounded-xl p-2 flex items-center justify-center hover:border-primary/50 hover:scale-105 transition-all duration-300 text-card-foreground shadow border transition-transform transform hover:scale-105"
                            >
                                <Image
                                    src={logo.url}
                                    alt={logo.name}
                                    width={140}
                                    height={80}
                                    className="w-full h-auto object-contain max-h-20"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Scrolling Right to Left (slightly slower) */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll-left-slow">
                        {row2Logos.map((logo, index) => (
                            <div
                                key={`row2-${index}`}
                                className="flex-shrink-0 w-40 mx-3 bg-card border border-border rounded-xl p-2 flex items-center justify-center hover:border-primary/50 hover:scale-105 transition-all duration-300 text-card-foreground shadow border transition-transform transform hover:scale-105"
                            >
                                <Image
                                    src={logo.url}
                                    alt={logo.name}
                                    width={140}
                                    height={80}
                                    className="w-full h-auto object-contain max-h-20"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-left-slow {
          animation: scroll-left 50s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-left-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
