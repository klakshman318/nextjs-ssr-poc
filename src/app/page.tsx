import { GET as getUsers } from '@/app/api/users/route';
import HomePage from '@/components/Home';
import { User } from '@/types/user';

type ApiResponse = {
  results: User[];
};

export default async function Page() {
  const res = await getUsers();
  const { results } = (await res.json()) as ApiResponse;
  const users = results;

  return (
    <div className="container mx-auto px-4 py-6">
      <HomePage />
    </div>
  );
}
