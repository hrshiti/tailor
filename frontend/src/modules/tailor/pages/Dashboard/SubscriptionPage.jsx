import React from 'react';
import {
    CreditCard,
    CheckCircle,
    Zap,
    ShieldCheck,
    TrendingUp,
    ArrowUpRight,
    HelpCircle,
    Download,
    ChevronRight,
    Star,
    Crown
} from 'lucide-react';

const PlanCard = ({ plan, current, onUpgrade }) => (
    <div className={`p-8 rounded-[2.5rem] border-2 transition-all relative overflow-hidden group ${current ? 'bg-[#4C1D95] border-[#4C1D95] text-white shadow-2xl shadow-[#4C1D95]/30 scale-105' : 'bg-white border-gray-100 hover:border-[#4C1D95]/20 hover:shadow-xl hover:shadow-[0_20px_40px_-20px_rgba(76,29,149,0.1)] hover:scale-102'}`}>
        {current && (
            <div className="absolute top-0 right-0 p-4 bg-white/10 rounded-bl-[2rem] flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-white" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Active Plan</span>
            </div>
        )}

        <h3 className={`text-2xl font-black tracking-tight mb-2 ${current ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
        <p className={`text-xs font-bold uppercase tracking-widest mb-6 ${current ? 'text-white/60' : 'text-gray-400'}`}>{plan.subtitle}</p>

        <div className="mb-8 flex items-baseline gap-1">
            <span className={`text-4xl font-black ${current ? 'text-white' : 'text-gray-900'}`}>₹{plan.price}</span>
            <span className={`text-xs font-bold uppercase ${current ? 'text-white/50' : 'text-gray-400'}`}>/ Month</span>
        </div>

        <div className="space-y-4 mb-10">
            {plan.features.map(f => (
                <div key={f} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${current ? 'bg-white/10' : 'bg-[#4C1D95]/5'}`}>
                        <CheckCircle className={`w-3 h-3 ${current ? 'text-white' : 'text-[#4C1D95]'}`} />
                    </div>
                    <span className={`text-xs font-bold leading-tight ${current ? 'text-white/90' : 'text-gray-500'}`}>{f}</span>
                </div>
            ))}
        </div>

        {!current && (
            <button
                onClick={onUpgrade}
                className="w-full py-4 bg-gray-900 text-white rounded-[1.5rem] font-black text-sm tracking-widest uppercase shadow-xl hover:bg-black transition-all transform hover:-translate-y-1 active:scale-95"
            >
                Upgrade Plan
            </button>
        )}

        {current && (
            <div className="flex gap-3">
                <button className="flex-1 py-4 bg-white text-[#4C1D95] rounded-[1.5rem] font-black text-sm tracking-widest uppercase shadow-xl hover:scale-102 transition-all active:scale-98">
                    Renew Early
                </button>
                <button className="p-4 bg-white/10 text-white rounded-[1.5rem] hover:bg-white/20 transition-all shadow-xl">
                    <HelpCircle className="w-5 h-5" />
                </button>
            </div>
        )}

        {/* Decorative */}
        {plan.name === 'Pro' && (
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        )}
    </div>
);

