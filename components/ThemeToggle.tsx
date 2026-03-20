'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
    onDark?: boolean; // true = header is dark (white icon), false = header is light (dark icon)
}

export default function ThemeToggle({ onDark = false }: ThemeToggleProps) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => { setMounted(true); }, []);

    if (!mounted) {
        return <div className="w-9 h-9 rounded-full" style={{ background: onDark ? 'rgba(255,255,255,0.1)' : 'rgb(241,245,249)' }} />;
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors border-0 flex-shrink-0"
            style={onDark
                ? { background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)' }
                : { background: 'rgb(241,245,249)', border: '1px solid rgb(226,232,240)' }
            }
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className={`h-4 w-4 ${onDark ? 'text-white' : 'text-slate-700'}`} />
            ) : (
                <Moon className={`h-4 w-4 ${onDark ? 'text-white' : 'text-slate-700'}`} />
            )}
        </button>
    );
}
