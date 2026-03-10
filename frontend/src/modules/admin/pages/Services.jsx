import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MoreHorizontal, X, Tag, Clock, CheckCircle2, Package, Plus, Edit2, Trash2 } from 'lucide-react';
import { SERVICES as stitchingServices } from '../../customer/data/services';

const AdminServices = () => {
    const [selectedTab, setSelectedTab] = useState('Stitching Categories');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const tabs = ['Stitching Categories', 'Pricing & Commissions'];

    return (
        <div className="h-full flex flex-col space-y-6 relative">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Service & Pricing Control</h1>
                    <p className="text-xs text-gray-500 font-medium mt-1">Manage stitching categories, base prices, and platform rules</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] shadow-lg shadow-green-900/20 transition-all uppercase tracking-widest"
                >
                    <Plus size={16} /> Add Category
                </button>
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
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search services..." className="w-full pl-9 pr-4 py-2 text-xs font-semibold bg-gray-50 border border-transparent focus:border-gray-200 rounded-xl outline-none transition-all" />
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 overflow-hidden flex flex-col">
                {selectedTab === 'Stitching Categories' ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left whitespace-nowrap">
                            <thead>
                                <tr className="bg-gray-50/50 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] border-b border-gray-100">
                                    <th className="px-6 py-4">Service Details</th>
                                    <th className="px-6 py-4">Base Price</th>
                                    <th className="px-6 py-4">Est. Delivery</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {stitchingServices.map((service) => (
                                    <tr
                                        key={service.id}
                                        className="hover:bg-[#1e3932]/5 transition-colors group"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-xl bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center relative">
                                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-black text-gray-900">{service.title}</span>
                                                    <span className="text-[10px] text-gray-400 font-medium group-hover:text-gray-600 line-clamp-1 max-w-[200px]">
                                                        {service.description.substring(0, 40)}...
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm font-black text-[#1e3932]">₹{service.price}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
                                                <Clock size={14} className="text-gray-400" /> {service.deliveryTime}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 rounded-lg text-[9px] font-black border uppercase tracking-wider bg-green-100 text-green-700 border-green-200">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 text-gray-400 hover:text-[#1e3932] hover:bg-[#1e3932]/10 rounded-xl transition-all border border-transparent">
                                                    <Edit2 size={16} />
                                                </button>
                                                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all border border-transparent">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="p-6 overflow-y-auto space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Commission Rules */}
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                                <div className="p-5 border-b border-gray-100 bg-gray-50/50">
                                    <h3 className="text-sm font-black text-gray-900 tracking-tight">Platform Commission</h3>
                                    <p className="text-[10px] text-gray-500 font-medium mt-0.5">Global commission rates per order type</p>
                                </div>
                                <div className="p-5 space-y-4">
                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <div>
                                            <p className="text-xs font-bold text-gray-900">Stitching Services</p>
                                            <p className="text-[10px] text-gray-500 mt-0.5">Applied to tailor orders</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg font-black text-[#1e3932]">15%</span>
                                            <button className="text-[10px] font-bold text-blue-600 hover:underline">Edit</button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <div>
                                            <p className="text-xs font-bold text-gray-900">Readymade Store</p>
                                            <p className="text-[10px] text-gray-500 mt-0.5">Applied to marketplace vendors</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg font-black text-[#1e3932]">10%</span>
                                            <button className="text-[10px] font-bold text-blue-600 hover:underline">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Delivery Charges */}
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                                <div className="p-5 border-b border-gray-100 bg-gray-50/50">
                                    <h3 className="text-sm font-black text-gray-900 tracking-tight">Delivery Charges</h3>
                                    <p className="text-[10px] text-gray-500 font-medium mt-0.5">Base rates for pickup and delivery</p>
                                </div>
                                <div className="p-5 space-y-4">
                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <div>
                                            <p className="text-xs font-bold text-gray-900">Base Pickup Fee</p>
                                            <p className="text-[10px] text-gray-500 mt-0.5">For first 5km</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg font-black text-gray-900">₹40</span>
                                            <button className="text-[10px] font-bold text-blue-600 hover:underline">Edit</button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <div>
                                            <p className="text-xs font-bold text-gray-900">Per KM Charge</p>
                                            <p className="text-[10px] text-gray-500 mt-0.5">Beyond base distance</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg font-black text-gray-900">₹8</span>
                                            <button className="text-[10px] font-bold text-blue-600 hover:underline">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Add Service Modal */}
            <AnimatePresence>
                {isAddModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setIsAddModalOpen(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                            >
                                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                    <h2 className="text-lg font-black tracking-tight text-gray-900">Add New Category</h2>
                                    <button onClick={() => setIsAddModalOpen(false)} className="p-2 bg-white border border-gray-200 text-gray-400 hover:text-gray-900 rounded-full transition-colors shadow-sm">
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="p-6 flex-1 overflow-y-auto space-y-5 custom-scrollbar">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1.5">Category Title</label>
                                        <input type="text" placeholder="e.g. Designer Saree" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-900 outline-none focus:border-[#1e3932] transition-colors shadow-sm" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1.5">Base Price (₹)</label>
                                            <input type="number" placeholder="400" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-900 outline-none focus:border-[#1e3932] transition-colors shadow-sm" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1.5">Est. Delivery Time</label>
                                            <input type="text" placeholder="3-5 days" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-900 outline-none focus:border-[#1e3932] transition-colors shadow-sm" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1.5">Description</label>
                                        <textarea rows={3} placeholder="Describe the service..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-900 outline-none focus:border-[#1e3932] transition-colors shadow-sm resize-none"></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1.5">Upload Icon/Image</label>
                                        <div className="w-full h-32 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-[#1e3932] hover:bg-gray-50 transition-colors cursor-pointer bg-white">
                                            <Plus size={24} className="mb-2" />
                                            <span className="text-xs font-bold">Click to browse</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
                                    <button onClick={() => setIsAddModalOpen(false)} className="px-6 py-3 bg-white border border-gray-200 text-gray-600 text-xs font-black rounded-xl hover:bg-gray-50 transition-colors uppercase tracking-widest">
                                        Cancel
                                    </button>
                                    <button className="px-6 py-3 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] shadow-lg shadow-green-900/20 transition-all uppercase tracking-widest">
                                        Save Category
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminServices;
