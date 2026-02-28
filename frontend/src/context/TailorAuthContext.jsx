import React, { createContext, useContext, useState, useEffect } from 'react';

const TailorAuthContext = createContext();

export const TailorAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [tailorStatus, setTailorStatus] = useState('APPROVED'); // PENDING_APPROVAL, APPROVED, REJECTED
    const [subscriptionStatus, setSubscriptionStatus] = useState('ACTIVE'); // ACTIVE, EXPIRED, NONE
    const [loading, setLoading] = useState(false);

    const login = (userData) => {
        setLoading(true);
        // Simulate login
        setTimeout(() => {
            setUser(userData);
            setIsLoggedIn(true);
            setLoading(false);
        }, 1000);
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('tailorToken');
    };

    const register = (data) => {
        setLoading(true);
        // Simulate registration
        setTimeout(() => {
            setTailorStatus('PENDING_APPROVAL');
            setIsLoggedIn(true);
            setLoading(false);
        }, 1500);
    };

    return (
        <TailorAuthContext.Provider value={{
            user,
            isLoggedIn,
            tailorStatus,
            subscriptionStatus,
            loading,
            login,
            logout,
            register,
            setTailorStatus,
            setSubscriptionStatus
        }}>
            {children}
        </TailorAuthContext.Provider>
    );
};

export const useTailorAuth = () => {
    const context = useContext(TailorAuthContext);
    if (!context) {
        throw new Error('useTailorAuth must be used within a TailorAuthProvider');
    }
    return context;
};
