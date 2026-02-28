import React from 'react';
import { Truck, Navigation, Wallet, Settings, Activity, Clock, ShieldCheck, LogOut, ChevronRight } from 'lucide-react';

export const DeliveryProfile = () => {
    const menuItems = [
        { icon: Activity, title: 'My Performance', desc: '142 deliveries • 98% on-time rate' },
        { icon: Wallet, title: 'Earnings & Payouts', desc: 'Next payout due in 4 days' },
        { icon: Navigation, title: 'Active Area', desc: 'Srinagar Central & Downtown' },
        { icon: Truck, title: 'Vehicle Information', desc: 'JK-01-AB-1234 (Hero Splendor)' },
        { icon: ShieldCheck, title: 'Rider KYC & License', desc: 'Verified by Admin' },
        { icon: Settings, title: 'Account Settings', desc: 'Availability, notification preferences' },
    ];

    return (
        <div className="space-y-6">
            {/* Profile Header */}
            <div className="bg-[#E58C4F] text-white rounded-3xl p-6 shadow-md border border-[#E58C4F]/50 flex flex-col gap-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 pointer-events-none" />

                <div className="flex items-center gap-5 relative z-10">
                    <div className="w-20 h-20 rounded-full border-2 border-white/50 overflow-hidden shrink-0 bg-white shadow-sm flex items-center justify-center">
                        <span className="text-3xl font-bold text-[#E58C4F]">R</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Ramesh Singh</h2>
                        <p className="text-sm text-white/80 mb-2">+91 98765 43211</p>
                        <div className="flex gap-2">
                            <span className="bg-white/20 text-white border border-white/30 px-2 flex items-center gap-1.5 py-0.5 rounded text-[10px] font-bold uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online
                            </span>
                        </div>
                    </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mt-2 relative z-10">
                    <div className="bg-black/20 rounded-xl p-3 flex flex-col gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-white/70">Today's Earnings</span>
                        <span className="text-xl font-bold">₹850</span>
                    </div>
                    <div className="bg-black/20 rounded-xl p-3 flex flex-col gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-white/70">Active Hours</span>
                        <span className="text-xl font-bold flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-white/80" /> 6h 15m
                        </span>
                    </div>
                </div>
            </div>

            {/* Menu List */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {menuItems.map((item, idx) => (
                    <button
                        key={idx}
                        className="w-full flex items-center justify-between p-4 px-6 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-[#E58C4F]">
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

            <button className="w-full bg-red-50 text-red-600 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-100 transition-colors">
                <LogOut className="w-5 h-5" /> Sign Out
            </button>
        </div>
    );
};
