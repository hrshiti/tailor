import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Settings as SettingsIcon, Shield, Bell, CreditCard,
    Smartphone, Globe, Mail, Lock, User, CheckCircle2, Save
} from 'lucide-react';

const AdminSettings = () => {
    const [selectedTab, setSelectedTab] = useState('General');

    const tabs = [
        { id: 'General', icon: <Globe size={16} />, desc: 'Platform basics' },
        { id: 'Security', icon: <Shield size={16} />, desc: 'Roles & permissions' },
        { id: 'Notifications', icon: <Bell size={16} />, desc: 'Email & SMS setup' },
        { id: 'Payment Gateways', icon: <CreditCard size={16} />, desc: 'Razorpay, Stripe' },
        { id: 'App Config', icon: <Smartphone size={16} />, desc: 'Mobile app settings' },
    ];

    return (
        <div className="h-full flex flex-col space-y-6 relative">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">System Settings</h1>
                    <p className="text-xs text-gray-500 font-medium mt-1">Configure global parameters, integrations, and access controls</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-[#1e3932] text-white text-xs font-black rounded-xl hover:bg-[#0a211e] shadow-lg shadow-green-900/20 transition-all uppercase tracking-widest">
                    <Save size={16} /> Save Changes
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 flex-1 h-full overflow-hidden">
                {/* Sidebar Navigation */}
                <div className="lg:w-64 shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 h-max">
                    <div className="space-y-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedTab(tab.id)}
                                className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${selectedTab === tab.id
                                        ? 'bg-[#1e3932]/10 text-[#1e3932] font-black'
                                        : 'text-gray-600 font-bold hover:bg-gray-50'
                                    }`}
                            >
                                <span className={selectedTab === tab.id ? 'text-[#1e3932]' : 'text-gray-400'}>
                                    {tab.icon}
                                </span>
                                <div>
                                    <p className="text-xs">{tab.id}</p>
                                    <p className={`text-[9px] font-medium mt-0.5 ${selectedTab === tab.id ? 'text-[#1e3932]/70' : 'text-gray-400'}`}>
                                        {tab.desc}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-y-auto custom-scrollbar">

                    {selectedTab === 'General' && (
                        <div className="p-8 space-y-8 max-w-3xl">
                            <div>
                                <h3 className="text-lg font-black text-gray-900">General Information</h3>
                                <p className="text-xs text-gray-500 font-medium mt-1">Basic details about the platform that are public-facing.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Platform Name</label>
                                    <input type="text" defaultValue="Silaiwala" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-[#1e3932] transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Support Email</label>
                                    <input type="email" defaultValue="support@silaiwala.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-[#1e3932] transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Support Phone</label>
                                    <input type="tel" defaultValue="+91 1800 123 4567" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-[#1e3932] transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Currency Default</label>
                                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-[#1e3932] transition-colors appearance-none">
                                        <option>INR (₹)</option>
                                        <option>USD ($)</option>
                                    </select>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            <div>
                                <h3 className="text-sm font-black text-gray-900 mb-4">Maintenance Mode</h3>
                                <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-100 rounded-xl">
                                    <div>
                                        <p className="text-xs font-bold text-orange-900">Enable Maintenance Mode</p>
                                        <p className="text-[10px] text-orange-700 mt-0.5">App will be temporarily unavailable to users.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-orange-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {selectedTab === 'Security' && (
                        <div className="p-8 space-y-8 max-w-3xl">
                            <div>
                                <h3 className="text-lg font-black text-gray-900">Admin Roles & Permissions</h3>
                                <p className="text-xs text-gray-500 font-medium mt-1">Manage who has access to the admin panel and what they can do.</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { name: 'Ritesh Kumar', email: 'ritesh@silaiwala.com', role: 'Super Admin', status: 'Active' },
                                    { name: 'Aman Singh', email: 'aman@silaiwala.com', role: 'Support Agent', status: 'Active' },
                                    { name: 'Neha Gupta', email: 'neha@silaiwala.com', role: 'Finance Manager', status: 'Inactive' },
                                ].map((admin, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-900">{admin.name}</p>
                                                <p className="text-[10px] text-gray-500 font-medium">{admin.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-[10px] font-black uppercase tracking-widest rounded-lg">
                                                {admin.role}
                                            </span>
                                            <button className="text-xs font-bold text-blue-600 hover:underline">Edit</button>
                                        </div>
                                    </div>
                                ))}

                                <button className="w-full py-3 border-2 border-dashed border-gray-200 text-gray-500 font-bold text-xs rounded-xl hover:bg-gray-50 transition-colors uppercase tracking-widest">
                                    + Add New Admin User
                                </button>
                            </div>
                        </div>
                    )}

                    {(selectedTab !== 'General' && selectedTab !== 'Security') && (
                        <div className="p-12 text-center flex flex-col items-center justify-center h-full text-gray-400">
                            <SettingsIcon size={48} className="mb-4 opacity-50 animate-spin-slow" />
                            <h3 className="text-lg font-black text-gray-900">{selectedTab} Configuration</h3>
                            <p className="text-xs mt-2 max-w-sm">These settings are connected to external APIs and will be configurable after backend integration is complete.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
