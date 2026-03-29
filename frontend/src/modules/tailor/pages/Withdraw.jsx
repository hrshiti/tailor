import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check, Delete, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Withdraw = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState('0');
    const [step, setStep] = useState(1); // 1: Input, 2: Success
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [availableBalance, setAvailableBalance] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const res = await api.get('/tailors/me');
                if (res.data.success) {
                    setAvailableBalance(res.data.data.walletBalance || 0);
                }
            } catch (error) {
                console.error('Error fetching balance:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBalance();
    }, []);

    const numAmount = parseInt(amount.replace(/,/g, '') || '0', 10);

    const handleKeyPress = (key) => {
        if (amount === '0') {
            setAmount(key);
        } else if (amount.replace(/,/g, '').length < 6) { // limit to reasonable length
            const newAmountStr = amount.replace(/,/g, '') + key;
            setAmount(parseInt(newAmountStr, 10).toLocaleString('en-IN'));
        }
    };

    const handleDelete = () => {
        const rawAmount = amount.replace(/,/g, '');
        if (rawAmount.length <= 1) {
            setAmount('0');
        } else {
            const newAmountStr = rawAmount.slice(0, -1);
            setAmount(parseInt(newAmountStr, 10).toLocaleString('en-IN'));
        }
    };

    const handleWithdrawRequest = async () => {
        if (numAmount === 0 || numAmount > availableBalance) return;
        
        setIsSubmitting(true);
        try {
            const res = await api.post('/tailors/withdraw', { amount: numAmount });
            if (res.data.success) {
                setStep(2);
            }
        } catch (error) {
            alert(error.response?.data?.message || 'Withdrawal failed');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return <div className="min-h-full bg-primary flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>;
    }

    if (step === 2) {
        return (
            <div className="min-h-full bg-primary flex items-center justify-center p-6 animate-in zoom-in duration-300">
                <div className="bg-white rounded-[2.5rem] p-10 w-full max-w-sm text-center shadow-2xl flex flex-col items-center">
                    <div className="h-24 w-24 bg-pink-50 rounded-full flex items-center justify-center mb-8 text-primary shadow-inner border-4 border-pink-100 italic font-black text-3xl">
                        ✓
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Withdrawal Sent</h2>
                    <p className="text-gray-500 font-medium text-sm mt-4 leading-relaxed">
                        ₹{amount} is on its way to your bank. Expect it in 2-3 hours.
                    </p>
                    <button
                        onClick={() => navigate('/partner')}
                        className="mt-10 w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-full bg-primary flex flex-col relative animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="px-5 py-8 flex items-center justify-between sticky top-0 z-10 text-white">
                <button onClick={() => navigate(-1)} className="h-12 w-12 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-colors border border-white/10 backdrop-blur-md">
                    <ArrowLeft size={20} strokeWidth={3} />
                </button>
                <h1 className="text-xl font-black tracking-tight uppercase italic drop-shadow-md">Withdrawal Portal</h1>
                <div className="w-12"></div>
            </div>

            {/* Input Section (Top Half) */}
            <div className="flex-1 flex flex-col items-center justify-center -mt-20 px-6 text-center">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2.5 rounded-full mb-8 animate-pulse shadow-lg">
                    <p className="text-white font-black uppercase tracking-[0.2em] text-[10px]">
                        Available Funds: <span className="text-yellow-300 ml-1">₹{availableBalance.toLocaleString('en-IN')}</span>
                    </p>
                </div>
                
                <div className="flex items-center text-white relative">
                    <span className="text-4xl font-black opacity-30 absolute -left-10 italic">₹</span>
                    <span className="text-7xl font-black tracking-tighter drop-shadow-2xl">{amount}</span>
                </div>

                {numAmount > availableBalance ? (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500 text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest mt-10 border border-white/10 shadow-xl shadow-red-900/20"
                    >
                        Warning: Insufficient Balance
                    </motion.div>
                ) : (
                    <p className="text-pink-100/50 text-[10px] font-bold uppercase tracking-[0.3em] mt-8 italic">Specify amount to transfer</p>
                )}
            </div>

            {/* Numpad Section (Bottom Half) */}
            <div className="bg-white rounded-t-[3.5rem] px-8 py-12 shadow-[0_-30px_60px_rgba(0,0,0,0.2)] shrink-0">
                <div className="grid grid-cols-3 gap-x-10 gap-y-6 mb-12 max-w-[340px] mx-auto">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <button
                            key={num}
                            onClick={() => handleKeyPress(num.toString())}
                            className="h-16 rounded-[1.5rem] text-3xl font-black text-gray-900 active:scale-90 active:bg-gray-50 hover:text-primary transition-all flex items-center justify-center"
                        >
                            {num}
                        </button>
                    ))}
                    <div />
                    <button
                        onClick={() => handleKeyPress('0')}
                        className="h-16 rounded-[1.5rem] text-3xl font-black text-gray-900 active:scale-90 active:bg-gray-50 hover:text-primary transition-all flex items-center justify-center"
                    >
                        0
                    </button>
                    <button
                        onClick={handleDelete}
                        className="h-16 rounded-[1.5rem] active:scale-90 active:bg-red-50 transition-all flex items-center justify-center text-gray-300 hover:text-red-500"
                    >
                        <Delete size={32} strokeWidth={2.5} />
                    </button>
                </div>

                <div className="max-w-[340px] mx-auto pb-6">
                    <button
                        onClick={handleWithdrawRequest}
                        disabled={numAmount === 0 || numAmount > availableBalance || isSubmitting}
                        className="w-full bg-primary text-white py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-xs shadow-2xl shadow-pink-900/40 active:scale-95 transition-all disabled:opacity-30 disabled:grayscale disabled:active:scale-100 flex items-center justify-center gap-3 border-b-4 border-pink-700 active:border-b-0"
                    >
                        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <ArrowUpRight size={18} strokeWidth={3} />}
                        {isSubmitting ? 'Verifying Request...' : 'Initiate Instant Payout'}
                    </button>
                    <p className="text-center text-[9px] font-black text-gray-300 mt-6 uppercase tracking-widest leading-relaxed">
                        Funds will be credited to your verified UPI/Bank<br/>within 60-120 minutes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;
