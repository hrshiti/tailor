import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Send, FileText, Bell, Plus, Edit2, Trash2, Smartphone, Megaphone, X } from 'lucide-react';

const AdminCMS = () => {
    const [selectedTab, setSelectedTab] = useState('Banners');
    const [isAddBannerModalOpen, setIsAddBannerModalOpen] = useState(false);

    const tabs = ['Banners', 'Notifications', 'Legal Pages', 'FAQs'];

    const mockBanners = [
        { id: 1, title: 'Summer Sale', location: 'Home Page Hero', status: 'Active', image: 'https://images.unsplash.com/photo-1571513682977-17b5e4062ee0?q=80&w=200' },
        { id: 2, title: 'Bridal Collection', location: 'Category Top', status: 'Scheduled', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200' },
        { id: 3, title: 'Festive Offers', location: 'Store Banner', status: 'Inactive', image: 'https://images.unsplash.com/photo-1606406054131-2947bde09a34?q=80&w=200' },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-700 border-green-200';
            case 'Scheduled': return 'bg-blue-100 text-blue-700 border-blue-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="h-full flex flex-col space-y-6 relative">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Content Management</h1>
                    <p className="text-xs text-gray-500 font-medium mt-1">Manage app content, push notifications, and legal documents</p>
                </div>
                {selectedTab === 'Banners' && (
                    <button
                        onClick={() => setIsAddBannerModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] shadow-lg shadow-green-900/20 transition-all uppercase tracking-widest"
                    >
                        <Plus size={16} /> Add Banner
                    </button>
                )}
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
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto pb-6">

                {selectedTab === 'Banners' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockBanners.map(banner => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                key={banner.id}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group"
                            >
                                <div className="h-40 bg-gray-100 relative overflow-hidden">
                                    <img src={banner.image} alt={banner.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-2 py-1 rounded-lg text-[9px] font-black border uppercase tracking-wider backdrop-blur-md ${getStatusStyle(banner.status)}`}>
                                            {banner.status}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1.5 bg-white text-gray-700 hover:text-[#1e3932] shadow-sm rounded-lg transition-colors">
                                            <Edit2 size={14} />
                                        </button>
                                        <button className="p-1.5 bg-white text-gray-700 hover:text-red-600 shadow-sm rounded-lg transition-colors">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm font-black text-gray-900">{banner.title}</h3>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Placement: {banner.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {selectedTab === 'Notifications' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                            <div>
                                <h3 className="text-sm font-black text-gray-900 flex items-center gap-2 tracking-tight">
                                    <Megaphone size={18} className="text-[#1e3932]" />
                                    Broadcast Push Notification
                                </h3>
                                <p className="text-[10px] text-gray-500 font-medium mt-1">Send manual alerts to all active users</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Target Audience</label>
                                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-[#1e3932] transition-colors appearance-none">
                                        <option>All Customers</option>
                                        <option>All Tailors</option>
                                        <option>Delivery Partners</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Notification Title</label>
                                    <input type="text" placeholder="e.g. 50% Off on Stitching" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-[#1e3932] transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Message Body</label>
                                    <textarea rows={4} placeholder="Type your message here..." className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-[#1e3932] transition-colors resize-none"></textarea>
                                </div>
                                <button className="w-full py-3 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] shadow-lg shadow-green-900/20 transition-all uppercase tracking-widest flex justify-center items-center gap-2">
                                    <Send size={16} /> Send Broadcast
                                </button>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#1e3932] to-[#0a211e] p-6 rounded-2xl shadow-sm text-white flex flex-col items-center justify-center text-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Smartphone size={100} />
                            </div>
                            <Smartphone size={48} className="text-white/80 mb-4 relative z-10" />
                            <h3 className="text-lg font-black tracking-tight relative z-10">Automated Flows</h3>
                            <p className="text-xs text-white/70 mt-2 max-w-sm relative z-10">Transactional notifications (order updates, shipping, payments) are handled automatically by the system algorithms.</p>
                            <button className="mt-6 px-6 py-2.5 bg-white text-[#1e3932] text-[10px] font-black rounded-xl hover:shadow-lg transition-all uppercase tracking-widest relative z-10">
                                View Notification Logs
                            </button>
                        </div>
                    </div>
                )}

                {selectedTab === 'Legal Pages' && (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <table className="w-full text-left whitespace-nowrap">
                            <thead>
                                <tr className="bg-gray-50/50 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] border-b border-gray-100">
                                    <th className="px-6 py-4">Document Title</th>
                                    <th className="px-6 py-4">Last Updated</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[
                                    { title: 'Privacy Policy', date: '01 Mar 2026', status: 'Published' },
                                    { title: 'Terms & Conditions', date: '01 Mar 2026', status: 'Published' },
                                    { title: 'Refund & Cancellation', date: '15 Feb 2026', status: 'Published' },
                                    { title: 'Vendor Agreement', date: '10 Jan 2026', status: 'Published' },
                                ].map((doc, i) => (
                                    <tr key={i} className="hover:bg-[#1e3932]/5 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-gray-100 text-gray-500 rounded-lg group-hover:text-[#1e3932] group-hover:bg-[#1e3932]/10 transition-colors">
                                                    <FileText size={16} />
                                                </div>
                                                <span className="text-sm font-bold text-gray-900 group-hover:text-[#1e3932] transition-colors">{doc.title}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-xs font-bold text-gray-500">{doc.date}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 rounded-lg text-[9px] font-black border uppercase tracking-wider bg-green-100 text-green-700 border-green-200">
                                                {doc.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="px-4 py-2 bg-gray-50 text-[#1e3932] text-[10px] font-black rounded-lg hover:bg-gray-100 uppercase tracking-widest border border-gray-200">
                                                Edit Content
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {selectedTab === 'FAQs' && (
                    <div className="p-12 text-center flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-100">
                        <FileText size={48} className="text-gray-200 mb-4" />
                        <h3 className="text-lg font-black text-gray-900">FAQ Management</h3>
                        <p className="text-xs text-gray-500 mt-2 max-w-sm">Manage frequently asked questions categorized by Customer, Tailor, and Delivery.</p>
                        <button className="mt-6 px-6 py-2.5 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] uppercase tracking-widest">
                            Add New FAQ
                        </button>
                    </div>
                )}
            </div>

            {/* Add Banner Modal */}
            <AnimatePresence>
                {isAddBannerModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setIsAddBannerModalOpen(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                            >
                                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                    <h2 className="text-lg font-black tracking-tight text-gray-900">Upload Banner</h2>
                                    <button onClick={() => setIsAddBannerModalOpen(false)} className="p-2 bg-white border border-gray-200 text-gray-400 hover:text-gray-900 rounded-full transition-colors shadow-sm">
                                        <X size={20} />
                                    </button>
                                </div>
                                <div className="p-6 space-y-5 flex-1 bg-white">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1.5">Banner Title (Internal)</label>
                                        <input type="text" placeholder="e.g. Diwali Flash Sale" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 outline-none focus:border-[#1e3932] transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1.5">Placement Location</label>
                                        <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 outline-none focus:border-[#1e3932] transition-colors appearance-none">
                                            <option>Home Page - Top Carousel</option>
                                            <option>Store Tab - Header Banner</option>
                                            <option>Promotional Popup</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1.5">Upload Image</label>
                                        <div className="w-full h-40 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-[#1e3932] hover:bg-[#1e3932]/5 transition-colors cursor-pointer bg-gray-50/50">
                                            <ImageIcon size={32} className="mb-2" />
                                            <span className="text-xs font-bold text-gray-600">Drag & drop or Click to browse</span>
                                            <span className="text-[10px] text-gray-400 mt-1">Recommended size: 1200x400px (WebP/JPG)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3 rounded-b-3xl">
                                    <button onClick={() => setIsAddBannerModalOpen(false)} className="px-6 py-3 bg-white border border-gray-200 text-gray-600 text-xs font-black rounded-xl hover:bg-gray-50 transition-colors uppercase tracking-widest">
                                        Cancel
                                    </button>
                                    <button className="px-6 py-3 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] shadow-lg shadow-green-900/20 transition-all uppercase tracking-widest">
                                        Publish Banner
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

export default AdminCMS;
