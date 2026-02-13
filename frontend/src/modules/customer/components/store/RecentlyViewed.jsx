import React from 'react';
import ProductCard from './ProductCard';

const RECENTLY = [
    { id: 101, name: 'Printed Cotton Kurti', price: 899, originalPrice: 1599, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=200&auto=format&fit=crop', category: 'Kurtis', rating: 4.1, discount: 45, codAvailable: true },
    { id: 102, name: 'Ethnic Jhumkas', price: 299, originalPrice: 499, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=200&auto=format&fit=crop', category: 'Jewelry', rating: 4.8, discount: 40, codAvailable: true },
    { id: 103, name: 'Silk Dupatta', price: 599, originalPrice: 999, image: 'https://images.unsplash.com/photo-1623916298288-51f618a804bd?q=80&w=200&auto=format&fit=crop', category: 'Accessories', rating: 4.3, discount: 40, codAvailable: true },
    { id: 104, name: 'Party Wear Gown', price: 3499, originalPrice: 5999, image: 'https://images.unsplash.com/photo-1605763240004-741a7f721555?q=80&w=200&auto=format&fit=crop', category: 'Dresses', rating: 4.6, discount: 42, codAvailable: false },
];

const RecentlyViewed = ({ title = "Recently Viewed", products = RECENTLY }) => {
    return (
        <div className="py-8 bg-gray-50">
            <h3 className="text-lg font-bold text-[#1e3932] px-4 mb-4">{title}</h3>
            <div className="flex overflow-x-auto gap-4 px-4 pb-4 scrollbar-hide snap-x">
                {products.map((product) => (
                    <div key={product.id} className="min-w-[160px] md:min-w-[200px] snap-center">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentlyViewed;
