'use client';

import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
                Next.js SSR POC
            </footer>
        </div>
    );
}
