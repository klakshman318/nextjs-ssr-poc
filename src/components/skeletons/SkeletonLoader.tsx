'use client';

import dynamic from 'next/dynamic';

type SkeletonLoaderProps = {
    pageType: string;
};

export default function SkeletonLoader({ pageType }: SkeletonLoaderProps) {
    let SkeletonComponent;

    switch (pageType) {
        case 'users':
            SkeletonComponent = dynamic(() => import('@/components/skeletons/user/UserCardSkeletonGrid'));
            break;
        case 'products':
            SkeletonComponent = dynamic(() => import('@/components/skeletons/product/ProductCardSkeletonGrid'));
            break;
        case 'blogs':
            SkeletonComponent = dynamic(() => import('@/components/skeletons/blog/BlogCardSkeletonGrid'));
            break;
        default:
            SkeletonComponent = () => <DefaultSpinner />;
            break;
    }

    return <SkeletonComponent />;
}

function DefaultSpinner() {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin" />
        </div>
    );
}
