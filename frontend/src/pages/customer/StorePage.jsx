import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, MapPin, ChevronDown, SlidersHorizontal, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const StorePage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Store');
    const [searchQuery, setSearchQuery] = useState('');
    const [wishlist, setWishlist] = useState([1, 3]); // IDs of items in wishlist

    const categories = [
        { name: 'Kurtis', img: 'https://images.unsplash.com/photo-1583391733958-6118255b2b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
        { name: 'Suits', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
        { name: 'Dresses', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
        { name: 'Ethnic Wear', img: 'https://images.unsplash.com/photo-1585487000160-6e3e5c9429c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    ];

    const products = [
        {
            id: 1,
            title: 'Embroidered Anarkali Kurti',
            category: 'KURTIS',
            price: 1499,
            originalPrice: 2999,
            discount: '50%',
            rating: 4.5,
            cod: true,
            img: 'https://images.unsplash.com/photo-1583391733958-6118255b2b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        },
        {
            id: 2,
            title: 'Cotton Printed Suit Set',
            category: 'SUITS',
            price: 2199,
            originalPrice: 3500,
            discount: '37%',
            rating: 4.2,
            cod: true,
            img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        },
        {
            id: 3,
            title: 'Designer Silk Saree',
            category: 'ETHNIC',
            price: 3499,
            originalPrice: 5999,
            discount: '42%',
            rating: 4.8,
            cod: false,
            img: 'https://images.unsplash.com/photo-1585487000160-6e3e5c9429c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        },
        {
            id: 4,
            title: 'Floral Summer Dress',
            category: 'DRESSES',
            price: 999,
            originalPrice: 1999,
            discount: '50%',
            rating: 4.4,
            cod: true,
            img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        },
        {
            id: 5,
            title: 'Velvet Party Suit',
            category: 'SUITS',
            price: 4999,
            originalPrice: 7999,
            discount: '38%',
            rating: 4.9,
            cod: true,
            img: 'https://images.unsplash.com/photo-1560060141-2b04f7626fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        },
        {
            id: 6,
            title: 'Casual Daily Wear Kurti',
            category: 'KURTIS',
            price: 699,
            originalPrice: 1299,
            discount: '46%',
            rating: 4.1,
            cod: true,
            img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        }
    ];

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleWishlist = (e, id) => {
        e.stopPropagation();
        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter(item => item !== id));
        } else {
            setWishlist([...wishlist, id]);
        }
    };

    return (
        <div className="bg-white min-h-full pb-20">
            {/* Store Header */}
            <div className="bg-[#4C1D95] pt-12 text-white w-full sticky top-0 z-40">
                <div className="px-5 pb-4 flex justify-between items-center">
                    <h1 onClick={() => navigate('/')} className="text-2xl font-bold tracking-tight cursor-pointer">SilaiWala</h1>
                    <div className="flex gap-4">
                        <button className="hover:text-purple-200 transition-colors btn-press p-1"><Search className="w-6 h-6" /></button>
                        <button className="hover:text-purple-200 transition-colors btn-press p-1 relative">
                            <Heart className={`w-6 h-6 ${wishlist.length > 0 ? 'fill-red-500 text-red-500' : ''}`} />
                            {wishlist.length > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-[8px] flex items-center justify-center w-3.5 h-3.5 rounded-full border border-[#4C1D95]">{wishlist.length}</span>}
                        </button>
                        <button className="hover:text-purple-200 transition-colors relative btn-press p-1">
                            <ShoppingBag className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full border border-[#4C1D95]"></span>
                        </button>
                    </div>
                </div>

                {/* Location Strip */}
                <div className="flex justify-between items-center bg-[#4C1D95]/90 py-3 border-t border-white/10 px-5 btn-press cursor-pointer">
                    <div className="flex items-center gap-2 text-sm text-gray-200">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">Srinagar, indore</span>
                    </div>
                    <button className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-white">
                        CHANGE <ChevronDown className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Categories Horizontal Scroll */}
            <div className="px-5 mt-6 border-b border-gray-100 pb-6">
                <div className="flex justify-between overflow-x-auto hide-scrollbar gap-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 min-w-[70px] cursor-pointer group btn-press">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#4C1D95] transition-colors shadow-sm p-0.5">
                                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-full" />
                            </div>
                            <span className="text-xs font-medium text-gray-700">{cat.name}</span>
                        </div>
                    ))}
                </div>

                {/* Search & Filter Bar */}
                <div className="flex gap-3 mt-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search within store..."
                            className="w-full bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 rounded-2xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#4C1D95] focus:ring-1 focus:ring-[#4C1D95] transition-all text-sm"
                        />
                    </div>
                    <button className="bg-gray-50 border border-gray-200 p-3 rounded-2xl text-gray-600 hover:bg-gray-100 transition-colors btn-press">
                        <SlidersHorizontal className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Explore Collection */}
            <div className="px-5 mt-8">
                <h2 className="text-xl font-bold text-[#4C1D95] mb-6">
                    {searchQuery ? `Search results for "${searchQuery}"` : 'Explore Collection'}
                </h2>

                <div className="grid grid-cols-2 gap-4">
                    {filteredProducts.length > 0 ? filteredProducts.map(product => (
                        <div key={product.id} className="cursor-pointer group btn-press relative">
                            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-3 bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-2 left-2 bg-yellow-400 text-gray-900 font-bold text-[10px] px-2 py-1 rounded-md shadow-sm">
                                    -{product.discount}
                                </div>
                                <button
                                    onClick={(e) => toggleWishlist(e, product.id)}
                                    className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full shadow-sm hover:bg-white transition-colors"
                                >
                                    <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                                </button>
                            </div>

                            <div className="flex justify-between items-start mb-1">
                                <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">{product.category}</p>
                                <div className="flex items-center gap-1 text-[10px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">
                                    {product.rating} <Star className="w-2.5 h-2.5 fill-purple-700" />
                                </div>
                            </div>

                            <h3 className="font-bold text-gray-900 leading-tight mb-2 line-clamp-2 text-sm">{product.title}</h3>

                            <div className="flex items-center gap-2 mb-2">
                                <span className="font-bold text-gray-900">₹{product.price}</span>
                                <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                            </div>

                            {product.cod && (
                                <span className="text-[9px] font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-md border border-gray-200">
                                    COD Available
                                </span>
                            )}
                        </div>
                    )) : (
                        <div className="col-span-2 py-20 text-center text-gray-500">
                            No products found matching "{searchQuery}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

