import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import AuthLayout from './layouts/AuthLayout';

// Auth Pages
import Login from './modules/auth/pages/Login';
import Signup from './modules/auth/pages/Signup';

// Customer Pages
import CustomerHome from './modules/customer/pages/Home';
import ServicesPage from './modules/customer/pages/Services';
import ServiceDetailPage from './modules/customer/pages/ServiceDetail';
import StorePage from './modules/customer/pages/Store'; // NEW
import StoreProductDetail from './modules/customer/pages/StoreProductDetail'; // NEW
import OrdersPage from './modules/customer/pages/Orders'; // NEW
import ProfilePage from './modules/customer/pages/Profile'; // NEW

// Tailor Pages
import TailorDashboard from './modules/tailor/pages/Dashboard';

// Delivery Pages
import DeliveryDashboard from './modules/delivery/pages/Dashboard';

// Admin Pages
import AdminDashboard from './modules/admin/pages/Dashboard';

const AppRoutes = () => {
    return (
        <Routes>
            {/* ... Auth Routes ... */}
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>

            {/* Customer Routes */}
            <Route path="/" element={<CustomerHome />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />

            {/* New Store & Nav Routes */}
            <Route path="/store" element={<StorePage />} />
            <Route path="/store/product/:id" element={<StoreProductDetail />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Tailor Routes */}
            <Route path="/tailor" element={<TailorDashboard />} />

            {/* Delivery Routes */}
            <Route path="/delivery" element={<DeliveryDashboard />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
