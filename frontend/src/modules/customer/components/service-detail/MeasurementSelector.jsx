import React, { useState } from 'react';
import { Ruler, Plus, Upload, User, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { Input } from '../../../../components/ui/Input';

const MeasurementSelector = ({ selectedType, onSelectType }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Measurement Options</h3>

            <div className="space-y-3">
                {/* 1. Saved Measurement */}
                <div
                    onClick={() => onSelectType('saved')}
                    className={cn(
                        "flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all",
                        selectedType === 'saved' ? "border-[#1e3932] bg-[#f2fcf9] shadow-sm" : "border-gray-100 hover:border-gray-200"
                    )}
                >
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <User size={16} />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">Use Saved Profile</p>
                        <p className="text-[10px] text-gray-500">Blair's Measurement Profile</p>
                    </div>
                    <div className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center", selectedType === 'saved' ? "border-[#1e3932]" : "border-gray-300")}>
                        {selectedType === 'saved' && <div className="w-2 h-2 rounded-full bg-[#1e3932]" />}
                    </div>
                </div>

                {/* 2. Enter New Measurement */}
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <div
                        onClick={() => {
                            onSelectType('new');
                            setIsFormOpen(!isFormOpen);
                        }}
                        className={cn(
                            "flex items-center gap-3 p-3 cursor-pointer transition-all",
                            selectedType === 'new' ? "bg-[#f2fcf9]" : "hover:bg-gray-50"
                        )}
                    >
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-[#1e3932]">
                            <Ruler size={16} />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-900">Enter New Measurements</p>
                            <p className="text-[10px] text-gray-500">Inputs for Chest, Waist, etc.</p>
                        </div>
                        {isFormOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                    </div>

                    {/* Expandable Form */}
                    {isFormOpen && selectedType === 'new' && (
                        <div className="p-3 bg-gray-50 border-t border-gray-100 grid grid-cols-2 gap-3 animate-in slide-in-from-top-2 duration-200">
                            <div>
                                <label className="text-[10px] font-medium text-gray-500 ml-1">Chest (in)</label>
                                <Input placeholder="32" className="bg-white h-9 text-sm" />
                            </div>
                            <div>
                                <label className="text-[10px] font-medium text-gray-500 ml-1">Waist (in)</label>
                                <Input placeholder="28" className="bg-white h-9 text-sm" />
                            </div>
                            <div>
                                <label className="text-[10px] font-medium text-gray-500 ml-1">Shoulder (in)</label>
                                <Input placeholder="14" className="bg-white h-9 text-sm" />
                            </div>
                            <div>
                                <label className="text-[10px] font-medium text-gray-500 ml-1">Length (in)</label>
                                <Input placeholder="40" className="bg-white h-9 text-sm" />
                            </div>
                            <div className="col-span-2">
                                <label className="text-[10px] font-medium text-gray-500 ml-1">Any specific notes?</label>
                                <textarea className="w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-1 focus:ring-[#1e3932] focus:outline-none" rows={2} placeholder="E.g. Loose fit preferences" />
                            </div>
                        </div>
                    )}
                </div>


                {/* 3. Upload Measurement Slip */}
                <div
                    onClick={() => onSelectType('upload')}
                    className={cn(
                        "flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all",
                        selectedType === 'upload' ? "border-[#1e3932] bg-[#f2fcf9] shadow-sm" : "border-gray-100 hover:border-gray-200"
                    )}
                >
                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                        <Upload size={16} />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">Upload Measurement Slip</p>
                        <p className="text-[10px] text-gray-500">Photo of handwritten notes</p>
                    </div>
                    <div className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center", selectedType === 'upload' ? "border-[#1e3932]" : "border-gray-300")}>
                        {selectedType === 'upload' && <div className="w-2 h-2 rounded-full bg-[#1e3932]" />}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MeasurementSelector;
