import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
    Menu,
    Bell,
    Home,
    Briefcase,
    User,
    History
} from 'lucide-react';

const TailorBottomNav = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { name: 'Dashboard', path: '/tailor', icon: Home },
        { name: 'Active Jobs', path: '/tailor/jobs', icon: Briefcase },
        { name: 'History', path: '/tailor/history', icon: History },
        { name: 'Profile', path: '/tailor/profile', icon: User },
    ];

    return (
        <div className="bg-white border-t border-gray-100 p-2 pb-6 sm:pb-2 sticky bottom-0 z-50 flex justify-around shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
            {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== '/tailor' && location.pathname.startsWith(item.path));
                const Icon = item.icon;

                return (
                    <button
                        key={item.name}
                        onClick={() => navigate(item.path)}
                        className="flex flex-col items-center p-2 relative w-16"
                    >
                        <Icon
                            className={`h-6 w-6 mb-1 ${isActive ? 'text-[#4C1D95]' : 'text-gray-400'}`}
                            strokeWidth={isActive ? 2.5 : 1.5}
                        />
                        <span className={`text-[10px] sm:text-xs font-semibold ${isActive ? 'text-[#4C1D95]' : 'text-gray-400'}`}>
                            {item.name}
                        </span>
                        {isActive && (
                            <div className="absolute -bottom-1 w-1 h-1 bg-[#4C1D95] rounded-full" />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

const TailorHeader = () => {
    return (
        <div className="bg-[#4C1D95] text-white px-5 py-4 w-full sticky top-0 z-40 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
                <button className="text-gray-200 hover:text-white">
                    <Menu className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-bold tracking-tight">Tailor<span className="text-green-400">HUB</span></h1>
            </div>
            <div className="flex gap-4 items-center">
                <button className="relative">
                    <Bell className="w-5 h-5 text-gray-200 hover:text-white" />
                </button>
                <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden bg-white items-center justify-center flex">
                    <span className="text-lg font-bold text-[#4C1D95]">M</span>
                </div>
            </div>
        </div>
    );
};

export const TailorLayout = () => {
    return (
        <div className="mobile-container overflow-hidden bg-gray-50 flex flex-col">
            <TailorHeader />
            <div className="flex-1 overflow-x-hidden overflow-y-auto hide-scrollbar w-full relative">
                <div className="pb-8">
                    <Outlet />
                </div>
            </div>
            <TailorBottomNav />
        </div>
    );
};

