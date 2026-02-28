import React from 'react';
import {
    TrendingUp,
    CheckCircle,
    Clock,
    Package,
    ArrowUpRight,
    ArrowDownRight,
    Users,
    DollarSign,
    Calendar,
    ChevronRight,
    Search
} from 'lucide-react';

const StatCard = ({ label, value, icon: Icon, trend, trendValue, color, hue }) => (
    <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_8px_40px_rgb(0,0,0,0.06)] transition-all group overflow-hidden relative">
        <div className="flex justify-between items-start mb-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center`} style={{ backgroundColor: hue }}>
                <Icon className={`w-6 h-6`} style={{ color: color }} strokeWidth={2.5} />
            </div>
            <div className={`flex items-center gap-1 text-[10px] font-black p-1 px-2 rounded-full ${trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {trendValue}
            </div>
        </div>
        <div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{label}</p>
            <h3 className="text-3xl font-black text-gray-900 mt-1 tracking-tight">{value}</h3>
        </div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-[0.03] group-hover:opacity-[0.08] transition-opacity -mr-8 -mt-8 rounded-full" style={{ backgroundColor: color }} />
    </div>
);

export const TailorOverview = () => {
    return (
        <div className="space-y-10 animate-fade-in">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Dashboard <span className="text-[#4C1D95]">Overview</span></h1>
                    <p className="text-gray-400 font-bold text-sm tracking-wide mt-1 uppercase">Welcome back, Ahmed Khan</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white border border-gray-100 px-4 py-2.5 rounded-2xl text-sm font-bold text-gray-700 shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-all">
                        <Calendar className="w-4 h-4" /> This Month
                    </button>
                    <button className="bg-[#4C1D95] px-6 py-2.5 rounded-2xl text-sm font-bold text-white shadow-xl shadow-[#4C1D95]/20 hover:scale-105 transition-all active:scale-95">
                        Download Report
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard label="Total Orders" value="1,284" icon={Package} trend="up" trendValue="+12%" color="#4C1D95" hue="#F5F3FF" />
                <StatCard label="Pending Jobs" value="48" icon={Clock} trend="down" trendValue="-3%" color="#E11D48" hue="#FFF1F2" />
                <StatCard label="Total Earnings" value="₹84,290" icon={DollarSign} trend="up" trendValue="+18%" color="#059669" hue="#ECFDF5" />
                <StatCard label="Total Customers" value="842" icon={Users} trend="up" trendValue="+8%" color="#2563EB" hue="#EFF6FF" />
            </div>

            {/* Main Sections Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Earnings Chart Placeholder */}
                <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-xl font-black text-gray-900 tracking-tight">Earnings Statistics</h3>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Monthly business growth</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex items-center gap-1.5 text-xs font-bold text-gray-400"><div className="w-2.5 h-2.5 rounded-full bg-[#4C1D95]" /> Orders</span>
                            <span className="flex items-center gap-1.5 text-xs font-bold text-gray-400"><div className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" /> Returns</span>
                        </div>
                    </div>
                    {/* Simplified Chart (CSS only for demonstration) */}
                    <div className="h-64 flex items-end justify-between gap-4 px-4 pb-4">
                        {[40, 70, 45, 90, 65, 85, 55, 100, 75, 40, 80, 95].map((h, i) => (
                            <div key={i} className="group relative flex-1">
                                <div
                                    className="bg-gray-50 group-hover:bg-[#4C1D95] rounded-t-xl transition-all duration-500 relative"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">₹{(h * 100).toLocaleString()}</div>
                                </div>
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-gray-300 uppercase tracking-tighter">
                                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subscriptions Card */}
                <div className="bg-[#4C1D95] rounded-[2.5rem] border border-[#4C1D95] shadow-2xl shadow-[#4C1D95]/30 p-8 text-white flex flex-col justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Current Plan</span>
                        </div>
                        <h3 className="text-4xl font-black tracking-tighter mb-2">PRO <span className="text-yellow-400">PLAN</span></h3>
                        <p className="text-sm text-white/70 font-bold mb-8 uppercase tracking-wide">Expires in 12 days</p>

                        <div className="space-y-4 mb-10">
                            {['Unlimited Orders', 'Priority Listing', '24/7 Dedicated Support', 'Custom Invoice Branding'].map(f => (
                                <div key={f} className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-xs font-bold text-white/90">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="relative z-10 bg-white text-[#4C1D95] w-full py-4 rounded-3xl font-black text-sm tracking-widest uppercase shadow-xl hover:scale-102 transition-all active:scale-98">
                        Renew Now
                    </button>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 group-hover:scale-125 transition-transform duration-700 delay-100" />
                </div>
            </div>

            {/* Bottom Row - Recent Orders & Active Subs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
                <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
                    <div className="p-8 flex justify-between items-center bg-gray-50/50">
                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Active Work Requests</h3>
                        <button className="text-xs font-black text-[#4C1D95] uppercase tracking-widest hover:underline flex items-center gap-1 group">
                            View All <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {[
                            { id: '#8421', name: 'Sherwani Stitching', customer: 'Rahul Sharma', date: '2 hours ago', status: 'IN_CUTTING', price: '₹4,500' },
                            { id: '#8420', name: 'Premium Coat/Pant', customer: 'Vijay Kumar', date: '5 hours ago', status: 'WAITING', price: '₹8,200', highlight: true },
                            { id: '#8419', name: 'Formal Shirts (3x)', customer: 'Amit Singh', date: 'Yesterday', status: 'IRONING', price: '₹2,100' },
                        ].map(order => (
                            <div key={order.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-white rounded-2xl border border-gray-100 flex items-center justify-center font-black text-[#4C1D95] shadow-sm transform group-hover:rotate-3 transition-transform text-xs tracking-tighter">
                                        {order.id}
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-gray-900 tracking-tight">{order.name}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Customer: {order.customer} • {order.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-right hidden sm:block">
                                        <p className="text-sm font-black text-gray-900">{order.price}</p>
                                        <p className={`text-[10px] font-black uppercase tracking-widest mt-0.5 ${order.status === 'WAITING' ? 'text-red-500' : 'text-blue-500'}`}>
                                            {order.status.replace('_', ' ')}
                                        </p>
                                    </div>
                                    <button className="w-10 h-10 bg-gray-50 hover:bg-[#4C1D95] hover:text-white rounded-2xl flex items-center justify-center text-gray-400 transition-all border border-gray-100 hover:border-[#4C1D95] shadow-sm">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-8">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight mb-8">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: Package, label: 'Add Sample', color: '#4C1D95', hue: '#F5F3FF' },
                            { icon: Calendar, label: 'Availability', color: '#059669', hue: '#ECFDF5' },
                            { icon: Users, label: 'Customers', color: '#2563EB', hue: '#EFF6FF' },
                            { icon: Search, label: 'Verify Docs', color: '#D97706', hue: '#FFF7ED' }
                        ].map(action => (
                            <button key={action.label} className="p-6 rounded-[2rem] flex flex-col items-center gap-3 border border-transparent hover:border-gray-100 hover:bg-gray-50/50 transition-all group">
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform" style={{ backgroundColor: action.hue }}>
                                    <action.icon className="w-5 h-5" style={{ color: action.color }} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{action.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-50">
                        <div className="bg-blue-50 p-5 rounded-[2rem] border border-blue-100">
                            <h4 className="text-xs font-black text-blue-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <Clock className="w-4 h-4" /> Weekly Tip
                            </h4>
                            <p className="text-xs text-blue-700 font-medium leading-relaxed">
                                Uploading photos of your "Ready to Ship" products can increase your visibility by 40%.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
