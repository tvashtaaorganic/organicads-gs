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
    const [activeSection, setActiveSection] = useState('home');
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'services', 'portfolio', 'pricing', 'why-us', 'contact'];
            const scrollPosition = window.scrollY + 100;

            // Check if at top of page
            if (window.scrollY < 100) {
                setActiveSection('home');
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Home', href: '/', id: 'home' },
        { label: 'Services', href: '#services', id: 'services' },
        { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
        { label: 'Pricing', href: '#pricing', id: 'pricing' },
        { label: 'Why Us', href: '#why-us', id: 'why-us' },
        { label: 'Contact', href: '#contact', id: 'contact' },
    ];

    const logoSrc = mounted && theme === 'dark'
        ? 'https://lh3.googleusercontent.com/pw/AP1GczMg2Z6_rbj-7eLF_n_5bWGVuuC8h2OrL0bSykxN3maKirmB0SKJ7HeWTYov6gWPt5RR4zMLVS1mlTWKy8MepoYL6JNh-SG_7H7-_E8JFkDD2mPQmhc2ZuDLGuMKL4AnMlgEH-tUPXlxbKefiv0QOD0N=w1195-h308-s-no-gm?authuser=0'
        : 'https://lh3.googleusercontent.com/pw/AP1GczN48g7CPs40h-1mbCuQ7zp2qjq3yF0RQzA9UlEdG2735ZcKyi5jOr5_45qXba5mfwgiCzoBEZCvMhssQAlRaqjovMbPE8j45XeCmryB_d6vME0iPOpjaY5nqI-57HIs6Kmu14Yp2DmvYaNA-7-e5R_F=w1280-h367-s-no-gm?authuser=0';

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl shadow-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src={logoSrc}
                                alt="OrganicAds"
                                width={140}
                                height={35}
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center flex-1 justify-center">
                        <div className="flex items-center space-x-1 xl:space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-1.5 ">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
                                        ? 'bg-white dark:bg-gray-700/80 text-foreground dark:text-gray-100 shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-white/50 dark:hover:bg-gray-700/50'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Right Side - Theme Toggle & Get Quote */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <Button
                            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5 h-9 text-sm"
                            onClick={() => window.open('https://forms.fillout.com/t/bBpksmrcG1us', '_blank')}
                        >
                            Get Quote
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2"
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border/50">
                        <nav className="flex flex-col space-y-3">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-foreground py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button
                                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-full mt-2"
                                onClick={() => {
                                    window.open('https://forms.fillout.com/t/bBpksmrcG1us', '_blank');
                                    setIsMenuOpen(false);
                                }}
                            >
                                Get Quote
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
