import React from 'react';
import { Bell, ShoppingBag, MapPin, ChevronDown, Frame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ServicesHeader = ({ searchQuery, onSearchChange }) => {
    const navigate = useNavigate();

    const handleNotificationClick = () => {
        alert("You have no new notifications");
    };

    return (
        <div className="bg-[#4C1D95] rounded-b-3xl px-5 pt-12 pb-6 text-white w-full sticky top-0 z-40">
            {/* Top row: Greeting and Icons */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <p className="text-sm text-gray-300 mb-1">Good Morning,</p>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        Blair <span className="text-xl">👋</span>
                    </h1>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleNotificationClick}
                        className="relative p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors btn-press"
                    >
                        <Bell className="w-5 h-5 text-white" />
                        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-[#4C1D95]" />
                    </button>
                    <button
                        onClick={() => navigate('/store')}
                        className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors btn-press"
                    >
                        <ShoppingBag className="w-5 h-5 text-white" />
                    </button>
                    <button
                        onClick={() => navigate('/profile')}
                        className="w-10 h-10 rounded-full overflow-hidden border border-white/20 ml-1 btn-press"
                    >
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Blair&backgroundColor=d1d5db"
                            alt="Profile"
                            className="w-full h-full object-cover bg-gray-200"
                        />
                    </button>
                </div>
            </div>

            {/* Global Search Bar */}
            <div className="relative mb-5">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search tailored styles, fabrics..."
                    className="w-full bg-[#E8EDEA] text-gray-800 placeholder-gray-500 rounded-2xl py-3.5 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-green-500/50 font-medium"
                />
                <button className="absolute right-2 top-2 bg-[#4C1D95] p-1.5 rounded-xl">
                    <Frame className="w-5 h-5 text-white" />
                </button>
            </div>

            {/* Location Strip */}
            <div className="flex justify-between items-center bg-[#4C1D95]/90 py-1 border-t border-white/10 -mx-5 px-5 mt-4 -mb-4">
                <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gray-300" />
                    <span className="font-medium">Srinagar, indore</span>
                </div>
                <button className="flex items-center gap-1 text-xs font-semibold text-gray-200 uppercase tracking-wide">
                    CHANGE <ChevronDown className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

