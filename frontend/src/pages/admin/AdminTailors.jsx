import React, { useState } from 'react';
import { Search, Filter, MoreVertical, CheckCircle2, XCircle, FileText, Star, Scissors } from 'lucide-react';

export const AdminTailors = () => {
    const [activeTab, setActiveTab] = useState('Active');

    const tailors = [
        {
            id: 'T101',
            name: 'Masterji Ahmed',
            phone: '+91 9876543210',
            area: 'Srinagar',
            specialty: 'Bridal & Suits',
            status: 'Active',
            rating: 4.9,
            completed: 145,
            commission: '20%'
        },
        {
            id: 'T102',
            name: 'Priya Creation',
            phone: '+91 9876543211',
            area: 'Baramulla',
            specialty: 'Designer Blouses',
            status: 'Active',
            rating: 4.7,
            completed: 89,
            commission: '15%'
        },
        {
            id: 'T103',
            name: 'Rizwan Tailors',
            phone: '+91 9876543212',
            area: 'Anantnag',
            specialty: 'Mens Trads',
            status: 'Pending Verification',
            rating: 0,
            completed: 0,
            commission: '15%'
        },
        {
            id: 'T104',
            name: 'Fashion Hub',
            phone: '+91 9876543213',
            area: 'Sopore',
            specialty: 'Kurti sets',
            status: 'Suspended',
            rating: 3.2,
            completed: 45,
            commission: '25%'
        },
    ];

    const filteredTailors = tailors.filter(t => t.status.includes(activeTab) || (activeTab === 'All' && t));

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Tailor Management</h1>
                    <p className="text-sm text-gray-500">Approve registrations, manage performance and compute commission.</p>
                </div>
                <button className="bg-[#4C1D95] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4C1D95]/90 transition-colors flex items-center gap-2">
                    <Scissors className="w-4 h-4" /> Add Tailor Manually
                </button>
            </div>

            {/* Action Bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex justify-between items-center gap-4">
                <div className="flex gap-2 p-1 bg-gray-100 rounded-lg overflow-x-auto hide-scrollbar w-full sm:w-auto">
                    {['Active', 'Pending Verification', 'Suspended', 'All'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="hidden sm:flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search ID, Name..."
                            className="bg-gray-50 border border-gray-200 text-sm text-gray-800 rounded-lg py-2 pl-9 pr-4 focus:outline-none focus:ring-2 focus:ring-[#4C1D95]/50 w-64"
                        />
                    </div>
                    <button className="bg-gray-50 border border-gray-200 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Tailor Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTailors.map(tailor => (
                    <div key={tailor.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow relative">
                        <div className="p-5 border-b border-gray-100">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#4C1D95]/10 flex items-center justify-center text-[#4C1D95] font-bold text-lg">
                                        {tailor.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 leading-tight">{tailor.name}</h3>
                                        <p className="text-xs text-gray-500">{tailor.id} • {tailor.area}</p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-gray-50 rounded-xl p-3">
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> Rating
                                    </p>
                                    <p className="font-bold text-gray-900">{tailor.rating > 0 ? tailor.rating : 'N/A'}</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-3">
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3 text-green-500" /> Completed
                                    </p>
                                    <p className="font-bold text-gray-900">{tailor.completed} Orders</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Specialty</span>
                                    <span className="font-medium text-gray-800">{tailor.specialty}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Phone</span>
                                    <span className="font-medium text-gray-800">{tailor.phone}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Margin/Commission</span>
                                    <span className="font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{tailor.commission}</span>
                                </div>
                            </div>
                        </div>

                        {/* Status & Action Area */}
                        <div className={`p-4 flex justify-between items-center ${tailor.status === 'Pending Verification' ? 'bg-orange-50/50' : 'bg-gray-50/50'}`}>
                            <span className={`px-2.5 py-1 text-xs font-semibold rounded-md border 
                ${tailor.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' :
                                    tailor.status === 'Pending Verification' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                                        'bg-red-50 text-red-700 border-red-200'}`}>
                                {tailor.status}
                            </span>

                            {tailor.status === 'Pending Verification' ? (
                                <div className="flex gap-2">
                                    <button className="p-1.5 text-green-600 bg-green-100 hover:bg-green-200 rounded-lg transition-colors" title="Approve">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </button>
                                    <button className="p-1.5 text-blue-600 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors" title="View Docs">
                                        <FileText className="w-5 h-5" />
                                    </button>
                                    <button className="p-1.5 text-red-600 bg-red-100 hover:bg-red-200 rounded-lg transition-colors" title="Reject">
                                        <XCircle className="w-5 h-5" />
                                    </button>
                                </div>
                            ) : (
                                <button className="text-sm font-semibold text-[#4C1D95] hover:underline">
                                    View Profile
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

