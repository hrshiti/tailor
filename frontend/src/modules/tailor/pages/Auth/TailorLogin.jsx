import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import { useTailorAuth } from '../../context/TailorAuthContext';

export const TailorLogin = () => {
    const navigate = useNavigate();
    const { login, tailorStatus } = useTailorAuth();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate login and redirect based on status
        setTimeout(() => {
            login({ email: 'tailor@example.com' });

            if (tailorStatus === 'PENDING_APPROVAL') {
                navigate('/tailor/status/pending');
            } else if (tailorStatus === 'REJECTED') {
                navigate('/tailor/status/rejected');
            } else {
                navigate('/tailor/dashboard');
            }
            setLoading(false);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100 ring-1 ring-black/5">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-[#4C1D95] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                        <LogIn className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Welcome Back!</h1>
                    <p className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-widest">Tailor Partner Portal</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#4C1D95] transition-colors" />
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#4C1D95]/20 focus:border-[#4C1D95] outline-none transition-all font-medium"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#4C1D95] transition-colors" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#4C1D95]/20 focus:border-[#4C1D95] outline-none transition-all font-medium"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-xs px-1">
                        <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded-md border-gray-200 text-[#4C1D95] focus:ring-[#4C1D95]" />
                            Remember Me
                        </label>
                        <button type="button" className="text-[#4C1D95] font-bold hover:underline tracking-wide">Forgot Password?</button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-sm tracking-widest uppercase shadow-xl hover:bg-black transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group disabled:opacity-70"
                    >
                        {loading ? 'Logging in...' : (
                            <>
                                Enter Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-10 pt-8 border-t border-gray-50 text-center">
                    <p className="text-sm text-gray-500 font-medium">
                        Don't have a partner account?
                        <button
                            onClick={() => navigate('/tailor/register')}
                            className="text-[#4C1D95] font-black ml-2 hover:underline tracking-tight"
                        >
                            Register Now
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};
