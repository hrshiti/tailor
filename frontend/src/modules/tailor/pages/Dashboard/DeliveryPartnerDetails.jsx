import React from 'react';
import {
    Truck,
    Phone,
    MapPin,
    Star,
    Calendar,
    MessageSquare,
    History,
    ChevronRight,
    ArrowUpRight,
    ShieldCheck
} from 'lucide-react';

export const DeliveryPartnerDetails = () => {
    const deliveryPartner = {
        name: 'Suresh Kumar',
        phone: '+91 98765-43210',
        rating: 4.9,
        trips: 1240,
        status: 'ON_DUTY',
        img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200',
        history: [
            { id: '#ORD-8421', type: 'Pickup', customer: 'Rahul Sharma', time: '10:30 AM', status: 'COMPLETED' },
            { id: '#ORD-8415', type: 'Delivery', customer: 'Anita Singh', time: 'Yesterday', status: 'COMPLETED' },
            { id: '#ORD-8402', type: 'Pickup', customer: 'Vikram Seth', time: '2 days ago', status: 'COMPLETED' },
        ]
    };

    return (
        <div className="space-y-10 animate-fade-in pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Delivery <span className="text-[#4C1D95]">Partner</span></h1>
                    <p className="text-gray-400 font-bold text-sm tracking-wide mt-1 uppercase">Track assigned delivery boy and history</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Partner Profile Card */}
                <div className="lg:col-span-1 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-10 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                        <img src={deliveryPartner.img} alt="" className="w-32 h-32 rounded-[3.5rem] object-cover shadow-2xl ring-4 ring-gray-50 group-hover:scale-105 transition-transform" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-2xl border-4 border-white shadow-sm ring-1 ring-black/5" />
                    </div>

                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">{deliveryPartner.name}</h2>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">ID: #DP-9421 • Elite Partner</p>

                    <div className="flex items-center gap-6 mt-8 w-full">
                        <div className="flex-1 bg-gray-50 p-4 rounded-3xl border border-gray-100">
                            <div className="flex items-center justify-center gap-1.5 text-yellow-500 font-black mb-1">
                                <Star className="w-3.5 h-3.5 fill-yellow-500" /> {deliveryPartner.rating}
                            </div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Rating</p>
                        </div>
                        <div className="flex-1 bg-gray-50 p-4 rounded-3xl border border-gray-100">
                            <h4 className="text-sm font-black text-gray-900 mb-1">{deliveryPartner.trips}</h4>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Trips</p>
                        </div>
                    </div>

                    <div className="w-full space-y-4 mt-10 text-left">
                        <div className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-3xl group hover:shadow-lg hover:shadow-[#4C1D95]/5 transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-[#4C1D95]/5 rounded-2xl flex items-center justify-center text-[#4C1D95] shadow-sm">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Contact Phone</p>
                                <p className="text-sm font-black text-gray-900">{deliveryPartner.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-3xl group hover:shadow-lg hover:shadow-[#4C1D95]/5 transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-sm">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Verification</p>
                                <p className="text-sm font-black text-green-600">ID & Vehicle Verified</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full mt-10 py-5 bg-[#4C1D95] text-white rounded-3xl font-black text-xs tracking-widest uppercase shadow-xl shadow-[#4C1D95]/20 flex items-center justify-center gap-2 hover:scale-102 active:scale-98 transition-all">
                        <MessageSquare className="w-4 h-4" /> Message Partner
                    </button>
                    <button className="w-full mt-4 py-4 bg-gray-100 text-gray-500 rounded-3xl font-black text-[10px] tracking-widest uppercase hover:bg-gray-200 transition-all">Request Partner Change</button>
                </div>

                {/* Performance & History Section */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Live Tracking Placeholder */}
                    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-10 relative overflow-hidden h-80 flex flex-col items-center justify-center group">
                        <div className="absolute inset-0 bg-[#F5F3FF]/30 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-xl shadow-[#4C1D95]/10 animate-bounce">
                                <Truck className="w-8 h-8 text-[#4C1D95]" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 tracking-tight">Partner is on the way</h3>
                            <p className="text-sm font-bold text-gray-400 mt-1">Collecting order #8421 from your shop</p>
                            <div className="mt-8 flex gap-3">
                                <button className="px-6 py-2.5 bg-[#4C1D95] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#4C1D95]/20">Track Live Map</button>
                            </div>
                        </div>
                        {/* Map Background Placeholder */}
                        <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-[20s] linear">
                            <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/75.8577,22.7196,13/800x600?access_token=pk.ey')] bg-cover" />
                        </div>
                    </div>

                    {/* Delivery History */}
                    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
                        <div className="p-8 flex justify-between items-center bg-gray-50/50 border-b border-gray-50">
                            <h3 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                                <History className="w-5 h-5 text-gray-400" /> Interaction History
                            </h3>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 bg-white border border-gray-100 rounded-xl text-[10px] font-black text-gray-500 uppercase">This Week</button>
                                <button className="p-1 px-3 text-gray-300"><ChevronRight className="w-4 h-4" /></button>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {deliveryPartner.history.map(item => (
                                <div key={item.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-white rounded-2xl border border-gray-100 flex items-center justify-center font-black text-[#4C1D95] shadow-sm transform group-hover:rotate-3 transition-transform text-xs tracking-tighter">
                                            {item.id}
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-black text-gray-900 tracking-tight">{item.type} for <span className="text-[#4C1D95]">{item.customer}</span></p>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">{item.time} • Successful</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="hidden sm:flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                                            <CheckCircle className="w-3 h-3 text-green-600" />
                                            <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Handed Over</span>
                                        </div>
                                        <button className="w-10 h-10 bg-gray-50 hover:bg-[#4C1D95] hover:text-white rounded-2xl flex items-center justify-center text-gray-400 transition-all border border-gray-100">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
