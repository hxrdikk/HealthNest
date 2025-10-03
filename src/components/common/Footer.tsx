import React from 'react';
import { Link } from 'react-router-dom';
import { LucideHeart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center">
              <LucideHeart className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">HealthNest</span>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Empowering healthcare through technology. Your complete health companion for managing records, medication, and virtual consultations.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features/ehr" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Electronic Health Records
                </Link>
              </li>
              <li>
                <Link to="/features/medication" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Medication Management
                </Link>
              </li>
              <li>
                <Link to="/features/telemedicine" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Telemedicine Services
                </Link>
              </li>
              <li>
                <Link to="/features/analytics" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Health Analytics
                </Link>
              </li>
              <li>
                <Link to="/features/appointments" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Appointment Scheduling
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/hipaa" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  HIPAA Compliance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@healthnest.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(+91) 6260492853</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 md:text-right">
              &copy; {new Date().getFullYear()} HealthNest, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;