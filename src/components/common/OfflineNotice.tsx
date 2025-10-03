import React from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const OfflineNotice: React.FC = () => {
  const { isOnline, error, retryConnection } = useAuth();

  if (isOnline && !error) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <WifiOff className="h-4 w-4 text-amber-500 mr-2" />
            <p className="text-sm text-amber-700">
              {error || 'You are currently offline. Some features may be limited.'}
            </p>
          </div>
          <button
            onClick={retryConnection}
            className="ml-4 inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-amber-700 bg-amber-100 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfflineNotice;