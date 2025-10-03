import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Clock, CheckCircle } from 'lucide-react';

const ElectronicHealthRecordsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Electronic Health Records</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Secure, comprehensive, and easily accessible digital health records that put you in control of your healthcare journey.
            </p>
            <div className="mt-8">
              <Link 
                to="/signup" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Storage</h3>
            <p className="text-gray-600">
              HIPAA-compliant, encrypted storage for all your medical records and health information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Provider Access</h3>
            <p className="text-gray-600">
              Share records securely with healthcare providers for better coordinated care.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Access</h3>
            <p className="text-gray-600">
              Access your health records anytime, anywhere, from any device.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Benefits</h2>
            <p className="mt-4 text-xl text-gray-600">
              Why choose our Electronic Health Records system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Patients</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Complete access to your medical history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Easy sharing with healthcare providers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Track health trends and progress</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Providers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Streamlined access to patient records</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Improved care coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Reduced administrative burden</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary-600 rounded-lg px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to take control of your health records?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of patients and providers who trust HealthNest
          </p>
          <Link 
            to="/signup" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 shadow-sm"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ElectronicHealthRecordsPage;