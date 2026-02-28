import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout Imports
import { MobileFrame } from './components/layout/MobileFrame';
import AdminLayout from './components/admin/AdminLayout';
import { TailorLayout } from './components/tailor/TailorLayout';
import { DeliveryLayout } from './components/delivery/DeliveryLayout';
import { TailorDashboardLayout } from './components/tailor/dashboard/TailorDashboardLayout';

// Auth Context
import { TailorAuthProvider } from './context/TailorAuthContext';
import { TailorProtectedRoute } from './components/auth/TailorProtectedRoute';

// Customer Pages
import { ServicesDashboard } from './pages/customer/ServicesDashboard';
import { StorePage } from './pages/customer/StorePage';
import { CustomerProfile } from './pages/profile/CustomerProfile';
import { ProfileAddresses } from './pages/profile/ProfileAddresses';
import { ProfileMeasurements } from './pages/profile/ProfileMeasurements';
import { ProfilePayments } from './pages/profile/ProfilePayments';
import { ProfileSupport } from './pages/profile/ProfileSupport';
import { CustomerOrderFlow } from './pages/customer/order/CustomerOrderFlow';
import { OrderHistory } from './pages/customer/order/OrderHistory';
import { OrderTracking } from './pages/customer/order/OrderTracking';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminTailors } from './pages/admin/AdminTailors';
import { AdminOrders } from './pages/admin/AdminOrders';
import { AdminStore } from './pages/admin/AdminStore';
import { AdminProfile } from './pages/profile/AdminProfile';

// Tailor Pages
import { TailorProfile } from './pages/profile/TailorProfile';
import { TailorRegistration } from './pages/tailor/Registration/TailorRegistration';
import { TailorLogin } from './pages/tailor/Auth/TailorLogin';
import { PendingApproval } from './pages/tailor/Status/PendingApproval';
import { RejectedStatus } from './pages/tailor/Status/RejectedStatus';
import { TailorOverview } from './pages/tailor/Dashboard/TailorOverview';
import { OrderRequests } from './pages/tailor/Dashboard/OrderRequests';
import { ProductManagement } from './pages/tailor/Dashboard/ProductManagement';
import { SubscriptionPage } from './pages/tailor/Dashboard/SubscriptionPage';
import { DeliveryPartnerDetails } from './pages/tailor/Dashboard/DeliveryPartnerDetails';
import { DocumentVerification } from './pages/tailor/Dashboard/DocumentVerification';

// Delivery Pages
import { DeliveryProfile } from './pages/profile/DeliveryProfile';

// Placeholder empty components for missing pages
const PlaceholderPage = ({ title }) => (
  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center h-full">
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 max-w-sm w-full mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-500">This feature is under development.</p>
    </div>
  </div>
);

// Wrapper to provide consistent padding for profile components that don't have it natively yet
const ViewWrapper = ({ children }) => (
  <div className="space-y-6 pb-24 px-4 sm:px-5 pt-4 overflow-y-auto hide-scrollbar h-full w-full">
    {children}
  </div>
);

// NO-PADDING Wrapper for full-bleed screens like OrderFlow & Tracking
const FullBleedWrapper = ({ children }) => (
  <div className="h-full w-full bg-gray-50 overflow-hidden flex flex-col relative hide-scrollbar">
    {children}
  </div>
);

