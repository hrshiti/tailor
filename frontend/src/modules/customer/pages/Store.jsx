import React, { useState } from 'react';
import StoreHeader from '../components/store/StoreHeader';
import LocationBar from '../components/LocationBar'; // Reusing existing location bar
import CategoryScroll from '../components/store/CategoryScroll';
import SearchFilterBar from '../components/store/SearchFilterBar';
import ProductGrid from '../components/store/ProductGrid';
import FilterDrawer from '../components/store/FilterDrawer';
import RecentlyViewed from '../components/store/RecentlyViewed';
import TrustSection from '../components/store/TrustSection';
import BottomNav from '../components/BottomNav';

const StorePage = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({});
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div className="min-h-screen bg-gray-50 pb-24 font-sans">
            {/* 1. Sticky Header */}
            <StoreHeader />

            {/* 2. Location (Standard Bar reused) */}
            <LocationBar />

            {/* 3. Categories */}
            <CategoryScroll
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
            />

            {/* 4. Search & Filter Bar (Sticky below header approx) */}
            {/* Adjust top value based on header height. 
                Header is sticky top-0. Location bar scrolls. 
                If we want Filter bar sticky, we need to account for header height.
                Let's make it sticky but with top-16 approx.
            */}
            <div className="sticky top-[60px] z-30 bg-white shadow-sm">
                <SearchFilterBar onOpenFilter={() => setIsFilterOpen(true)} />
            </div>

            {/* 5. Product Grid (Infinite Scroll) */}
            <ProductGrid filters={filters} category={activeCategory} />

            {/* 6. Recently Viewed */}
            <RecentlyViewed />

            {/* 7. Trust Section */}
            <TrustSection />

            {/* Filter Drawer */}
            <FilterDrawer
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                filters={filters}
                setFilters={setFilters}
            />

            {/* Bottom Nav */}
            <BottomNav />
        </div>
    );
};

export default StorePage;
