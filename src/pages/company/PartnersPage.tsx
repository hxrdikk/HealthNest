import React from 'react';
import { Building2, Users, Shield, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnersPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  // Mock partner logos
  const partners = [
    {
      id: 1,
      name: 'Metropolitan Hospital',
      logo: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
      category: 'Healthcare Provider'
    },
    {
      id: 2,
      name: 'TechHealth Solutions',
      logo: 'https://images.pexels.com/photos/4226262/pexels-photo-4226262.jpeg',
      category: 'Technology'
    },
    {
      id: 3,
      name: 'Global Insurance Group',
      logo: 'https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg',
      category: 'Insurance'
    },
    {
      id: 4,
      name: 'PharmaCare Network',
      logo: 'https://images.pexels.com/photos/4226224/pexels-photo-4226224.jpeg',
      category: 'Pharmacy'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner with HealthNest</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Join our network of healthcare providers, technology companies, and organizations committed to improving healthcare delivery.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Partner Benefits */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Partner With Us</h2>
            <p className="mt-4 text-xl text-gray-600">
              Discover the advantages of joining the HealthNest ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expand Your Reach</h3>
              <p className="text-gray-600">
                Access a growing network of patients and healthcare providers through our platform.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Improve Patient Care</h3>
              <p className="text-gray-600">
                Leverage our technology to enhance healthcare delivery and patient outcomes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Integration</h3>
              <p className="text-gray-600">
                Benefit from our HIPAA-compliant platform and robust security measures.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Get personalized assistance and technical support from our partner success team.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partner Types */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900">Partnership Opportunities</h2>
            <p className="mt-4 text-xl text-gray-600">
              Explore different ways to partner with HealthNest
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare Providers</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Integrate with EHR systems
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Streamline patient care
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Enhance communication
                </li>
              </ul>
              <button className="w-full px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50">
                Learn More
              </button>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Partners</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  API integration
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom solutions
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Joint development
                </li>
              </ul>
              <button className="w-full px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50">
                Learn More
              </button>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Insurance Partners</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Claims integration
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Coverage verification
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Payment processing
                </li>
              </ul>
              <button className="w-full px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Current Partners */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Partners</h2>
            <p className="mt-4 text-xl text-gray-600">
              Trusted by leading healthcare organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                <p className="text-gray-600">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
            <p className="text-xl text-primary-100 mb-8">
              Ready to explore partnership opportunities? Get in touch with our partnership team.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-50 shadow-lg transition-all duration-300">
              Contact Partnership Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;