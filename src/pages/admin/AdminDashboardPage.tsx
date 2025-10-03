import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, UserCheck, AlertTriangle, Activity, Settings, ArrowRight, Shield, ArrowLeft } from 'lucide-react';

const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock statistics
  const stats = {
    totalUsers: 1250,
    pendingVerifications: 5,
    activeProviders: 85,
    recentAlerts: 3
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const quickActions = [
    {
      title: 'Verify Providers',
      description: 'Review pending verifications',
      icon: UserCheck,
      link: '/admin/verify-providers',
      color: 'primary',
      delay: 0.1
    },
    {
      title: 'Manage Users',
      description: 'View and manage user accounts',
      icon: Users,
      link: '/admin/users',
      color: 'blue',
      delay: 0.2
    },
    {
      title: 'System Settings',
      description: 'Configure system preferences',
      icon: Settings,
      link: '/admin/settings',
      color: 'gray',
      delay: 0.3
    }
  ];

  const handleStatClick = (path: string) => {
    navigate(path);
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Monitor and manage system operations</p>
          </div>
        </div>
        <button
          onClick={handleBackToDashboard}
          className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </button>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div
          onClick={() => handleStatClick('/admin/users')}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalUsers}</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <span className="font-medium">View all users</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>

        <div
          onClick={() => handleStatClick('/admin/verify-providers')}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Verifications</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.pendingVerifications}</p>
            </div>
            <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <UserCheck className="h-6 w-6 text-amber-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-amber-600">
            <span className="font-medium">Review verifications</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>

        <div
          onClick={() => handleStatClick('/admin/users')}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Providers</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activeProviders}</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <span className="font-medium">View providers</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>

        <div
          onClick={() => handleStatClick('/broadcasts')}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Recent Alerts</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.recentAlerts}</p>
            </div>
            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-red-600">
            <span className="font-medium">View alerts</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={action.link}
              to={action.link}
              className={`group flex flex-col p-6 bg-${action.color}-50 rounded-lg hover:bg-${action.color}-100 transition-all duration-200 transform hover:-translate-y-1`}
            >
              <div className={`h-12 w-12 bg-${action.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <action.icon className={`h-6 w-6 text-${action.color}-600`} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{action.title}</h3>
              <p className="text-sm text-gray-600">{action.description}</p>
              <div className={`mt-4 flex items-center text-sm text-${action.color}-600 font-medium`}>
                <span>Get started</span>
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;