import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpRight, ArrowDownRight, CreditCard, Banknote, FileText, Download, CheckCircle2 } from 'lucide-react';
import { revenueData, transactions, payouts, overviewStats } from '../data/mockData';

const AdminFinance = () => {
    const [selectedTab, setSelectedTab] = useState('Overview');

    const tabs = ['Overview', 'Transactions', 'Payouts', 'GST & Taxes'];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
            case 'Processing': return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    const maxRevenue = Math.max(...revenueData.map(d => d.revenue));

    return (
        <div className="h-full flex flex-col space-y-6 relative">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Financial Overview</h1>
                    <p className="text-xs text-gray-500 font-medium mt-1">Manage platform revenue, vendor payouts, and transaction history</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 border border-gray-200 text-xs font-black rounded-xl hover:bg-gray-100 transition-all uppercase tracking-widest hidden sm:flex">
                    <Download size={16} /> Export Report
                </button>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex bg-gray-50 p-1 rounded-xl w-full sm:w-auto overflow-x-auto no-scrollbar">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${selectedTab === tab ? 'bg-white text-[#1e3932] shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto space-y-6 pb-6">

                {selectedTab === 'Overview' && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { label: 'Total Revenue', value: overviewStats.totalRevenue, icon: <Banknote size={20} />, change: overviewStats.revenueChange, positive: true },
                                { label: 'Platform Commission', value: '₹1,26,780', icon: <ArrowUpRight size={20} />, change: '+15.2%', positive: true },
                                { label: 'Pending Payouts', value: overviewStats.pendingPayouts, icon: <CreditCard size={20} />, change: '-2.4%', positive: false },
                                { label: 'Refunds Processed', value: '₹14,500', icon: <ArrowDownRight size={20} />, change: '+1.1%', positive: false },
                            ].map((stat, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    key={idx}
                                    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="p-2.5 bg-gray-50 text-[#1e3932] rounded-xl">
                                            {stat.icon}
                                        </div>
                                        <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg ${stat.positive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                                            {stat.positive ? '+' : ''}{stat.change}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-xl font-black text-gray-900">{stat.value}</p>
                                        <h3 className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-1">{stat.label}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Revenue Chart */}
                            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-sm font-black text-gray-900 tracking-tight">Revenue Trend</h3>
                                    <select className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-gray-600 outline-none">
                                        <option>This Week</option>
                                        <option>Last Week</option>
                                    </select>
                                </div>
                                <div className="h-48 flex items-end justify-between gap-4 mt-8 pb-4 border-b border-gray-50 relative">
                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="w-full border-b border-gray-50 flex items-end pb-1"></div>
                                        ))}
                                    </div>
                                    {revenueData.map((data, idx) => (
                                        <div key={idx} className="flex flex-col items-center flex-1 z-10 group">
                                            <div className="relative w-full max-w-[40px] flex justify-center flex-1 items-end">
                                                <div
                                                    className="w-full bg-[#d4e9e2] rounded-t-lg group-hover:bg-[#1e3932] transition-colors relative"
                                                    style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                                                >
                                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap">
                                                        ₹{data.revenue}
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-400 mt-3 uppercase">{data.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Payouts Needs Attention */}
                            <div className="bg-gradient-to-br from-[#1e3932] to-[#0a211e] p-6 rounded-2xl shadow-sm text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <CreditCard size={100} />
                                </div>
                                <h3 className="text-sm font-black tracking-tight relative z-10">Pending Payouts</h3>
                                <div className="mt-6 space-y-4 relative z-10">
                                    {payouts.filter(p => p.status === 'Processing').map(payout => (
                                        <div key={payout.id} className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="text-xs font-bold">{payout.recipient}</p>
                                                    <p className="text-[10px] text-white/60 mt-0.5">{payout.type} • {payout.date}</p>
                                                </div>
                                                <p className="text-sm font-black">{payout.amount}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-6 w-full py-2.5 bg-white text-[#1e3932] font-black rounded-xl text-[10px] uppercase tracking-widest hover:shadow-lg transition-all relative z-10">
                                    Process All Fast
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {selectedTab === 'Transactions' && (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <h3 className="text-sm font-black text-gray-900 tracking-tight">Recent Transactions</h3>
                            <div className="flex gap-2">
                                <div className="relative">
                                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input type="text" placeholder="Txn ID, Order ID..." className="pl-8 pr-4 py-1.5 text-xs font-semibold bg-white border border-gray-200 rounded-lg outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left whitespace-nowrap">
                                <thead>
                                    <tr className="bg-gray-50/50 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] border-b border-gray-100">
                                        <th className="px-6 py-4">Transaction Details</th>
                                        <th className="px-6 py-4">Customer</th>
                                        <th className="px-6 py-4">Amount</th>
                                        <th className="px-6 py-4">Payment Method</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">Receipt</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {transactions.map((txn, i) => (
                                        <tr key={i} className="hover:bg-[#1e3932]/5 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col text-xs">
                                                    <span className="font-black text-[#1e3932]">{txn.id}</span>
                                                    <span className="text-[10px] font-bold text-gray-900 mt-0.5">Order: {txn.orderId}</span>
                                                    <span className="text-[10px] text-gray-500 font-medium">{txn.date}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-xs font-bold text-gray-700">{txn.customer}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1.5">
                                                    {txn.type === 'Credit' ? <ArrowUpRight size={14} className="text-green-500" /> : <ArrowDownRight size={14} className="text-red-500" />}
                                                    <span className={`text-xs font-black ${txn.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>{txn.amount}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-xs font-bold text-gray-600">{txn.method}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-lg text-[9px] font-black border uppercase tracking-wider ${getStatusStyle(txn.status)}`}>
                                                    {txn.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-gray-400 hover:text-[#1e3932] transition-colors p-1.5 hover:bg-gray-50 rounded-lg">
                                                    <Download size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {selectedTab === 'Payouts' && (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left whitespace-nowrap">
                                <thead>
                                    <tr className="bg-gray-50/50 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] border-b border-gray-100">
                                        <th className="px-6 py-4">Payout ID & Date</th>
                                        <th className="px-6 py-4">Recipient</th>
                                        <th className="px-6 py-4">Account Details</th>
                                        <th className="px-6 py-4">Amount</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {payouts.map((payout, i) => (
                                        <tr key={i} className="hover:bg-[#1e3932]/5 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col text-xs">
                                                    <span className="font-black text-gray-900">{payout.id}</span>
                                                    <span className="text-[10px] text-gray-500 font-medium mt-0.5">{payout.date}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col text-xs">
                                                    <span className="font-bold text-gray-900">{payout.recipient}</span>
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">{payout.type}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-[10px] font-bold text-gray-600 bg-gray-50 px-2.5 py-1 rounded border border-gray-100">{payout.bankAcc}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-xs font-black text-gray-900">{payout.amount}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-lg text-[9px] font-black border uppercase tracking-wider flex w-max items-center gap-1.5 ${getStatusStyle(payout.status)}`}>
                                                    {payout.status === 'Completed' && <CheckCircle2 size={12} />}
                                                    {payout.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {payout.status === 'Processing' ? (
                                                    <button className="text-[10px] font-black uppercase text-[#1e3932] bg-[#1e3932]/10 px-3 py-1.5 rounded-lg hover:bg-[#1e3932] hover:text-white transition-colors">
                                                        Process
                                                    </button>
                                                ) : (
                                                    <button className="text-gray-400 hover:text-[#1e3932] transition-colors p-1.5 hover:bg-gray-50 rounded-lg">
                                                        <FileText size={16} />
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {selectedTab === 'GST & Taxes' && (
                    <div className="p-12 text-center flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-100">
                        <FileText size={48} className="text-gray-200 mb-4" />
                        <h3 className="text-lg font-black text-gray-900">Tax Reports & GST Invoices</h3>
                        <p className="text-xs text-gray-500 mt-2 max-w-sm">Generate monthly GST reports and taxation documents for accounting purposes.</p>
                        <button className="mt-6 px-6 py-2.5 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] uppercase tracking-widest">
                            Generate Report
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default AdminFinance;
