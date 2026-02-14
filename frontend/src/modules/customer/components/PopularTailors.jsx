import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

import { TAILORS } from '../data/tailors';

const PopularTailors = () => {
    // Show top 5
    const tailors = TAILORS.slice(0, 5);

    return (
        <div className="px-4 py-2 mb-2">
            <div className="flex justify-between items-end mb-3">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">Top Rated Tailors</h2>
                    <p className="text-xs text-gray-500">Expert craftsmen near you</p>
                </div>
                <Link to="/tailors" className="text-xs font-semibold text-[#1e3932] hover:underline">
                    See All
                </Link>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar snap-x snap-mandatory">
                {tailors.map((tailor) => (
                    <Link
                        to={`/tailor/${tailor.id}`}
                        key={tailor.id}
                        className="flex-shrink-0 w-32 snap-start group cursor-pointer"
                    >
                        <div className="relative mb-2">
                            {/* Image Container with Gradient Overlay on Hover */}
                            <div className="h-32 w-32 rounded-2xl overflow-hidden shadow-sm border-2 border-white relative">
                                <img
                                    src={tailor.image}
                                    alt={tailor.name}
                                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Rating Badge */}
                            <div className="absolute bottom-1 right-1 bg-white/95 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[10px] font-bold shadow-sm flex items-center gap-0.5 border border-gray-100">
                                <Star size={8} className="fill-yellow-400 text-yellow-400" />
                                {tailor.rating}
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-sm font-bold text-gray-900 truncate leading-tight group-hover:text-[#1e3932] transition-colors">{tailor.name}</h3>
                            <p className="text-[10px] text-gray-500 font-medium truncate mt-0.5">{tailor.specialty}</p>

                            <div className="flex items-center justify-center gap-1 mt-1 text-[10px] text-gray-400">
                                <MapPin size={10} />
                                <span>{tailor.distance}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PopularTailors;
