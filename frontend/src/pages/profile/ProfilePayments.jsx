import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Wallet, Plus, MoreVertical, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProfilePayments = () => {
    const navigate = useNavigate();

    const [cards] = useState([
        {
            id: 1,
            type: 'Visa',
            last4: '4242',
            expiry: '12/28',
            bank: 'HDFC Bank',
            isDefault: true,
            color: 'bg-gradient-to-br from-indigo-600 to-purple-800'
        },
        {
            id: 2,
            type: 'Mastercard',
            last4: '8810',
            expiry: '05/27',
            bank: 'ICICI Bank',
            isDefault: false,
            color: 'bg-gradient-to-br from-gray-800 to-gray-950'
        }
    ]);

    const [upi] = useState([
        {
            id: 1,
            idStr: 'blair.doe@okhdfcbank',
            app: 'GPay',
            isDefault: true
        }
    ]);

    return (
        <div className="flex flex-col h-full bg-gray-50 pb-20">

            {/* Header */}
            <div className="bg-white px-5 py-4 shrink-0 shadow-sm sticky top-0 z-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors relative z-30">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">Payment Methods</h1>
                </div>
            </div>

            <div className="p-4 space-y-6">

                {/* Security Banner */}
                <div className="flex items-center gap-3 justify-center text-green-700 bg-green-50 p-3 rounded-2xl border border-green-100/50">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <p className="text-xs font-medium">Your payment information is stored securely with 256-bit encryption.</p>
                </div>

                {/* Saved Cards */}
                <div>
                    <h3 className="font-bold text-gray-900 mb-3 px-1 flex items-center justify-between">
                        Saved Cards
                        <button className="text-xs text-blue-600 font-bold hover:bg-blue-50 px-2 py-1 rounded-md transition-colors">Add</button>
                    </h3>

                    <div className="space-y-3">
                        {cards.map((card) => (
                            <div key={card.id} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group">
                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <div className={`w-12 h-8 rounded-md flex items-center justify-center text-white font-bold text-[10px] tracking-wider ${card.color}`}>
                                        {card.type}
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-900">
                                        <MoreVertical className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="relative z-10">
                                    <p className="text-lg font-mono font-medium tracking-widest text-gray-800 mb-1">
                                        •••• •••• •••• {card.last4}
                                    </p>
                                    <div className="flex items-center justify-between mt-3">
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">{card.bank}</p>
                                            <p className="text-xs font-bold text-gray-900">Exp {card.expiry}</p>
                                        </div>
                                        {card.isDefault && (
                                            <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                                                <CheckCircle2 className="w-3 h-3" /> Default
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Abstract Card Decoration */}
                                <div className="absolute right-[-20%] bottom-[-50%] w-48 h-48 bg-gray-50 rounded-full opacity-50 blur-2xl z-0 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* UPI IDs */}
                <div>
                    <h3 className="font-bold text-gray-900 mb-3 px-1">UPI IDs</h3>
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                        {upi.map((item) => (
                            <div key={item.id} className="p-4 flex items-center justify-between border-b border-gray-50 last:border-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                                        <Wallet className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900">{item.idStr}</h4>
                                        <p className="text-xs text-gray-500 mt-0.5">{item.app}</p>
                                    </div>
                                </div>
                                {item.isDefault ? (
                                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md flex gap-1 items-center">
                                        <CheckCircle2 className="w-3 h-3" /> Default
                                    </span>
                                ) : (
                                    <button className="text-gray-400 hover:text-gray-900">
                                        <MoreVertical className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        ))}

                        <button className="w-full text-left p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors group">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 border-dashed flex items-center justify-center text-gray-400 group-hover:border-blue-300 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                <Plus className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold text-gray-600 group-hover:text-blue-600 transition-colors">Add New UPI ID</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};
