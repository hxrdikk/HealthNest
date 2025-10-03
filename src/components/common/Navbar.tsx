import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, BellRing, Settings, LogOut, LucideHeart, Stethoscope, Calendar, MessageSquare, Home, Radio, Shield, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const mockNotifications = [
  {
    id: 1,
    type: 'appointment',
    title: 'Upcoming Appointment',
    message: 'Appointment with Dr. Sarah Johnson tomorrow at 10:00 AM',
    time: '1 hour ago',
    read: false
  },
  {
    id: 2,
    type: 'medication',
    title: 'Medication Reminder',
    message: 'Time to take your evening medication',
    time: '2 hours ago',
    read: false
  },
  {
    id: 3,
    type: 'lab',
    title: 'Lab Results Available',
    message: 'Your recent lab results are now available',
    time: '1 day ago',
    read: true
  }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const { currentUser, logout, isDoctor, isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const markNotificationAsRead = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <LucideHeart className="h-8 w-8 text-primary-600 transform transition-transform group-hover:scale-110 duration-200" />
              <span className="ml-2 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-primary-600">HealthNest</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-6">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
                  isActive('/') 
                    ? 'border-primary-600 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
              {currentUser && (
                <>
                  <Link
                    to="/dashboard"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
                      isActive('/dashboard')
                        ? 'border-primary-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                  </Link>
                  <Link
                    to="/medication"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
                      isActive('/medication')
                        ? 'border-primary-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <LucideHeart className="h-4 w-4 mr-2" />
                    Medication
                  </Link>
                  <Link
                    to="/appointments"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
                      isActive('/appointments')
                        ? 'border-primary-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Appointments
                  </Link>
                  <Link
                    to="/broadcasts"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
                      isActive('/broadcasts')
                        ? 'border-primary-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <Radio className="h-4 w-4 mr-2" />
                    Broadcasts
                  </Link>
                  {isDoctor && (
                    <Link
                      to="/patients"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
                        isActive('/patients')
                          ? 'border-primary-600 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      <Stethoscope className="h-4 w-4 mr-2" />
                      Patients
                    </Link>
                  )}
                  <Link
                    to="/messages"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
                      isActive('/messages')
                        ? 'border-primary-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Messages
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center">
            {currentUser ? (
              <div className="ml-3 relative flex items-center">
                <div className="relative">
                  <button
                    type="button"
                    onClick={toggleNotifications}
                    className="p-1 rounded-full text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 relative"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellRing className="h-6 w-6" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
                        {unreadCount}
                      </span>
                    )}
                  </button>

                  {isNotificationsOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                      <div className="px-4 py-3 flex justify-between items-center">
                        <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
                        {unreadCount > 0 && (
                          <button
                            onClick={markAllNotificationsAsRead}
                            className="text-sm text-primary-600 hover:text-primary-700"
                          >
                            Mark all as read
                          </button>
                        )}
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.length === 0 ? (
                          <div className="px-4 py-6 text-center text-gray-500">
                            <p>No notifications</p>
                          </div>
                        ) : (
                          <div className="divide-y divide-gray-100">
                            {notifications.map((notification) => (
                              <div
                                key={notification.id}
                                className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                                  !notification.read ? 'bg-blue-50' : ''
                                }`}
                                onClick={() => markNotificationAsRead(notification.id)}
                              >
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      {notification.title}
                                    </p>
                                    <p className="text-sm text-gray-600 mt-0.5">
                                      {notification.message}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                      {notification.time}
                                    </p>
                                  </div>
                                  {!notification.read && (
                                    <div className="ml-3 flex-shrink-0">
                                      <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="px-4 py-3">
                        <Link
                          to="/activity"
                          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                          onClick={() => setIsNotificationsOpen(false)}
                        >
                          View all activity
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <div className="ml-3 relative">
                  <div>
                    <button
                      onClick={toggleProfile}
                      className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-transform duration-200 hover:scale-105"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                        {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : <User className="h-5 w-5" />}
                      </div>
                    </button>
                  </div>
                  {isProfileOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transform transition-all duration-200 ease-out"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        role="menuitem"
                      >
                        <User className="inline h-4 w-4 mr-2" />
                        Your Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        role="menuitem"
                      >
                        <Settings className="inline h-4 w-4 mr-2" />
                        Settings
                      </Link>
                      {isAdmin && (
                        <Link
                          to="/admin"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                          role="menuitem"
                        >
                          <Shield className="inline h-4 w-4 mr-2" />
                          Admin Panel
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        role="menuitem"
                      >
                        <LogOut className="inline h-4 w-4 mr-2" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-50 hover:bg-primary-100 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200 ${
              isActive('/')
                ? 'border-primary-600 text-primary-700 bg-primary-50'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
          >
            Home
          </Link>
          {currentUser && (
            <>
              <Link
                to="/dashboard"
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200 ${
                  isActive('/dashboard')
                    ? 'border-primary-600 text-primary-700 bg-primary-50'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                }`}
              >
                Dashboard
              </Link>
            </>
          )}
        </div>
        
        {currentUser ? (
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                  {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : <User className="h-6 w-6" />}
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  {currentUser.displayName}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {currentUser.email}
                </div>
              </div>
              <button
                type="button"
                className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
              >
                <span className="sr-only">View notifications</span>
                <BellRing className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                to="/profile"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200"
              >
                Your Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200"
              >
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200"
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-around">
              <Link
                to="/login"
                className="block px-4 py-2 text-base font-medium text-primary-700 hover:text-primary-800 transition-colors duration-200"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-base font-medium bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;