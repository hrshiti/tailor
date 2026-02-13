import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const CATEGORIES = [
    { id: 1, name: 'Kurtis', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=200&auto=format&fit=crop' },
    { id: 2, name: 'Suits', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=200&auto=format&fit=crop' },
    { id: 3, name: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200&auto=format&fit=crop' },
    { id: 4, name: 'Ethnic Wear', image: 'https://images.unsplash.com/photo-1610419266710-d8e7c2e3640c?q=80&w=200&auto=format&fit=crop' },
    { id: 5, name: 'Casual', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=200&auto=format&fit=crop' },
    { id: 6, name: 'Festive', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=200&auto=format&fit=crop' }, // Jewelry/Festive
    { id: 7, name: 'Sale', image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=200&auto=format&fit=crop', isSale: true },
];

const CategoryScroll = ({ activeCategory, onSelectCategory }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 200;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white py-4 relative group">
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-4 px-4 pb-2 scrollbar-hide snap-x"
            >
                {CATEGORIES.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => onSelectCategory(category.name)}
                        className={`flex flex-col items-center gap-2 min-w-[80px] snap-center transition-all duration-300 ${activeCategory === category.name ? 'scale-105' : 'opacity-80 hover:opacity-100'
                            }`}
                    >
                        <div className={`w-16 h-16 rounded-full overflow-hidden border-2 ${activeCategory === category.name ? 'border-[#1e3932] shadow-lg' : 'border-gray-100'
                            } ${category.isSale ? 'border-red-500' : ''}`}>
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className={`text-xs font-medium text-center whitespace-nowrap ${activeCategory === category.name ? 'text-[#1e3932] font-bold' : 'text-gray-600'
                            }`}>
                            {category.name}
                        </span>
                    </button>
                ))}
            </div>

            {/* Scroll Buttons (Desktop Only) */}
            <button
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-r-lg shadow-md hover:bg-white z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => scroll('left')}
            >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-l-lg shadow-md hover:bg-white z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => scroll('right')}
            >
                <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
        </div>
    );
};

export default CategoryScroll;
