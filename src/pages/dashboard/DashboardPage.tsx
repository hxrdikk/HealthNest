import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, CalendarCheck, Video, Clock, Pill, ChevronRight, Bell, FileText, LineChart, LayoutDashboard, Heart, Brain, Sun, Moon, Droplet, ArrowUp, ArrowDown, ArrowRight, Minus } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import MedicationTracker from '../../components/medication/MedicationTracker';

const DashboardPage: React.FC = () => {
  const { currentUser, userRole } = useAuth();
  const userName = currentUser?.displayName || 'User';

  // State for health metrics
  const [healthStats, setHealthStats] = useState([
    { 
      label: 'Blood Pressure', 
      value: '120/80', 
      change: 'stable', 
      date: '2024-05-28',
      history: [
        { date: '2024-05-21', value: '118/78' },
        { date: '2024-05-23', value: '122/82' },
        { date: '2024-05-25', value: '119/79' },
        { date: '2024-05-28', value: '120/80' }
      ],
      unit: 'mmHg',
      target: '120/80',
      status: 'normal'
    },
    { 
      label: 'Weight', 
      value: '165', 
      change: 'down', 
      date: '2024-05-30',
      history: [
        { date: '2024-05-21', value: '168' },
        { date: '2024-05-23', value: '167' },
        { date: '2024-05-25', value: '166' },
        { date: '2024-05-30', value: '165' }
      ],
      unit: 'lbs',
      target: '160',
      status: 'above-target'
    },
    { 
      label: 'Blood Glucose', 
      value: '95', 
      change: 'up', 
      date: '2024-05-29',
      history: [
        { date: '2024-05-21', value: '92' },
        { date: '2024-05-23', value: '90' },
        { date: '2024-05-25', value: '93' },
        { date: '2024-05-29', value: '95' }
      ],
      unit: 'mg/dL',
      target: '100',
      status: 'normal'
    },
    { 
      label: 'Heart Rate', 
      value: '68', 
      change: 'stable', 
      date: '2024-05-30',
      history: [
        { date: '2024-05-21', value: '70' },
        { date: '2024-05-23', value: '69' },
        { date: '2024-05-25', value: '67' },
        { date: '2024-05-30', value: '68' }
      ],
      unit: 'bpm',
      target: '60-100',
      status: 'normal'
    }
  ]);

  // State for recent activity
  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: 'lab',
      title: 'Lab results uploaded',
      description: 'Complete Blood Count',
      date: 'Yesterday at 2:30 PM',
      read: false
    },
    {
      id: 2,
      type: 'appointment',
      title: 'Appointment scheduled',
      description: 'Dr. Sarah Johnson - June 2, 2024',
      date: '2 days ago',
      read: false
    },
    {
      id: 3,
      type: 'medication',
      title: 'Prescription updated',
      description: 'Metformin 500mg - Dr. Michael Chen',
      date: '3 days ago',
      read: true
    }
  ]);

  // New state for health tips
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const healthTips = [
    {
      category: 'Hydration',
      title: 'Stay Hydrated',
      description: 'Remember to drink at least 8 glasses of water daily, especially during summer months.',
      icon: Droplet,
      color: 'blue',
      action: 'Track water intake',
      link: '/health-stats'
    },
    {
      category: 'Exercise',
      title: 'Daily Movement',
      description: 'Aim for 30 minutes of moderate physical activity each day to improve overall health.',
      icon: Activity,
      color: 'green',
      action: 'View activity log',
      link: '/health-stats'
    },
    {
      category: 'Sleep',
      title: 'Quality Rest',
      description: 'Maintain a consistent sleep schedule. Aim for 7-9 hours of sleep per night.',
      icon: Moon,
      color: 'purple',
      action: 'Track sleep patterns',
      link: '/health-stats'
    },
    {
      category: 'Mental Health',
      title: 'Mindful Moments',
      description: 'Take short breaks throughout the day for mindfulness and stress reduction.',
      icon: Brain,
      color: 'amber',
      action: 'Try meditation',
      link: '/health-stats'
    }
  ];

  const nextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % healthTips.length);
  };

  const prevTip = () => {
    setCurrentTipIndex((prev) => (prev - 1 + healthTips.length) % healthTips.length);
  };

  const getChangeIcon = (change: string) => {
    switch (change) {
      case 'up':
        return <ArrowUp className="h-4 w-4 text-red-500" />;
      case 'down':
        return <ArrowDown className="h-4 w-4 text-green-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'text-green-600';
      case 'above-target':
        return 'text-amber-600';
      case 'below-target':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  // Function to mark activity as read
  const markActivityAsRead = (id: number) => {
    setRecentActivity(prevActivity =>
      prevActivity.map(activity =>
        activity.id === id ? { ...activity, read: true } : activity
      )
    );
  };

  // Function to handle health metric updates
  const updateHealthMetric = (index: number, newValue: string) => {
    setHealthStats(prevStats => {
      const updatedStats = [...prevStats];
      const oldValue = parseFloat(updatedStats[index].value.split(' ')[0]);
      const newNumericValue = parseFloat(newValue.split(' ')[0]);
      
      updatedStats[index] = {
        ...updatedStats[index],
        value: newValue,
        change: newNumericValue > oldValue ? 'up' : newNumericValue < oldValue ? 'down' : 'stable',
        date: new Date().toISOString().split('T')[0]
      };
      
      return updatedStats;
    });
  };

  // Mock function to simulate health data update
  const refreshHealthData = () => {
    // Simulate API call with random changes
    const mockUpdates = [
      { value: `${Math.floor(Math.random() * 40 + 100)}/80 mmHg`, index: 0 },
      { value: `${Math.floor(Math.random() * 20 + 160)} lbs`, index: 1 },
      { value: `${Math.floor(Math.random() * 30 + 80)} mg/dL`, index: 2 },
      { value: `${Math.floor(Math.random() * 20 + 60)} bpm`, index: 3 }
    ];

    mockUpdates.forEach(update => {
      updateHealthMetric(update.index, update.value);
    });
  };

  // Function to clear all activity notifications
  const clearAllActivity = () => {
    setRecentActivity(prevActivity =>
      prevActivity.map(activity => ({ ...activity, read: true }))
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <LayoutDashboard className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, {userName}</h1>
            <p className="text-gray-600 mt-1">Here's an overview of your health and upcoming appointments.</p>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Appointments</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
            </div>
            <div className="p-3 bg-primary-100 rounded-md">
              <CalendarCheck className="h-6 w-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">Next: June 2, 2024</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Medications</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
            </div>
            <div className="p-3 bg-primary-100 rounded-md">
              <Pill className="h-6 w-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">1 dose remaining today</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Upcoming Tests</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">1</p>
            </div>
            <div className="p-3 bg-primary-100 rounded-md">
              <FileText className="h-6 w-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">Blood work on June 15</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Notifications</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">4</p>
            </div>
            <div className="p-3 bg-primary-100 rounded-md">
              <Bell className="h-6 w-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">2 new since yesterday</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Health statistics */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Health Metrics</h2>
              <div className="flex space-x-4">
                <button
                  onClick={refreshHealthData}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  <Activity className="h-4 w-4 mr-2" />
                  Refresh Data
                </button>
                <Link
                  to="/health-stats"
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center group"
                >
                  View trends
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {healthStats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
                      <div className={`flex items-center ${
                        stat.change === 'up' ? 'text-red-500' :
                        stat.change === 'down' ? 'text-green-500' :
                        'text-gray-500'
                      }`}>
                        {getChangeIcon(stat.change)}
                      </div>
                    </div>
                    <div className="mt-2 flex items-baseline">
                      <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                      <p className="ml-2 text-sm text-gray-500">{stat.unit}</p>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Target: {stat.target}</span>
                      <span className={`text-xs font-medium ${getStatusColor(stat.status)}`}>
                        {stat.status.replace('-', ' ').charAt(0).toUpperCase() + stat.status.slice(1).replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Analytics Section */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Trends Chart */}
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-4">Weekly Trends</h3>
                    <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
                      <LineChart className="h-8 w-8 text-gray-400" />
                      <span className="ml-2 text-sm text-gray-500">Interactive chart would appear here</span>
                    </div>
                  </div>

                  {/* Insights */}
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-4">Health Insights</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Heart className="h-5 w-5 text-primary-600 mt-0.5 mr-3" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Blood Pressure Trend</p>
                          <p className="text-sm text-gray-600">Your blood pressure remains within the healthy range.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Activity className="h-5 w-5 text-primary-600 mt-0.5 mr-3" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Weight Management</p>
                          <p className="text-sm text-gray-600">Steady progress towards your target weight of 160 lbs.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Brain className="h-5 w-5 text-primary-600 mt-0.5 mr-3" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Glucose Levels</p>
                          <p className="text-sm text-gray-600">Blood glucose levels are stable and within normal range.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-4">Recommendations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-start">
                        <Sun className="h-5 w-5 text-green-600 mt-0.5 mr-3" />
                        <div>
                          <p className="text-sm font-medium text-green-900">Daily Exercise</p>
                          <p className="text-sm text-green-700">Consider adding 30 minutes of moderate exercise to maintain healthy blood pressure.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-start">
                        <Droplet className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                        <div>
                          <p className="text-sm font-medium text-blue-900">Hydration</p>
                          <p className="text-sm text-blue-700">Increase water intake to support your weight management goals.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Medication tracker */}
          <MedicationTracker />

          {/* Recent activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
              <button
                onClick={clearAllActivity}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Mark all as read
              </button>
            </div>
            <div className="px-6 py-4">
              <ul className="space-y-4">
                {recentActivity.map((activity) => (
                  <li
                    key={activity.id}
                    className={`flex items-start ${!activity.read ? 'bg-blue-50 -mx-6 px-6 py-2' : ''}`}
                    onClick={() => markActivityAsRead(activity.id)}
                  >
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                      activity.type === 'lab' ? 'bg-blue-100' :
                      activity.type === 'appointment' ? 'bg-green-100' :
                      'bg-purple-100'
                    }`}>
                      {activity.type === 'lab' && <FileText className={`h-4 w-4 text-blue-600`} />}
                      {activity.type === 'appointment' && <CalendarCheck className={`h-4 w-4 text-green-600`} />}
                      {activity.type === 'medication' && <Pill className={`h-4 w-4 text-purple-600`} />}
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.description}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                    {!activity.read && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        New
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <Link to="/activity" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  View all activity
                </Link>
              </div>
            </div>
          </div>

          {/* Health tips */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Health Tips & Insights</h2>
            </div>
            <div className="p-6">
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${healthTips[currentTipIndex].color}-100 text-${healthTips[currentTipIndex].color}-800`}>
                    {healthTips[currentTipIndex].category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={prevTip}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      aria-label="Previous tip"
                    >
                      <ChevronRight className="h-5 w-5 transform rotate-180" />
                    </button>
                    <button
                      onClick={nextTip}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      aria-label="Next tip"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 h-12 w-12 rounded-lg bg-${healthTips[currentTipIndex].color}-100 flex items-center justify-center`}>
                    {React.createElement(healthTips[currentTipIndex].icon, {
                      className: `h-6 w-6 text-${healthTips[currentTipIndex].color}-600`
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {healthTips[currentTipIndex].title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {healthTips[currentTipIndex].description}
                    </p>
                    <Link
                      to={healthTips[currentTipIndex].link}
                      className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      {healthTips[currentTipIndex].action}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="mt-4 flex justify-center">
                  {healthTips.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTipIndex(index)}
                      className={`h-1.5 w-8 rounded-full mx-1 transition-all duration-200 ${
                        index === currentTipIndex ? 'bg-primary-600' : 'bg-gray-200'
                      }`}
                      aria-label={`Go to tip ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;