'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useMemo } from 'react';
import { navItems } from '@/constants';
import LogoIcon from '@/components/LogoIcon';
import { cn } from '@/utils'; // or write your own simple cn() utility

const Header = memo(function Header() {
    const pathname = usePathname();

    const activeNav = useMemo(() => {
        return navItems.map(({ href, label }) => ({
            href,
            label,
            isActive:
                pathname === href ||
                (href !== '/' && pathname.startsWith(href)), // for subpages
        }));
    }, [pathname]);

    return (
        <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                    <LogoIcon />
                    <span className="text-2xl font-bold tracking-wide">Next.js SSR POC</span>
                </div>
                <nav className="flex gap-6">
                    {activeNav.map(({ href, label, isActive }) => (
                        <Link
                            key={href}
                            href={href}
                            prefetch={false} 
                            className={cn(
                                'transition-all font-medium text-white hover:text-gray-200 relative group',
                                isActive && 'after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-white'
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
});

export default Header;
