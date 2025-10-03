import React from 'react';
import { Shield, Lock, FileText, AlertTriangle, Mail } from 'lucide-react';

const HipaaPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="h-8 w-8 text-primary-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">HIPAA Compliance</h1>
          <p className="text-gray-600 mt-1">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Our Commitment to HIPAA</h2>
          </div>
          <p className="text-gray-600 mb-4">
            HealthNest is committed to maintaining the privacy and security of your protected health information (PHI) in compliance with the Health Insurance Portability and Accountability Act (HIPAA).
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Protected Health Information (PHI)</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="text-gray-600 mb-4">
              PHI includes any information about your health status, provision of healthcare, or payment for healthcare that can be linked to you individually.
            </p>
            <p className="text-gray-600 mb-4">This includes:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Medical records</li>
              <li>Laboratory results</li>
              <li>Medical bills</li>
              <li>Health insurance information</li>
              <li>Demographic information</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Breach Notification</h2>
          </div>
          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <p className="text-yellow-800">
              In the unlikely event of a breach of unsecured PHI, we will notify affected individuals, the Secretary of Health and Human Services, and, in certain circumstances, the media.
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
              For questions about our HIPAA compliance or to report a concern:
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-800">
                <strong>Privacy Officer:</strong> Hardik Jain
              </p>
              <p className="text-gray-800">
                <strong>Email:</strong> hipaa@healthnest.com
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

export default HipaaPage;