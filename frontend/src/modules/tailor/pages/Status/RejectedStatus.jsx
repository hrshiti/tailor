import React from 'react';
import { XCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const RejectedStatus = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-10 text-center border border-red-100 ring-1 ring-red-500/10">
                <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
                    <XCircle className="w-12 h-12 text-red-600" />
                </div>

                <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Application Rejected</h1>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    We regret to inform you that your application for a tailor account on <span className="text-[#4C1D95] font-bold">TailorHUB</span> has been rejected.
                </p>

                <div className="bg-red-50 p-6 rounded-3xl mb-10 border border-red-100 text-left">
                    <div className="flex items-center gap-2 text-red-800 font-bold mb-2 uppercase tracking-wider text-xs">
                        <AlertCircle className="w-4 h-4" /> Reason for Rejection
                    </div>
                    <p className="text-sm text-red-700 leading-relaxed font-medium">
                        Uploaded documents (Shop License) were unclear or expired. Please re-upload clear and valid documents for verification.
                    </p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={() => navigate('/tailor/register')}
                        className="w-full py-4 bg-[#4C1D95] text-white rounded-2xl font-bold text-sm tracking-wide shadow-xl hover:bg-[#3B1675] transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                    >
                        <RefreshCw className="w-4 h-4" /> Re-apply Now
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold text-sm tracking-wide hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                    >
                        Return to Home
                    </button>
                </div>

                <p className="mt-8 text-xs text-gray-400 font-medium italic">
                    If you believe this was a mistake, please contact our support team at support@tailorhub.com
                </p>
            </div>
        </div>
    );
};
