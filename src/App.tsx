import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import EmailVerificationPage from './pages/auth/EmailVerificationPage';
import OtpLoginPage from './pages/auth/OtpLoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import VerificationPendingPage from './pages/auth/VerificationPendingPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import DoctorDashboardPage from './pages/doctor/DashboardPage';
import ProfilePage from './pages/profile/ProfilePage';
import MedicationPage from './pages/medication/MedicationPage';
import AppointmentsPage from './pages/appointments/AppointmentsPage';
import ConsultationPage from './pages/telemedicine/ConsultationPage';
import MessagesPage from './pages/messages/MessagesPage';
import PatientsPage from './pages/doctor/PatientsPage';
import SettingsPage from './pages/settings/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';
import BroadcastPage from './pages/BroadcastPage';
import ActivityPage from './pages/activity/ActivityPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ProviderVerificationPage from './pages/admin/ProviderVerificationPage';
import UsersManagementPage from './pages/admin/UsersManagementPage';
import SystemSettingsPage from './pages/admin/SystemSettingsPage';

// Feature pages
import FeaturesPage from './pages/features/FeaturesPage';
import ElectronicHealthRecordsPage from './pages/features/ElectronicHealthRecordsPage';
import MedicationManagementPage from './pages/features/MedicationManagementPage';
import TelemedicinePage from './pages/features/TelemedicinePage';
import HealthAnalyticsPage from './pages/features/HealthAnalyticsPage';
import AppointmentSchedulingPage from './pages/features/AppointmentSchedulingPage';

// Legal pages
import PrivacyPage from './pages/legal/PrivacyPage';
import TermsPage from './pages/legal/TermsPage';
import CookiePolicyPage from './pages/legal/CookiePolicyPage';
import HipaaPage from './pages/legal/HipaaPage';

// Company pages
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/company/CareersPage';
import BlogPage from './pages/company/BlogPage';
import PressPage from './pages/company/PressPage';
import PartnersPage from './pages/company/PartnersPage';
import ContactPage from './pages/ContactPage';

// Route Guard for protected routes
const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="spinner"></div>
      </div>
    );
  }
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (!currentUser.emailVerified) {
    return <Navigate to="/verify-email" />;
  }
  
  return <>{element}</>;
};

// Route Guard for doctor-only routes
const DoctorRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { currentUser, loading, isDoctor } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="spinner"></div>
      </div>
    );
  }
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (!currentUser.emailVerified) {
    return <Navigate to="/verify-email" />;
  }
  
  return isDoctor ? <>{element}</> : <Navigate to="/dashboard" />;
};

// Route Guard for admin-only routes
const AdminRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { currentUser, loading, isAdmin } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="spinner"></div>
      </div>
    );
  }
  
  if (!currentUser || !isAdmin) {
    return <Navigate to="/dashboard" />;
  }
  
  return <>{element}</>;
};

function App() {
  const { isDoctor } = useAuth();

  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* Public routes with main layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/broadcasts" element={<BroadcastPage />} />
          <Route path="/activity" element={<ActivityPage />} />
          
          {/* Feature routes */}
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/features/ehr" element={<ElectronicHealthRecordsPage />} />
          <Route path="/features/medication" element={<MedicationManagementPage />} />
          <Route path="/features/telemedicine" element={<TelemedicinePage />} />
          <Route path="/features/analytics" element={<HealthAnalyticsPage />} />
          <Route path="/features/appointments" element={<AppointmentSchedulingPage />} />
          
          {/* Legal routes */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/hipaa" element={<HipaaPage />} />
        </Route>
        
        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
          <Route path="/verification-pending" element={<VerificationPendingPage />} />
          <Route path="/otp-login" element={<OtpLoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>
        
        {/* Protected routes with main layout */}
        <Route element={<MainLayout />}>
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute 
                element={isDoctor ? <DoctorDashboardPage /> : <DashboardPage />} 
              />
            } 
          />
          <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
          <Route path="/medication" element={<PrivateRoute element={<MedicationPage />} />} />
          <Route path="/appointments" element={<PrivateRoute element={<AppointmentsPage />} />} />
          <Route path="/consultation/:id" element={<PrivateRoute element={<ConsultationPage />} />} />
          <Route path="/messages" element={<PrivateRoute element={<MessagesPage />} />} />
          <Route path="/settings" element={<PrivateRoute element={<SettingsPage />} />} />
          
          {/* Doctor-only routes */}
          <Route path="/patients" element={<DoctorRoute element={<PatientsPage />} />} />
        </Route>

        {/* Admin routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminRoute element={<AdminDashboardPage />} />} />
          <Route path="/admin/verify-providers" element={<AdminRoute element={<ProviderVerificationPage />} />} />
          <Route path="/admin/users" element={<AdminRoute element={<UsersManagementPage />} />} />
          <Route path="/admin/settings" element={<AdminRoute element={<SystemSettingsPage />} />} />
        </Route>
        
        {/* 404 route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;