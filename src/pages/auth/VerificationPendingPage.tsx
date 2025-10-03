import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, ArrowRight, Mail } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const VerificationPendingPage: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If no user is logged in, redirect to login
    if (!currentUser) {
      navigate('/login');
      return;
    }
  }, [currentUser, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Verification in Progress</h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for submitting your verification documents. Our team will review them shortly.
            </p>
          </div>

          <div className="mt-8">
            <div className="rounded-md bg-yellow-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">What happens next?</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Our team will verify your documents within 2-3 business days</li>
                      <li>You'll receive an email notification once verified</li>
                      <li>After verification, you'll have full access to the provider dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/dashboard"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPendingPage;