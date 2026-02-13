import React from 'react';
import BottomNav from '../components/BottomNav';

const Orders = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
                <h1 className="text-xl font-bold text-[#1e3932]">My Orders</h1>
            </header>
            <div className="p-4">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <p className="text-gray-500">You have no active orders yet.</p>
                </div>
            </div>
            <BottomNav />
        </div>
    );
};

export default Orders;
