import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import AppContainer from '../../../components/Common/AppContainer';
import { Button, Input } from '../components/UIElements';
import { useTailorAuth } from '../context/AuthContext';
import api from '../services/api';
import silaiwalaLogo from '../../../assets/silaiwala-logo.png';

const Login = () => {
    const { login } = useTailorAuth();
    const navigate = useNavigate();
    const [otpSent, setOtpSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [sendingOtp, setSendingOtp] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, setError: setFormError, clearErrors } = useForm();
    const mobileNumber = watch('mobileNumber');

    const handleSendOTP = async () => {
        if (!mobileNumber || mobileNumber.length < 10) {
            setFormError('mobileNumber', { type: 'manual', message: 'Enter a valid 10-digit number' });
            return;
        }

        clearErrors('mobileNumber');
        setSendingOtp(true);
        try {
            await api.post('/auth/send-otp', { phoneNumber: mobileNumber });
            setOtpSent(true);
        } catch (error) {
            setFormError('root', { 
                type: 'manual', 
                message: error.response?.data?.message || 'Failed to send OTP' 
            });
        } finally {
            setSendingOtp(false);
        }
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        clearErrors('root');
        
        try {
            // Backend maps email to phoneNumber for login search
            const response = await api.post('/auth/login', {
                email: data.mobileNumber,
                otp: data.otp
            });

            if (response.data.success) {
                const { token, data: userData } = response.data;
                
                // Ensure only tailors can login to this portal
                if (userData.role !== 'tailor') {
                    setFormError('root', { type: 'manual', message: 'This portal is only for registered tailors.' });
                    return;
                }

                login(userData, token);
                navigate('/partner');
            }
        } catch (error) {
            const message = error.response?.data?.message || "Invalid OTP or server error";
            setFormError('root', { type: 'manual', message });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AppContainer className="bg-white items-center justify-center">
            <div className="flex-1 flex flex-col w-full px-8 pt-12 pb-6 max-w-[400px] mx-auto overflow-y-auto custom-scrollbar">

                <div className="mb-8">
                    <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-white font-black text-xl mb-4 shadow-xl shadow-pink-900/10 overflow-hidden border border-gray-100">
                        <img src={silaiwalaLogo} alt="Silaiwala" className="w-10 h-10 object-contain" />
                    </div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Welcome Back</h1>
                    <p className="text-gray-400 font-bold mt-1 uppercase tracking-widest text-[10px]">Login to manage your shop</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex-1 space-y-4">
                    {errors.root && (
                        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100 font-bold">
                            {errors.root.message}
                        </div>
                    )}

                    <div className="flex gap-2 items-end w-full">
                        <div className="flex-1">
                            <Input
                                label="Mobile Number"
                                placeholder="9876543210"
                                maxLength={10}
                                {...register('mobileNumber', { 
                                    required: 'Mobile number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Invalid mobile number'
                                    }
                                })}
                                error={errors.mobileNumber?.message}
                                disabled={otpSent || sendingOtp}
                            />
                        </div>
                        {!otpSent && (
                            <button
                                type="button"
                                onClick={handleSendOTP}
                                disabled={!mobileNumber || mobileNumber.length < 10 || sendingOtp}
                                className="px-5 py-3 h-[52px] bg-[#FF5C8A] hover:bg-[#cc496e] text-white rounded-2xl font-bold text-sm whitespace-nowrap active:scale-95 disabled:opacity-50 disabled:active:scale-100 transition-all shadow-lg shadow-pink-900/10 mb-1"
                            >
                                {sendingOtp ? 'Sending...' : 'Send OTP'}
                            </button>
                        )}
                    </div>

                    {otpSent && (
                        <div className="animate-in slide-in-from-top-2 duration-300 space-y-4 pt-2">
                            <Input
                                label="Enter OTP"
                                placeholder="000000"
                                maxLength={6}
                                {...register('otp', {
                                    required: 'OTP is required',
                                    pattern: {
                                        value: /^[0-9]{6}$/,
                                        message: 'Please enter a valid 6-digit OTP'
                                    }
                                })}
                                error={errors.otp?.message}
                                className="text-center font-bold tracking-[0.2em] text-lg"
                            />
                            
                            <div className="flex justify-end mt-1">
                                <button
                                    type="button"
                                    onClick={() => setOtpSent(false)}
                                    className="text-[10px] font-black text-[#FF5C8A] uppercase tracking-widest hover:underline"
                                >
                                    Change Mobile Number?
                                </button>
                            </div>

                            <div className="pt-2">
                                <Button type="submit" loading={isLoading} className="bg-[#FF5C8A] hover:bg-[#cc496e] active:scale-95 text-white shadow-lg shadow-pink-900/20">
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    )}
                </form>

                <div className="mt-auto text-center pt-6 border-t border-gray-50">
                    <button
                        type="button"
                        onClick={() => navigate('/partner/register')}
                        className="flex flex-col items-center justify-center w-full group"
                    >
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-gray-600 transition-colors">
                            Don't have an account?
                        </p>
                        <span className="mt-2 text-[#FF5C8A] font-black text-sm uppercase tracking-widest group-hover:underline">
                            Create Shop Profile
                        </span>
                    </button>
                </div>
            </div>
        </AppContainer>
    );
};

export default Login;
