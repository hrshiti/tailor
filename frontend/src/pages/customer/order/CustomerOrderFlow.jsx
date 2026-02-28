import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CheckCircle2,
    MapPin,
    Scissors,
    Clock,
    Image as ImageIcon,
    Upload,
    CreditCard,
    ChevronRight,
    ChevronLeft
} from 'lucide-react';

export const CustomerOrderFlow = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        pincode: '',
        service: 'Kurti',
        deliveryType: 'Normal', // Normal, Express, Premium
        measurementType: 'Self', // Self, Slip
        fabricSource: 'Own', // Own, Platform
        pickupAddress: '',
        deliveryAddress: ''
    });

    const nextStep = () => setStep(s => Math.min(4, s + 1));
    const prevStep = () => setStep(s => Math.max(1, s - 1));

    const handleComplete = () => {
        // Navigate to tracking with a mock ID
        navigate('/orders/tracking/ORD-4822');
    };

    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header */}
            <div className="bg-[#4C1D95] text-white px-5 py-4 shrink-0 shadow-md z-10 sticky top-0">
                <div className="flex items-center gap-3">
                    {step > 1 ? (
                        <button onClick={prevStep} className="p-1 -ml-1 text-gray-300 hover:text-white">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    ) : (
                        <button onClick={() => navigate(-1)} className="p-1 -ml-1 text-gray-300 hover:text-white">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    )}
                    <div>
                        <h1 className="text-xl font-bold tracking-tight">Place Order</h1>
                        <p className="text-xs text-gray-300">Step {step} of 4</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="flex gap-1 mt-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-yellow-400' : 'bg-white/20'}`} />
                    ))}
                </div>
            </div>

            {/* Main Content Areas */}
            <div className="flex-1 overflow-y-auto hide-scrollbar p-5 pb-24">

                {/* --- STEP 1: Service & Pincode --- */}
                {step === 1 && (
                    <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-1">Check Availability</h2>
                            <p className="text-sm text-gray-500 mb-4">Enter your pincode to verify service in your area.</p>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Enter 6-digit Pincode"
                                    value={formData.pincode}
                                    onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                                    className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-[#4C1D95] outline-none font-medium"
                                />
                            </div>
                            {formData.pincode.length === 6 && (
                                <p className="text-xs font-bold text-green-600 mt-2 flex items-center gap-1">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> Direct Stitching Available (Kashmir region detected)
                                </p>
                            )}
                        </div>

                        <hr className="border-gray-200" />

                        <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-3">Select Service Type</h2>
                            <div className="grid grid-cols-2 gap-3">
                                {['Kurti', 'Salwar Suit', 'Blouse', 'Gown'].map(srv => (
                                    <button
                                        key={srv}
                                        onClick={() => setFormData({ ...formData, service: srv })}
                                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${formData.service === srv
                                                ? 'border-[#4C1D95] bg-green-50 text-[#4C1D95]'
                                                : 'border-transparent bg-white shadow-sm text-gray-600'
                                            }`}
                                    >
                                        <Scissors className={`w-8 h-8 mb-2 ${formData.service === srv ? 'text-[#4C1D95]' : 'text-gray-400'}`} />
                                        <span className="font-bold text-sm">{srv}</span>
                                        <span className="text-[10px] uppercase font-bold text-gray-400 mt-1">From ₹999</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <hr className="border-gray-200" />

                        <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-3">Delivery Speed</h2>
                            <div className="space-y-3">
                                {[
                                    { id: 'Normal', label: 'Normal Delivery', days: '15 Days', desc: 'Standard platform timeline' },
                                    { id: 'Express', label: 'Express Delivery', days: '10 Days', desc: '+₹200 rush priority' },
                                    { id: 'Premium', label: 'Premium 7-Day', days: '7 Days', desc: '+₹500 exclusive fast-track' },
                                ].map(del => (
                                    <button
                                        key={del.id}
                                        onClick={() => setFormData({ ...formData, deliveryType: del.id })}
                                        className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all text-left ${formData.deliveryType === del.id
                                                ? 'border-[#4C1D95] bg-green-50'
                                                : 'border-transparent bg-white shadow-sm'
                                            }`}
                                    >
                                        <div>
                                            <h4 className={`font-bold ${formData.deliveryType === del.id ? 'text-[#4C1D95]' : 'text-gray-900'}`}>{del.label}</h4>
                                            <p className="text-xs text-gray-500 mt-0.5">{del.desc}</p>
                                        </div>
                                        <div className="bg-gray-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-gray-500" />
                                            <span className="text-xs font-bold text-gray-700">{del.days}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* --- STEP 2: Measurements & Design --- */}
                {step === 2 && (
                    <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-3">Measurements</h2>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => setFormData({ ...formData, measurementType: 'Self' })}
                                    className={`p-4 rounded-xl border-2 text-center ${formData.measurementType === 'Self' ? 'border-[#4C1D95] bg-green-50' : 'border-transparent bg-white shadow-sm'}`}
                                >
                                    <p className="font-bold text-sm text-gray-900">Enter Details</p>
                                    <p className="text-[10px] text-gray-500 mt-1">Input size online</p>
                                </button>
                                <button
                                    onClick={() => setFormData({ ...formData, measurementType: 'Slip' })}
                                    className={`p-4 rounded-xl border-2 text-center ${formData.measurementType === 'Slip' ? 'border-[#4C1D95] bg-green-50' : 'border-transparent bg-white shadow-sm'}`}
                                >
                                    <p className="font-bold text-sm text-gray-900">Attach Slip</p>
                                    <p className="text-[10px] text-gray-500 mt-1">Provide with fabric</p>
                                </button>
                            </div>

                            {formData.measurementType === 'Self' && (
                                <div className="mt-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Saved Profile</p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-bold text-gray-900">Standard Kurti Profile</p>
                                            <p className="text-xs text-gray-500">Last updated 2 weeks ago</p>
                                        </div>
                                        <button className="text-sm font-bold text-[#4C1D95]">Edit</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-3">Design Reference</h2>
                            <button className="w-full flex flex-col items-center justify-center p-6 bg-white border-2 border-dashed border-gray-300 rounded-2xl hover:border-[#4C1D95] hover:bg-gray-50 transition-colors">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                                    <ImageIcon className="w-5 h-5 text-gray-500" />
                                </div>
                                <p className="font-bold text-sm text-gray-900">Upload Design Images</p>
                                <p className="text-xs text-gray-500 mt-1">Show us exactly what you want</p>
                            </button>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-3">Fabric Source</h2>
                            <div className="space-y-3">
                                <button
                                    onClick={() => setFormData({ ...formData, fabricSource: 'Own' })}
                                    className={`w-full flex items-center p-4 rounded-2xl border-2 text-left ${formData.fabricSource === 'Own' ? 'border-[#4C1D95] bg-green-50' : 'border-transparent bg-white shadow-sm'}`}
                                >
                                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${formData.fabricSource === 'Own' ? 'border-[#4C1D95]' : 'border-gray-300'}`}>
                                        {formData.fabricSource === 'Own' && <div className="w-2.5 h-2.5 bg-[#4C1D95] rounded-full" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">I have my own fabric</h4>
                                        <p className="text-xs text-gray-500">Delivery partner will pick it up</p>
                                    </div>
                                </button>
                                <button
                                    onClick={() => setFormData({ ...formData, fabricSource: 'Platform' })}
                                    className={`w-full flex items-center p-4 rounded-2xl border-2 text-left ${formData.fabricSource === 'Platform' ? 'border-[#4C1D95] bg-green-50' : 'border-transparent bg-white shadow-sm'}`}
                                >
                                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${formData.fabricSource === 'Platform' ? 'border-[#4C1D95]' : 'border-gray-300'}`}>
                                        {formData.fabricSource === 'Platform' && <div className="w-2.5 h-2.5 bg-[#4C1D95] rounded-full" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Buy from SilaiWala Store</h4>
                                        <p className="text-xs text-gray-500">Choose premium materials directly</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- STEP 3: Addresses --- */}
                {step === 3 && (
                    <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-lg font-bold text-gray-900">Pickup Address</h2>
                                <button className="text-sm font-bold text-[#4C1D95]">+ Add New</button>
                            </div>

                            <div className="bg-green-50 border-2 border-[#4C1D95] p-4 rounded-2xl">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#4C1D95] shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Home</h4>
                                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                                            House No 42, Sector 3, Residency Road<br />
                                            Srinagar, Jammu & Kashmir 190001
                                        </p>
                                        <p className="text-xs font-bold text-gray-900 mt-2">Ph: +91 98765 43210</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 py-2">
                            <input type="checkbox" id="same_address" className="w-4 h-4 rounded text-[#4C1D95] focus:ring-[#4C1D95]" defaultChecked />
                            <label htmlFor="same_address" className="text-sm font-medium text-gray-700">Delivery address is same as pickup</label>
                        </div>
                    </div>
                )}

                {/* --- STEP 4: Checkout Summary --- */}
                {step === 4 && (
                    <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#4C1D95]/5 rounded-bl-full pointer-events-none" />
                            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Order Summary</h2>

                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                                        <Scissors className="w-6 h-6 text-[#4C1D95]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{formData.service} Stitching</h3>
                                        <p className="text-xs text-gray-500">{formData.measurementType} Measurements • {formData.fabricSource} Fabric</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-dashed border-gray-200 py-4 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Base Stitching Cost</span>
                                    <span className="font-medium">₹999</span>
                                </div>
                                {formData.deliveryType !== 'Normal' && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">{formData.deliveryType} Delivery fee</span>
                                        <span className="font-medium text-orange-600">+{formData.deliveryType === 'Express' ? '₹200' : '₹500'}</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Platform Convenience Fee</span>
                                    <span className="font-medium">₹49</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                                <span className="font-bold text-gray-900">Total Amount</span>
                                <span className="text-xl font-bold text-[#4C1D95]">
                                    ₹{999 + 49 + (formData.deliveryType === 'Premium' ? 500 : formData.deliveryType === 'Express' ? 200 : 0)}
                                </span>
                            </div>
                        </div>

                        <div className="bg-[#4C1D95]/5 border border-[#4C1D95]/10 p-4 rounded-xl flex gap-3">
                            <Clock className="w-5 h-5 text-[#4C1D95] shrink-0" />
                            <div>
                                <p className="text-sm font-bold text-[#4C1D95]">Estimated Delivery Time</p>
                                <p className="text-xs text-[#4C1D95]/70 mt-0.5">Your garment will be delivered securely in exactly {formData.deliveryType === 'Premium' ? '7' : formData.deliveryType === 'Express' ? '10' : '15'} days after fabric pickup.</p>
                            </div>
                        </div>

                        <p className="text-center text-[10px] text-gray-400 font-medium px-4">
                            Secure online payments powered by Razorpay. Cash on Delivery is not available for custom stitching services.
                        </p>
                    </div>
                )}

            </div>

            {/* Floating Action Bar */}
            <div className="bg-white border-t border-gray-100 p-4 sticky bottom-0 z-20 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
                <button
                    onClick={step === 4 ? handleComplete : nextStep}
                    disabled={step === 1 && formData.pincode.length !== 6}
                    className="w-full bg-[#4C1D95] disabled:bg-gray-300 disabled:text-gray-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-[#4C1D95]/20"
                >
                    {step === 4 ? (
                        <>Pay Now & Place Order <CreditCard className="w-5 h-5" /></>
                    ) : (
                        <>Continue <ChevronRight className="w-5 h-5" /></>
                    )}
                </button>
            </div>
        </div>
    );
};

