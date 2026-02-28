import React from 'react';
import { Package, Users, Settings, LogOut, ChevronRight, ShieldAlert, BarChart3, BellRing, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AdminProfile = () => {
    const navigate = useNavigate();

    const menuItems = [
        { icon: BarChart3, title: 'Open Admin Portal', desc: 'Switch to full platform view', action: () => navigate('/admin') },
        { icon: Settings, title: 'System Settings', desc: 'Pricing margins, app configurations' },
        { icon: Users, title: 'Role Permissions', desc: 'Manage access levels for staff' },
        { icon: BellRing, title: 'Communication API', desc: 'Configure SMS & Push alerts' },
        { icon: Database, title: 'Data Backup', desc: 'Export platform data and invoices' },
        { icon: ShieldAlert, title: 'Security Logs', desc: 'View admin login history and audits' },
    ];

    return (
        <div className="space-y-6">
            {/* Profile Header */}
            <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white rounded-3xl p-6 shadow-md border border-indigo-800 flex flex-col gap-5 relative overflow-hidden">

                <div className="flex items-center gap-5 relative z-10">
                    <div className="w-20 h-20 rounded-full border-2 border-indigo-400 overflow-hidden shrink-0 bg-white shadow-sm flex items-center justify-center">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Platform Admin</h2>
                        <p className="text-sm text-indigo-300 mb-2">admin@silaiwala.com</p>
                        <div className="flex gap-2">
                            <span className="bg-indigo-500/30 text-indigo-200 border border-indigo-500/40 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                                Superuser
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu List */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {menuItems.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={item.action}
                        className="w-full flex items-center justify-between p-4 px-6 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
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
