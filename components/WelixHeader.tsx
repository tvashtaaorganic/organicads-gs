'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WelixHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const logoSrc = 'https://lh3.googleusercontent.com/pw/AP1GczN48g7CPs40h-1mbCuQ7zp2qjq3yF0RQzA9UlEdG2735ZcKyi5jOr5_45qXba5mfwgiCzoBEZCvMhssQAlRaqjovMbPE8j45XeCmryB_d6vME0iPOpjaY5nqI-57HIs6Kmu14Yp2DmvYaNA-7-e5R_F=w1280-h367-s-no-gm?authuser=0';

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-4' : 'py-6 px-4'}`}>
            <nav className={`container mx-auto max-w-7xl backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-slate-800 flex items-center justify-between px-6 py-3.5 ${scrolled ? 'rounded-full mx-4 lg:mx-auto' : 'rounded-3xl'}`}>
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image src={logoSrc} alt="OrganicAds" width={140} height={35} className="h-8 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {['Home', 'Services', 'About', 'Blog', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                            className="px-5 py-2 text-sm font-bold text-slate-700 dark:text-gray-300 hover:text-[#5D5FEF] transition-colors rounded-full"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center gap-4 mr-4 border-r border-gray-200 dark:border-slate-800 pr-6">
                        <Link href="tel:+919876543210" className="text-gray-400 hover:text-[#FF4F0F] transition-colors">
                            <Phone className="w-4 h-4" />
                        </Link>
                        <Link href="https://wa.me/919876543210" className="text-gray-400 hover:text-green-500 transition-colors">
                            <MessageSquare className="w-4 h-4" />
                        </Link>
                    </div>
                    <Button className="bg-[#5D5FEF] hover:bg-[#4b4dc7] text-white rounded-full px-6 font-bold flex items-center gap-2 group shadow-lg shadow-indigo-500/20">
                        Let's Talk
                        <MessageSquare className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button className="p-2 text-slate-700 dark:text-gray-300">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
