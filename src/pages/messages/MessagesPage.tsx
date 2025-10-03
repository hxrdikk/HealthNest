import React from 'react';
import { MessageSquare } from 'lucide-react';

const MessagesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <MessageSquare className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600 mt-1">Communicate securely with your healthcare providers.</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Your messages will appear here.</p>
      </div>
    </div>
  );
};

export default MessagesPage;