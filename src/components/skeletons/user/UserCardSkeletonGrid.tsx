'use client';

import UserCardSkeleton from './UserCardSkeleton';

export default function UserCardSkeletonGrid() {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 10 }).map((_, index) => (
                <li key={index}>
                    <UserCardSkeleton />
                </li>
            ))}
        </ul>
    );
}
