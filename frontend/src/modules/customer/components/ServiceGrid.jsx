import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const services = [
    {
        id: 1,
        title: 'Kurti Stitching',
        price: '₹499',
        image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=400',
        rating: 4.8
    },
    {
        id: 2,
        title: 'Salwar Kameez',
        price: '₹899',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400',
        rating: 4.9
    },
    {
        id: 3,
        title: 'Blouse Design',
        price: '₹599',
        image: 'https://images.unsplash.com/photo-1596482811366-419b6f3c05c0?auto=format&fit=crop&q=80&w=400', // Replaced with a more generic fabric/fashion image
        rating: 4.7
    },
    {
        id: 4,
        title: 'Alterations',
        price: '₹99',
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=400',
        rating: 4.6
    }
];

const ServiceGrid = () => {
    const navigate = useNavigate();

    return (
        <div className="px-4 py-4">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">Popular Services</h2>
                    <p className="text-xs text-gray-500">Custom fitted for you</p>
                </div>
                <Link to="/services" className="text-xs font-semibold text-[#1e3932] flex items-center gap-1 hover:underline">
                    View All <ArrowRight size={12} />
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                    <div
                        key={service.id}
                        onClick={() => navigate(`/services/${service.id}`)}
                        className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow"
                    >
                        <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-full flex items-center gap-1 text-[10px] font-bold shadow-sm">
                                <Star size={10} className="fill-yellow-400 text-yellow-400" />
                                {service.rating}
                            </div>
                        </div>
                        <div className="px-1">
                            <h3 className="font-semibold text-gray-900 text-sm truncate">{service.title}</h3>
                            <p className="text-xs text-gray-500 mt-1">Starts from <span className="font-bold text-[#1e3932]">{service.price}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceGrid;