export const SubscriptionPage = () => {
    const plans = [
        { name: 'Basic', subtitle: 'Perfect for beginners', price: '499', features: ['10 Order Requests/Month', 'Basic Portfolio Page', 'Email Analytics Report', 'Standard Listing Visibility'] },
        { name: 'Premium', subtitle: 'Grow your business', price: '999', features: ['50 Order Requests/Month', 'Featured Portfolio Page', 'Real-time Dashboard Analytics', 'Priority Listing in App', 'Chat Support'] },
        { name: 'Pro', subtitle: 'Dominate your city', price: '1999', features: ['Unlimited Order Requests', 'Top Badge Recognition', 'Advanced CRM Tools', 'White-labeled Billing/Invoicing', '24/7 Dedicated Manager', 'Custom SMS Marketing'], popular: true },
    ];

    return (
        <div className="space-y-12 animate-fade-in pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Plan & <span className="text-[#4C1D95]">Billing</span></h1>
                    <p className="text-gray-400 font-bold text-sm tracking-wide mt-1 uppercase">Manage your subscription and billing details</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-2 rounded-[2rem] border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#4C1D95] rounded-[1.5rem] text-white font-black text-xs tracking-widest uppercase">
                        <CreditCard className="w-3.5 h-3.5" /> Billing Active
                    </div>
                </div>
            </div>

            {/* Current Plan Stat Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-10 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group">
                    <div className="relative z-10 space-y-4 flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 rounded-full border border-yellow-100 text-[10px] font-black text-yellow-700 tracking-widest uppercase">
                            <Star className="w-3 h-3 fill-yellow-500" /> Current Best Plan
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Your Pro Subscription <br /><span className="text-[#4C1D95]">Renewing on 12th Oct</span></h2>
                        <div className="flex items-center gap-6 mt-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-black text-[#4C1D95] uppercase">
                                        <TrendingUp className="w-4 h-4" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-bold text-gray-500">Your visibility has increased by <span className="text-green-600 font-black">+45%</span> this month.</p>
                        </div>
                    </div>
                    <div className="relative z-10 shrink-0 flex flex-col items-center justify-center p-8 bg-gray-50 rounded-[2rem] border border-gray-100 shadow-inner group-hover:scale-105 transition-all duration-500">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 leading-none">Monthly Billing</p>
                        <h4 className="text-5xl font-black text-gray-900 tracking-tighter">₹1,999</h4>
                        <div className="w-12 h-1.5 bg-[#4C1D95] rounded-full mt-4" />
                    </div>
                    {/* Background SVG Decoration */}
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-700">
                        <Crown className="w-64 h-64 text-[#4C1D95]" />
                    </div>
                </div>

                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-10 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-green-500" /> Payment Method
                        </h3>
                        <div className="mt-8 space-y-6">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                        <span className="font-black text-[10px] text-blue-600">VISA</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-black text-gray-900 leading-tight">•••• 8421</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Expires 12/26</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-300" />
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 cursor-pointer rounded-2xl border border-gray-100 transition-all border-dashed">
                                <span className="text-xs font-bold text-gray-400">Add New Method</span>
                                <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <Zap className="w-3 h-3 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-3 mt-6 text-[#4C1D95] text-xs font-black uppercase tracking-widest hover:underline">Manage Billing Profile</button>
                </div>
            </div>

            {/* Plans Comparison */}
            <div className="space-y-10">
                <div className="text-center">
                    <h2 className="text-3xl font-black text-gray-900 tracking-tighter">Explore Upgrade <span className="text-[#4C1D95]">Options</span></h2>
                    <p className="text-gray-400 font-bold text-sm tracking-wide mt-1 uppercase">Choose a plan that fits your growth ambitions</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 xl:px-0">
                    {plans.map((p, i) => (
                        <PlanCard key={p.name} plan={p} current={p.name === 'Pro'} onUpgrade={() => { }} />
                    ))}
                </div>
            </div>

            {/* Invoices Section */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
                <div className="p-10 flex justify-between items-center bg-gray-50/50">
                    <h3 className="text-2xl font-black text-gray-900 tracking-tighter">Recent Invoices</h3>
                    <button className="text-xs font-black text-[#4C1D95] uppercase tracking-widest hover:underline">Download All</button>
                </div>
                <div className="divide-y divide-gray-50">
                    {[
                        { id: 'INV-4821', date: 'Sep 12, 2023', amount: '₹1,999', status: 'PAID' },
                        { id: 'INV-4802', date: 'Aug 12, 2023', amount: '₹1,999', status: 'PAID' },
                        { id: 'INV-4785', date: 'Jul 12, 2023', amount: '₹1,999', status: 'PAID' },
                    ].map(inv => (
                        <div key={inv.id} className="p-8 flex items-center justify-between hover:bg-gray-50 transition-colors group text-left">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-white rounded-2xl border border-gray-100 flex items-center justify-center text-gray-400 shadow-sm group-hover:rotate-6 transition-transform">
                                    <Download className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-gray-900 tracking-tight">{inv.id}</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Billed on {inv.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="text-right">
                                    <p className="text-sm font-black text-gray-900 tracking-tight">{inv.amount}</p>
                                    <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">PAID</span>
                                </div>
                                <button className="p-2 text-gray-300 hover:text-[#4C1D95] transition-colors"><ChevronRight className="w-5 h-5" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
