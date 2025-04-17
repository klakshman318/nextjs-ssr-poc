'use client';

export default function BlogCardSkeleton() {
    return (
        <div className="p-4 bg-white rounded-xl shadow animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />
            <div className="h-3 bg-gray-200 rounded w-1/2 mt-2 mx-auto" />
        </div>
    );
}
