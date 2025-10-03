import React, { useState } from 'react';
import { FileText, CalendarCheck, Pill, ArrowLeft, Filter, Search, Clock, AlertCircle, CheckCircle2, Bell, History, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActivityPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const activities = [
    {
      id: 1,
      type: 'lab',
      title: 'Lab results uploaded',
      description: 'Complete Blood Count',
      date: 'Yesterday at 2:30 PM',
      read: false,
      details: {
        doctor: 'Dr. Sarah Johnson',
        status: 'Ready for review',
        priority: 'Normal',
        category: 'Blood Test',
        results: {
          hemoglobin: '14.2 g/dL',
          wbc: '7.2 K/µL',
          platelets: '250 K/µL'
        }
      }
    },
    {
      id: 2,
      type: 'appointment',
      title: 'Appointment scheduled',
      description: 'Dr. Sarah Johnson - June 2, 2024',
      date: '2 days ago',
      read: false,
      details: {
        type: 'Video Consultation',
        time: '10:00 AM',
        duration: '30 minutes',
        reason: 'Follow-up consultation',
        location: 'Virtual',
        notes: 'Please join 5 minutes early'
      }
    },
    {
      id: 3,
      type: 'medication',
      title: 'Prescription updated',
      description: 'Metformin 500mg - Dr. Michael Chen',
      date: '3 days ago',
      read: true,
      details: {
        dosage: '500mg',
        frequency: 'Twice daily',
        duration: '6 months',
        instructions: 'Take with meals',
        refills: '3 remaining',
        pharmacy: 'City Pharmacy'
      }
    }
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || activity.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'lab':
        return <FileText className="h-5 w-5 text-blue-600" />;
      case 'appointment':
        return <CalendarCheck className="h-5 w-5 text-green-600" />;
      case 'medication':
        return <Pill className="h-5 w-5 text-purple-600" />;
      default:
        return <Bell className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusIcon = (read: boolean) => {
    return read ? 
      <CheckCircle2 className="h-4 w-4 text-green-500" /> : 
      <AlertCircle className="h-4 w-4 text-blue-500 animate-pulse" />;
  };

  const toggleExpand = (id: number) => {
    setExpandedActivity(expandedActivity === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <History className="h-8 w-8 text-primary-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Activity History</h1>
              <p className="text-gray-600 mt-1">View and manage your recent activities</p>
            </div>
          </div>
          <Link
            to="/dashboard"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search activities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Filter className="h-5 w-5" />
                Filters
                {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filterType === 'all'
                      ? 'bg-primary-100 text-primary-800 border border-primary-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  All Activities
                </button>
                <button
                  onClick={() => setFilterType('lab')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filterType === 'lab'
                      ? 'bg-blue-100 text-blue-800 border border-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  <FileText className="h-4 w-4 inline mr-2" />
                  Lab Results
                </button>
                <button
                  onClick={() => setFilterType('appointment')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filterType === 'appointment'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  <CalendarCheck className="h-4 w-4 inline mr-2" />
                  Appointments
                </button>
                <button
                  onClick={() => setFilterType('medication')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filterType === 'medication'
                      ? 'bg-purple-100 text-purple-800 border border-purple-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  <Pill className="h-4 w-4 inline mr-2" />
                  Medications
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="divide-y divide-gray-200">
          {filteredActivities.map((activity) => (
            <div 
              key={activity.id}
              className={`p-6 hover:bg-gray-50 transition-all duration-200 cursor-pointer ${
                !activity.read ? 'bg-blue-50/50' : ''
              }`}
              onClick={() => toggleExpand(activity.id)}
            >
              <div className="flex items-start">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  activity.type === 'lab' ? 'bg-blue-100' :
                  activity.type === 'appointment' ? 'bg-green-100' :
                  'bg-purple-100'
                }`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                      {getStatusIcon(activity.read)}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {activity.date}
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{activity.description}</p>
                  
                  {expandedActivity === activity.id && (
                    <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(activity.details).map(([key, value]) => (
                          typeof value === 'object' ? (
                            <div key={key} className="col-span-2">
                              <h4 className="text-sm font-medium text-gray-900 capitalize mb-2">{key}</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {Object.entries(value).map(([subKey, subValue]) => (
                                  <div key={subKey} className="text-sm">
                                    <span className="text-gray-500 capitalize">{subKey}: </span>
                                    <span className="text-gray-900">{subValue}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div key={key} className="text-sm">
                              <span className="text-gray-500 capitalize">{key}: </span>
                              <span className="text-gray-900">{value}</span>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filteredActivities.length === 0 && (
            <div className="p-8 text-center">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No activities found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;