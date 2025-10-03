import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Shield, Clock, Users } from 'lucide-react';

const TelemedicinePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Video className="h-16 w-16 text-primary-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Virtual Healthcare
            <span className="block text-primary-600">Made Simple</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect with healthcare professionals from the comfort of your home. Secure, convenient, and professional medical consultations at your fingertips.
          </p>
          <div className="mt-8">
            <Link 
              to="/signup" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600">Access medical care whenever you need it, day or night.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Secure Platform</h3>
              <p className="text-gray-600">HIPAA-compliant video consultations ensuring your privacy.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Care</h3>
              <p className="text-gray-600">Connect with board-certified healthcare professionals.</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl">
              Experience the future of healthcare today. Book your first virtual consultation and take control of your health journey.
            </p>
            <Link 
              to="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelemedicinePage;