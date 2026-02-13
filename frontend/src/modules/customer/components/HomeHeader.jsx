import React from 'react';
import { Search, Bell, ShoppingBag } from 'lucide-react';
import { Input } from '../../../components/ui/Input';

const HomeHeader = ({ user }) => {
    return (
        <div className="sticky top-0 z-40 bg-gradient-to-b from-[#e6f4f1] to-[#f3f9f8] px-4 pb-4 pt-safe rounded-b-3xl shadow-sm">
            {/* Top Row: Greeting & Icons */}
            <div className="flex justify-between items-center mb-4 pt-4">
                <div>
                    <p className="text-xs text-gray-500 font-medium tracking-wide">Good Morning,</p>
                    <h1 className="text-xl font-bold text-[#1e3932]">
                        {user?.name || 'Guest User'} 👋
                    </h1>
                </div>
                <div className="flex gap-3">
                    <button className="relative p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                        <Bell size={20} className="text-gray-700" />
                        <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                        <ShoppingBag size={20} className="text-gray-700" />
                    </button>
                    <div className="h-10 w-10 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-sm">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || 'User'}`} alt="Profile" />
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                    className="pl-10 h-12 rounded-2xl border-none shadow-sm bg-white/80 backdrop-blur-sm focus:bg-white transition-all text-base"
                    placeholder="Search tailored styles, fabrics..."
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-[#1e3932] rounded-lg">
                    {/* Scan Icon Placeholder */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default HomeHeader;
