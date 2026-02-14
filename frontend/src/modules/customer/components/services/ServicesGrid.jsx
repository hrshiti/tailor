import React from 'react';
import { Clock, CheckCircle2, Star } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

import { SERVICES } from '../../data/services';

const ServiceCard = ({ service }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = () => {
        // Forward existing state (like tailor selection) to the detail page
        navigate(`/services/${service.id}`, { state: location.state });
    };

    return (
        <div
            onClick={handleNavigate}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300 flex flex-col h-full cursor-pointer"
        >
            {/* Image Section */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
                    {service.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[10px] font-bold shadow-sm flex items-center gap-0.5">
                    <Star size={10} className="fill-yellow-400 text-yellow-400" />
                    {service.rating}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-[#1e3932] transition-colors line-clamp-1">{service.title}</h3>
                    <span className="font-bold text-[#1e3932]">₹{service.basePrice}</span>
                </div>

                <p className="text-xs text-gray-500 line-clamp-2 mb-3 flex-1">{service.description}</p>

                <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-4 bg-gray-50 p-2 rounded-lg">
                    <Clock size={12} />
                    <span>Est. {service.deliveryTime}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
                    <span className="text-green-600 font-medium">Pickup Available</span>
                </div>

                <div className="flex gap-2 mt-auto">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate();
                        }}
                        className="flex-1 py-2 px-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        View Details
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate();
                        }}
                        className="flex-1 py-2 px-3 rounded-xl bg-[#1e3932] text-white text-xs font-semibold hover:bg-[#152e28] shadow-sm transition-colors"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const ServicesGrid = () => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">All Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {SERVICES.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;
