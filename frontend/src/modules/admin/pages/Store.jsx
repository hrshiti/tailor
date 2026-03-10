import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MoreHorizontal, X, Plus, Edit2, Trash2, Package, Tag, Image as ImageIcon, IndianRupee } from 'lucide-react';
import { PRODUCTS as readymadeProducts } from '../../customer/data/products';

const AdminStore = () => {
    const [selectedTab, setSelectedTab] = useState('Products');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const tabs = ['Products', 'Categories', 'Inventory', 'Coupons'];

    const getStatusStyle = (stock) => {
        if (stock > 10) return 'bg-green-100 text-green-700 border-green-200';
        if (stock > 0) return 'bg-orange-100 text-orange-700 border-orange-200';
        return 'bg-red-100 text-red-700 border-red-200';
    };

    return (
        <div className="h-full flex flex-col space-y-6 relative">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Store Management</h1>
                    <p className="text-xs text-gray-500 font-medium mt-1">Manage e-commerce products, inventory, and discounts</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] shadow-lg shadow-green-900/20 transition-all uppercase tracking-widest"
                >
                    <Plus size={16} /> Add Product
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
                        <input type="text" placeholder="Search products..." className="w-full pl-9 pr-4 py-2 text-xs font-semibold bg-gray-50 border border-transparent focus:border-gray-200 rounded-xl outline-none transition-all" />
                    </div>
                    <button className="p-2 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 hover:text-[#1e3932] transition-colors shrink-0 border border-transparent">
                        <Filter size={18} />
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 overflow-hidden flex flex-col">
                {selectedTab === 'Products' ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left whitespace-nowrap">
                            <thead>
                                <tr className="bg-gray-50/50 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] border-b border-gray-100">
                                    <th className="px-6 py-4">Product Info</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">Price</th>
                                    <th className="px-6 py-4">Stock Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {readymadeProducts.map((product) => (
                                    <tr
                                        key={product.id}
                                        className="hover:bg-[#1e3932]/5 transition-colors group"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-xl bg-gray-100 border border-gray-200 overflow-hidden">
                                                    <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-gray-900 group-hover:text-[#1e3932] truncate max-w-[250px]">{product.title}</span>
                                                    <span className="text-[10px] text-gray-500 font-medium">{product.id}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-xs font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{product.category}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-sm font-black text-gray-900">₹{product.price}</span>
                                                {product.originalPrice && <span className="text-[10px] text-gray-400 line-through">₹{product.originalPrice}</span>}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-lg text-[9px] font-black border uppercase tracking-wider ${getStatusStyle(product.stock || 15)}`}>
                                                {(product.stock || 15) > 10 ? 'In Stock' : (product.stock || 15) > 0 ? 'Low Stock' : 'Out of Stock'}
                                                <span className="ml-1 opacity-70">({product.stock || 15})</span>
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 text-gray-400 hover:text-[#1e3932] hover:bg-gray-50 border border-transparent hover:border-gray-100 rounded-xl transition-all">
                                                    <Edit2 size={16} />
                                                </button>
                                                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 rounded-xl transition-all">
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
                    <div className="p-12 text-center flex flex-col items-center justify-center">
                        <Package size={48} className="text-gray-200 mb-4" />
                        <h3 className="text-lg font-black text-gray-900">{selectedTab} Details</h3>
                        <p className="text-xs text-gray-500 mt-2 max-w-sm">This section is currently under development. You will be able to manage {selectedTab.toLowerCase()} from here.</p>
                    </div>
                )}
            </div>

            {/* Add Product Modal */}
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
                                className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                            >
                                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                    <h2 className="text-lg font-black tracking-tight text-gray-900">Add New Product</h2>
                                    <button onClick={() => setIsAddModalOpen(false)} className="p-2 bg-white border border-gray-200 text-gray-400 hover:text-gray-900 rounded-full transition-colors shadow-sm">
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="p-6 flex-1 overflow-y-auto space-y-6 custom-scrollbar bg-gray-50/30">

                                    {/* Basic Info */}
                                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                                        <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                            <Tag size={12} /> Basic Information
                                        </h3>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1.5">Product Title</label>
                                            <input type="text" placeholder="e.g. Premium Silk Saree" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-[#1e3932] transition-colors" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 mb-1.5">Category</label>
                                                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-[#1e3932] transition-colors appearance-none">
                                                    <option>Women's Wear</option>
                                                    <option>Men's Wear</option>
                                                    <option>Accessories</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 mb-1.5">Stock Quantity</label>
                                                <input type="number" placeholder="50" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-[#1e3932] transition-colors" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pricing */}
                                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                                        <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                            <IndianRupee size={12} /> Pricing
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 mb-1.5">Selling Price</label>
                                                <input type="number" placeholder="₹" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-[#1e3932] transition-colors" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 mb-1.5">Original Price (Optional)</label>
                                                <input type="number" placeholder="₹" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-[#1e3932] transition-colors" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Images */}
                                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                                        <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                            <ImageIcon size={12} /> Product Images
                                        </h3>
                                        <div className="w-full h-32 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-[#1e3932] hover:bg-[#1e3932]/5 transition-colors cursor-pointer bg-gray-50/50">
                                            <Plus size={24} className="mb-2" />
                                            <span className="text-xs font-bold">Drop images here or click to browse</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="p-6 border-t border-gray-100 bg-white flex justify-end gap-3">
                                    <button onClick={() => setIsAddModalOpen(false)} className="px-6 py-3 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-black rounded-xl hover:bg-gray-100 transition-colors uppercase tracking-widest">
                                        Discard
                                    </button>
                                    <button className="px-6 py-3 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] shadow-lg shadow-green-900/20 transition-all uppercase tracking-widest">
                                        Publish Product
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

export default AdminStore;
