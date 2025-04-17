'use client';

import { useData } from '@/context/DataContext';

export default function UserList() {
    const { users } = useData();

    if (!users || users.length === 0) {
        return (
            <div className="text-center text-gray-400 py-10">
                No users found.
            </div>
        );
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((u) => (
                <li
                    key={u.login.uuid}
                    className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
                >
                    <img
                        src={u.picture.large}
                        alt={`${u.name.first} ${u.name.last}`}
                        className="w-16 h-16 rounded-full mx-auto"
                    />
                    <h2 className="mt-4 text-center text-lg font-semibold">
                        {u.name.first} {u.name.last}
                    </h2>
                    <p className="text-center text-sm text-gray-500">{u.email}</p>
                </li>
            ))}
        </ul>
    );
}
