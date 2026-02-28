import React, { useEffect } from 'react';
import { Package, Search, ListFilter } from 'lucide-react';
import useOrderStore from '../../../store/orderStore';
import OrderCard from '../components/orders/OrderCard';
import BottomNav from '../components/BottomNav';

const OrdersPage = () => {
    const orders = useOrderStore((state) => state.orders);

    useEffect(() => {
        // Can fetch orders from backend here
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pb-24 font-sans">
            {/* 1. Header */}
            {/* 1. Header */}
            <div className="sticky top-0 z-50 bg-[#1e3932] shadow-md px-4 py-4 pt-safe">
                <h1 className="text-xl font-bold text-white mb-1">My Orders</h1>
                <p className="text-xs text-gray-300">Track and manage your requests</p>
            </div>

            {/* 2. Filters & Search (Mock) */}
            <div className="px-4 py-3 bg-white border-b border-gray-100 flex gap-3 overflow-x-auto no-scrollbar">
                <div className="bg-gray-100 rounded-full px-3 py-1.5 flex items-center gap-2 min-w-[200px]">
                    <Search size={14} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="bg-transparent text-xs w-full focus:outline-none"
                    />
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full text-xs font-medium whitespace-nowrap text-gray-600 active:bg-gray-50">
                    <ListFilter size={14} />
                    All Status
                </button>
            </div>

            {/* 3. Orders List */}
            <div className="p-4 space-y-3">
                {orders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
                        <Package size={48} className="text-gray-300 mb-4" />
                        <h3 className="text-sm font-bold text-gray-900">No Orders Yet</h3>
                        <p className="text-xs text-gray-500 max-w-[200px] mt-1">
                            Your order history will appear here once you place an order.
                        </p>
                    </div>
                ) : (
                    orders.map((order, index) => (
                        <OrderCard key={index} order={order} />
                    ))
                )}
            </div>

            {/* 4. Bottom Nav */}
            <BottomNav />
        </div>
    );
};

export default OrdersPage;
