'use client';

import products from '@/data/products.json';

export default function ProductList() {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <li key={product.id} className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                    <img src={product.image} alt={product.name} className="w-24 h-24 mx-auto" />
                    <h2 className="mt-4 text-center text-lg font-medium">{product.name}</h2>
                    <p className="text-center text-gray-500">{product.price}</p>
                </li>
            ))}
        </ul>
    );
}
