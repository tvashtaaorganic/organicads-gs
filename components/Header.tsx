'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { usePathname } from 'next/navigation';

const WHITE_LOGO = 'https://lh3.googleusercontent.com/pw/AP1GczMg2Z6_rbj-7eLF_n_5bWGVuuC8h2OrL0bSykxN3maKirmB0SKJ7HeWTYov6gWPt5RR4zMLVS1mlTWKy8MepoYL6JNh-SG_7H7-_E8JFkDD2mPQmhc2ZuDLGuMKL4AnMlgEH-tUPXlxbKefiv0QOD0N=w1195-h308-s-no-gm?authuser=0';
const DARK_LOGO = 'https://lh3.googleusercontent.com/pw/AP1GczN48g7CPs40h-1mbCuQ7zp2qjq3yF0RQzA9UlEdG2735ZcKyi5jOr5_45qXba5mfwgiCzoBEZCvMhssQAlRaqjovMbPE8j45XeCmryB_d6vME0iPOpjaY5nqI-57HIs6Kmu14Yp2DmvYaNA-7-e5R_F=w1280-h367-s-no-gm?authuser=0';

const menuItems = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    // Determine initial active section from pathname
    const getInitialSection = () => {
        if (pathname === '/') return 'home';
        if (pathname.includes('/services')) return 'services';
        if (pathname.includes('/portfolio')) return 'portfolio';
        if (pathname.includes('/pricing')) return 'pricing';
        if (pathname.includes('/why-us')) return 'why-us';
        if (pathname.includes('/contact')) return 'contact';
        return 'services'; // Default for other pages (e.g., individual service pages)
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState(getInitialSection);

    useEffect(() => {
        const handleScrollHeader = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScrollHeader);
        handleScrollHeader();
        return () => window.removeEventListener('scroll', handleScrollHeader);
    }, []);

    // Section detection via scroll — works on all pages
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'services', 'portfolio', 'pricing', 'why-us', 'contact'];
            const scrollPosition = window.scrollY + 150;

            // On homepage at top → always 'home'
            if (isHomePage && window.scrollY < 100) {
                setActiveSection('home');
                return;
            }

            // Check if any section element is in view
            let found = false;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        found = true;
                        break;
                    }
                }
            }
            // If nothing found on scroll, don't reset to 'home' on service pages
            // (keeps the URL-based initial value)
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    // ─── HOMEPAGE ───────────────────────────────────────────────────────────
    if (isHomePage) {
        return (
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                style={{
                    background: scrolled ? 'rgba(10, 8, 35, 0.92)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
                }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <Image src={WHITE_LOGO} alt="OrganicAds" width={180} height={50} className="h-10 md:h-11 w-auto" />
                            </Link>
                        </div>

                        <nav className="hidden md:flex items-center flex-1 justify-center">
                            <div className="flex items-center space-x-1 xl:space-x-2 rounded-full px-2 py-1.5"
                                style={{ background: 'rgba(255,255,255,0.08)' }}>
                                {menuItems.map((item) => (
                                    <a key={item.label} href={item.href}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
                                            ? 'bg-white/20 text-white'
                                            : 'text-white/65 hover:text-white hover:bg-white/10'
                                            }`}>
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </nav>

                        <div className="hidden md:flex items-center gap-3">
                            <ThemeToggle onDark={true} />
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5 h-9 text-sm font-semibold border-0"
                                onClick={() => window.open('https://forms.fillout.com/t/bBpksmrcG1us', '_blank')}>
                                Get Quote
                            </Button>
                        </div>

                        <div className="md:hidden flex items-center gap-3">
                            <ThemeToggle onDark={true} />
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
                                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile dropdown — fixed, solid dark */}
                {isMenuOpen && (
                    <div className="md:hidden fixed top-16 left-0 right-0 z-50 px-6 py-5"
                        style={{ background: 'rgba(10, 8, 35, 0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        <nav className="flex flex-col space-y-1">
                            {menuItems.map((item) => (
                                <a key={item.label} href={item.href}
                                    className={`text-sm py-3 px-4 rounded-xl transition-colors font-medium ${activeSection === item.id
                                        ? 'text-white bg-white/15'
                                        : 'text-white/70 hover:text-white hover:bg-white/10'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}>
                                    {item.label}
                                </a>
                            ))}
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-full mt-4 border-0 h-12 text-base font-semibold"
                                onClick={() => { window.open('https://forms.fillout.com/t/bBpksmrcG1us', '_blank'); setIsMenuOpen(false); }}>
                                Get Quote
                            </Button>
                        </nav>
                    </div>
                )}
            </header>
        );
    }

    // ─── SERVICE / SEO PAGES — solid white header ──────────────────────────
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 shadow-sm border-b border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image src={DARK_LOGO} alt="OrganicAds" width={180} height={50} className="h-10 md:h-11 w-auto dark:hidden" />
                            <Image src={WHITE_LOGO} alt="OrganicAds" width={180} height={50} className="h-10 md:h-11 w-auto hidden dark:block" />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center flex-1 justify-center">
                        <div className="flex items-center space-x-1 xl:space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-1.5">
                            {menuItems.map((item) => (
                                <a key={item.label} href={item.href}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
                                        ? 'bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-sm'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-gray-700/50'
                                        }`}>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle onDark={false} />
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5 h-9 text-sm font-semibold border-0"
                            onClick={() => window.open('https://forms.fillout.com/t/bBpksmrcG1us', '_blank')}>
                            Get Quote
                        </Button>
                    </div>

                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle onDark={false} />
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-700 dark:text-white">
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown — solid white */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-16 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-lg px-6 py-5">
                    <nav className="flex flex-col space-y-1">
                        {menuItems.map((item) => (
                            <a key={item.label} href={item.href}
                                className={`text-sm py-3 px-4 rounded-xl transition-colors font-medium ${activeSection === item.id
                                    ? 'text-slate-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}>
                                {item.label}
                            </a>
                        ))}
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-full mt-4 border-0 h-12 text-base font-semibold"
                            onClick={() => { window.open('https://forms.fillout.com/t/bBpksmrcG1us', '_blank'); setIsMenuOpen(false); }}>
                            Get Quote
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
