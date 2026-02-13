import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const MOCK_PRODUCTS_INITIAL = [
    { id: 1, name: 'Embroidered Anarkali Kurti', price: 1499, originalPrice: 2999, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=400&auto=format&fit=crop', category: 'Kurtis', rating: 4.5, reviews: 120, discount: 50, codAvailable: true },
    { id: 2, name: 'Cotton Printed Suit Set', price: 2199, originalPrice: 3500, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&auto=format&fit=crop', category: 'Suits', rating: 4.2, reviews: 85, discount: 37, codAvailable: true },
    { id: 3, name: 'Floral Maxi Dress', price: 1899, originalPrice: 2499, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&auto=format&fit=crop', category: 'Dresses', rating: 4.8, reviews: 200, discount: 24, codAvailable: true },
    { id: 4, name: 'Designer Silk Saree', price: 4599, originalPrice: 6999, image: 'https://images.unsplash.com/photo-1610419266710-d8e7c2e3640c?q=80&w=400&auto=format&fit=crop', category: 'Sarees', rating: 4.7, reviews: 150, discount: 34, codAvailable: false },
];

const MOCK_PRODUCTS_MORE = [
    { id: 5, name: 'Casual Chic Top', price: 799, originalPrice: 1299, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=400&auto=format&fit=crop', category: 'Casual', rating: 4.0, reviews: 50, discount: 38, codAvailable: true },
    { id: 6, name: 'Festive Lehenga Choli', price: 8999, originalPrice: 12999, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400&auto=format&fit=crop', category: 'Festive', rating: 4.9, reviews: 300, discount: 30, codAvailable: true },
    { id: 7, name: 'Handloom Cotton Kurta', price: 999, originalPrice: 1599, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=400&auto=format&fit=crop', category: 'Kurtis', rating: 4.3, reviews: 90, discount: 37, codAvailable: true },
    { id: 8, name: 'Heels & Footwear', price: 2999, originalPrice: 4999, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop', category: 'Footwear', rating: 4.6, reviews: 210, discount: 40, codAvailable: true },
];

const ProductGrid = ({ filters, category }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        // Simulate API call with filter
        setTimeout(() => {
            let all = [...MOCK_PRODUCTS_INITIAL, ...MOCK_PRODUCTS_MORE];
            if (category && category !== 'All') {
                all = all.filter(p => p.category === category);
            }
            // Simple filter logic for demo - can implement more complex filter matches here
            setItems(all);
            setIsLoading(false);
        }, 800);
    }, [category, filters]);

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
