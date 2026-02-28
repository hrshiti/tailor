import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    ShoppingBag,
    ClipboardList,
    User,
    Settings,
    LogOut,
    Bell,
    Menu,
    Heart,
    Star,
    ChevronRight,
    Search,
    CreditCard,
    Truck,
    ShieldCheck
} from 'lucide-react';
import { useTailorAuth } from '../context/TailorAuthContext';

const SidebarItem = ({ icon: Icon, label, path, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-6 py-4 transition-all relative group ${active ? 'text-[#4C1D95] bg-[#4C1D95]/5 bg-gradient-to-r from-[#4C1D95]/10 to-transparent border-r-4 border-[#4C1D95]' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
    >
        <Icon className={`w-5 h-5 ${active ? 'text-[#4C1D95]' : 'group-hover:scale-110 transition-transform'}`} strokeWidth={active ? 2.5 : 2} />
        <span className={`text-sm font-bold tracking-tight ${active ? 'font-black' : 'font-semibold'}`}>{label}</span>
    </button>
);

export const TailorDashboardLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout, user } = useTailorAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const menuItems = [
        { icon: LayoutDashboard, label: 'Overview', path: '/tailor/dashboard' },
        { icon: ClipboardList, label: 'Order Requests', path: '/tailor/dashboard/orders' },
        { icon: ShoppingBag, label: 'Products', path: '/tailor/dashboard/products' },
        { icon: Truck, label: 'Delivery Boy', path: '/tailor/dashboard/delivery' },
        { icon: ShieldCheck, label: 'Documents', path: '/tailor/dashboard/documents' },
        { icon: CreditCard, label: 'Subscription', path: '/tailor/dashboard/subscription' },
        { icon: User, label: 'Profile', path: '/tailor/dashboard/profile' },
    ];

    return (
        <div className="flex h-screen bg-[#FDFCFE] overflow-hidden">
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'w-72' : 'w-20'} bg-white border-r border-gray-100 flex flex-col transition-all duration-300 shadow-[20px_0_40px_-20px_rgba(0,0,0,0.03)] z-50`}>
                <div className="p-8 pb-10 flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 bg-[#4C1D95] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#4C1D95]/20 rotate-3">
                        <Heart className="w-6 h-6 text-white fill-white" />
                    </div>
                    {isSidebarOpen && <h1 className="text-2xl font-black text-gray-900 tracking-tighter">Tailor<span className="text-[#4C1D95]">HUB</span></h1>}
                </div>

                <nav className="flex-1 space-y-1">
                    {menuItems.map((item) => (
                        <SidebarItem
                            key={item.label}
                            {...item}
                            active={location.pathname === item.path}
                            onClick={() => navigate(item.path)}
                        />
                    ))}
                </nav>

                <div className="p-6">
                    <button
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-4 py-4 text-red-500 hover:bg-red-50 rounded-2xl transition-all font-bold text-sm tracking-wide group"
                    >
                        <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
                        {isSidebarOpen && <span>Logout Account</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {/* Top Navbar */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40">
                    <div className="flex items-center gap-6">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-50 rounded-xl text-gray-400 hover:text-gray-900 transition-colors">
                            <Menu className="w-5 h-5" />
                        </button>
                        <div className="hidden md:flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-2 w-80 group focus-within:bg-white focus-within:ring-2 focus-within:ring-[#4C1D95]/10 transition-all">
                            <Search className="w-4 h-4 text-gray-400 group-focus-within:text-[#4C1D95]" />
                            <input type="text" placeholder="Search orders, products..." className="bg-transparent border-none outline-none text-sm font-medium w-full text-gray-600" />
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="hidden sm:flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100 shadow-sm">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-xs font-black text-yellow-700 tracking-tight">PREMIUM PARTNER</span>
                        </div>

                        <button className="p-2.5 relative text-gray-400 hover:text-[#4C1D95] hover:bg-[#4C1D95]/5 rounded-xl transition-all group">
                            <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-bounce" />
                        </button>

                        <div className="h-10 w-[1px] bg-gray-100 mx-1" />

                        <div className="flex items-center gap-3 cursor-pointer group p-1 pr-3 rounded-2xl hover:bg-gray-50 transition-all">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#4C1D95] to-[#7C3AED] flex items-center justify-center text-white font-black shadow-lg shadow-[#4C1D95]/20 group-hover:scale-105 transition-transform">
                                AH
                            </div>
                            <div className="hidden lg:block text-left">
                                <p className="text-sm font-black text-gray-900 tracking-tight leading-none">Ahmed Khan</p>
                                <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest mt-1">Online</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-900 transition-colors" />
                        </div>
                    </div>
                </header>

                {/* Dashboard Scroll Area */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
