'use client';

import ProductCardSkeletonGrid from '@/components/skeletons/product/ProductCardSkeletonGrid';
import BlogCardSkeletonGrid from '@/components/skeletons/blog/BlogCardSkeletonGrid';
import UserCardSkeletonGrid from '@/components/skeletons/user/UserCardSkeletonGrid';

type SkeletonLoaderProps = {
    pageType: string;
};

export default function SkeletonLoader({ pageType }: SkeletonLoaderProps) {
    let SkeletonComponent;

    switch (pageType) {
        case 'users':
            SkeletonComponent = () => <UserCardSkeletonGrid />;
            break;
        case 'products':
            SkeletonComponent = () => <ProductCardSkeletonGrid />;
            break;
        case 'blogs':
            SkeletonComponent = () => <BlogCardSkeletonGrid />;
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
