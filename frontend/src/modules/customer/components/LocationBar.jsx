import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

const LocationBar = () => {
    return (
        <div className="bg-[#1e3932] text-white px-4 py-2 flex justify-between items-center text-sm shadow-md relative z-30">
            <div className="flex items-center gap-2 truncate max-w-[70%]">
                <MapPin size={16} className="text-[#d4e9e2]" />
                <span className="font-medium truncate">Srinagar, Kashmir - 190001</span>
            </div>
            <button className="text-[#d4e9e2] text-xs font-semibold flex items-center gap-1 hover:text-white transition-colors">
                CHANGE
                <ChevronDown size={14} />
            </button>
        </div>
    );
};

export default LocationBar;
