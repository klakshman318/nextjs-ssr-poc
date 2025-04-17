export const dynamic = 'force-dynamic';
import { Suspense } from 'react';
import AsyncDataLoader from './asyncDataLoader';
import SkeletonLoader from '@/components/skeletons/SkeletonLoader';

export default async function Page({
    params,
}: {
    params: Promise<{ slug?: string[] }>;
}) {
    const { slug } = await params;
    const pageType = slug?.[0] ?? 'home';
    const slugPath = slug?.join('/') ?? 'home';

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">
                You're at: <span className="text-indigo-600">/{slugPath}</span>
            </h1>

            <Suspense key={slugPath} fallback={<SkeletonLoader pageType={pageType} />}>
                <AsyncDataLoader slug={slug} />
            </Suspense>
        </div>
    );
}
