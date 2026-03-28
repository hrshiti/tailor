import React from 'react';
import { ShieldCheck, Truck, Zap } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-2xl shadow-sm border border-gray-100 my-4 transition-all duration-300">
            <div className="flex justify-between text-center">
                <div className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 bg-green-50 rounded-full flex items-center justify-center text-[#1e3932] shadow-sm">
                        <ShieldCheck size={20} strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-bold text-gray-700 tracking-tight">Verified Tailors</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                        <Truck size={20} strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-bold text-gray-700 tracking-tight">Free Pickup</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shadow-sm">
                        <Zap size={20} fill="currentColor" strokeWidth={0} />
                    </div>
                    <span className="text-[10px] font-bold text-gray-700 tracking-tight">Fast Delivery</span>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
