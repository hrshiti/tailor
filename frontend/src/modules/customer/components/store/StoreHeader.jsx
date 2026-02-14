import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import useCartStore from '../../../../store/cartStore';
import useWishlistStore from '../../../../store/wishlistStore';
import LocationBar from '../LocationBar';

const StoreHeader = ({ searchQuery, setSearchQuery }) => {
    const totalItems = useCartStore(state => state.getTotalItems());
    const wishlistCount = useWishlistStore(state => state.items.length);

    return (
        <header className="sticky top-0 z-50 bg-[#1e3932] shadow-md transition-all duration-300">
            <div className="container mx-auto px-4 pb-3 pt-safe md:pt-3 flex items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link to="/" className="text-2xl font-bold text-white">
                        SilaiWala
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
                            className="w-full pl-10 pr-4 py-2 border-none rounded-full bg-white/10 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-white/20 transition-all text-sm"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
                    </div>
                </div>

                {/* Search Icon - Mobile Only */}
                <div className="block md:hidden flex-1 flex justify-end">
                    <button className="p-2 text-white hover:text-gray-200">
                        <Search className="h-6 w-6" />
                    </button>
                </div>


                {/* Right Actions */}
                <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                    <Link to="/wishlist" className="p-2 relative group text-white hover:text-gray-200 transition-colors">
                        <Heart className="h-6 w-6" />
                        {wishlistCount > 0 && (
                            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-[#1e3932]">{wishlistCount}</span>
                        )}
                        <span className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-1 rounded mt-1 whitespace-nowrap">Wishlist</span>
                    </Link>

                    <Link to="/cart" className="p-2 relative group text-white hover:text-gray-200 transition-colors">
                        <ShoppingBag className="h-6 w-6" />
                        {totalItems > 0 && (
                            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-[#1e3932]">{totalItems}</span>
                        )}
                        <span className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-1 rounded mt-1 whitespace-nowrap">Cart</span>
                    </Link>

                    <Link to="/profile" className="p-2 hidden md:block text-white hover:text-gray-200 transition-colors">
                        <User className="h-6 w-6" />
                    </Link>
                </div>
            </div>

            {/* Location Bar Integrated */}
            <div className="border-t border-white/10 bg-[#152e28]">
                <LocationBar />
            </div>
        </header>
    );
};

export default StoreHeader;
