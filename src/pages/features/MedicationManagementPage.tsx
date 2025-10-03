import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Calendar, Bell, Clock, LineChart as ChartLine } from 'lucide-react';

const MedicationManagementPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Medication Management Made Simple
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Stay on track with your medications using our comprehensive management system designed for both patients and healthcare providers.
        </p>
        <Link 
          to="/signup" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Get Started Now
        </Link>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Medication Tracking */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Pill className="h-8 w-8 text-blue-500" />
            <h3 className="text-xl font-semibold ml-3">Medication Tracking</h3>
          </div>
          <p className="text-gray-600">
            Keep track of all your medications, dosages, and schedules in one convenient place.
          </p>
        </div>

        {/* Smart Reminders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Bell className="h-8 w-8 text-blue-500" />
            <h3 className="text-xl font-semibold ml-3">Smart Reminders</h3>
          </div>
          <p className="text-gray-600">
            Never miss a dose with customizable reminders and notifications.
          </p>
        </div>

        {/* Schedule Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Calendar className="h-8 w-8 text-blue-500" />
            <h3 className="text-xl font-semibold ml-3">Schedule Management</h3>
          </div>
          <p className="text-gray-600">
            Easily manage and adjust medication schedules based on your daily routine.
          </p>
        </div>

        {/* Refill Tracking */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Clock className="h-8 w-8 text-blue-500" />
            <h3 className="text-xl font-semibold ml-3">Refill Tracking</h3>
          </div>
          <p className="text-gray-600">
            Get timely alerts when it's time to refill your prescriptions.
          </p>
        </div>

        {/* Analytics & Reports */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <ChartLine className="h-8 w-8 text-blue-500" />
            <h3 className="text-xl font-semibold ml-3">Analytics & Reports</h3>
          </div>
          <p className="text-gray-600">
            Track adherence patterns and generate detailed reports for healthcare providers.
          </p>
        </div>

        {/* Integration */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Pill className="h-8 w-8 text-blue-500" />
            <h3 className="text-xl font-semibold ml-3">Healthcare Integration</h3>
          </div>
          <p className="text-gray-600">
            Seamlessly integrate with your healthcare provider's systems for better coordination.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Medications?</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Join thousands of users who have simplified their medication management.
            </p>
            <Link 
              to="/signup" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-50 shadow-lg transition-all duration-300"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationManagementPage;