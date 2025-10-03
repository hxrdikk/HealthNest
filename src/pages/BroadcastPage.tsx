import React, { useState } from 'react';
import { Bell, AlertTriangle, Info, CheckCircle, Clock, MapPin, Radio } from 'lucide-react';

const BroadcastPage: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'emergency' | 'alert' | 'info' | 'update'>('all');

  // Mock broadcast messages
  const broadcasts = [
    {
      id: 1,
      type: 'emergency',
      title: 'COVID-19 Vaccination Drive',
      message: 'Emergency vaccination drive at City Hospital. All citizens above 18 are eligible.',
      location: 'City Hospital, Main Street',
      date: '2024-06-01',
      time: '09:00 AM - 05:00 PM',
      priority: 'high'
    },
    {
      id: 2,
      type: 'alert',
      title: 'Blood Donation Camp',
      message: 'Urgent need for blood donors. All blood types needed.',
      location: 'Red Cross Center',
      date: '2024-06-05',
      time: '10:00 AM - 04:00 PM',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'info',
      title: 'Health Advisory: Heat Wave',
      message: 'Stay hydrated and avoid outdoor activities during peak hours.',
      date: '2024-06-02',
      priority: 'medium'
    },
    {
      id: 4,
      type: 'update',
      title: 'New Healthcare Policy',
      message: 'Updated healthcare guidelines for senior citizens.',
      date: '2024-06-03',
      priority: 'low'
    }
  ];

  const filteredBroadcasts = filterType === 'all' 
    ? broadcasts 
    : broadcasts.filter(broadcast => broadcast.type === filterType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'emergency':
        return <AlertTriangle className="h-6 w-6 text-red-600" />;
      case 'alert':
        return <Bell className="h-6 w-6 text-amber-600" />;
      case 'info':
        return <Info className="h-6 w-6 text-blue-600" />;
      case 'update':
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      default:
        return <Info className="h-6 w-6 text-gray-600" />;
    }
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'emergency':
        return 'bg-red-50 border-red-200';
      case 'alert':
        return 'bg-amber-50 border-amber-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      case 'update':
        return 'bg-green-50 border-green-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Radio className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Medical Broadcasts</h1>
            <p className="text-gray-600 mt-1">Important medical announcements and emergency notifications</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filterType === 'all' 
                ? 'bg-gray-900 text-white' 
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setFilterType('emergency')}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
              filterType === 'emergency'
                ? 'bg-red-100 text-red-800 border border-red-300'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <AlertTriangle className="h-4 w-4 mr-2" />
            Emergency
          </button>
          <button 
            onClick={() => setFilterType('alert')}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
              filterType === 'alert'
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Bell className="h-4 w-4 mr-2" />
            Alerts
          </button>
          <button 
            onClick={() => setFilterType('update')}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
              filterType === 'update'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Updates
          </button>
        </div>
      </div>

      {/* Broadcasts */}
      <div className="space-y-6">
        {filteredBroadcasts.map((broadcast) => (
          <div 
            key={broadcast.id} 
            className={`rounded-lg border p-6 ${getTypeStyles(broadcast.type)}`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {getTypeIcon(broadcast.type)}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">{broadcast.title}</h2>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    broadcast.priority === 'high' ? 'bg-red-100 text-red-800' :
                    broadcast.priority === 'medium' ? 'bg-amber-100 text-amber-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {broadcast.priority.charAt(0).toUpperCase() + broadcast.priority.slice(1)} Priority
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{broadcast.message}</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  {broadcast.location && (
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {broadcast.location}
                    </div>
                  )}
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {new Date(broadcast.date).toLocaleDateString()}
                    {broadcast.time && ` • ${broadcast.time}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredBroadcasts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <Info className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No broadcasts found</h3>
            <p className="text-gray-600">There are no broadcasts matching your selected filter.</p>
          </div>
        )}
      </div>

      {/* Subscribe Section */}
      <div className="mt-12 bg-primary-600 rounded-lg px-6 py-8 sm:py-12 sm:px-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Stay Updated
            </h2>
            <p className="mt-3 text-lg text-primary-100">
              Subscribe to receive important medical broadcasts and emergency notifications directly to your device.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-primary-100">
              You can unsubscribe at any time. Privacy Policy applies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadcastPage;