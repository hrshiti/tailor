import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, MapPin, MoreVertical, CheckCircle2 } from 'lucide-react';

export const ProfileAddresses = () => {
    const navigate = useNavigate();
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            type: 'Home',
            name: 'Blair Doe',
            phone: '+91 98765 43210',
            address: 'House No. 124, Sector 4, \nNear Apollo Hospital, Indore, MP 452010',
            isDefault: true
        },
        {
            id: 2,
            type: 'Work',
            name: 'Blair Doe',
            phone: '+91 98765 43210',
            address: 'Tech Park, Tower B, 4th Floor,\nVijay Nagar, Indore, MP 452010',
            isDefault: false
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
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">Saved Addresses</h1>
                </div>
            </div>

            <div className="p-4 space-y-4">
                {addresses.map((addr) => (
                    <div key={addr.id} className={`bg-white rounded-2xl p-5 shadow-sm border ${addr.isDefault ? 'border-blue-200 ring-2 ring-blue-50' : 'border-gray-100'} relative`}>

                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                                <div className={`p-1.5 rounded-lg ${addr.isDefault ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-gray-900 capitalize">{addr.type}</h3>
                                {addr.isDefault && (
                                    <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Default
                                    </span>
                                )}
                            </div>
                            <button className="text-gray-400 hover:text-gray-900">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-1">
                            <p className="font-bold text-sm text-gray-900">{addr.name}</p>
                            <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed">{addr.address}</p>
                            <p className="text-sm text-gray-600 font-medium pt-1">Ph: {addr.phone}</p>
                        </div>

                        {!addr.isDefault && (
                            <button className="mt-4 text-xs font-bold text-blue-600 border border-blue-100 bg-blue-50 px-3 py-1.5 rounded-lg w-full">
                                Set as Default
                            </button>
                        )}
                    </div>
                ))}

                <button className="w-full mt-4 bg-white border-2 border-dashed border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 text-gray-500 hover:bg-gray-50 transition-colors hover:border-blue-200 hover:text-blue-600 group">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50">
                        <Plus className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm">Add New Address</span>
                </button>
            </div>
        </div>
    );
};
