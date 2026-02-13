import React from 'react';
import { Scissors, ShoppingBag } from 'lucide-react';
import { cn } from '../../../../utils/cn';

const FabricSelector = ({ selected, onSelect }) => {
    return (
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Fabric Source</h3>

            <div className="grid grid-cols-2 gap-3">
                {/* Customer Provides */}
                <div
                    onClick={() => onSelect('customer')}
                    className={cn(
                        "p-3 rounded-xl border cursor-pointer transition-all text-center",
                        selected === 'customer' ? "border-[#1e3932] bg-[#f2fcf9] ring-1 ring-[#1e3932]" : "border-gray-100 hover:border-gray-200"
                    )}
                >
                    <div className="w-10 h-10 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mb-2">
                        <Scissors size={20} />
                    </div>
                    <p className="text-xs font-bold text-gray-900">I will provide</p>
                    <p className="text-[10px] text-gray-500 mt-1">Pickup from your location</p>
                </div>

                {/* Platform Provides */}
                <div
                    onClick={() => onSelect('platform')}
                    className={cn(
                        "p-3 rounded-xl border cursor-pointer transition-all text-center opacity-70 hover:opacity-100",
                        selected === 'platform' ? "border-[#1e3932] bg-[#f2fcf9] ring-1 ring-[#1e3932]" : "border-gray-100 hover:border-gray-200"
                    )}
                >
                    <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-[8px] font-bold px-1.5 py-0.5 rounded">
                        COMING SOON
                    </div>
                    <div className="w-10 h-10 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-2">
                        <ShoppingBag size={20} />
                    </div>
                    <p className="text-xs font-bold text-gray-900">Buy from Store</p>
                    <p className="text-[10px] text-gray-500 mt-1">Premium fabrics available</p>
                </div>
            </div>
        </div>
    );
};

export default FabricSelector;
