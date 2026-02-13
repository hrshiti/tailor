import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const SearchFilterBar = ({ onOpenFilter }) => {
    return (
        <div className="sticky top-[60px] md:top-[72px] z-40 bg-white border-b border-gray-100 py-3 px-4 flex items-center gap-3">
            {/* Search Input (Mobile/Tablet primarily, or as secondary filter) */}
            <div className="flex-1 relative">
                <input
                    type="text"
                    placeholder="Search within store..."
                    className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:border-[#1e3932] text-sm transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            {/* Filter Button */}
            <button
                onClick={onOpenFilter}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:border-[#1e3932] hover:text-[#1e3932] hover:bg-gray-50 transition-all active:scale-95"
            >
                <SlidersHorizontal className="h-4 w-4" />
                <span className="hidden sm:inline">Filters</span>
            </button>
        </div>
    );
};

export default SearchFilterBar;
