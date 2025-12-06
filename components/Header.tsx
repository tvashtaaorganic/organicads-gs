'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from 'next-themes';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Why Us', href: '#why-us' },
        { label: 'Contact', href: '#contact' },

        // { label: 'Home', href: '#home' },
        // { label: 'Services', href: '#services' },
        // { label: 'Portfolio', href: '#portfolio' },
        // { label: 'Why Us', href: '#why-us' },
        // { label: 'Contact', href: '#contact' },
    ];

    const logoSrc = mounted && theme === 'dark'
        ? 'https://lh3.googleusercontent.com/pw/AP1GczMg2Z6_rbj-7eLF_n_5bWGVuuC8h2OrL0bSykxN3maKirmB0SKJ7HeWTYov6gWPt5RR4zMLVS1mlTWKy8MepoYL6JNh-SG_7H7-_E8JFkDD2mPQmhc2ZuDLGuMKL4AnMlgEH-tUPXlxbKefiv0QOD0N=w1195-h308-s-no-gm?authuser=0'
        : 'https://lh3.googleusercontent.com/pw/AP1GczN48g7CPs40h-1mbCuQ7zp2qjq3yF0RQzA9UlEdG2735ZcKyi5jOr5_45qXba5mfwgiCzoBEZCvMhssQAlRaqjovMbPE8j45XeCmryB_d6vME0iPOpjaY5nqI-57HIs6Kmu14Yp2DmvYaNA-7-e5R_F=w1280-h367-s-no-gm?authuser=0';

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src={logoSrc}
                                alt="OrganicAds Logo"
                                width={150}
                                height={40}
                                className="h-10 w-auto cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button & Theme Toggle - Desktop */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <Button
                            className="bg-primary hover:bg-primary/90"
                            onClick={() => window.open('https://forms.fillout.com/t/bBpksmrcG1us', '_blank')}
                        >
                            Request Quote
                        </Button>
                    </div>

                    {/* Mobile: Theme Toggle + Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-foreground" />
                            ) : (
                                <Menu className="w-6 h-6 text-foreground" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border/50">
                        <nav className="flex flex-col space-y-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-foreground hover:text-primary transition-colors font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button
                                className="bg-primary hover:bg-primary/90 w-full"
                                onClick={() => window.open('https://forms.fillout.com/t/bBpksmrcG1us', '_blank')}
                            >
                                Request Quote
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
