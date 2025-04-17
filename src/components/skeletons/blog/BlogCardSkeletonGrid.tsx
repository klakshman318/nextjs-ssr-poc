'use client';

import BlogCardSkeleton from './BlogCardSkeleton';

export default function BlogCardSkeletonGrid() {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
                <li key={idx}>
                    <BlogCardSkeleton />
                </li>
            ))}
        </ul>
    );
}
