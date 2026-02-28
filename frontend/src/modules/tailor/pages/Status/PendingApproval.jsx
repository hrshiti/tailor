import React from 'react';
import { Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PendingApproval = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-10 text-center border border-gray-100 ring-1 ring-black/5">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <Clock className="w-12 h-12 text-blue-600" />
                </div>

                <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Application Submitted!</h1>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    Thank you for joining <span className="text-[#4C1D95] font-bold">TailorHUB</span>. Your application for a tailor account is currently being reviewed by our admin team.
                </p>

                <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">Step 1: Registration</p>
                            <p className="text-sm text-gray-500 font-medium">Completed Successfully</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#4C1D95]/5 p-4 rounded-2xl border border-[#4C1D95]/10 border-dashed">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                            <Clock className="w-5 h-5 text-blue-600 animate-spin-slow" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-bold text-blue-900 uppercase tracking-widest">Step 2: Admin Review</p>
                            <p className="text-sm text-blue-600 font-medium">In Progress (24-48 Hours)</p>
                        </div>
                    </div>
                </div>

                <div className="bg-orange-50 p-5 rounded-2xl mb-8 border border-orange-100">
                    <p className="text-xs text-orange-800 font-semibold leading-relaxed uppercase tracking-wide">
                        ⚠️ Important Rule
                    </p>
                    <p className="text-[11px] text-orange-700 mt-1">
                        Tailors cannot access the dashboard or receive orders until the account is approved. You will receive an email once your status is updated.
                    </p>
                </div>

                <button
                    onClick={() => navigate('/')}
                    className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-sm tracking-wide shadow-xl hover:bg-black transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" /> Return to Home
                </button>
            </div>
        </div>
    );
};
