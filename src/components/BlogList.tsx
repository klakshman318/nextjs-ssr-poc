'use client';

import blogs from '@/data/blogs.json';

export default function BlogList() {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
                <li key={blog.id} className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h2>
                    <p className="text-sm text-gray-500">By {blog.author}</p>
                </li>
            ))}
        </ul>
    );
}
