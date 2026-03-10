import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MoreHorizontal, X, User, MapPin, CheckCircle2, Package, Scissors, CreditCard, ChevronRight } from 'lucide-react';
import { recentOrders } from '../data/mockData';

const AdminOrders = () => {
    const [selectedTab, setSelectedTab] = useState('All Orders');
    const [selectedOrder, setSelectedOrder] = useState(null);

    const tabs = ['All Orders', 'Stitching Service', 'Readymade Store'];

    const filteredOrders = recentOrders.filter(o => {
        if (selectedTab === 'Stitching Service') return o.type === 'Stitching';
        if (selectedTab === 'Readymade Store') return o.type === 'Store';
        return true;
    });

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Delivered': return 'bg-green-100 text-green-700 border-green-200';
            case 'In Production': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'Quality Check': return 'bg-purple-100 text-purple-700 border-purple-200';
            case 'Pickup Assigned': return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'Order Placed': return 'bg-gray-100 text-gray-700 border-gray-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="h-full flex flex-col space-y-6 relative">
            <div>
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">Order Management</h1>
                <p className="text-xs text-gray-500 font-medium mt-1">Manage and track all customer orders from end to end</p>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex bg-gray-50 p-1 rounded-xl w-full sm:w-auto overflow-x-auto no-scrollbar">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${selectedTab === tab ? 'bg-white text-[#1e3932] shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search orders..." className="w-full pl-9 pr-4 py-2 text-xs font-semibold bg-gray-50 border border-transparent focus:border-gray-200 rounded-xl outline-none transition-all" />
                    </div>
                    <button className="p-2 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 hover:text-[#1e3932] transition-colors shrink-0 border border-transparent">
                        <Filter size={18} />
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50/50 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] border-b border-gray-100">
                                <th className="px-6 py-4">Order ID & Date</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Service / Type</th>
                                <th className="px-6 py-4">Assigned Tailor</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredOrders.map((order) => (
                                <tr
                                    key={order.id}
                                    onClick={() => setSelectedOrder(order)}
                                    className="hover:bg-[#1e3932]/5 transition-colors cursor-pointer group"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-black text-[#1e3932] uppercase group-hover:underline">{order.id}</span>
                                            <span className="text-[10px] text-gray-500 font-medium mt-0.5">{order.date}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-gray-900">{order.customer}</span>
                                            <span className="text-[10px] text-gray-400 font-medium">{order.phone}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-gray-900">{order.service}</span>
                                            <span className="text-[10px] text-gray-500 font-medium">{order.type}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 flex items-center gap-2">
                                        {order.tailor !== 'N/A' && (
                                            <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 shrink-0">
                                                {order.tailor.charAt(0)}
                                            </div>
                                        )}
                                        <span className="text-xs font-bold text-gray-700">{order.tailor}</span>
                                    </td>
                                    <td className="px-6 py-4 text-xs font-black text-gray-900">{order.amount}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-between">
                                            <span className={`px-2 py-1 rounded-lg text-[9px] font-black border uppercase tracking-wider ${getStatusStyle(order.status)}`}>
                                                {order.status}
                                            </span>
                                            <ChevronRight size={16} className="text-gray-300 group-hover:text-[#1e3932] transition-colors" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredOrders.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center text-gray-400 text-xs font-bold">
                                        No orders found for this category.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Slide-out Detail Drawer */}
            <AnimatePresence>
                {selectedOrder && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                            onClick={() => setSelectedOrder(null)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-2xl z-50 flex flex-col border-l border-gray-100"
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                <div>
                                    <h2 className="text-lg font-black text-gray-900 tracking-tight flex items-center gap-2">
                                        Order {selectedOrder.id}
                                        <span className={`px-2 py-0.5 rounded text-[9px] uppercase tracking-wider border ${getStatusStyle(selectedOrder.status)}`}>
                                            {selectedOrder.status}
                                        </span>
                                    </h2>
                                    <p className="text-[10px] text-gray-500 font-bold mt-1">Placed on {selectedOrder.date}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedOrder(null)}
                                    className="p-2 bg-white text-gray-400 hover:text-red-500 border border-gray-100 rounded-full shadow-sm hover:bg-red-50 transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">

                                {/* Customer Info */}
                                <div className="space-y-3">
                                    <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                        <User size={12} /> Customer Details
                                    </h3>
                                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2">
                                        <p className="text-sm font-bold text-gray-900">{selectedOrder.customer}</p>
                                        <p className="text-xs text-gray-600 font-medium">{selectedOrder.phone} • {selectedOrder.email}</p>
                                        <div className="flex items-start gap-2 pt-2 mt-2 border-t border-gray-200">
                                            <MapPin size={14} className="text-gray-400 mt-0.5 shrink-0" />
                                            <p className="text-[11px] text-gray-500 font-medium">{selectedOrder.address}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Order Spec */}
                                <div className="space-y-3">
                                    <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                        <Package size={12} /> Service Specifications
                                    </h3>
                                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-sm font-black text-gray-900">{selectedOrder.service}</p>
                                                <p className="text-[10px] font-bold text-[#1e3932] uppercase mt-1">{selectedOrder.type}</p>
                                            </div>
                                            <p className="text-sm font-black text-[#1e3932]">{selectedOrder.amount}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                                            <div>
                                                <p className="text-[9px] uppercase text-gray-400 font-bold">Measurements</p>
                                                <p className="text-xs font-bold text-gray-700 mt-0.5">{selectedOrder.measurements}</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] uppercase text-gray-400 font-bold">Fabric Source</p>
                                                <p className="text-xs font-bold text-gray-700 mt-0.5">Provided by Tailor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Assignment & Payment */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm space-y-2">
                                        <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-1.5 mb-3">
                                            <Scissors size={12} /> Assignment
                                        </h3>
                                        <p className="text-[10px] text-gray-400 font-bold">Assigned Tailor</p>
                                        <p className="text-xs font-bold text-[#1e3932]">{selectedOrder.tailor}</p>
                                        <button className="text-[10px] font-bold text-blue-600 hover:underline mt-2 inline-block">Reassign Tailor</button>
                                    </div>
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm space-y-2">
                                        <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-1.5 mb-3">
                                            <CreditCard size={12} /> Payment
                                        </h3>
                                        <p className="text-[10px] text-gray-400 font-bold">Status</p>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            {selectedOrder.paymentStatus === 'Paid' ? <CheckCircle2 size={14} className="text-green-500" /> : <div className="w-2 h-2 rounded-full bg-orange-400" />}
                                            <p className="text-xs font-bold text-gray-900">{selectedOrder.paymentStatus}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Bottom */}
                            <div className="p-6 border-t border-gray-100 bg-white grid grid-cols-2 gap-3">
                                <button className="px-4 py-3 border border-gray-200 text-gray-700 text-xs font-black rounded-xl hover:bg-gray-50 transition-colors uppercase tracking-widest">
                                    Update Status
                                </button>
                                <button className="px-4 py-3 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] shadow-lg shadow-green-900/20 transition-all uppercase tracking-widest">
                                    Manage Order
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminOrders;
