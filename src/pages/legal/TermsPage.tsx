import React from 'react';
import { FileText, Shield, UserCheck, AlertTriangle, Mail } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <FileText className="h-8 w-8 text-primary-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 mt-1">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Agreement to Terms</h2>
          </div>
          <p className="text-gray-600 mb-4">
            By accessing or using HealthNest, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">User Responsibilities</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Maintain the confidentiality of your account</li>
            <li>Provide accurate and complete information</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not interfere with or disrupt the service</li>
            <li>Not use the service for any unlawful purpose</li>
          </ul>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Medical Disclaimer</h2>
          </div>
          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <p className="text-yellow-800">
              HealthNest is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Contact Information</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="text-gray-600">
              Questions about the Terms of Service should be sent to:
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-800">
                <strong>Email:</strong> legal@healthnest.com
              </p>
              <p className="text-gray-800">
                <strong>Phone:</strong> (+91) 6260492853
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;