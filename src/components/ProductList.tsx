'use client';

import Image from 'next/image';
import products from '@/data/products.json';

export default function ProductList() {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <li
                    key={product.id}
                    className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition-all flex flex-col items-center text-center"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={96}
                        height={96}
                        className="rounded-lg"
                    />
                    <h2 className="mt-4 text-xl font-semibold text-gray-800">{product.name}</h2>
                    <p className="mt-1 text-md font-semibold text-gray-600">{product.price}</p>
                </li>
            ))}
        </ul>
    );
}
