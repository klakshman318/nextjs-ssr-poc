'use client';

import HomePageSkeleton from '@/components/skeletons/home/HomePageSkeleton';

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-6">
            <HomePageSkeleton />
        </div>
    );
}
