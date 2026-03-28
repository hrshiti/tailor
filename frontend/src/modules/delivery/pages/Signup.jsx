import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import useAuthStore from '../../../store/authStore';
import { Navigation2, ArrowLeft } from 'lucide-react';
import silaiwalaLogo from '../../../assets/silaiwala-logo.png';

const DeliverySignup = () => {
    const navigate = useNavigate();
    const signup = useAuthStore((state) => state.signup);
    const isLoading = useAuthStore((state) => state.isLoading);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        vehicleNumber: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            await signup({ ...formData, role: 'delivery' });
            navigate('/delivery');
        } catch (err) {
            setError(err.message || 'Signup failed');
        }
    };

    return (
        <div className="w-full">
            <div className="relative flex flex-col items-center mb-10">
                <button 
                    onClick={() => navigate('/delivery/login')} 
                    className="absolute left-0 top-0 p-3 bg-slate-50 text-slate-400 rounded-2xl hover:text-slate-900 transition-all border border-slate-100"
                >
                    <ArrowLeft size={18} />
                </button>
                
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl border border-slate-50 mb-6">
                    <img src={silaiwalaLogo} alt="Silaiwala" className="w-14 h-14 object-contain" />
                </div>
                
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">Join the Fleet</h2>
                <div className="w-12 h-1 bg-pink-600 rounded-full mt-3 opacity-20"></div>
                <p className="text-[11px] font-semibold text-pink-800 uppercase tracking-[0.15em] mt-4 opacity-70">Exclusive Delivery Partner Program</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100 font-bold">
                        {error}
                    </div>
                )}

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider pl-1">Full Name</label>
                    <Input
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-2xl border-slate-200 focus:ring-pink-500 focus:border-pink-500"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider pl-1">Email Address</label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="rider@silaiwala.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-2xl border-slate-200 focus:ring-pink-500 focus:border-pink-500"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider pl-1">Phone</label>
                        <Input
                            name="phone"
                            placeholder="Mobile No."
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="rounded-2xl border-slate-200 focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider pl-1">Vehicle No.</label>
                        <Input
                            name="vehicleNumber"
                            placeholder="DL 1CB 1234"
                            value={formData.vehicleNumber}
                            onChange={handleChange}
                            required
                            className="rounded-2xl border-slate-200 focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider pl-1">Password</label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="rounded-2xl border-slate-200 focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider pl-1">Confirm</label>
                        <Input
                            name="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="rounded-2xl border-slate-200 focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-[#FF5C8A] hover:bg-[#cc496e] text-white py-3.5 rounded-2xl font-semibold text-[11px] uppercase tracking-[0.15em] shadow-lg shadow-pink-900/10 active:scale-95 transition-all mt-4"
                    disabled={isLoading}
                >
                    {isLoading ? 'Processing...' : 'Create Driver Profile'}
                </Button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Already a partner?{' '}
                </p>
                <Link to="/delivery/login" className="inline-block mt-3 text-pink-800 font-bold text-sm uppercase tracking-wider hover:underline">
                    Sign In Here
                </Link>
            </div>
        </div>
    );
};

export default DeliverySignup;
