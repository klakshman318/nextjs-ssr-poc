'use client';

export default function HomePageSkeleton() {
    return (
        <div className="text-center mt-20 space-y-6 animate-pulse">
            <div className="h-12 w-2/3 mx-auto bg-gray-300 rounded"></div>
            <div className="h-4 w-1/2 mx-auto bg-gray-300 rounded"></div>
        </div>
    );
}
