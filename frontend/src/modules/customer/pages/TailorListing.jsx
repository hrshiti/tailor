import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Filter, Star, MapPin, Heart } from 'lucide-react';

import { TAILORS } from '../data/tailors';

const TailorListing = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const filteredTailors = TAILORS.filter(t =>
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.specialty.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 pb-20 font-sans">
            {/* 1. Sticky Header */}
            <div className="sticky top-0 z-50 bg-[#1e3932] shadow-md px-4 py-4 pt-safe">
                <div className="flex items-center gap-3 mb-4">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-lg font-bold text-white">Top Rated Tailors</h1>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                        type="text"
                        placeholder="Search for tailors, specialists..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-white/10 backdrop-blur-md rounded-xl text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-white/30"
                    />
                </div>
            </div>

            {/* 2. List */}
            <div className="p-4 grid gap-4">
                {filteredTailors.length > 0 ? (
                    filteredTailors.map(tailor => (
                        <Link
                            to={`/tailor/${tailor.id}`}
                            key={tailor.id}
                            className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex gap-4 active:scale-[0.99] transition-transform"
                        >
                            <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                                <img src={tailor.image} alt={tailor.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-gray-900 truncate">{tailor.name}</h3>
                                    <div className="flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded text-[10px] font-bold text-green-700">
                                        {tailor.rating} <Star size={8} className="fill-current" />
                                    </div>
                                </div>
                                <p className="text-xs text-green-700 font-medium mb-1">{tailor.specialty}</p>

                                <div className="flex items-center gap-3 text-[10px] text-gray-500 mb-2">
                                    <span className="flex items-center gap-1"><MapPin size={10} /> {tailor.distance}</span>
                                    <span>•</span>
                                    <span>{tailor.reviews} Reviews</span>
                                </div>

                                <div className="flex gap-2">
                                    {tailor.tags.map((tag, i) => (
                                        <span key={i} className="text-[9px] bg-gray-50 text-gray-500 px-1.5 py-0.5 rounded border border-gray-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="text-center py-10 opacity-50">
                        <p>No tailors found matching "{search}"</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TailorListing;
