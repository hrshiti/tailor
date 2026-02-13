import React from 'react';
import { Clock, CheckCircle2, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const mockServices = [
    {
        id: 1,
        title: 'Custom Kurti Stitching',
        description: 'Perfect fit with your choice of neck & sleeve design. Includes lining.',
        price: 499,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1583391733958-e02376e9ced3?auto=format&fit=crop&q=80&w=800', // Woman in Kurti/Ethnic wear
        tags: ['Popular', 'Express'],
        deliveryTime: '3-5 Days'
    },
    {
        id: 2,
        title: 'Designer Blouse',
        description: 'Intricate embroidery, padding options, and latkan customization.',
        price: 899,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800', // Saree Blouse detail
        tags: ['Wedding', 'Handwork'],
        deliveryTime: '5-7 Days'
    },
    {
        id: 3,
        title: 'Salwar Kameez Set',
        description: 'Complete set stitching with salwar, pants, or palazzo options.',
        price: 1200,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1631233085523-8890250df044?auto=format&fit=crop&q=80&w=800', // Salwar Kameez
        tags: ['New'],
        deliveryTime: '4-6 Days'
    },
    {
        id: 4,
        title: 'Lehenga Choli',
        description: 'Heavy bridal & party wear lehenga stitching with can-can.',
        price: 2500,
        rating: 5.0,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800', // Lehenga
        tags: ['Premium', 'Bridal'],
        deliveryTime: '7-10 Days'
    },
    {
        id: 5,
        title: 'Anarkali Suit',
        description: 'Flowy floor-length Anarkali stitching with custom flair.',
        price: 1800,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1579782539097-f5dc9e843285?auto=format&fit=crop&q=80&w=800', // Anarkali
        tags: ['Trending'],
        deliveryTime: '6-8 Days'
    },
    {
        id: 6,
        title: 'Gown Stitching',
        description: 'Western or Indo-western gown stitching for parties.',
        price: 2200,
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800', // Gown
        tags: ['Party Wear'],
        deliveryTime: '6-8 Days'
    }
];

const ServiceCard = ({ service }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/services/${service.id}`);
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
                    <span className="font-bold text-[#1e3932]">₹{service.price}</span>
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
                {mockServices.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;
