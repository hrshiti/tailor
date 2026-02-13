import React from 'react';
// Components
import HomeHeader from '../components/HomeHeader';
import LocationBar from '../components/LocationBar';
import QuickActions from '../components/QuickActions';
import PopularTailors from '../components/PopularTailors';
import ServiceGrid from '../components/ServiceGrid';
import BottomNav from '../components/BottomNav';
import PromoBanner from '../components/PromoBanner';
import ActiveOrderBanner from '../components/ActiveOrderBanner';

import WhyChooseUs from '../components/WhyChooseUs';

// Mock Data (replace with API later)
const mockUser = { name: 'Blair' };
const mockActiveOrder = {
    id: '4821',
    service: 'Kurti Stitching',
    status: 'In Progress',
    progress: 60,
    deliveryDate: 'Feb 15'
};

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-24 font-sans">

            {/* 1. Header & Location */}
            <HomeHeader user={mockUser} />
            <LocationBar />

            {/* 2. Hero / Promo Section */}
            <PromoBanner />

            {/* 3. Quick Actions */}
            <QuickActions />

            {/* 3.5 Popular Tailors */}
            <PopularTailors />

            {/* 4. Active Order (Conditional) */}
            <ActiveOrderBanner order={mockActiveOrder} />

            {/* 5. Stitching Services */}
            <ServiceGrid />

            {/* 6. Why Choose Us (Simple Trust Indicators) */}
            <WhyChooseUs />

            {/* 7. Bottom Navigation */}
            <BottomNav />

        </div>
    );
};

export default Home;
