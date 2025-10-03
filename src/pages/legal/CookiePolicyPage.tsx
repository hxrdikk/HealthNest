import React from 'react';
import { Cookie, Settings, Shield, HelpCircle, Mail } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Cookie className="h-8 w-8 text-primary-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Cookie Policy</h1>
          <p className="text-gray-600 mt-1">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">What Are Cookies</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">How We Use Cookies</h2>
          </div>
          <p className="text-gray-600 mb-4">We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Authentication and security</li>
            <li>Preferences and settings</li>
            <li>Analytics and performance</li>
            <li>User experience improvements</li>
            <li>Session management</li>
          </ul>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Managing Cookies</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience using our website.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="text-gray-600 mb-4">To learn more about cookies and how to manage them, visit:</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-600 hover:text-primary-700 flex items-center">
                  <span>Cookie settings in Internet Explorer</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-600 hover:text-primary-700 flex items-center">
                  <span>Cookie settings in Firefox</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-600 hover:text-primary-700 flex items-center">
                  <span>Cookie settings in Chrome</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-600 hover:text-primary-700 flex items-center">
                  <span>Cookie settings in Safari</span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="h-6 w-6 text-primary-600 flex-shrink-0" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Contact Us</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="text-gray-600">
              If you have any questions about our Cookie Policy, please contact us:
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

export default CookiePolicyPage;