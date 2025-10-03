import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, DollarSign, Shield, Users, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CareersPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  // Mock job listings
  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '130,000 - 180,000',
      description: 'We\'re looking for an experienced Full Stack Developer to join our engineering team and help build the future of healthcare technology.'
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      salary: '110,000 - 150,000',
      description: 'Join our product team to help shape the future of digital health solutions and improve patient care.'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '90,000 - 130,000',
      description: 'Create beautiful and intuitive interfaces that help healthcare providers and patients interact with our platform.'
    },
    {
      id: 4,
      title: 'Healthcare Data Analyst',
      department: 'Analytics',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '85,000 - 120,000',
      description: 'Apply your analytical skills to help improve healthcare outcomes and optimize medical processes.'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Help us transform healthcare through technology. We're looking for passionate individuals who want to make a difference in people's lives.
            </p>
          </motion.div>
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
              What drives us every day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We push boundaries and embrace new technologies to solve healthcare challenges.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We work together across teams to achieve our shared mission.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact</h3>
              <p className="text-gray-600">
                We measure our success by the positive change we create in healthcare.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900">Benefits & Perks</h2>
            <p className="mt-4 text-xl text-gray-600">
              We take care of our team
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
                <DollarSign className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Salary</h3>
              <p className="text-gray-600">
                We offer top-market compensation packages.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Health Benefits</h3>
              <p className="text-gray-600">
                Comprehensive medical, dental, and vision coverage.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible PTO</h3>
              <p className="text-gray-600">
                Take time off when you need it.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learning & Development</h3>
              <p className="text-gray-600">
                Professional growth opportunities and education stipend.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
            <p className="mt-4 text-xl text-gray-600">
              Join our growing team
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.department}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Link
                      to="/signup"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-5 w-5 mr-2" />
                    ${job.salary}
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to make an impact?</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Join our team and help transform healthcare for millions of people.
            </p>
            <Link 
              to="/careers#positions" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-50 shadow-lg transition-all duration-300"
            >
              View All Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;