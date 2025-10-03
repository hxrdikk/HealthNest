import React from 'react';
import { Pill } from 'lucide-react';
import MedicationTracker from '../../components/medication/MedicationTracker';

const MedicationPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Pill className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Medication Management</h1>
            <p className="text-gray-600 mt-1">Track, manage, and receive reminders for your medications.</p>
          </div>
        </div>
      </div>
      
      <MedicationTracker />
    </div>
  );
};

export default MedicationPage;