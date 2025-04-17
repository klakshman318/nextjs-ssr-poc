import { DataProvider } from '@/context/DataContext';
import { GET as getUsers } from '@/app/api/users/route';
import { User } from '@/types/user';
import LandingPage from '@/components/LandingPage';

type ApiResponse = {
    results: User[];
};

export default async function AsyncContentLoader({ slug }: { slug?: string[] }) {
    const pageType = slug?.[0] ?? 'home';

    // let users: User[] | undefined = undefined;

    // const res = await getUsers();
    // const { results } = (await res.json()) as ApiResponse;
    // users = results;

    const nextResponse = await getUsers();
    const { results }: ApiResponse = await nextResponse.json();
    
    return (
        <DataProvider value={{ slug, users: results, isLoading: false }}>
            <LandingPage />
        </DataProvider>
    );
}
