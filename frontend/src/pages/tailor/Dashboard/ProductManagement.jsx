import React, { useState } from 'react';
import {
    Plus,
    Search,
    Filter,
    Edit2,
    Trash2,
    Eye,
    MoreVertical,
    LayoutGrid,
    List,
    ChevronRight,
    Star,
    Image as ImageIcon,
    Tag
} from 'lucide-react';

const ProductCard = ({ product, onEdit, onDelete }) => (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden group hover:shadow-[0_8px_40px_rgb(0,0,0,0.06)] transition-all">
        <div className="aspect-[4/5] relative overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-4 right-4 flex gap-2">
                <button onClick={onEdit} className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-gray-700 hover:bg-[#4C1D95] hover:text-white transition-all shadow-sm">
                    <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={onDelete} className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                <Tag className="w-3 h-3" /> {product.category}
            </div>
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-black text-gray-900 tracking-tight leading-tight group-hover:text-[#4C1D95] transition-colors">{product.name}</h3>
                <span className="text-sm font-black text-[#4C1D95] bg-[#4C1D95]/5 px-2 py-0.5 rounded-lg">₹{product.price}</span>
            </div>
            <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} className={`w-3 h-3 ${s <= Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                ))}
                <span className="text-[10px] text-gray-400 font-bold ml-1">({product.reviews} Reviews)</span>
            </div>
            <button className="w-full py-3 bg-gray-50 text-gray-500 hover:bg-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">View Analytics</button>
        </div>
    </div>
);

export const ProductManagement = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [products, setProducts] = useState([
        { id: 1, name: 'Anarkali Wedding Set', category: 'Suits', price: '4,500', rating: 4.8, reviews: 124, img: 'https://images.unsplash.com/photo-1583391733958-6118255b2b18?w=400&auto=format&fit=crop&q=60' },
        { id: 2, name: 'Formal Italian Suit', category: 'Men', price: '12,200', rating: 4.9, reviews: 86, img: 'https://images.unsplash.com/photo-1594932224828-b4b059b6f6ee?w=400&auto=format&fit=crop&q=60' },
        { id: 3, name: 'Traditional Silk Saree', category: 'Saree', price: '2,800', rating: 4.7, reviews: 210, img: 'https://images.unsplash.com/photo-1585487000160-6e3e5c9429c3?w=400&auto=format&fit=crop&q=60' },
        { id: 4, name: 'Summer Cotton Kurti', category: 'Daily Wear', price: '1,200', rating: 4.5, reviews: 54, img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&auto=format&fit=crop&q=60' },
        { id: 5, name: 'Designer Blouse Piece', category: 'Blouse', price: '999', rating: 4.6, reviews: 32, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&auto=format&fit=crop&q=60' },
        { id: 6, name: 'Bespoke Tuxedo', category: 'Men', price: '15,500', rating: 5.0, reviews: 15, img: 'https://images.unsplash.com/photo-1507679799987-c73774586594?w=400&auto=format&fit=crop&q=60' },
    ]);

    const handleEdit = (id) => {
        alert(`Edit feature for product ${id} coming soon!`);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className="space-y-8 animate-fade-in pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Product <span className="text-[#4C1D95]">Catalog</span></h1>
                    <p className="text-gray-400 font-bold text-sm tracking-wide mt-1 uppercase">Manage your stitched samples and portfolio</p>
                </div>
                <button className="bg-[#4C1D95] text-white px-8 py-3.5 rounded-3xl text-sm font-black tracking-widest uppercase shadow-xl shadow-[#4C1D95]/20 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
                    <Plus className="w-5 h-5" /> Add New Sample
                </button>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="flex-1 md:flex-none relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#4C1D95]" />
                        <input type="text" placeholder="Search samples..." className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold w-full md:w-64 focus:ring-4 focus:ring-[#4C1D95]/5 outline-none transition-all" />
                    </div>
                    <button className="p-2.5 bg-gray-50 border border-gray-100 rounded-xl text-gray-400 hover:text-gray-900 transition-all">
                        <Filter className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-2xl border border-gray-100 shrink-0">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white text-[#4C1D95] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white text-[#4C1D95] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <List className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Content View */}
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onEdit={() => handleEdit(product.id)}
                            onDelete={() => handleDelete(product.id)}
                        />
                    ))}

                    {/* Empty Add Placeholder */}
                    <div className="border-4 border-dashed border-gray-100 rounded-[2.5rem] flex flex-col items-center justify-center p-12 hover:bg-gray-50 hover:border-[#4C1D95]/20 cursor-pointer transition-all group min-h-[400px]">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Plus className="w-8 h-8 text-gray-300 group-hover:text-[#4C1D95]" />
                        </div>
                        <p className="text-sm font-black text-gray-400 uppercase tracking-widest group-hover:text-[#4C1D95]">Add New Item</p>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 border-b border-gray-50">
                                <tr>
                                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Product Image & Name</th>
                                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Category</th>
                                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Rating</th>
                                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Price</th>
                                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 px-8">
                                            <div className="flex items-center gap-4">
                                                <img src={product.img} alt="" className="w-12 h-14 rounded-xl object-cover shadow-sm" />
                                                <h4 className="font-black text-gray-900 tracking-tight">{product.name}</h4>
                                            </div>
                                        </td>
                                        <td className="py-6 px-8">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-3 py-1 bg-gray-50 rounded-lg">{product.category}</span>
                                        </td>
                                        <td className="py-6 px-8">
                                            <div className="flex items-center justify-center gap-1">
                                                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                                <span className="text-xs font-black text-gray-900">{product.rating}</span>
                                            </div>
                                        </td>
                                        <td className="py-6 px-8 text-right font-black text-[#4C1D95]">₹{product.price}</td>
                                        <td className="py-6 px-8">
                                            <div className="flex justify-end gap-3 text-right">
                                                <button onClick={() => handleEdit(product.id)} className="p-2 hover:bg-[#4C1D95]/5 text-gray-400 hover:text-[#4C1D95] rounded-lg transition-colors"><Edit2 className="w-4 h-4" /></button>
                                                <button onClick={() => handleDelete(product.id)} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};
