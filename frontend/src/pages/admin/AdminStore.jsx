import React, { useState } from 'react';
import { Search, Plus, Filter, MoreVertical, SlidersHorizontal, PackageSearch } from 'lucide-react';

export const AdminStore = () => {
    const [activeTab, setActiveTab] = useState('All Products');

    const products = [
        { id: 'P01', title: 'Embroidered Anarkali Kurti', category: 'Kurtis', price: 1499, stock: 45, status: 'In Stock', img: 'https://images.unsplash.com/photo-1583391733958-6118255b2b18?w=200&auto=format&fit=crop&q=60' },
        { id: 'P02', title: 'Cotton Printed Suit Set', category: 'Suits', price: 2199, stock: 12, status: 'Low Stock', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=200&auto=format&fit=crop&q=60' },
        { id: 'P03', title: 'Banarasi Silk Saree', category: 'Ethnic Wear', price: 4599, stock: 0, status: 'Out of Stock', img: 'https://images.unsplash.com/photo-1585487000160-6e3e5c9429c3?w=200&auto=format&fit=crop&q=60' },
        { id: 'P04', title: 'Casual Rayon Dress', category: 'Dresses', price: 899, stock: 120, status: 'In Stock', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&auto=format&fit=crop&q=60' },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'In Stock': return 'bg-green-50 text-green-700 border-green-200';
            case 'Low Stock': return 'bg-orange-50 text-orange-700 border-orange-200';
            case 'Out of Stock': return 'bg-red-50 text-red-700 border-red-200';
            default: return 'bg-gray-50 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto h-full flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Readymade Store</h1>
                    <p className="text-sm text-gray-500">Manage Pan-India E-commerce inventory, pricing, and active listings.</p>
                </div>
                <button className="bg-[#4C1D95] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4C1D95]/90 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add New Product
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex-1 flex flex-col overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex gap-2 p-1 bg-gray-100 rounded-lg overflow-x-auto hide-scrollbar w-full sm:w-auto">
                        {['All Products', 'Low Stock', 'Out of Stock', 'Drafts'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === tab
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products, SKU..."
                                className="w-full bg-gray-50 border border-gray-200 text-sm text-gray-800 rounded-lg py-2 pl-9 pr-4 focus:outline-none focus:ring-2 focus:ring-[#4C1D95]/50"
                            />
                        </div>
                        <button className="bg-gray-50 border border-gray-200 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                            <SlidersHorizontal className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto flex-1 h-full">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 sticky top-0 z-10 shadow-sm">
                            <tr>
                                <th className="px-6 py-4 font-semibold w-8">
                                    <input type="checkbox" className="rounded border-gray-300 text-[#4C1D95] focus:ring-[#4C1D95]" />
                                </th>
                                <th className="px-6 py-4 font-semibold">Product Info</th>
                                <th className="px-6 py-4 font-semibold">Category</th>
                                <th className="px-6 py-4 font-semibold">Price</th>
                                <th className="px-6 py-4 font-semibold">Inventory</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {products.map((product) => (
                                <tr key={product.id} className={`hover:bg-gray-50/50 transition-colors cursor-pointer`}>
                                    <td className="px-6 py-4">
                                        <input type="checkbox" className="rounded border-gray-300 text-[#4C1D95] focus:ring-[#4C1D95]" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden border border-gray-200 flex-shrink-0">
                                                <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900 tracking-tight leading-tight mb-0.5">{product.title}</div>
                                                <p className="text-[10px] text-gray-400 font-mono">SKU: {product.id}00X</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-semibold">{product.category}</span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-gray-900">₹{product.price}</td>
                                    <td className="px-6 py-4">
                                        <span className={`font-bold ${product.stock <= 15 ? 'text-red-600' : 'text-gray-900'}`}>{product.stock} units</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md border ${getStatusStyle(product.status)} whitespace-nowrap`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-gray-600 p-1">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {products.length === 0 && (
                        <div className="flex flex-col items-center justify-center p-12 text-center">
                            <PackageSearch className="w-12 h-12 text-gray-300 mb-3" />
                            <h3 className="text-lg font-bold text-gray-900 mb-1">No products found</h3>
                            <p className="text-sm text-gray-500 max-w-sm">There are no products matching your current filter criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

