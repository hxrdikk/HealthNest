import React from 'react';
import { Link } from 'react-router-dom';
import { LucideHeart, Users, Shield, PanelRight, CalendarCheck, Video, Pill, Activity, Star, ArrowRight, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-secondary-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-secondary-700/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <LucideHeart className="h-5 w-5 text-primary-200" />
                <span className="ml-2 text-sm font-medium text-primary-100">Trusted by 10,000+ Users</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Complete Health Management Platform
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                HealthNest brings together electronic health records, medication management, and telemedicine in one secure platform to simplify your healthcare journey.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link to="/signup" className="btn bg-white text-primary-700 hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium shadow-lg flex items-center justify-center group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/about" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-md text-lg font-medium flex items-center justify-center">
                  Learn More
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex -space-x-2">
                  <img src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg" alt="User" className="h-8 w-8 rounded-full border-2 border-white" />
                  <img src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg" alt="User" className="h-8 w-8 rounded-full border-2 border-white" />
                  <img src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg" alt="User" className="h-8 w-8 rounded-full border-2 border-white" />
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-primary-100">4.9/5 from 2,000+ reviews</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent rounded-lg" />
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg" 
                alt="Healthcare professional using a tablet" 
                className="rounded-lg shadow-2xl transform rotate-2 transition-transform hover:rotate-0 duration-300"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-900">HIPAA Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">10k+</div>
              <div className="mt-2 text-sm text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">5k+</div>
              <div className="mt-2 text-sm text-gray-600">Healthcare Providers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">98%</div>
              <div className="mt-2 text-sm text-gray-600">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">24/7</div>
              <div className="mt-2 text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Features</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Comprehensive Healthcare Solutions</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              HealthNest provides the tools you need to manage your health effectively and stay connected with healthcare providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-8">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-5">
                  <PanelRight className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Electronic Health Records</h3>
                <p className="text-gray-600">
                  Securely store and access your complete medical history, test results, and doctor's notes all in one place.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Complete medical history
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Lab results tracking
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Document storage
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-8">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-5">
                  <Pill className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Medication Management</h3>
                <p className="text-gray-600">
                  Never miss a dose with reminders, refill tracking, and personalized medication schedules.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Dose reminders
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Adherence tracking
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Refill alerts
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-8">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-5">
                  <Video className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Telemedicine Platform</h3>
                <p className="text-gray-600">
                  Connect with healthcare providers from anywhere through secure video consultations.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    HD video consultations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Secure messaging
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    File sharing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/features" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
            >
              <span>Explore all features</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose HealthNest?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed with patients and healthcare providers in mind, offering benefits that improve the healthcare experience for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                HIPAA-compliant platform with end-to-end encryption to keep your health data safe.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Care</h3>
              <p className="text-gray-600">
                Seamlessly share information between patients and multiple healthcare providers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Health Analytics</h3>
              <p className="text-gray-600">
                Visualize health trends and gain insights to make better healthcare decisions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <CalendarCheck className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">
                Book appointments, receive reminders, and manage your healthcare calendar effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Patients & Providers</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              See what our users are saying about how HealthNest has transformed their healthcare experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "HealthNest has completely changed how I manage my chronic condition. I can track my medications, see my test results, and consult with my doctor all in one place."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg" 
                  alt="Patient testimonial" 
                  className="h-10 w-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="text-sm font-semibold">Sarah Johnson</h4>
                  <p className="text-xs text-gray-500">Patient</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "As a physician, HealthNest has streamlined my practice. The telemedicine features are seamless, and having all patient records in one secure system is invaluable."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg" 
                  alt="Doctor testimonial" 
                  className="h-10 w-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="text-sm font-semibold">Dr. Michael Chen</h4>
                  <p className="text-xs text-gray-500">Cardiologist</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The medication reminders have been a game-changer for my elderly father. His adherence has improved significantly, and we can both access his health information."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg" 
                  alt="Caregiver testimonial" 
                  className="h-10 w-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="text-sm font-semibold">Robert Williams</h4>
                  <p className="text-xs text-gray-500">Caregiver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your healthcare experience?</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Join thousands of patients and healthcare providers who are already benefiting from HealthNest's comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup" className="btn bg-white text-primary-700 hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium shadow-lg">
                Create Free Account
              </Link>
              <Link to="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-md text-lg font-medium">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;