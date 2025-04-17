'use client';

import Image from 'next/image';
import Link from 'next/link';
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
        <div className="space-y-8">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500">
                <Link href="/" className="hover:underline text-indigo-600">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-800 font-semibold">Users</span>
            </div>

            {/* User Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((u) => (
                    <li
                        key={u.login.uuid}
                        className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition-all flex flex-col items-center text-center"
                    >
                        <Image
                            src={u.picture.large}
                            alt={`${u.name.first} ${u.name.last}`}
                            width={80}
                            height={80}
                            className="rounded-full border-2 border-gray-500"
                        />
                        <h2 className="mt-4 text-lg font-semibold text-gray-800">
                            {u.name.first} {u.name.last}
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">{u.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
