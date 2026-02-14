import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Clock, Award, Phone } from 'lucide-react';
import ProductCard from '../components/store/ProductCard';

import { TAILORS } from '../data/tailors';

// Mock Products for the tailor (keep this local for now or move to data file)
const TAILOR_PRODUCTS = [
    {
        id: 101,
        title: 'Custom Bridal Lehenga',
        name: 'Custom Bridal Lehenga',
        price: 15499,
        originalPrice: 18999,
        discount: 18,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
        rating: 4.9
    },
    {
        id: 102,
        title: 'Embroidered Blouse',
        name: 'Embroidered Blouse',
        price: 2499,
        originalPrice: 3499,
        discount: 28,
        image: 'https://images.unsplash.com/photo-1622123512803-51b816a75f28?w=800',
        rating: 4.7
    }
];

const TailorProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tailor, setTailor] = useState(null);

    useEffect(() => {
        // Fetch tailor details
        const found = TAILORS.find(t => t.id === parseInt(id));
        setTailor(found || TAILORS[0]); // Fallback to first if not found
    }, [id]);

    if (!tailor) return null;

    return (
        <div className="min-h-screen bg-gray-50 pb-20 font-sans">
            {/* 1. Header */}
            <div className="sticky top-0 z-50 bg-[#1e3932] text-white px-4 py-4 flex items-center gap-3">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-lg font-bold">Tailor Profile</h1>
            </div>

            {/* 2. Hero Profile */}
            <div className="bg-white p-6 shadow-sm border-b border-gray-100">
                <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md border border-gray-100 shrink-0">
                        <img src={tailor.image} alt={tailor.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">{tailor.name}</h2>
                        <span className="inline-block bg-[#1e3932]/10 text-[#1e3932] text-xs font-bold px-2 py-0.5 rounded-md mt-1 mb-2">
                            {tailor.specialty}
                        </span>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                <span className="font-bold text-gray-900">{tailor.rating}</span>
                                <span>({tailor.reviews})</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin size={12} />
                                <span>{tailor.distance}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                        <Award size={18} className="mx-auto mb-1 text-[#1e3932]" />
                        <span className="block text-xs font-bold text-gray-900">{tailor.experience}</span>
                        <span className="text-[10px] text-gray-400 uppercase font-bold">Exp</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                        <Clock size={18} className="mx-auto mb-1 text-[#1e3932]" />
                        <span className="block text-xs font-bold text-gray-900">Open</span>
                        <span className="text-[10px] text-gray-400 uppercase font-bold">Now</span>
                    </div>
                    <button className="bg-[#1e3932] text-white p-3 rounded-xl shadow-lg shadow-[#1e3932]/20 flex flex-col items-center justify-center active:scale-95 transition-transform">
                        <Phone size={18} className="mb-1" />
                        <span className="text-[10px] font-bold uppercase">Call</span>
                    </button>
                </div>

                <div className="mt-6">
                    <h3 className="text-sm font-bold text-gray-900 mb-2">About</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        {tailor.about}
                    </p>
                </div>
            </div>

            {/* 3. Portfolio / Products */}
            <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-4 px-1">Portfolio & Designs</h3>
                <div className="grid grid-cols-2 gap-4">
                    {TAILOR_PRODUCTS.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default TailorProfile;
