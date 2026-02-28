import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import img1 from '../../../../assets/img1.jpeg';
import img3 from '../../../../assets/img3.jpeg';
import img5 from '../../../../assets/img5.jpeg';
import img8 from '../../../../assets/img8.avif';
import img11 from '../../../../assets/img11.jpeg';
import img12 from '../../../../assets/img12.jpeg';
import img14 from '../../../../assets/img14.jpeg';

const CATEGORIES = [
    { id: 1, name: 'Kurtis', image: img1 },
    { id: 2, name: 'Suits', image: img3 },
    { id: 3, name: 'Dresses', image: img5 },
    { id: 4, name: 'Ethnic Wear', image: img8 },
    { id: 5, name: 'Casual', image: img11 },
    { id: 6, name: 'Festive', image: img12 },
    { id: 7, name: 'Sale', image: img14, isSale: true },
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
