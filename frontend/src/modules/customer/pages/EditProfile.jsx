import React, { useState } from 'react';
import { ArrowLeft, Save, User, Mail, Phone, MapPin, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../../store/authStore';

const EditProfile = () => {
    const navigate = useNavigate();
    const { user, setUser } = useAuthStore(state => state);

    const [formData, setFormData] = useState({
        name: user?.name || 'Guest User',
        email: user?.email || 'guest@example.com',
        phone: user?.phone || '+91 9876543210',
        location: user?.location || 'Srinagar, Kashmir'
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock API Call
        setTimeout(() => {
            // Update store
            // useAuthStore doesn't have a setUser by default in many patterns, checking common ones
            // For now, mock success and navigate back
            setIsLoading(false);
            navigate('/profile');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 pb-20">
            {/* 1. Header */}
            <div className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-4 flex items-center justify-between pt-safe">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-50 transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-lg font-bold">Edit Profile</h1>
                </div>
                <button
                    onClick={handleSubmit}
                    className="p-2 text-[#1e3932] hover:bg-green-50 rounded-full transition-colors"
                    disabled={isLoading}
                >
                    <Save size={20} />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-8 max-w-md mx-auto">
                {/* 2. Profile Photo */}
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <div className="w-28 h-28 rounded-full border-4 border-gray-50 shadow-md overflow-hidden bg-gray-100 flex items-center justify-center">
                            <span className="text-4xl font-black text-[#1e3932]">{formData.name.charAt(0)}</span>
                        </div>
                        <button type="button" className="absolute bottom-1 right-1 bg-gray-900 text-white p-2 rounded-full shadow-lg hover:bg-black transition-all">
                            <Camera size={16} />
                        </button>
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-3 tracking-widest">Change Photo</p>
                </div>

                {/* 3. Form Fields */}
                <div className="space-y-6">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 focus-within:border-[#1e3932] focus-within:bg-white transition-all">
                            <User size={18} className="text-gray-400" />
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="bg-transparent text-sm font-bold w-full focus:outline-none"
                                placeholder="Enter your name"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 focus-within:border-[#1e3932] focus-within:bg-white transition-all">
                            <Mail size={18} className="text-gray-400" />
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="bg-transparent text-sm font-bold w-full focus:outline-none"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 focus-within:border-[#1e3932] focus-within:bg-white transition-all">
                            <Phone size={18} className="text-gray-400" />
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="bg-transparent text-sm font-bold w-full focus:outline-none"
                                placeholder="Enter phone"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">City / Location</label>
                        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 focus-within:border-[#1e3932] focus-within:bg-white transition-all">
                            <MapPin size={18} className="text-gray-400" />
                            <input
                                type="text"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                className="bg-transparent text-sm font-bold w-full focus:outline-none"
                                placeholder="Enter location"
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-6">
                    <button
                        type="submit"
                        className="w-full bg-[#1e3932] text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-[#1e3932]/20 flex items-center justify-center gap-3 transition-all hover:bg-[#152e28] active:scale-95"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            "Save Changes"
                        )}
                    </button>
                    <p className="text-[10px] text-gray-400 text-center mt-4">
                        SilaiWala protects your data privacy as per our <span className="underline">Terms of Service</span>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
