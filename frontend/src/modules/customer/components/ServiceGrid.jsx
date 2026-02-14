import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

import img1 from '../../../assets/img1.jpeg';
import img3 from '../../../assets/img3.jpeg';
import img5 from '../../../assets/img5.jpeg';
import img8 from '../../../assets/img8.avif';

const services = [
    {
        id: 1,
        title: 'Kurti Stitching',
        price: '₹499',
        image: img1,
        rating: 4.8
    },
    {
        id: 2,
        title: 'Salwar Kameez',
        price: '₹899',
        image: img3,
        rating: 4.9
    },
    {
        id: 3,
        title: 'Blouse Design',
        price: '₹599',
        image: img5,
        rating: 4.7
    },
    {
        id: 4,
        title: 'Alterations',
        price: '₹99',
        image: img8,
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
