import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Clock, Award, Phone, ShieldCheck, Heart, Share2, Scissors, ChevronRight, Tag, CheckCircle2, Info, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/store/ProductCard';
import useCheckoutStore from '../../../store/checkoutStore';

import { TAILORS } from '../data/tailors';

// Mock Products for portfolio
const TAILOR_PRODUCTS = [
    {
        id: 101,
        title: 'Custom Bridal Lehenga',
        name: 'Custom Bridal Lehenga',
        price: 15499,
        originalPrice: 18999,
        discount: 18,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
        rating: 4.9,
        category: 'Bridal'
    },
    {
        id: 102,
        title: 'Embroidered Blouse',
        name: 'Embroidered Blouse',
        price: 2499,
        originalPrice: 3499,
        discount: 28,
        image: 'https://images.unsplash.com/photo-1622123512803-51b816a75f28?w=800',
        rating: 4.7,
        category: 'Festive'
    }
];

const TailorProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const setTailorInStore = useCheckoutStore(state => state.setTailor);
    const [tailor, setTailor] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const found = TAILORS.find(t => t.id === parseInt(id));
        setTailor(found || TAILORS[0]);
    }, [id]);

    if (!tailor) return null;

    return (
        <div className="min-h-screen bg-[#f8faf9] pb-32 font-sans overflow-x-hidden">
            {/* 1. Dynamic Header with Parallax-like feel */}
            <div className="relative h-48 w-full overflow-hidden bg-[#1e3932]">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-10"></div>
                <img
                    src={tailor.image}
                    alt="Cover"
                    className="w-full h-full object-cover blur-sm scale-110 opacity-60"
                />

                <div className="absolute top-0 left-0 right-0 z-20 p-4 pt-safe flex justify-between items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 active:scale-90 transition-all"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div className="flex gap-2">
                        <button className="p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 active:scale-90 transition-all">
                            <Share2 size={18} />
                        </button>
                        <button
                            onClick={() => setIsFavorite(!isFavorite)}
                            className={`p-2.5 backdrop-blur-md rounded-full border border-white/20 active:scale-90 transition-all ${isFavorite ? 'bg-rose-500 text-white border-rose-500' : 'bg-white/10 text-white'}`}
                        >
                            <Heart size={18} className={isFavorite ? 'fill-current' : ''} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. Overlapping Profile Card */}
            <div className="relative z-30 -mt-16 px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-gray-100"
                >
                    <div className="flex gap-5 items-start">
                        <div className="relative shrink-0">
                            <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl rotate-2 group">
                                <img src={tailor.image} alt={tailor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            {tailor.verified && (
                                <div className="absolute -bottom-1 -right-1 bg-[#1e3932] p-1.5 rounded-full border-2 border-white shadow-lg ring-4 ring-[#1e3932]/10">
                                    <ShieldCheck size={14} className="text-white" />
                                </div>
                            )}
                        </div>
                        <div className="pt-2 flex-1">
                            <div className="flex justify-between items-start">
                                <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-none mb-1">{tailor.name}</h2>
                            </div>
                            <div className="flex items-center gap-1.5 mb-3">
                                <div className="bg-[#1e3932] text-white text-[8px] font-black px-2 py-0.5 rounded-full tracking-widest uppercase">Expert Artisan</div>
                                <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{tailor.specialty}</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs">
                                <div className="flex items-center gap-1.5 bg-[#f2fcf9] px-2 py-1 rounded-lg">
                                    <Star size={12} className="fill-[#1e3932] text-[#1e3932]" />
                                    <span className="font-black text-[#1e3932]">{tailor.rating}</span>
                                    <span className="text-[#1e3932]/40 text-[10px] font-bold">({tailor.reviews})</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-gray-400 font-bold">
                                    <MapPin size={12} className="text-[#1e3932]/30" />
                                    <span>{tailor.distance} away</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="mt-8 grid grid-cols-3 gap-3">
                        <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-50 text-center">
                            <Award size={20} className="mx-auto mb-1.5 text-[#1e3932]" />
                            <span className="block text-xs font-black text-gray-900 leading-none">{tailor.experience}</span>
                            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter mt-1 block">Experience</span>
                        </div>
                        <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100 text-center">
                            <CheckCircle2 size={20} className="mx-auto mb-1.5 text-green-600" />
                            <span className="block text-xs font-black text-gray-900 leading-none">{tailor.ordersCompleted}</span>
                            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter mt-1 block">Finished By</span>
                        </div>
                        <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100 text-center">
                            <Clock size={20} className="mx-auto mb-1.5 text-amber-600" />
                            <span className="block text-xs font-black text-gray-900 leading-none">{tailor.avgDelivery}</span>
                            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter mt-1 block">Delivery</span>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="mt-6 p-4 bg-gray-50/80 rounded-2xl border border-gray-100">
                        <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-2 opacity-40">Artisan's Bio</h3>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">
                            {tailor.about}
                        </p>
                    </div>

                    {/* Location Sneak Peek */}
                    <div className="mt-6">
                        <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-3 opacity-40 px-1">Artisan's Atelier</h3>
                        <div className="bg-gray-100 h-24 rounded-2xl relative overflow-hidden active:scale-[0.99] transition-transform">
                            <img src="https://images.unsplash.com/photo-1524613032530-449a5d94c285?w=600" className="w-full h-full object-cover blur-[1px] grayscale-[0.5]" alt="Map" />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white shadow-xl flex items-center gap-2">
                                    <MapPin size={14} className="text-red-500" />
                                    <span className="text-[10px] font-black text-gray-800 uppercase tracking-widest">Open in Maps</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-400 font-bold mt-2 px-1 flex items-center gap-1">
                            <Info size={10} /> {tailor.location?.address}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* 3. Shop Fabrics (High Impact) */}
            {tailor.fabrics && tailor.fabrics.length > 0 && (
                <div className="mt-10 px-4">
                    <div className="flex justify-between items-center mb-6 px-2">
                        <div>
                            <h3 className="text-xl font-black text-gray-900 tracking-tight">Artisan's Collection</h3>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Exclusive fabrics available in-store</p>
                        </div>
                        <div className="p-2.5 bg-[#1e3932]/5 rounded-2xl border border-[#1e3932]/5">
                            <Tag size={18} className="text-[#1e3932]" />
                        </div>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar snap-x">
                        {tailor.fabrics.map((fabric, idx) => (
                            <motion.div
                                key={fabric.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="snap-start flex-shrink-0 w-52"
                                onClick={() => {
                                    navigate(`/fabric/${fabric.id}`);
                                }}
                            >
                                <div className="bg-white rounded-[2.5rem] p-3 shadow-md border border-gray-100 group cursor-pointer hover:shadow-xl transition-all duration-500 overflow-hidden">
                                    <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-3 relative shadow-inner">
                                        <img src={fabric.image} alt={fabric.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute top-3 left-3">
                                            <div className="bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg border border-white shadow-sm">
                                                <span className="text-[8px] font-black text-[#1e3932] uppercase">{fabric.category}</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest mb-2 flex items-center gap-1">Quick View <ChevronRight size={12} /></span>
                                        </div>
                                    </div>
                                    <div className="px-2">
                                        <h4 className="text-[13px] font-black text-gray-800 truncate mb-1">{fabric.name}</h4>
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-col">
                                                <p className="text-sm font-black text-[#1e3932]">₹{fabric.price}</p>
                                                <p className="text-[9px] text-gray-400 font-bold uppercase">Incl. Taxes</p>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-[#f2fcf9] flex items-center justify-center text-[#1e3932] shadow-sm transform group-hover:rotate-12 transition-transform">
                                                <Scissors size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* 4. Portfolio / Designs */}
            <div className="mt-10 px-4">
                <div className="flex justify-between items-center mb-6 px-2">
                    <div>
                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Signature Designs</h3>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Inspired by traditional masteries</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {TAILOR_PRODUCTS.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Sticky Action Footer - DUAL ACTION */}
            <div className="fixed bottom-0 left-0 right-0 p-5 pb-safe bg-white/80 backdrop-blur-2xl border-t border-gray-100 z-[40] animate-in slide-in-from-bottom">
                <div className="max-w-md mx-auto flex gap-3">
                    <button
                        onClick={() => {
                            setTailorInStore(tailor.id, tailor.name);
                            navigate('/services', { state: { fabricSource: 'customer' } });
                        }}
                        className="flex-1 bg-white border-2 border-[#1e3932] text-[#1e3932] py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest active:scale-95 transition-transform flex flex-col items-center justify-center gap-0.5"
                    >
                        <Scissors size={16} />
                        <span>Stitch My Fabric</span>
                    </button>
                    <button
                        onClick={() => {
                            const fabricSection = document.querySelector('.mt-10');
                            fabricSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex-[1.4] bg-[#1e3932] text-white py-4 rounded-2xl shadow-xl shadow-[#1e3932]/30 font-black text-[11px] uppercase tracking-widest active:scale-95 transition-transform flex flex-col items-center justify-center gap-0.5"
                    >
                        <ShoppingBag size={16} />
                        <span>Pick Tailor Fabric</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TailorProfile;
