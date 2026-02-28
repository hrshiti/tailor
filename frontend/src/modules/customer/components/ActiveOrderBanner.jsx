import React from 'react';
import { Truck, CheckCircle2 } from 'lucide-react';

const ActiveOrderBanner = ({ order }) => {
    if (!order) return null;

    return (
        <div className="px-4 mb-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="flex justify-between items-start mb-2 relative z-10">
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Active Order #{order.id}</p>
                        <h3 className="font-bold text-gray-900 mt-0.5">{order.service}</h3>
                    </div>
                    <div className="bg-orange-50 text-orange-600 px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                        <Truck size={12} /> {order.status}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2 relative z-10">
                    <div className="bg-[#1e3932] h-1.5 rounded-full w-[60%]"></div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-500 relative z-10">
                    <span>Expected by {order.deliveryDate}</span>
                    <button className="text-[#1e3932] font-semibold hover:underline">Track Now</button>
                </div>

                {/* Background Decoration */}
                <div className="absolute right-[-10px] bottom-[-10px] opacity-5 rotate-[-15deg]">
                    <CheckCircle2 size={80} />
                </div>
            </div>
        </div>
    );
};

export default ActiveOrderBanner;
