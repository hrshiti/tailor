import React from 'react';
import { Share2, Clock, Star, MapPin } from 'lucide-react';

const ServiceHero = ({ service }) => {
    return (
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
            {/* Image Slider Placeholder */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm cursor-pointer hover:bg-white transition-colors">
                    <Share2 size={18} className="text-gray-700" />
                </div>
            </div>

            {/* Title & Info */}
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">{service.title}</h1>
                    <p className="text-sm text-gray-500 mt-1">{service.category}</p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-500 mb-0.5">Starting from</p>
                    <span className="text-2xl font-bold text-[#1e3932]">₹{service.basePrice}</span>
                </div>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-3 text-xs text-gray-600 mt-3 border-t border-gray-50 pt-3">
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md text-yellow-700 font-medium">
                    <Star size={14} className="fill-current" />
                    <span>{service.rating} ({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-md text-blue-700 font-medium">
                    <Clock size={14} />
                    <span>Avg. {service.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md text-green-700 font-medium ml-auto">
                    <MapPin size={14} />
                    <span>Pickup Available</span>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;
