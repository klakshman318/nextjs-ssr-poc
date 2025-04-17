'use client';

import { useData } from '@/context/DataContext';
import dynamic from 'next/dynamic';

const UserList = dynamic(() => import('@/components/UserList'));
const ProductList = dynamic(() => import('@/components/ProductList'));
const BlogList = dynamic(() => import('@/components/BlogList'));

export default function LandingPage() {
    const { slug } = useData();
    const pageType = slug?.[0] ?? 'home';

    switch (pageType) {
        case 'users':
            return <UserList />;
        case 'products':
            return <ProductList />;
        case 'blogs':
            return <BlogList />;
        case 'home':
        default:
            return <div className="text-center text-2xl font-semibold py-10">Home Page Content</div>;
    }
}
