import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import silaiwalaLogo from '../../../assets/silaiwala-logo.png';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import useAuthStore from '../../../store/authStore';
import silaiwalaLogo from '/logo.png';
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
            <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl border border-slate-50 mb-6 transition-transform hover:rotate-3">
                    <img src={silaiwalaLogo} alt="Silaiwala" className="w-14 h-14 object-contain" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight text-center">Welcome Back</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Sign in to your account</p>
            </div>

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

            <div className="mt-8 pt-6 border-t border-gray-50 text-center">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-[#FF5C8A] hover:underline ml-1">
                        Create account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
