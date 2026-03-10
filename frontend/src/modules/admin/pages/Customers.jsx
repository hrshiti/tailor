import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MoreHorizontal, X, User, MapPin, CheckCircle2, ShoppingBag, Mail, Phone, Clock, Ban } from 'lucide-react';
import { allCustomers } from '../data/mockData';

const AdminCustomers = () => {
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-700 border-green-200';
            case 'Inactive': return 'bg-gray-100 text-gray-700 border-gray-200';
            case 'Suspended': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="h-full flex flex-col space-y-6 relative">
            <div>
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">Customer Management</h1>
                <p className="text-xs text-gray-500 font-medium mt-1">View customer profiles, order history, and saved data</p>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex bg-gray-50 p-1 rounded-xl w-full sm:w-auto overflow-x-auto no-scrollbar">
                    <button className="px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all bg-white text-[#1e3932] shadow-sm">
                        All Customers
                    </button>
                    <button className="px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all text-gray-500 hover:text-gray-900">
                        New This Month
                    </button>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search customers by name, phone..." className="w-full pl-9 pr-4 py-2 text-xs font-semibold bg-gray-50 border border-transparent focus:border-gray-200 rounded-xl outline-none transition-all" />
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50/50 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] border-b border-gray-100">
                                <th className="px-6 py-4">Customer Details</th>
                                <th className="px-6 py-4">Contact</th>
                                <th className="px-6 py-4">Orders</th>
                                <th className="px-6 py-4">Total Spent</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {allCustomers.map((customer) => (
                                <tr
                                    key={customer.id}
                                    onClick={() => setSelectedCustomer(customer)}
                                    className="hover:bg-[#1e3932]/5 transition-colors cursor-pointer group"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-[#1e3932]/10 border border-[#1e3932]/20 flex items-center justify-center text-[#1e3932] font-black text-sm">
                                                {customer.name.charAt(0)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-gray-900 group-hover:text-[#1e3932] transition-colors">{customer.name}</span>
                                                <span className="text-[10px] text-gray-400 font-medium">Joined {customer.joined}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-gray-700">{customer.phone}</span>
                                            <span className="text-[10px] text-gray-500 font-medium">{customer.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-bold text-gray-900">{customer.orders}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-black text-[#1e3932]">{customer.totalSpent}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-lg text-[9px] font-black border uppercase tracking-wider ${getStatusStyle(customer.status)}`}>
                                            {customer.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Slide-out Customer Drawer */}
            <AnimatePresence>
                {selectedCustomer && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                            onClick={() => setSelectedCustomer(null)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 flex flex-col border-l border-gray-100"
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-start bg-gray-50">
                                <div className="flex items-center gap-4">
                                    <div className="h-16 w-16 rounded-2xl bg-[#1e3932]/10 border border-[#1e3932]/20 flex items-center justify-center text-[#1e3932] font-black text-2xl">
                                        {selectedCustomer.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-black tracking-tight text-gray-900">{selectedCustomer.name}</h2>
                                        <p className="text-xs text-gray-500 font-bold mt-1">ID: {selectedCustomer.id}</p>
                                        <div className={`mt-2 inline-block px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-bold border ${getStatusStyle(selectedCustomer.status)}`}>
                                            {selectedCustomer.status}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedCustomer(null)}
                                    className="p-2 text-gray-400 hover:text-gray-900 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">

                                {/* Lifetime Value */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-br from-[#1e3932] to-[#0a211e] border-none p-4 rounded-2xl shadow-sm text-center text-white">
                                        <div className="flex justify-center mb-1 text-green-400"><ShoppingBag size={20} /></div>
                                        <p className="text-2xl font-black">{selectedCustomer.orders}</p>
                                        <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest mt-1">Total Orders</p>
                                    </div>
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-center">
                                        <div className="flex justify-center mb-1 text-[#1e3932]"><CheckCircle2 size={20} /></div>
                                        <p className="text-2xl font-black text-gray-900">{selectedCustomer.totalSpent}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Lifetime Spent</p>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="space-y-3">
                                    <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                        <User size={12} /> Contact Information
                                    </h3>
                                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                                        <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <Phone size={16} className="text-[#1e3932] opacity-70" /> {selectedCustomer.phone}
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <Mail size={16} className="text-[#1e3932] opacity-70" /> {selectedCustomer.email}
                                        </div>
                                    </div>
                                </div>

                                {/* Saved Addresses */}
                                <div className="space-y-3">
                                    <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                        <MapPin size={12} /> Saved Addresses
                                    </h3>
                                    <div className="space-y-3">
                                        {['Home - Bandra West, Mumbai, 400050', 'Office - Andheri East, Mumbai, 400069'].map((address, index) => (
                                            <div key={index} className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-xs font-medium text-gray-700 flex items-start gap-2">
                                                <MapPin size={14} className="text-gray-400 shrink-0 mt-0.5" />
                                                <span>{address}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="p-6 border-t border-gray-100 bg-white flex gap-3">
                                <button className="flex-1 py-3 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] shadow-lg shadow-green-900/20 transition-all uppercase tracking-widest">
                                    View Full Order History
                                </button>
                                <button className="p-3 border border-red-100 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors tooltip-wrapper">
                                    <Ban size={20} />
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminCustomers;
