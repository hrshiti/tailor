import React, { useState } from 'react';
import {
    Search,
    Filter,
    MoreVertical,
    Check,
    X,
    Eye,
    MessageSquare,
    Phone,
    MapPin,
    Calendar,
    ChevronRight,
    ArrowUpRight,
    Scissors,
    Zap,
    Wind,
    Sun,
    Truck
} from 'lucide-react';

const OrderRow = ({ order, onAccept, onReject, onViewDetails }) => {
    const statusColors = {
        'PENDING': { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-100', icon: Clock },
        'IN_CUTTING': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100', icon: Scissors },
        'STITCHING': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100', icon: Zap },
        'HEMMING': { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-100', icon: Wind },
        'IRONING': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-100', icon: Sun },
        'READY_FOR_DISPATCH': { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-100', icon: Truck },
    };

    return (
        <tr className="group hover:bg-gray-50/50 transition-all border-b border-gray-50 last:border-0 font-medium">
            <td className="py-6 px-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center font-black text-[#4C1D95] text-xs shadow-sm ring-1 ring-black/5 group-hover:rotate-3 transition-transform">
                        {order.id}
                    </div>
                    <div>
                        <p className="text-sm font-black text-gray-900 tracking-tight">{order.type}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Assigned: {order.date}</p>
                    </div>
                </div>
            </td>
            <td className="py-6 px-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-gray-100 to-gray-200 flex items-center justify-center text-[10px] font-black text-gray-600">
                        {order.customer.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-800 tracking-tight">{order.customer}</p>
                        <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold mt-0.5 uppercase tracking-widest">
                            <MapPin className="w-2.5 h-2.5" /> 2.4 KM
                        </div>
                    </div>
                </div>
            </td>
            <td className="py-6 px-4 text-center">
                <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${order.status === 'PENDING' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' : 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                    {order.status.replace(/_/g, ' ')}
                </span>
            </td>
            <td className="py-6 px-4 text-right">
                <p className="text-sm font-black text-gray-900 tracking-tight">{order.price}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Prepaid</p>
            </td>
            <td className="py-6 px-4">
                <div className="flex items-center justify-end gap-2">
                    {order.status === 'PENDING' ? (
                        <>
                            <button onClick={() => onAccept(order.id)} className="p-2.5 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm border border-green-100 active:scale-95">
                                <Check className="w-4 h-4" />
                            </button>
                            <button onClick={() => onReject(order.id)} className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm border border-red-100 active:scale-95">
                                <X className="w-4 h-4" />
                            </button>
                        </>
                    ) : (
                        <button className="px-4 py-2 bg-[#4C1D95] text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#4C1D95]/20 hover:scale-105 active:scale-95 transition-all">
                            Update Status
                        </button>
                    )}
                    <button onClick={() => onViewDetails(order)} className="p-2.5 bg-gray-50 text-gray-400 rounded-xl hover:bg-gray-100 hover:text-gray-900 transition-all border border-gray-100">
                        <MoreVertical className="w-4 h-4" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export const OrderRequests = () => {
    const [orders, setOrders] = useState([
        { id: '#8421', type: 'Sherwani Stitching', customer: 'Rahul Sharma', date: 'Oct 24, 2023', status: 'IN_CUTTING', price: '₹4,500' },
        { id: '#8420', type: 'Wedding Suit (Full)', customer: 'Vijay Kumar', date: 'Oct 25, 2023', status: 'PENDING', price: '₹12,400' },
        { id: '#8419', type: 'Formal Pants (2x)', customer: 'Amit Singh', date: 'Oct 25, 2023', status: 'STITCHING', price: '₹2,800' },
        { id: '#8418', type: 'Anarkali Kurti', customer: 'Priya Joshi', date: 'Oct 26, 2023', status: 'PENDING', price: '₹3,500' },
        { id: '#8417', type: 'Cotton Shirts (5x)', customer: 'Suresh Raina', date: 'Oct 26, 2023', status: 'READY_FOR_DISPATCH', price: '₹4,000' },
    ]);

    const handleAccept = (id) => {
        setOrders(prev => prev.map(o => o.id === id ? { ...o, status: 'IN_CUTTING' } : o));
    };

    const handleReject = (id) => {
        setOrders(prev => prev.filter(o => o.id !== id));
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Order <span className="text-[#4C1D95]">Requests</span></h1>
                    <p className="text-gray-400 font-bold text-sm tracking-wide mt-1 uppercase">Manage assigned stitching jobs</p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="flex-1 md:flex-none relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#4C1D95]" />
                        <input type="text" placeholder="Search orders..." className="pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-xs font-bold w-full md:w-64 focus:ring-4 focus:ring-[#4C1D95]/5 outline-none transition-all shadow-sm" />
                    </div>
                    <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-gray-900 transition-all shadow-sm">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Quick Summary Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'New Requests', value: '12', color: 'text-yellow-600', hue: 'bg-yellow-50' },
                    { label: 'Work In Progress', value: '28', color: 'text-blue-600', hue: 'bg-blue-50' },
                    { label: 'Ready to Ship', value: '15', color: 'text-green-600', hue: 'bg-green-50' },
                    { label: 'Delayed Jobs', value: '03', color: 'text-red-600', hue: 'bg-red-50' },
                ].map(s => (
                    <div key={s.label} className={`${s.hue} p-4 rounded-3xl border border-white/50 backdrop-blur-sm shadow-sm flex flex-col items-center justify-center text-center group hover:scale-105 transition-all`}>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                        <h4 className={`text-2xl font-black ${s.color}`}>{s.value}</h4>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-50">
                                <th className="py-6 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Order ID & Type</th>
                                <th className="py-6 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Customer Details</th>
                                <th className="py-6 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Current Status</th>
                                <th className="py-6 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Payment</th>
                                <th className="py-6 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <OrderRow
                                    key={order.id}
                                    order={order}
                                    onAccept={handleAccept}
                                    onReject={handleReject}
                                    onViewDetails={() => { }}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination Placeholder */}
            <div className="flex justify-between items-center px-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Showing 5 of 124 Orders</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-xl bg-white border border-gray-100 text-xs font-black text-gray-500 hover:bg-gray-50 transition-all opacity-50 cursor-not-allowed">Previous</button>
                    <button className="px-4 py-2 rounded-xl bg-white border border-gray-100 text-xs font-black text-[#4C1D95] hover:bg-gray-50 transition-all shadow-sm">Next Page</button>
                </div>
            </div>
        </div>
    );
};
