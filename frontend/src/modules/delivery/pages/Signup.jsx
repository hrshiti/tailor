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
            <div className="flex items-center gap-4 mb-8">
                <button onClick={() => navigate('/delivery/login')} className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-slate-900 transition-all">
                    <ArrowLeft size={18} />
                </button>
                <div className="flex-1 flex items-center gap-3">
                    <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg border border-slate-100">
                        <img src={silaiwalaLogo} alt="Silaiwala" className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900 leading-none tracking-tight">Silaiwala</h2>
                        <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest mt-1">Delivery Partner</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100 font-bold">
                        {error}
                    </div>
                )}

                <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Full Name</label>
                    <Input
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-2xl border-slate-200 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Email Address</label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="rider@silaiwala.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-2xl border-slate-200 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Phone</label>
                        <Input
                            name="phone"
                            placeholder="Mobile No."
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="rounded-2xl border-slate-200 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Vehicle No.</label>
                        <Input
                            name="vehicleNumber"
                            placeholder="DL 1CB 1234"
                            value={formData.vehicleNumber}
                            onChange={handleChange}
                            required
                            className="rounded-2xl border-slate-200 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Password</label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="rounded-2xl border-slate-200 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Confirm</label>
                        <Input
                            name="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="rounded-2xl border-slate-200 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-[#142921] hover:bg-[#0d1b16] text-white py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-emerald-900/10 active:scale-95 transition-all mt-4"
                    disabled={isLoading}
                >
                    {isLoading ? 'Processing...' : 'Create Driver Profile'}
                </Button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                    Already a partner?{' '}
                </p>
                <Link to="/delivery/login" className="inline-block mt-3 text-emerald-800 font-black text-sm uppercase tracking-widest hover:underline">
                    Sign In Here
                </Link>
            </div>
        </div>
    );
};

export default DeliverySignup;
