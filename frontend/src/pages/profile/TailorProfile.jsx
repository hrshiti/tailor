import React from 'react';
import {
    User,
    Briefcase,
    CreditCard,
    ShieldCheck,
    Bell,
    Lock,
    ChevronRight,
    Camera,
    MapPin,
    Calendar,
    Star,
    Save
} from 'lucide-react';

const ProfileSection = ({ title, children, icon: Icon }) => (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-10 space-y-8">
        <div className="flex items-center gap-3 pb-6 border-b border-gray-50">
            <div className="w-10 h-10 bg-[#4C1D95]/5 rounded-xl flex items-center justify-center text-[#4C1D95]">
                <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black text-gray-900 tracking-tight">{title}</h3>
        </div>
        {children}
    </div>
);

const InputField = ({ label, value, type = 'text', placeholder }) => (
    <div className="space-y-1.5 flex-1">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">{label}</label>
        <input
            type={type}
            defaultValue={value}
            placeholder={placeholder}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#4C1D95]/5 focus:border-[#4C1D95] outline-none transition-all font-bold text-sm text-gray-700"
        />
    </div>
);

export const TailorProfile = () => {
    return (
        <div className="space-y-10 animate-fade-in pb-20 max-w-6xl mx-auto">
            {/* Header / Intro */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Profile <span className="text-[#4C1D95]">Settings</span></h1>
                    <p className="text-gray-400 font-bold text-sm tracking-wide mt-1 uppercase">Manage your personal and business presence</p>
                </div>
                <button className="bg-[#4C1D95] text-white px-8 py-3.5 rounded-3xl text-xs font-black tracking-widest uppercase shadow-xl shadow-[#4C1D95]/20 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
                    <Save className="w-4 h-4" /> Save Changes
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                {/* Left Side: Avatar & Verification */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-10 flex flex-col items-center text-center group">
                        <div className="relative mb-6">
                            <div className="w-32 h-32 rounded-[3.5rem] bg-indigo-100 flex items-center justify-center text-4xl font-black text-[#4C1D95] shadow-2xl ring-4 ring-gray-50 group-hover:scale-105 transition-transform">
                                AH
                            </div>
                            <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-2xl border border-gray-100 shadow-xl flex items-center justify-center text-gray-400 hover:text-[#4C1D95] transition-colors">
                                <Camera className="w-5 h-5" />
                            </button>
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-none mb-1">Ahmed Khan</h2>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Masterji Ahmed • Pro Partner</p>

                        <div className="mt-8 flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-100 text-[10px] font-black text-green-600 uppercase tracking-widest">
                            <ShieldCheck className="w-3.5 h-3.5" /> Verified Account
                        </div>
                    </div>

                    <div className="bg-[#4C1D95] rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                        <h4 className="text-lg font-black tracking-tighter mb-4 relative z-10">Need Assistance?</h4>
                        <p className="text-xs text-white/70 font-bold mb-6 relative z-10 leading-relaxed uppercase tracking-wide">Our partner success team is available 24/7 for you.</p>
                        <button className="relative z-10 w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">Contact Partner Support</button>
                        <ShieldCheck className="absolute top-0 right-0 w-32 h-32 text-white/5 -mr-10 -mt-10 group-hover:rotate-12 transition-transform duration-700" />
                    </div>
                </div>

                {/* Right Side: Detailed Forms */}
                <div className="lg:col-span-3 space-y-10">
                    <ProfileSection title="Personal Information" icon={User}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="Full Name" value="Ahmed Khan" />
                            <InputField label="Contact Number" value="+91 98765-43210" />
                            <InputField label="Email Address" value="ahmed.khan@tailorhub.com" />
                            <InputField label="Experience" value="12+ Years" />
                        </div>
                    </ProfileSection>

                    <ProfileSection title="Business Details" icon={Briefcase}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <InputField label="Shop / Studio Name" value="Masterji Ahmed Custom Studios" />
                            </div>
                            <div className="md:col-span-2">
                                <InputField label="Shop Address" value="204, Creative Square, Near MG Road, Indore" />
                            </div>
                            <InputField label="City" value="Indore" />
                            <InputField label="Pincode" value="452001" />
                        </div>
                        <div className="space-y-4 pt-4">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Availability Schedule</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                    <button key={day} className={`py-3 rounded-2xl text-[10px] font-black uppercase border transition-all ${day === 'Sun' ? 'bg-white text-red-400 border-gray-100 hover:border-red-400' : 'bg-[#4C1D95] text-white border-[#4C1D95] shadow-lg shadow-[#4C1D95]/10 hover:scale-105'}`}>
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </ProfileSection>

                    <ProfileSection title="Bank & Payouts" icon={CreditCard}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <InputField label="Account Holder Name" value="Ahmed Khan" />
                            </div>
                            <InputField label="Account Number" value="•••• •••• •••• 8421" />
                            <InputField label="IFSC Code" value="SBIN0001234" />
                            <InputField label="Bank Name" value="State Bank of India" />
                            <InputField label="UPI ID" value="ahmedkhan@okaxis" />
                        </div>
                        <div className="bg-blue-50 p-5 rounded-3xl border border-blue-100 flex items-start gap-4 mt-8">
                            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-blue-700 font-bold leading-relaxed">Your bank details are <span className="underline">end-to-end encrypted</span>. Changes to bank details will require a one-time admin approval and OTP verification for security.</p>
                        </div>
                    </ProfileSection>

                    <div className="flex justify-end gap-4 p-4">
                        <button className="text-gray-400 text-xs font-black uppercase tracking-widest hover:text-red-500 transition-colors">Deactivate Business Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
