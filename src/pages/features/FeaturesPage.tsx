import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Pill, Video, Activity, Calendar, Shield, Users, Clock } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleFeatureClick = (path: string) => {
    // Scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Navigate after scroll animation completes
    setTimeout(() => navigate(path), 500);
  };

  const features = [
    {
      id: 'ehr',
      title: 'Electronic Health Records',
      description: 'Securely store and access your complete medical history, test results, and doctor\'s notes all in one place.',
      icon: FileText,
      link: '/features/ehr',
      color: 'blue'
    },
    {
      id: 'medication',
      title: 'Medication Management',
      description: 'Track medications, set reminders, and manage prescriptions with our comprehensive medication management system.',
      icon: Pill,
      link: '/features/medication',
      color: 'purple'
    },
    {
      id: 'telemedicine',
      title: 'Telemedicine Services',
      description: 'Connect with healthcare providers through secure video consultations from the comfort of your home.',
      icon: Video,
      link: '/features/telemedicine',
      color: 'green'
    },
    {
      id: 'analytics',
      title: 'Health Analytics',
      description: 'Gain insights into your health trends with detailed analytics and personalized health reports.',
      icon: Activity,
      link: '/features/analytics',
      color: 'red'
    },
    {
      id: 'appointments',
      title: 'Appointment Scheduling',
      description: 'Book and manage appointments with healthcare providers easily through our intuitive scheduling system.',
      icon: Calendar,
      link: '/features/appointments',
      color: 'amber'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Our Features</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Discover all the powerful features that make HealthNest your complete healthcare management solution.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => handleFeatureClick(feature.link)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 text-left"
            >
              <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-${feature.color}-100`}>
                <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose HealthNest?</h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience the benefits of our comprehensive healthcare platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your health data is protected with enterprise-grade security and HIPAA compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Connected Care</h3>
              <p className="text-gray-600">
                Stay connected with your healthcare providers and manage your care team effectively.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Access</h3>
              <p className="text-gray-600">
                Access your health information and connect with providers anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary-600 rounded-lg px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to take control of your health?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of users who trust HealthNest for their healthcare management
          </p>
          <button
            onClick={() => handleFeatureClick('/signup')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 shadow-sm transition-all duration-300"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;