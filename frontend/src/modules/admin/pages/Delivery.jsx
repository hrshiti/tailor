import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MoreHorizontal, X, User, MapPin, CheckCircle2, Truck, Star, Phone, Clock, FileText, Ban, Power, Package } from 'lucide-react';
import { deliveryPartners, unassignedOrders } from '../data/mockData';

const AdminDelivery = () => {
    const [selectedTab, setSelectedTab] = useState('All Partners');
    const [selectedPartner, setSelectedPartner] = useState(null);

    const tabs = ['All Partners', 'Manual Assignment'];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Online': return 'bg-green-100 text-green-700 border-green-200';
            case 'Offline': return 'bg-gray-100 text-gray-700 border-gray-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="h-full flex flex-col space-y-6 relative">
            <div>
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">Delivery Management</h1>
                <p className="text-xs text-gray-500 font-medium mt-1">Monitor dispatch, view partner tracking, and manage payouts</p>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex bg-gray-50 p-1 rounded-xl w-full sm:w-auto overflow-x-auto no-scrollbar">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${selectedTab === tab ? 'bg-white text-[#1e3932] shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            {tab}
                            {tab === 'Manual Assignment' && (
                                <span className={`px-1.5 py-0.5 rounded-full text-[9px] ${selectedTab === tab ? 'bg-orange-100 text-orange-600' : 'bg-gray-200 text-gray-500'}`}>
                                    {unassignedOrders.length}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search partners..." className="w-full pl-9 pr-4 py-2 text-xs font-semibold bg-gray-50 border border-transparent focus:border-gray-200 rounded-xl outline-none transition-all" />
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 overflow-hidden flex flex-col">
                {selectedTab === 'All Partners' ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left whitespace-nowrap">
                            <thead>
                                <tr className="bg-gray-50/50 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] border-b border-gray-100">
                                    <th className="px-6 py-4">Rider Details</th>
                                    <th className="px-6 py-4">Vehicle Info</th>
                                    <th className="px-6 py-4">Performance</th>
                                    <th className="px-6 py-4">Active Tasks</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {deliveryPartners.map((partner) => (
                                    <tr
                                        key={partner.id}
                                        onClick={() => setSelectedPartner(partner)}
                                        className="hover:bg-[#1e3932]/5 transition-colors cursor-pointer group"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-[#1e3932] font-black text-sm">
                                                    {partner.name.charAt(0)}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-gray-900 group-hover:text-[#1e3932] transition-colors">{partner.name}</span>
                                                    <span className="text-[10px] text-gray-400 font-medium">{partner.phone}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-xs font-bold text-gray-700">{partner.vehicle}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-1 text-[11px] font-bold text-orange-500">
                                                    <Star size={12} className="fill-orange-500" /> {partner.rating}
                                                </div>
                                                <span className="text-[10px] text-gray-500 font-medium">{partner.totalDeliveries} Deliveries</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-black ${partner.activeTasks > 0 ? 'bg-[#1e3932]/10 text-[#1e3932]' : 'text-gray-400'}`}>
                                                {partner.activeTasks} Task{partner.activeTasks !== 1 ? 's' : ''}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-lg text-[9px] font-black border uppercase tracking-wider flex w-max items-center gap-1.5 ${getStatusStyle(partner.status)}`}>
                                                <span className={`block w-1.5 h-1.5 rounded-full ${partner.status === 'Online' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                                                {partner.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="p-6 overflow-y-auto space-y-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Unassigned Tasks</h3>
                            <button className="text-xs font-bold text-[#1e3932] hover:underline">Auto-Assign All</button>
                        </div>
                        {unassignedOrders.map((order) => (
                            <div key={order.id} className="bg-white border text-left border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[10px] font-black uppercase text-[#1e3932]">{order.id}</span>
                                        <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${order.type === 'Pickup' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                                            {order.type}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs font-bold text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <div className="flex items-start gap-1.5">
                                            <MapPin size={14} className="text-gray-400 mt-0.5 shrink-0" />
                                            <div>
                                                <p className="text-[9px] text-gray-400 uppercase tracking-widest">From</p>
                                                <p>{order.from}</p>
                                            </div>
                                        </div>
                                        <div className="text-gray-300">→</div>
                                        <div className="flex items-start gap-1.5">
                                            <MapPin size={14} className="text-[#1e3932] mt-0.5 shrink-0" />
                                            <div>
                                                <p className="text-[9px] text-gray-400 uppercase tracking-widest">To</p>
                                                <p>{order.to}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 min-w-[200px]">
                                    <p className="text-[10px] text-gray-500 font-bold flex items-center justify-end gap-1"><Clock size={12} /> {order.timeSlot}</p>
                                    <select className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 outline-none w-full">
                                        <option value="">Select Partner</option>
                                        <option value="DP-01">Rahul Kumar (0.5 km away)</option>
                                        <option value="DP-03">Sanjay Verma (1.2 km away)</option>
                                    </select>
                                    <button className="w-full py-2 bg-[#1e3932] text-white text-[10px] font-black rounded-lg hover:bg-[#0a211e] transition-colors uppercase tracking-widest">
                                        Assign Task
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Slide-out Partner Drawer */}
            <AnimatePresence>
                {selectedPartner && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                            onClick={() => setSelectedPartner(null)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 flex flex-col border-l border-gray-100"
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-start bg-gradient-to-br from-[#1e3932] to-[#0a211e] text-white">
                                <div className="flex items-center gap-4">
                                    <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-black text-2xl relative">
                                        {selectedPartner.name.charAt(0)}
                                        <div className={`absolute -right-1 -top-1 w-4 h-4 rounded-full border-2 border-[#1e3932] ${selectedPartner.status === 'Online' ? 'bg-green-500' : 'bg-gray-400'}`} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-black tracking-tight">{selectedPartner.name}</h2>
                                        <p className="text-xs text-white/60 font-bold mt-1">ID: {selectedPartner.id}</p>
                                        <div className="mt-2 inline-block px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-bold bg-white/10 text-white border border-white/20">
                                            {selectedPartner.vehicle}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedPartner(null)}
                                    className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[#fbfcfb]">

                                {/* Live Status */}
                                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                            <Truck size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Live Status</p>
                                            <p className="text-sm font-black text-gray-900">{selectedPartner.status}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Active Tasks</p>
                                        <p className="text-xl font-black text-[#1e3932]">{selectedPartner.activeTasks}</p>
                                    </div>
                                </div>

                                {/* Performance Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-center">
                                        <div className="flex justify-center mb-1 text-orange-500"><Star size={20} className="fill-orange-500" /></div>
                                        <p className="text-2xl font-black text-gray-900">{selectedPartner.rating}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Rating</p>
                                    </div>
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-center">
                                        <div className="flex justify-center mb-1 text-[#1e3932]"><Package size={20} /></div>
                                        <p className="text-2xl font-black text-gray-900">{selectedPartner.totalDeliveries}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Total Deliveries</p>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="space-y-3">
                                    <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                        <User size={12} /> Contact & Info
                                    </h3>
                                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                                        <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <Phone size={16} className="text-[#1e3932] opacity-70" /> {selectedPartner.phone}
                                        </div>
                                        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                                            <p className="text-xs font-bold text-gray-600">Joined Date</p>
                                            <span className="text-xs font-black text-gray-900">{selectedPartner.joined}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="p-6 border-t border-gray-100 bg-white grid grid-cols-2 gap-3">
                                <button className="px-4 py-3 border border-red-100 bg-red-50 text-red-600 text-xs font-black rounded-xl hover:bg-red-100 transition-colors uppercase tracking-widest flex items-center justify-center gap-2">
                                    <Ban size={14} /> Suspend
                                </button>
                                <button className="px-4 py-3 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] shadow-lg shadow-green-900/20 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                                    View Tracking
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminDelivery;
