'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
    items: {
        label: string;
        href?: string;
    }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground py-4 max-w-full">
            <Link
                href="/"
                className="flex items-center hover:text-primary transition-colors shrink-0"
            >
                <Home className="w-4 h-4" />
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 min-w-0">
                    <ChevronRight className="w-4 h-4 shrink-0" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-primary transition-colors truncate"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-primary font-medium truncate">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    );
}
