import React from 'react';
import { Shield, Lock, UserCheck, FileText, Mail } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="h-8 w-8 text-primary-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 mt-1">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Introduction</h2>
          </div>
          <p className="text-gray-600 mb-4">
            At HealthNest, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Information We Collect</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Personal identification information (Name, email address, phone number)</li>
            <li>Health records and medical history</li>
            <li>Insurance information</li>
            <li>Communication records between you and healthcare providers</li>
            <li>Usage data and analytics</li>
          </ul>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Your Rights</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Contact Us</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-800">
                <strong>Email:</strong> privacy@healthnest.com
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

export default PrivacyPage;