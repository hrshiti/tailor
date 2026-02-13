import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="min-h-screen relative flex flex-col">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 bg-gray-50">
                {/* You can add a subtle pattern here if needed */}
            </div>

            {/* Wavy Footer Background */}
            <div className="fixed bottom-0 left-0 right-0 h-64 z-0 wavy-bg pointer-events-none">
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-white/50">
                    <div className="flex justify-center mb-6">
                        {/* Placeholder Logo */}
                        <div className="h-16 w-16 bg-[#1e3932] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">TH</span>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
