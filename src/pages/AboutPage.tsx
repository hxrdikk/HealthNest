import React from 'react';
import { LucideHeart, Users, Shield, Target, Award, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stats = [
    { label: 'Active Users', value: '10k+' },
    { label: 'Healthcare Providers', value: '5k+' },
    { label: 'Patient Satisfaction', value: '98%' },
    { label: 'Countries Served', value: '25+' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We prioritize the security and privacy of your health data with industry-leading protection measures.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously evolving our platform with cutting-edge technology to improve healthcare delivery.'
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description: 'Every feature and decision is made with our patients\' best interests at heart.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Platform Launch',
      description: 'HealthNest launches with core EHR and telemedicine features.'
    },
    {
      year: '2024',
      title: 'Rapid Growth',
      description: 'Expanded to serve over 10,000 patients and 5,000 healthcare providers.'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Planning to expand services to multiple countries worldwide.'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Empowering healthcare through technology. We're dedicated to making healthcare more accessible, 
              efficient, and personalized for everyone.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary-600">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl shadow-sm p-8 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
            <p className="mt-4 text-xl text-gray-600">
              Milestones in our mission to transform healthcare
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 w-24">
                  <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Be part of the healthcare revolution. Join thousands of patients and providers who trust HealthNest.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/signup" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-50 shadow-lg transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;