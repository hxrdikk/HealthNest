import React from 'react';
import { X, Calendar, Clock, AlertCircle, FileEdit, Trash2 } from 'lucide-react';

interface MedicationDetailsProps {
  medication: any;
  onClose: () => void;
  onEdit: (medication: any) => void;
  onDelete: (medication: any) => void;
}

const MedicationDetails: React.FC<MedicationDetailsProps> = ({ medication, onClose, onEdit, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this medication?')) {
      onDelete(medication);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Medication Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{medication.name}</h3>
            <p className="text-gray-600">{medication.dosage}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Schedule</h4>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                  <span>Start: {new Date(medication.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                  <span>End: {new Date(medication.endDate).toLocaleDateString()}</span>
                </div>
                {medication.timeSlots.map((time: string, index: number) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-gray-400" />
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Instructions</h4>
              <p className="text-gray-600">{medication.instructions}</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
              <div>
                <h4 className="text-sm font-medium text-yellow-800">Important Notes</h4>
                <ul className="mt-2 text-sm text-yellow-700 list-disc list-inside">
                  <li>Take this medication as prescribed</li>
                  <li>Do not skip doses</li>
                  <li>Contact your healthcare provider if you experience side effects</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={() => onEdit(medication)}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 flex items-center"
              >
                <FileEdit className="h-4 w-4 mr-2" />
                Edit Medication
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 flex items-center"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationDetails;