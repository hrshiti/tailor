import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Shirt, ClipboardList, User } from 'lucide-react';

const BottomNav = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { name: 'Services', path: '/services', icon: Shirt },
        { name: 'Store', path: '/store', icon: ShoppingBag },
        { name: 'Orders', path: '/orders', icon: ClipboardList },
        { name: 'Profile', path: '/profile', icon: User },
    ];

    return (
        <div className="bg-white border-t border-gray-100 p-2 pb-6 sm:pb-2 sticky bottom-0 z-50 flex justify-around shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
            {navItems.map((item) => {
                const isActive = location.pathname.startsWith(item.path) || (item.path === '/services' && location.pathname === '/');
                const Icon = item.icon;

                return (
                    <button
                        key={item.name}
                        onClick={() => navigate(item.path)}
                        className="flex flex-col items-center p-2 relative w-16 btn-press"
                    >
                        <Icon
                            className={`h-6 w-6 mb-1 ${isActive ? 'text-[#4C1D95] fill-[#4C1D95]' : 'text-gray-400'}`}
                            strokeWidth={isActive ? 2 : 1.5}
                        />
                        <span className={`text-[10px] sm:text-xs font-semibold ${isActive ? 'text-[#4C1D95]' : 'text-gray-400'}`}>
                            {item.name}
                        </span>
                        {/* Active Dot Indicator */}
                        {isActive && (
                            <div className="absolute -bottom-1 w-1 h-1 bg-[#4C1D95] rounded-full" />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export const MobileFrame = () => {
    return (
        <div className="mobile-container overflow-hidden">
            <div className="flex-1 overflow-x-hidden overflow-y-auto hide-scrollbar bg-gray-50 flex flex-col relative w-full">
                <Outlet />
            </div>
            <BottomNav />
        </div>
    );
};

