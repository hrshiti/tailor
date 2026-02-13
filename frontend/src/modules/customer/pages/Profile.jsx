import React from 'react';
import BottomNav from '../components/BottomNav';

const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
                <h1 className="text-xl font-bold text-[#1e3932]">My Profile</h1>
            </header>
            <div className="p-4">
                <div className="bg-white rounded-lg p-6 shadow-sm flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500">
                        B
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">Blair Waldorf</h2>
                        <p className="text-gray-500 text-sm">+91 98765 43210</p>
                    </div>
                </div>
            </div>
            <BottomNav />
        </div>
    );
};

export default Profile;
