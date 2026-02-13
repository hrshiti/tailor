import React from 'react';
import { Tag, Clock, ArrowRight } from 'lucide-react';

const PromoBanner = () => {
    return (
        <div className="px-4 py-6">
            <div className="relative overflow-hidden rounded-2xl bg-[#1e3932] text-white p-6 shadow-lg">
                {/* Background Circles Decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2d5246] rounded-full opacity-50"></div>
                <div className="absolute bottom-[-10px] left-[-10px] w-20 h-20 bg-[#2d5246] rounded-full opacity-30"></div>

                <div className="relative z-10 flex flex-col gap-3">
                    <div className="bg-white/20 w-fit px-2 py-1 rounded-md text-[10px] font-bold tracking-wider backdrop-blur-sm flex items-center gap-1">
                        <Tag size={10} /> LIMITED OFFER
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold leading-tight">Get 20% OFF</h2>
                        <p className="text-sm text-gray-200 mt-1">On your first custom stitching order.</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                        <button className="bg-white text-[#1e3932] px-4 py-2 rounded-full text-xs font-bold shadow-sm hover:bg-gray-100 flex items-center gap-2">
                            Book Now <ArrowRight size={12} />
                        </button>
                        <div className="text-[10px] text-gray-300 flex items-center gap-1">
                            <Clock size={10} /> Expires in 24h
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;
