import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoreHeader = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link to="/" className="text-2xl font-bold text-[#1e3932]">
                        Genzo
                    </Link>
                </div>

                {/* Search Bar - Center */}
                <div className="flex-1 max-w-lg hidden md:block">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search kurti, dress, size M..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1e3932]/20 focus:bg-white transition-all text-sm"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                </div>

                {/* Search Icon - Mobile Only */}
                <div className="block md:hidden flex-1 flex justify-end">
                    <button className="p-2 text-gray-600 hover:text-[#1e3932]">
                        <Search className="h-6 w-6" />
                    </button>
                </div>


                {/* Right Actions */}
                <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                    <button className="p-2 relative group text-gray-600 hover:text-[#1e3932] transition-colors">
                        <Heart className="h-6 w-6" />
                        <span className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-1 rounded mt-1 whitespace-nowrap">Wishlist</span>
                    </button>

                    <button className="p-2 relative group text-gray-600 hover:text-[#1e3932] transition-colors">
                        <ShoppingBag className="h-6 w-6" />
                        <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">3</span>
                        <span className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-1 rounded mt-1 whitespace-nowrap">Cart</span>
                    </button>

                    <Link to="/profile" className="p-2 hidden md:block text-gray-600 hover:text-[#1e3932] transition-colors">
                        <User className="h-6 w-6" />
                    </Link>
                </div>
            </div>

            {/* Search Bar - Mobile (Visible below header or as overlay based on design, simplified here for "below" or just keeping the icon for simplicity as per requirement "Center: Search Bar") 
                 Wait, requirement says "Stick Header... Center: Search Bar". On mobile, center search bar might differ.
                 Let's adjust to be responsive properly.
             */}

        </header>
    );
};

export default StoreHeader;