function App() {
  return (
    <TailorAuthProvider>
      <BrowserRouter>
        <Routes>

          {/* 1. Customer Flow (Default) */}
          <Route path="/" element={<MobileFrame />}>
            <Route index element={<ServicesDashboard />} />
            <Route path="services" element={<Navigate to="/" replace />} />
            <Route path="store" element={<StorePage />} />
            <Route path="orders" element={<FullBleedWrapper><OrderHistory /></FullBleedWrapper>} />
            <Route path="profile" element={<ViewWrapper><CustomerProfile /></ViewWrapper>} />
            <Route path="profile/addresses" element={<FullBleedWrapper><ProfileAddresses /></FullBleedWrapper>} />
            <Route path="profile/measurements" element={<FullBleedWrapper><ProfileMeasurements /></FullBleedWrapper>} />
            <Route path="profile/payments" element={<FullBleedWrapper><ProfilePayments /></FullBleedWrapper>} />
            <Route path="profile/support" element={<FullBleedWrapper><ProfileSupport /></FullBleedWrapper>} />

            {/* Additional Routes from Remote */}
            <Route path="services/:id" element={<PlaceholderPage title="Service Details" />} />
            <Route path="store/product/:id" element={<PlaceholderPage title="Product Details" />} />
            <Route path="fabric/:id" element={<PlaceholderPage title="Fabric Details" />} />
            <Route path="refer" element={<PlaceholderPage title="Refer & Earn" />} />
            <Route path="cart" element={<PlaceholderPage title="My Cart" />} />
            <Route path="wishlist" element={<PlaceholderPage title="My Wishlist" />} />
            <Route path="tailors" element={<PlaceholderPage title="Tailor Listings" />} />
            <Route path="tailor/:id" element={<PlaceholderPage title="Tailor Profile View" />} />
          </Route>

          {/* Full Screen Customer Flow (No Bottom Nav) */}
          <Route path="/order-flow" element={<FullBleedWrapper><CustomerOrderFlow /></FullBleedWrapper>} />
          <Route path="/orders/tracking/:id" element={<FullBleedWrapper><OrderTracking /></FullBleedWrapper>} />

          {/* 2. Admin Flow */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="tailors" element={<AdminTailors />} />
            <Route path="store" element={<AdminStore />} />
            <Route path="profile" element={<ViewWrapper><AdminProfile /></ViewWrapper>} />

            {/* Missing Admin pages placeholders */}
            <Route path="delivery" element={<PlaceholderPage title="Delivery Management" />} />
            <Route path="payouts" element={<PlaceholderPage title="Payouts & Finance" />} />
            <Route path="settings" element={<PlaceholderPage title="Platform Settings" />} />
          </Route>

          {/* 3. Tailor Flow */}
          <Route path="/tailor/login" element={<TailorLogin />} />
          <Route path="/tailor/register" element={<TailorRegistration />} />

          {/* Tailor Status Pages */}
          <Route path="/tailor/status/pending" element={<PendingApproval />} />
          <Route path="/tailor/status/rejected" element={<RejectedStatus />} />

          {/* Protected Tailor Dashboard (Desktop Friendly) */}
          <Route path="/tailor/dashboard" element={<TailorProtectedRoute requiredStatus="APPROVED" />}>
            <Route element={<TailorDashboardLayout />}>
              <Route index element={<TailorOverview />} />
              <Route path="orders" element={<OrderRequests />} />
              <Route path="products" element={<ProductManagement />} />
              <Route path="delivery" element={<DeliveryPartnerDetails />} />
              <Route path="documents" element={<DocumentVerification />} />
              <Route path="subscription" element={<SubscriptionPage />} />
              <Route path="profile" element={<ViewWrapper><TailorProfile /></ViewWrapper>} />
            </Route>
          </Route>

          {/* Mobile Tailor Flow (Optional/Legacy support) */}
          <Route path="/tailor" element={<TailorLayout />}>
            <Route index element={<Navigate to="/tailor/dashboard" replace />} />
            <Route path="jobs" element={<PlaceholderPage title="Active Stitching Jobs" />} />
            <Route path="history" element={<PlaceholderPage title="Completed Garments" />} />
            <Route path="profile" element={<ViewWrapper><TailorProfile /></ViewWrapper>} />
          </Route>

          {/* 4. Delivery Flow */}
          <Route path="/delivery" element={<DeliveryLayout />}>
            <Route index element={<PlaceholderPage title="Delivery Dashboard" />} />
            <Route path="tasks" element={<PlaceholderPage title="Active Pickups/Deliveries" />} />
            <Route path="history" element={<PlaceholderPage title="Task History" />} />
            <Route path="profile" element={<ViewWrapper><DeliveryProfile /></ViewWrapper>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </TailorAuthProvider>
  );
}

export default App;
