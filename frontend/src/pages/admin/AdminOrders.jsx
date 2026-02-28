import React, { useState } from 'react';
import { Search, Filter, AlertCircle, Clock, Truck, Scissors, ArrowRight, Package } from 'lucide-react';

export const AdminOrders = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [selectedOrder, setSelectedOrder] = useState(null);

    const orders = [
        {
            id: '#4821', customer: 'Arjun M.', phone: '9876543210', service: 'Kurti',
            type: 'Express', amount: 1499, status: 'ORDER_PLACED', date: 'Oct 24, 09:30 AM', area: 'Srinagar',
            deliveryPartner: null, tailor: null
        },
        {
            id: '#4820', customer: 'Priya K.', phone: '9876543211', service: 'Salwar Suit',
            type: 'Normal', amount: 999, status: 'FABRIC_PICKED', date: 'Oct 23, 02:15 PM', area: 'Baramulla',
            deliveryPartner: 'Ramesh Singh', tailor: null
        },
        {
            id: '#4819', customer: 'Sneha R.', phone: '9876543212', service: 'Blouse',
            type: 'Premium', amount: 1299, status: 'STITCHING', date: 'Oct 22, 11:45 AM', area: 'Anantnag',
            deliveryPartner: 'Abdul', tailor: 'Masterji Ahmed'
        },
        {
            id: '#4818', customer: 'Aamir J.', phone: '9876543213', service: 'Kurti',
            type: 'Express', amount: 1499, status: 'READY_FOR_DISPATCH', date: 'Oct 21, 04:20 PM', area: 'Sopore',
            deliveryPartner: null, tailor: 'Priya Creation'
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'ORDER_PLACED': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
            case 'FABRIC_PICKED': return 'bg-cyan-50 text-cyan-700 border-cyan-200';
            case 'STITCHING': return 'bg-blue-50 text-blue-700 border-blue-200';
            case 'READY_FOR_DISPATCH': return 'bg-green-50 text-green-700 border-green-200';
            default: return 'bg-gray-50 text-gray-700 border-gray-200';
        }
    };

    const getActionRequired = (status) => {
        if (status === 'ORDER_PLACED') return { label: 'Assign Pickup', icon: Truck, color: 'bg-orange-500 hover:bg-orange-600' };
        if (status === 'FABRIC_PICKED') return { label: 'Assign Tailor', icon: Scissors, color: 'bg-indigo-500 hover:bg-indigo-600' };
        if (status === 'READY_FOR_DISPATCH') return { label: 'Assign Delivery', icon: Package, color: 'bg-[#4C1D95] hover:bg-[#4C1D95]/90' };
        return null;
    };

    const filteredOrders = orders.filter(o => {
        if (activeTab === 'All') return true;
        if (activeTab === 'Action Required') return ['ORDER_PLACED', 'FABRIC_PICKED', 'READY_FOR_DISPATCH'].includes(o.status);
        if (activeTab === 'In Progress') return ['PICKUP_ASSIGNED', 'STITCHING', 'HEMMING', 'IRONING'].includes(o.status);
        return true;
    });

    return (
        <div className="space-y-6 max-w-7xl mx-auto h-full flex flex-col">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Order Management</h1>
                    <p className="text-sm text-gray-500">Monitor order lifecycle and assign tasks to logistics and tailors.</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex-1 flex flex-col overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex gap-2 p-1 bg-gray-100 rounded-lg overflow-x-auto hide-scrollbar">
                        {['All', 'Action Required', 'In Progress', 'Completed'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === tab
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {tab === 'Action Required' && <AlertCircle className={`w-4 h-4 ${activeTab === tab ? 'text-red-500' : ''}`} />}
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search Order ID, Customer..."
                                className="w-full bg-gray-50 border border-gray-200 text-sm text-gray-800 rounded-lg py-2 pl-9 pr-4 focus:outline-none focus:ring-2 focus:ring-[#4C1D95]/50"
                            />
                        </div>
                        <button className="bg-gray-50 border border-gray-200 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto flex-1 h-full">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 sticky top-0 z-10 shadow-sm">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Order Details</th>
                                <th className="px-6 py-4 font-semibold">Timeline/Location</th>
                                <th className="px-6 py-4 font-semibold">Current State</th>
                                <th className="px-6 py-4 font-semibold">Assignment</th>
                                <th className="px-6 py-4 font-semibold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredOrders.map((order) => {
                                const action = getActionRequired(order.status);

                                return (
                                    <tr key={order.id} className={`hover:bg-gray-50/50 transition-colors ${selectedOrder === order.id ? 'bg-green-50/30' : ''}`}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-bold text-gray-700">
                                                    {order.service.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-900 flex items-center gap-2">
                                                        {order.id}
                                                        {order.type === 'Express' && <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded uppercase tracking-wide">Rush</span>}
                                                    </div>
                                                    <p className="text-xs text-gray-500">{order.customer} • {order.service}</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4">
                                            <p className="text-xs font-medium text-gray-800 flex items-center gap-1.5 mb-1">
                                                <Clock className="w-3.5 h-3.5 text-gray-400" /> {order.date}
                                            </p>
                                            <p className="text-xs text-gray-500">{order.area}</p>
                                        </td>

                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md border ${getStatusColor(order.status)} whitespace-nowrap`}>
                                                {order.status.replace(/_/g, ' ')}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 space-y-1.5">
                                            <div className="flex items-center gap-2 text-xs">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${order.tailor ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-400'}`}>
                                                    <Scissors className="w-3 h-3" />
                                                </div>
                                                <span className={order.tailor ? 'font-medium text-gray-800' : 'text-gray-400'}>
                                                    {order.tailor || 'Unassigned'}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${order.deliveryPartner ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-400'}`}>
                                                    <Truck className="w-3 h-3" />
                                                </div>
                                                <span className={order.deliveryPartner ? 'font-medium text-gray-800' : 'text-gray-400'}>
                                                    {order.deliveryPartner || 'Unassigned'}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 text-right">
                                            {action ? (
                                                <button className={`${action.color} text-white px-3 py-1.5 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 shadow-sm transition-colors whitespace-nowrap`}>
                                                    <action.icon className="w-3.5 h-3.5" /> {action.label}
                                                </button>
                                            ) : (
                                                <button className="text-[#4C1D95] font-bold text-sm flex items-center justify-end gap-1 w-full hover:underline">
                                                    View Details <ArrowRight className="w-4 h-4" />
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

