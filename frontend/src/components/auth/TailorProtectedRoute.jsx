import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useTailorAuth } from '../../context/TailorAuthContext';

export const TailorProtectedRoute = ({ requiredStatus }) => {
    const { isLoggedIn, tailorStatus, subscriptionStatus } = useTailorAuth();

    if (!isLoggedIn) {
        return <Navigate to="/tailor/login" replace />;
    }

    if (requiredStatus && tailorStatus !== requiredStatus) {
        if (tailorStatus === 'PENDING_APPROVAL') {
            return <Navigate to="/tailor/status/pending" replace />;
        }
        if (tailorStatus === 'REJECTED') {
            return <Navigate to="/tailor/status/rejected" replace />;
        }
    }

    if (tailorStatus === 'APPROVED' && subscriptionStatus === 'EXPIRED') {
        return <Navigate to="/tailor/subscription/expired" replace />;
    }

    return <Outlet />;
};
