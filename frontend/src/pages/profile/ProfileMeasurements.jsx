import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Scissors, Ruler, CheckCircle2, MoreVertical, Plus } from 'lucide-react';

export const ProfileMeasurements = () => {
    const navigate = useNavigate();

    const [profiles] = useState([
        {
            id: 1,
            name: 'My Kurti Size',
            type: 'Kurti',
            lastUpdated: '15 Oct, 2026',
            isDefault: true,
            measurements: {
                Chest: '36"',
                Waist: '30"',
                Length: '40"',
                Shoulder: '14.5"'
            }
        },
        {
            id: 2,
            name: 'Mom\'s Suit',
            type: 'Salwar Suit',
            lastUpdated: '02 Sep, 2026',
            isDefault: false,
            measurements: {
                Chest: '40"',
                Waist: '36"',
                Length: '42"',
                Shoulder: '16"'
            }
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
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">Measurements</h1>
                </div>
                <button className="text-[#4C1D95] hover:bg-gray-50 p-1.5 rounded-lg font-bold text-sm">
                    Guide
                </button>
            </div>

            <div className="p-4 space-y-4">
                {/* Helper Banner */}
                <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100 flex items-start gap-3">
                    <div className="p-2 bg-orange-100 text-orange-600 rounded-xl shrink-0 mt-0.5">
                        <Ruler className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-orange-900 text-sm">Save your sizes for quick ordering</h3>
                        <p className="text-xs text-orange-700 mt-1 leading-relaxed">
                            We recommend saving fresh measurements every 6 months for the perfect fit.
                        </p>
                    </div>
                </div>

                {/* Saved Profiles */}
                {profiles.map((profile) => (
                    <div key={profile.id} className={`bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border ${profile.isDefault ? 'border-purple-200 ring-2 ring-purple-50' : 'border-gray-100'}`}>

                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${profile.isDefault ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-500'}`}>
                                    <Scissors className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{profile.name}</h3>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-xs text-gray-500 flex items-center gap-1">
                                            {profile.type}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span className="text-[10px] text-gray-400">Updated {profile.lastUpdated}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-900">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Matrix of measurements */}
                        <div className="grid grid-cols-4 gap-2 mb-4 bg-gray-50 rounded-2xl p-3 border border-gray-100">
                            {Object.entries(profile.measurements).map(([key, val]) => (
                                <div key={key} className="text-center rounded-xl py-2 bg-white shadow-sm border border-gray-100">
                                    <span className="block text-xs font-bold text-[#4C1D95] mb-0.5">{val}</span>
                                    <span className="block text-[9px] text-gray-500 font-medium uppercase tracking-wider">{key}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-100">
                            {profile.isDefault ? (
                                <span className="text-xs font-bold text-purple-600 flex items-center gap-1.5 py-1.5">
                                    <CheckCircle2 className="w-4 h-4" /> Default Size
                                </span>
                            ) : (
                                <button className="text-xs font-bold text-gray-500 hover:text-purple-600 transition-colors py-1.5 px-3 rounded-lg hover:bg-purple-50">
                                    Set Default
                                </button>
                            )}

                            <button className="text-xs font-bold text-[#4C1D95] bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors">
                                Edit
                            </button>
                        </div>

                    </div>
                ))}

                <button className="w-full mt-2 bg-[#4C1D95] text-white rounded-2xl p-4 flex items-center justify-center gap-2 font-bold shadow-lg shadow-[#4C1D95]/20 transition-transform active:scale-95">
                    <Plus className="w-5 h-5" />
                    Create New Profile
                </button>
            </div>

        </div>
    );
};

