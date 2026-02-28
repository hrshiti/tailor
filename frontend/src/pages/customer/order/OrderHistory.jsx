import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Package, Scissors, ChevronRight } from 'lucide-react';

export const OrderHistory = () => {
    const navigate = useNavigate();

    const orders = [
        {
            id: 'ORD-4822',
            service: 'Kurti Custom Stitching',
            date: 'Oct 24, 2026',
            status: 'Pickup Assigned',
            amount: '₹1,048',
            active: true,
            icon: Scissors
        },
        {
            id: 'ORD-3011',
            service: 'Readymade Salwar Suit',
            date: 'Sep 10, 2026',
            status: 'Delivered',
            amount: '₹2,499',
            active: false,
            icon: ShoppingBag
        },
        {
            id: 'ORD-2105',
            service: 'Blouse Stitching',
            date: 'Aug 05, 2026',
            status: 'Delivered',
            amount: '₹1,250',
            active: false,
            icon: Scissors
        }
    ];

    return (
        <div className="flex flex-col h-full bg-gray-50 pb-20">
            <div className="px-5 pt-6 pb-2">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">My Orders</h1>
                <p className="text-sm text-gray-500">Track and manage your tailoring & store purchases.</p>
            </div>

            <div className="p-4 space-y-4">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        onClick={() => order.active ? navigate(`/orders/tracking/${order.id}`) : null}
                        className={`bg-white rounded-2xl p-4 shadow-sm border btn-press ${order.active ? 'border-blue-200 ring-2 ring-blue-50/50 cursor-pointer hover:bg-blue-50/20 transition-all' : 'border-gray-100 hover:border-gray-200 cursor-pointer'}`}
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex gap-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${order.active ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                                    <order.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm whitespace-nowrap">{order.service}</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">{order.id} • {order.date}</p>
                                </div>
                            </div>
                            <p className="font-bold text-[#4C1D95] text-sm">{order.amount}</p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${order.active ? 'bg-blue-500 animate-pulse' : 'bg-green-500'}`} />
                                <span className={`text-xs font-bold uppercase tracking-wider ${order.active ? 'text-blue-600' : 'text-green-600'}`}>
                                    {order.status}
                                </span>
                            </div>

                            {order.active ? (
                                <button className="text-xs font-bold text-blue-600 flex items-center btn-press hover:bg-blue-50 px-2 py-1 rounded-md">
                                    Track <ChevronRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <button className="text-xs font-bold text-gray-500 border border-gray-200 px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors btn-press">
                                    Reorder
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

