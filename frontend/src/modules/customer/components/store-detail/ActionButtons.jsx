import React from 'react';
import { ShoppingBag, Zap } from 'lucide-react';

const ActionButtons = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 md:static md:shadow-none md:border-0 md:p-0 md:bg-transparent">
            <div className="flex gap-3 max-w-7xl mx-auto">
                <button className="flex-1 bg-white border border-gray-200 text-gray-900 py-3.5 rounded-xl font-bold text-sm shadow-sm hover:bg-gray-50 active:scale-95 transition-all flex items-center justify-center gap-2">
                    <ShoppingBag size={18} />
                    Add to Cart
                </button>
                <button className="flex-1 bg-[#1e3932] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg hover:bg-[#152e28] active:scale-95 transition-all flex items-center justify-center gap-2">
                    <Zap size={18} fill="currentColor" />
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ActionButtons;
