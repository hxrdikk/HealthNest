import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { LucideHeart } from 'lucide-react';

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-primary-600 to-secondary-700">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%2016h32M16%200v32%22%2F%3E%3C%2Fsvg%3E')] opacity-10"></div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
          <div className="flex justify-center">
            <Link to="/" className="flex items-center group">
              <LucideHeart className="h-10 w-10 text-white transform transition-transform group-hover:scale-110 duration-200" />
              <span className="ml-3 text-2xl font-bold text-white">HealthNest</span>
            </Link>
          </div>
        </div>
        
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="backdrop-blur-sm bg-white/95 py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
            <Outlet />
          </div>
        </div>
        
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md text-center">
          <p className="text-sm text-white/80">
            <Link to="/privacy" className="text-white hover:text-white/90 mr-4 hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white hover:text-white/90 hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;