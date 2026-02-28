import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Package, Heart, CreditCard, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

export const CustomerProfile = () => {
    const navigate = useNavigate();

    const menuItems = [
        { icon: MapPin, title: 'Manage Addresses', desc: 'Saved specific locations for pickup/delivery', path: '/profile/addresses' },
        { icon: Package, title: 'My Measurements', desc: 'Pre-saved tailoring specifications', path: '/profile/measurements' },
        { icon: Heart, title: 'Wishlist', desc: 'Saved styles and readymade clothing', path: '/store' },
        { icon: CreditCard, title: 'Payment Methods', desc: 'Saved cards and UPI', path: '/profile/payments' },
        { icon: HelpCircle, title: 'Help & Support', desc: 'FAQs, refund policy, and contact us', path: '/profile/support' },
    ];

    const handleAction = (path) => {
        navigate(path);
    };

    return (
        <div className="space-y-6">
            {/* Profile Header */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => alert('Editing Profile Details')}>
                <div className="w-20 h-20 rounded-full border-4 border-gray-50 overflow-hidden shrink-0 bg-green-100">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Blair&backgroundColor=d1d5db" className="w-full h-full object-cover" alt="Profile" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Blair Doe</h2>
                    <p className="text-sm text-gray-500 mb-2">+91 98765 43210</p>
                    <span className="bg-[#4C1D95]/10 text-[#4C1D95] px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase">
                        Premium Member
                    </span>
                </div>
            </div>

            {/* Menu List */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {menuItems.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleAction(item.path)}
                        className="w-full flex items-center justify-between p-4 px-6 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                                <p className="text-[11px] text-gray-500 line-clamp-1">{item.desc}</p>
                            </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                ))}
            </div>

            <button onClick={() => navigate('/')} className="w-full bg-red-50 text-red-600 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-100 transition-colors">
                <LogOut className="w-5 h-5" /> Sign Out
            </button>
        </div>
    );
};

