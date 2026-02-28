import React from 'react';
import { TrendingUp, Users, Package, Clock, IndianRupee, MapPin } from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line
} from 'recharts';

export const AdminDashboard = () => {

    const stats = [
        { title: 'Total Revenue', value: '₹1,24,500', icon: IndianRupee, color: 'bg-green-100 text-green-700', trend: '+12.5%' },
        { title: 'Active Orders', value: '142', icon: Package, color: 'bg-blue-100 text-blue-700', trend: '+4.2%' },
        { title: 'Registered Tailors', value: '48', icon: Users, color: 'bg-purple-100 text-purple-700', trend: '+2 new' },
        { label: 'Pending Pickups', value: '15', icon: Clock, color: 'bg-orange-100 text-orange-700', trend: '-2.1%' }
    ];

    const revenueData = [
        { name: 'Mon', revenue: 4000 },
        { name: 'Tue', revenue: 3000 },
        { name: 'Wed', revenue: 2000 },
        { name: 'Thu', revenue: 2780 },
        { name: 'Fri', revenue: 1890 },
        { name: 'Sat', revenue: 2390 },
        { name: 'Sun', revenue: 3490 },
    ];

    const recentOrders = [
        { id: '#4821', customer: 'Arjun M.', service: 'Kurti Stitching', area: 'Srinagar', status: 'In Progress', type: 'Express', amount: '₹1499' },
        { id: '#4820', customer: 'Priya K.', service: 'Salwar Suit', area: 'Baramulla', status: 'Pending Pickup', type: 'Normal', amount: '₹999' },
        { id: '#4819', customer: 'Sneha R.', service: 'Readymade', area: 'Delhi', status: 'Dispatched', type: 'Store', amount: '₹2499' },
        { id: '#4818', customer: 'Aamir J.', service: 'Blouse', area: 'Anantnag', status: 'Tailor Assigned', type: 'Premium', amount: '₹1299' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'In Progress': return 'bg-blue-50 text-blue-700 border-blue-200';
            case 'Pending Pickup': return 'bg-orange-50 text-orange-700 border-orange-200';
            case 'Dispatched': return 'bg-purple-50 text-purple-700 border-purple-200';
            case 'Tailor Assigned': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
            default: return 'bg-gray-50 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
                    <p className="text-sm text-gray-500">Welcome back, here's what's happening today.</p>
                </div>
                <div className="flex gap-2">
                    <select className="bg-white border text-sm border-gray-300 text-gray-700 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C1D95]/50">
                        <option>Last 7 Days</option>
                        <option>This Month</option>
                        <option>All Time</option>
                    </select>
                    <button className="bg-[#4C1D95] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4C1D95]/90 transition-colors">
                        Generate Report
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start justify-between group hover:border-[#4C1D95]/30 transition-colors cursor-pointer">
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">{stat.title || stat.label}</p>
                            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                            <p className={`text-xs mt-2 font-medium flex items-center gap-1 ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                                {stat.trend.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : null}
                                {stat.trend} from last week
                            </p>
                        </div>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color} group-hover:scale-105 transition-transform`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Revenue Overview</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} tickFormatter={(value) => `₹${value}`} />
                                <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="revenue" fill="#4C1D95" radius={[4, 4, 0, 0]} maxBarSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Order Distribution Chart Area Placeholder */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Order Distribution</h3>
                        <p className="text-sm text-gray-500 mb-6">Area-wise breakdown (Kashmir)</p>
                    </div>

                    <div className="space-y-4 flex-1 flex flex-col justify-center">
                        {[
                            { area: 'Srinagar', pct: 45, color: 'bg-[#4C1D95]' },
                            { area: 'Baramulla', pct: 25, color: 'bg-[#7C3AED]' },
                            { area: 'Anantnag', pct: 20, color: 'bg-[#E58C4F]' },
                            { area: 'Other', pct: 10, color: 'bg-gray-300' }
                        ].map(item => (
                            <div key={item.area}>
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="font-medium text-gray-700 flex items-center gap-1.5">
                                        <MapPin className="w-3.5 h-3.5 text-gray-400" /> {item.area}
                                    </span>
                                    <span className="font-bold text-gray-900">{item.pct}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.pct}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900">Recent Orders Focus</h3>
                    <button className="text-sm font-semibold text-[#4C1D95] hover:underline">View All Orders</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="text-xs text-gray-400 uppercase bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Order ID</th>
                                <th className="px-6 py-4 font-semibold">Customer</th>
                                <th className="px-6 py-4 font-semibold">Service</th>
                                <th className="px-6 py-4 font-semibold">Area</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                                    <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4 flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600">
                                            {order.customer.charAt(0)}
                                        </div>
                                        {order.customer}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="block font-medium text-gray-800">{order.service}</span>
                                        <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">{order.type}</span>
                                    </td>
                                    <td className="px-6 py-4">{order.area}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right font-bold text-gray-900">{order.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

