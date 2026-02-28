import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Wrench, Package, FileSearch, Newspaper, MapPin, Star } from 'lucide-react';
import { ServicesHeader } from '../../components/layout/ServicesHeader';

export const ServicesDashboard = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const tailors = [
        { id: 1, name: 'Masterji Ahmed', spec: 'Bridal Specialist', rating: '4.9', dist: '1.2 km', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200' },
        { id: 2, name: 'Fashion Hub', spec: 'Suit Expert', rating: '4.8', dist: '2.5 km', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200' },
        { id: 3, name: 'Priya Creation', spec: 'Designer Blouses', rating: '4.7', dist: '0.8 km', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200' },
    ];

    const filteredTailors = tailors.filter(tailor =>
        tailor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tailor.spec.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleActionClick = (action) => {
        if (action.path === '#') {
            alert(`Feature "${action.title}" is coming soon!`);
        } else {
            navigate(action.path);
        }
    };

    return (
        <div className="bg-white min-h-full pb-20">
            <ServicesHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

            <div className="px-5 mt-6">
                {/* Promotion Banner */}
                <div className="bg-[#7C3AED] rounded-3xl p-5 text-white shadow-lg relative overflow-hidden h-[180px]">
                    <div className="relative z-10 w-3/5 text-left">
                        <span className="inline-block bg-white/20 text-xs font-semibold px-2 py-1 rounded-md mb-3 flex items-center justify-center gap-1 w-max">
                            <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" /> PREMIUM SERVICE
                        </span>
                        <h2 className="text-2xl font-bold leading-tight mb-2 uppercase tracking-wide">
                            Express<br />Delivery
                        </h2>
                        <p className="text-xs text-gray-200 mb-4 opacity-90">
                            Get your outfit stitched in 24 hours
                        </p>
                        <button onClick={() => navigate('/order-flow')} className="btn-press bg-white text-[#7C3AED] px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg">
                            BOOK NOW <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    {/* Abstract Illustration Placeholder */}
                    <div className="absolute right-[-10px] bottom-[-10px] w-36 h-36 bg-[#E11D48] rounded-full flex items-center justify-center object-cover border-4 border-[#7C3AED]">
                        <div className="text-white relative z-20 flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Slider Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        <div className="w-4 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                    </div>
                </div>

                {/* Action Grid */}
                <div className="grid grid-cols-4 gap-3 mt-8">
                    {[
                        { id: 1, title: 'STORE', icon: Wrench, color: 'bg-red-50 text-red-600', hue: '#FFEAEA', path: '/store' },
                        { id: 2, title: 'MY ORDERS', icon: Package, color: 'bg-blue-50 text-blue-600', hue: '#F0F5FA', path: '/orders' },
                        { id: 3, title: 'REFERENCE', icon: FileSearch, color: 'bg-purple-50 text-purple-600', hue: '#F8F3FF', path: '#' },
                        { id: 4, title: 'REFER & EARN', icon: Newspaper, color: 'bg-orange-50 text-orange-600', hue: '#FFF0EA', path: '#' }
                    ].map(action => (
                        <div
                            key={action.id}
                            onClick={() => handleActionClick(action)}
                            className="flex flex-col items-center gap-2 group cursor-pointer btn-press"
                        >
                            <div
                                className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-sm transition-transform group-hover:scale-105`}
                                style={{ backgroundColor: action.hue }}
                            >
                                <div className="bg-white p-2.5 rounded-full shadow-sm relative overflow-hidden">
                                    <action.icon className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
                                    {/* Decorative colorful circle behind icon */}
                                    <div className={`absolute top-0 right-0 w-3 h-3 rounded-full ${action.color.split(' ')[0]} -mr-1 -mt-1`} />
                                </div>
                            </div>
                            <span className="text-[9px] font-bold text-gray-600 tracking-wide">{action.title}</span>
                        </div>
                    ))}
                </div>

                {/* Top Rated Tailors */}
                <div className="mt-10">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                                {searchQuery ? 'Search Results' : 'Top Rated Tailors'}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {searchQuery ? `Found ${filteredTailors.length} results` : 'Expert craftsmen near you'}
                            </p>
                        </div>
                        {!searchQuery && <button className="text-sm font-bold text-gray-900 mb-1 hover:text-[#4C1D95] transition-colors btn-press px-2 py-1 rounded-md hover:bg-gray-50">See All</button>}
                    </div>

                    <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-5 px-5 snap-x">
                        {filteredTailors.length > 0 ? filteredTailors.map(tailor => (
                            <div key={tailor.id} className="min-w-[140px] snap-center cursor-pointer group btn-press">
                                <div className="w-32 h-36 rounded-[24px] overflow-hidden relative mb-3 shadow-sm hover:shadow-md transition-shadow">
                                    <img src={tailor.img} alt={tailor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute bottom-2 right-2 bg-white px-2 py-0.5 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> {tailor.rating}
                                    </div>
                                </div>
                                <h4 className="font-bold text-gray-900 leading-tight">{tailor.name}</h4>
                                <p className="text-xs text-gray-500 mb-0.5">{tailor.spec}</p>
                                <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                                    <MapPin className="w-3 h-3" /> {tailor.dist}
                                </div>
                            </div>
                        )) : (
                            <div className="w-full py-10 text-center text-gray-500">
                                No tailors found matching "{searchQuery}"
                            </div>
                        )}
                    </div>
                </div>

                {/* Active Order Card */}
                <div onClick={() => navigate('/orders/tracking/ORD-4821')} className="mt-8 border border-gray-100 bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative overflow-hidden cursor-pointer hover:border-gray-200 transition-all btn-press group">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-bold text-gray-400 tracking-wider">ACTIVE ORDER #4821</span>
                        <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-md text-[10px] font-bold tracking-wide flex items-center gap-1.5">
                            <Package className="w-3 h-3" /> In Progress
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Kurti Stitching</h3>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-100 rounded-full mb-3 overflow-hidden">
                        <div className="h-full bg-[#4C1D95] w-[60%] rounded-full relative">
                            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <p className="text-sm font-medium text-gray-500">Expected by Feb 15</p>
                        <span className="text-sm font-bold text-[#4C1D95]">Track Now</span>
                    </div>
                </div>

                {/* Featured Products */}
                <div className="mt-10 mb-6">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Featured Products</h3>
                            <p className="text-sm text-gray-500">Trending styles for you</p>
                        </div>
                        <button onClick={() => navigate('/store')} className="text-sm font-bold text-[#4C1D95] hover:underline btn-press px-2">View Store</button>
                    </div>

                    <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-5 px-5 snap-x">
                        {[
                            { id: 1, title: 'Anarkali Kurti', price: '1,499', img: 'https://images.unsplash.com/photo-1583391733958-6118255b2b18?w=200&auto=format&fit=crop&q=60' },
                            { id: 2, title: 'Cotton Suit', price: '2,199', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=200&auto=format&fit=crop&q=60' },
                            { id: 3, title: 'Silk Saree', price: '3,499', img: 'https://images.unsplash.com/photo-1585487000160-6e3e5c9429c3?w=200&auto=format&fit=crop&q=60' },
                            { id: 4, title: 'Summer Dress', price: '999', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&auto=format&fit=crop&q=60' },
                        ].map(product => (
                            <div key={product.id} onClick={() => navigate('/store')} className="min-w-[120px] snap-center cursor-pointer group btn-press">
                                <div className="w-28 h-32 rounded-2xl overflow-hidden relative mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                                    <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="font-bold text-gray-900 text-xs leading-tight mb-1">{product.title}</h4>
                                <p className="text-xs font-bold text-[#4C1D95]">₹{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
