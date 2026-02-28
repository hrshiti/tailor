import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    User,
    Briefcase,
    FileText,
    CreditCard,
    CheckCircle,
    ArrowRight,
    ArrowLeft,
    Upload,
    Check
} from 'lucide-react';
import { useTailorAuth } from '../../context/TailorAuthContext';

export const TailorRegistration = () => {
    const navigate = useNavigate();
    const { register } = useTailorAuth();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Basic
        fullName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        // Step 2: Business
        shopName: '',
        shopAddress: '',
        city: '',
        state: '',
        pincode: '',
        serviceArea: '',
        // Step 3: Documents
        aadharNumber: '',
        panNumber: '',
        // Step 4: Bank
        accountHolder: '',
        accountNumber: '',
        ifscCode: '',
        // Step 5: Plan
        plan: 'Basic'
    });

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData);
        navigate('/tailor/status/pending');
    };

    const renderProgressBar = () => {
        const steps = ['Basic', 'Business', 'Documents', 'Bank', 'Plan'];
        return (
            <div className="flex items-center justify-between mb-10 max-w-2xl mx-auto px-4">
                {steps.map((s, i) => (
                    <React.Fragment key={s}>
                        <div className="flex flex-col items-center relative">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${step > i + 1 ? 'bg-green-500 border-green-500 text-white' : step === i + 1 ? 'border-[#4C1D95] text-[#4C1D95] font-bold' : 'border-gray-200 text-gray-400'}`}>
                                {step > i + 1 ? <Check className="w-6 h-6" /> : i + 1}
                            </div>
                            <span className={`text-[10px] mt-2 font-semibold uppercase tracking-wider ${step === i + 1 ? 'text-[#4C1D95]' : 'text-gray-400'}`}>{s}</span>
                        </div>
                        {i < steps.length - 1 && (
                            <div className={`flex-1 h-0.5 mx-2 -mt-6 transition-all duration-300 ${step > i + 1 ? 'bg-green-500' : 'bg-gray-200'}`} />
                        )}
                    </React.Fragment>
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-extrabold text-gray-900">Tailor Registration</h1>
                    <p className="mt-2 text-sm text-gray-600">Join our platform and grow your business</p>
                </div>

                {renderProgressBar()}

                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100 overflow-hidden relative">
                    {/* Step 1: Basic Details */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <User className="text-[#4C1D95]" /> Basic Details
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                    <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                                    <input type="tel" placeholder="Enter 10 digit number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="space-y-1 sm:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                    <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="sm:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Profile Image</label>
                                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors">
                                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                        <p className="text-sm text-gray-500">Click or drag to upload image</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Business Details */}
                    {step === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <Briefcase className="text-[#4C1D95]" /> Business Details
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1 sm:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700">Shop Name</label>
                                    <input type="text" placeholder="e.g. Master Tailors" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="space-y-1 sm:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700">Shop Address</label>
                                    <textarea rows="2" placeholder="Street address, locality..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all resize-none"></textarea>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">City</label>
                                    <input type="text" placeholder="Indore" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Pincode</label>
                                    <input type="text" placeholder="452001" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="space-y-1 sm:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700">Service Area (Radius in KM)</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all">
                                        <option>Within 5 KM</option>
                                        <option>Within 10 KM</option>
                                        <option>Within 20 KM</option>
                                        <option>City Wide</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Document Upload */}
                    {step === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <FileText className="text-[#4C1D95]" /> Document Upload
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1 sm:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700">Aadhar Card Number</label>
                                    <input type="text" placeholder="xxxx xxxx xxxx" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Aadhar Front</label>
                                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-gray-50 cursor-pointer">
                                        <Upload className="w-5 h-5 text-gray-400 mb-1" />
                                        <span className="text-xs text-gray-500">Upload Front</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Aadhar Back</label>
                                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-gray-50 cursor-pointer">
                                        <Upload className="w-5 h-5 text-gray-400 mb-1" />
                                        <span className="text-xs text-gray-500">Upload Back</span>
                                    </div>
                                </div>
                                <div className="space-y-1 sm:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700">PAN Card Number</label>
                                    <input type="text" placeholder="ABCDE1234F" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Shop License</label>
                                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-gray-50 cursor-pointer">
                                        <Upload className="w-5 h-5 text-gray-400 mb-1" />
                                        <span className="text-xs text-gray-500">Upload License</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Police Verification</label>
                                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-gray-50 cursor-pointer">
                                        <Upload className="w-5 h-5 text-gray-400 mb-1" />
                                        <span className="text-xs text-gray-500">Upload Document</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Bank Details */}
                    {step === 4 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <CreditCard className="text-[#4C1D95]" /> Bank Details
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1 sm:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700">Account Holder Name</label>
                                    <input type="text" placeholder="Name as per bank records" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Account Number</label>
                                    <input type="text" placeholder="Enter bank account number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">IFSC Code</label>
                                    <input type="text" placeholder="SBIN0001234" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                                <div className="space-y-1 sm:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700">UPI ID (Optional)</label>
                                    <input type="text" placeholder="username@upi" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4C1D95] outline-none transition-all" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 5: Subscription Plan */}
                    {step === 5 && (
                        <div className="space-y-8 text-center">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold text-gray-800">Select Your Plan</h2>
                                <p className="text-sm text-gray-500">Choose a plan that fits your business needs</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {[
                                    { name: 'Basic', price: '₹499', features: ['10 Orders/mo', 'Email Support', 'Basic Profile'] },
                                    { name: 'Premium', price: '₹999', features: ['50 Orders/mo', 'Priority Support', 'Featured Listing', 'Advanced Stats'], popular: true },
                                    { name: 'Pro', price: '₹1999', features: ['Unlimited Orders', '24/7 Dedicated Support', 'Top Listing', 'White-label Invoicing'] }
                                ].map((plan) => (
                                    <div
                                        key={plan.name}
                                        onClick={() => setFormData({ ...formData, plan: plan.name })}
                                        className={`relative p-6 rounded-3xl border-2 transition-all cursor-pointer ${formData.plan === plan.name ? 'border-[#4C1D95] bg-[#4C1D95]/5' : 'border-gray-100 hover:border-gray-200'}`}
                                    >
                                        {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4C1D95] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</span>}
                                        <h3 className="text-lg font-bold text-gray-800 mt-2">{plan.name}</h3>
                                        <div className="my-4">
                                            <span className="text-2xl font-black text-gray-900">{plan.price}</span>
                                            <span className="text-gray-400 text-xs">/month</span>
                                        </div>
                                        <ul className="text-xs text-gray-500 space-y-2 mb-6">
                                            {plan.features.map(f => <li key={f} className="flex items-center justify-center gap-1"><Check className="w-3 h-3 text-green-500" /> {f}</li>)}
                                        </ul>
                                        <div className={`w-6 h-6 rounded-full mx-auto border-2 flex items-center justify-center ${formData.plan === plan.name ? 'bg-[#4C1D95] border-[#4C1D95]' : 'border-gray-200'}`}>
                                            {formData.plan === plan.name && <Check className="w-4 h-4 text-white" />}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-4 text-xs text-gray-500">
                                Note: You will be redirected to Razorpay for a secure payment of <span className="font-bold text-gray-900">{step === 5 ? (formData.plan === 'Basic' ? '₹499' : formData.plan === 'Premium' ? '₹999' : '₹1999') : ''}</span>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100">
                        {step > 1 ? (
                            <button
                                onClick={prevStep}
                                className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" /> Go Back
                            </button>
                        ) : <div />}

                        {step < 5 ? (
                            <button
                                onClick={nextStep}
                                className="bg-[#4C1D95] text-white px-8 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg hover:bg-[#3B1675] transition-all transform hover:-translate-y-0.5"
                            >
                                Continue <ArrowRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="bg-green-600 text-white px-10 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg hover:bg-green-700 transition-all transform hover:-translate-y-0.5"
                            >
                                Final Payment & Submit <ArrowRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>

                <div className="text-center mt-8 space-x-6 text-sm">
                    <button onClick={() => navigate('/tailor/login')} className="text-[#4C1D95] font-semibold hover:underline">Already have an account? Login</button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">Help & Support</button>
                </div>
            </div>
        </div>
    );
};
