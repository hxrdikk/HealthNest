import React from 'react';
import { Clock, Bell, Calendar, ArrowLeftRight } from 'lucide-react';

const AppointmentSchedulingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Appointment Scheduling
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Streamline your healthcare appointments with our intuitive scheduling system
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Feature highlights */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Real-time Availability</h3>
            <p className="mt-2 text-gray-600">
              See available time slots instantly and book appointments with your preferred healthcare providers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Bell className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Smart Reminders</h3>
            <p className="mt-2 text-gray-600">
              Receive automated notifications and reminders for upcoming appointments.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <ArrowLeftRight className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Easy Rescheduling</h3>
            <p className="mt-2 text-gray-600">
              Flexibility to reschedule or cancel appointments with just a few clicks.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900">Select Provider</h3>
              <p className="mt-2 text-gray-600">
                Choose from our network of qualified healthcare professionals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-semibold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900">Pick a Time</h3>
              <p className="mt-2 text-gray-600">
                Select from available time slots that work best for your schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-semibold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900">Confirm Booking</h3>
              <p className="mt-2 text-gray-600">
                Review and confirm your appointment details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSchedulingPage;