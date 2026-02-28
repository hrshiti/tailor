import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

import { PRODUCTS } from '../../data/products';

const ProductGrid = ({ filters, category, searchQuery }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        // Simulate API call with filter
        // Cancel previous timeout if necessary but for now just clear
        const timeout = setTimeout(() => {
            let all = [...PRODUCTS];

            // Category Filter
            if (category && category !== 'All') {
                all = all.filter(p => p.category === category);
            } else {
                // Ensure fabrics aren't shown "directly" in the global store unless explicitly searched or in category
                all = all.filter(p => p.category !== 'Fabrics' && p.category !== 'Unstitched');
            }

            // Search Filter
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                all = all.filter(p =>
                    p.name.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q)
                );
            }

            setItems(all);
            setIsLoading(false);
        }, 500); // 500ms debounce

        return () => clearTimeout(timeout);
    }, [category, filters, searchQuery]);

    return (
        <div className="bg-gray-50 pb-8 min-h-[50vh]">
            <h2 className="text-xl font-bold text-[#1e3932] px-4 py-4">
                {category && category !== 'All' ? `${category} Collection` : 'Explore Collection'}
            </h2>

            {items.length === 0 && !isLoading ? (
                <div className="flex flex-col items-center justify-center p-12 text-gray-500">
                    <p>No products found in this category.</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-3 md:px-4">
                    {items.map((product, index) => (
                        <ProductCard key={`${product.id}-${index}`} product={product} />
                    ))}
                </div>
            )}

            {isLoading && (
                <div className="flex justify-center p-6">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1e3932]"></div>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
