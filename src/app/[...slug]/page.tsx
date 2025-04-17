import AsyncDataLoader from './asyncDataLoader';

export default async function Page({
    params,
}: {
    params: Promise<{ slug?: string[] }>;
}) {
    const { slug } = await params;
    const slugPath = slug?.join('/') ?? 'home';

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">
                You're at: <span className="text-indigo-600">/{slugPath}</span>
            </h1>
            <AsyncDataLoader slug={slug} />
        </div>
    );
}
