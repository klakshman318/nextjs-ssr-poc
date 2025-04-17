'use client';

import SkeletonLoader from '@/components/skeletons/SkeletonLoader';
import { usePathname } from 'next/navigation';

export default function Loading() {
    const pathname = usePathname();
    const pageType = pathname.split('/')[1] || 'home';

    return (
        <div className="container mx-auto px-4 py-6">
            <SkeletonLoader pageType={pageType} />
        </div>
    );
}