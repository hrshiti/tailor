import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import useAuthStore from '../../../store/authStore';

const Login = () => {
    const navigate = useNavigate();
    const { otpLogin, sendOTP, isLoading } = useAuthStore();
    
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [error, setError] = useState('');
    const [sendingOtp, setSendingOtp] = useState(false);

    const handleSendOtp = async () => {
        setError('');
        if (!mobileNumber || mobileNumber.length < 10) {
            setError('Please enter a valid mobile number');
            return;
        }

        setSendingOtp(true);
        try {
            await sendOTP(mobileNumber);
            setOtpSent(true);
        } catch (err) {
            setError(err.message || 'Failed to send OTP');
        } finally {
            setSendingOtp(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!mobileNumber || !otp) {
            setError('Please fill in all fields');
            return;
        }

        try {
            const user = await otpLogin(mobileNumber, otp);
            const redirectPath = {
                tailor: '/partner',
                delivery: '/delivery',
                admin: '/admin'
            }[user.role] || '/';
            navigate(redirectPath);
        } catch (err) {
            setError(err.message || 'Invalid OTP');
        }
    };

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold text-center text-[#FF5C8A] mb-2">Welcome Back</h2>
            <p className="text-center text-gray-500 mb-8">Sign in with Mobile Number to continue</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
                        {error}
                    </div>
                )}

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                    <div className="flex gap-2">
                        <Input
                            type="tel"
                            placeholder="9876543210"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                            maxLength={10}
                            required
                            disabled={otpSent || sendingOtp}
                            className="flex-1"
                        />
                        {!otpSent && (
                            <Button 
                                type="button" 
                                onClick={handleSendOtp} 
                                disabled={!mobileNumber || mobileNumber.length < 10 || sendingOtp}
                                className="bg-[#FF5C8A] hover:bg-[#cc496e] text-white shrink-0"
                            >
                                {sendingOtp ? 'Sending...' : 'Send OTP'}
                            </Button>
                        )}
                    </div>
                </div>

                {otpSent && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                        <div className="flex justify-between">
                            <label className="text-sm font-medium text-gray-700">Enter OTP</label>
                            <button 
                                type="button" 
                                onClick={() => setOtpSent(false)} 
                                className="text-xs text-[#FF5C8A] hover:underline"
                            >
                                Change Number?
                            </button>
                        </div>
                        <Input
                            type="text"
                            placeholder="123456"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                            maxLength={6}
                            required
                        />
                        <Button
                            type="submit"
                            className="w-full bg-[#FF5C8A] hover:bg-[#cc496e] text-white py-2.5 rounded-full mt-4"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Verifying...' : 'Verify OTP & Sign In'}
                        </Button>
                    </div>
                )}
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
                Don't have an account?{' '}
                <Link to="/signup" className="font-semibold text-[#FF5C8A] hover:underline">
                    Create account
                </Link>
            </div>
        </div>
    );
};

export default Login;
