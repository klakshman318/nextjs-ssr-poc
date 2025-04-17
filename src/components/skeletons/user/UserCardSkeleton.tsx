'use client';

export default function UserCardSkeleton() {
    return (
        <div className="p-4 bg-white rounded-xl shadow animate-pulse">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto" />
            <div className="h-4 bg-gray-300 rounded w-3/4 mt-4 mx-auto" />
            <div className="h-3 bg-gray-200 rounded w-5/6 mt-2 mx-auto" />
        </div>
    );
}
