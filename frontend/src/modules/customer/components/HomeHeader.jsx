import React, { useState } from 'react';
import { Search, Bell, ShoppingBag, X } from 'lucide-react';
import { Input } from '../../../components/ui/Input';
import { Link } from 'react-router-dom';
import useCartStore from '../../../store/cartStore';
import LocationBar from './LocationBar';

const HomeHeader = ({ user }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const cartCount = useCartStore(state => state.getTotalItems());

    const notifications = [
        { id: 1, title: 'Order Shipped', message: 'Your Kurti order is on the way!', time: '2m ago', unread: true },
        { id: 2, title: 'Fabric Picked Up', message: 'Rider has collected your fabric.', time: '1h ago', unread: false },
        { id: 3, title: 'Welcome Gift', message: 'Here is a 10% off coupon for you.', time: '1d ago', unread: false },
    ];

    const unreadCount = notifications.filter(n => n.unread).length;

    return (
        <div className="sticky top-0 z-40 bg-[#1e3932] rounded-b-[2rem] shadow-xl overflow-hidden">
            <div className="px-4 pb-4 pt-safe">
                {/* Top Row: Greeting & Icons */}
                <div className="flex justify-between items-center mb-6 pt-4">
                    <Link to="/profile" className="group">
                        <p className="text-xs text-gray-300 font-medium tracking-wide mb-0.5">Good Morning,</p>
                        <h1 className="text-2xl font-bold text-white flex items-center gap-2 group-hover:opacity-90 transition-opacity">
                            {user?.name || 'Guest User'} <span className="animate-wave">👋</span>
                        </h1>
                    </Link>
                    <div className="flex gap-3 relative">
                        <button
                            onClick={() => setShowNotifications(!showNotifications)}
                            className="relative p-2.5 bg-white/10 backdrop-blur-md rounded-full shadow-lg hover:bg-white/20 transition-all border border-white/5"
                        >
                            <Bell size={20} className="text-white" />
                            {unreadCount > 0 && <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-rose-500 rounded-full border-2 border-[#1e3932]"></span>}
                        </button>

                        {/* Notification Dropdown */}
                        {showNotifications && (
                            <div className="absolute top-14 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 animate-in slide-in-from-top-4 fade-in duration-300 origin-top-right">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                        <Bell size={14} className="fill-[#1e3932] text-[#1e3932]" /> Notifications
                                    </h3>
                                    <button onClick={() => setShowNotifications(false)} className="p-1 hover:bg-gray-100 rounded-full"><X size={14} className="text-gray-400" /></button>
                                </div>
                                <div className="space-y-3 max-h-64 overflow-y-auto pr-1 custom-scrollbar">
                                    {notifications.map(n => (
                                        <div key={n.id} className={`p-3 rounded-xl border transition-all ${n.unread ? 'bg-green-50 border-green-100' : 'bg-gray-50 border-gray-100 hover:bg-gray-100'}`}>
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className="text-xs font-bold text-gray-900">{n.title}</h4>
                                                <span className="text-[9px] font-bold text-gray-400">{n.time}</span>
                                            </div>
                                            <p className="text-[10px] text-gray-500 leading-relaxed line-clamp-2">{n.message}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 pt-3 text-center border-t border-gray-100">
                                    <button className="text-[10px] font-bold text-[#1e3932] uppercase tracking-wider hover:underline">Mark all as read</button>
                                </div>
                            </div>
                        )}

                        <Link to="/cart" className="p-2.5 bg-white/10 backdrop-blur-md rounded-full shadow-lg hover:bg-white/20 transition-all border border-white/5 relative">
                            <ShoppingBag size={20} className="text-white" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 h-5 w-5 bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-[#1e3932] shadow-sm">{cartCount}</span>
                            )}
                        </Link>

                        <Link to="/profile" className="h-11 w-11 bg-white/10 backdrop-blur-md rounded-full overflow-hidden border-2 border-white/20 shadow-lg hover:border-white transition-colors">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || 'User'}`} alt="Profile" className="w-full h-full object-cover" />
                        </Link>
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

            {/* Location Bar Integrated */}
            <div className="border-t border-white/10 bg-[#152e28]">
                <LocationBar />
            </div>
        </div>
    );
};

export default HomeHeader;
