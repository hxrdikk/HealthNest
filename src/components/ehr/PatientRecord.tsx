import React, { useState } from 'react';
import { FilePlus, Calendar, FileEdit, Trash2, FileText, PlusCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PatientRecordProps {
  patientId: string;
}

// Mock data for demonstration
const mockRecords = [
  {
    id: '1',
    type: 'Diagnosis',
    title: 'Type 2 Diabetes Mellitus',
    date: '2023-12-15',
    doctor: 'Dr. Sarah Johnson',
    description: 'Initial diagnosis of Type 2 Diabetes with HbA1c of 8.2%. Patient advised on lifestyle changes and medication.'
  },
  {
    id: '2',
    type: 'Prescription',
    title: 'Metformin 500mg',
    date: '2023-12-15',
    doctor: 'Dr. Sarah Johnson',
    description: 'Metformin 500mg, twice daily with meals. 30-day supply with 3 refills.'
  },
  {
    id: '3',
    type: 'Lab Result',
    title: 'Complete Blood Count',
    date: '2024-01-20',
    doctor: 'Dr. Michael Chen',
    description: 'WBC: 7.2, RBC: 4.8, Hemoglobin: 14.2, Hematocrit: 42%, Platelets: 250k. All values within normal range.'
  },
  {
    id: '4',
    type: 'Visit',
    title: 'Follow-up Appointment',
    date: '2024-02-10',
    doctor: 'Dr. Sarah Johnson',
    description: 'Follow-up for diabetes management. Blood pressure: 130/85. Weight: 185 lbs. HbA1c improved to 7.4%.'
  },
  {
    id: '5',
    type: 'Imaging',
    title: 'Chest X-ray',
    date: '2024-02-22',
    doctor: 'Dr. Robert Williams',
    description: 'Clear lung fields. No evidence of infiltrates, effusions, or pneumothorax. Heart size normal.'
  }
];

const PatientRecord: React.FC<PatientRecordProps> = ({ patientId }) => {
  const [expandedRecord, setExpandedRecord] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>('All');

  const toggleExpand = (id: string) => {
    if (expandedRecord === id) {
      setExpandedRecord(null);
    } else {
      setExpandedRecord(id);
    }
  };

  const filteredRecords = filterType === 'All' 
    ? mockRecords 
    : mockRecords.filter(record => record.type === filterType);

  const recordTypes = ['All', ...Array.from(new Set(mockRecords.map(record => record.type)))];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Patient Health Records</h2>
        <div className="flex space-x-3">
          <Link to={`/records/${patientId}/new`} className="btn btn-primary flex items-center">
            <FilePlus className="h-4 w-4 mr-2" />
            Add Record
          </Link>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-sm font-medium text-gray-700">Filter by:</span>
          {recordTypes.map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1 rounded-full text-sm ${
                filterType === type
                  ? 'bg-primary-100 text-primary-800 border border-primary-300'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {filteredRecords.length === 0 ? (
        <div className="text-center py-8">
          <FileText className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No records found</h3>
          <p className="text-gray-500 mb-4">There are no health records matching your filter criteria.</p>
          <button 
            className="btn btn-primary"
            onClick={() => setFilterType('All')}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredRecords.map((record) => (
            <div key={record.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleExpand(record.id)}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${
                      record.type === 'Diagnosis' ? 'bg-blue-100 text-blue-600' : 
                      record.type === 'Prescription' ? 'bg-green-100 text-green-600' :
                      record.type === 'Lab Result' ? 'bg-purple-100 text-purple-600' :
                      record.type === 'Visit' ? 'bg-amber-100 text-amber-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {record.type.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">{record.title}</h3>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="mr-2">{record.type}</span>
                      <span>•</span>
                      <span className="mx-2 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(record.date).toLocaleDateString()}
                      </span>
                      <span>•</span>
                      <span className="ml-2">{record.doctor}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Edit action
                    }}
                  >
                    <FileEdit className="h-4 w-4" />
                  </button>
                  <button 
                    className="p-1 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-100 focus:outline-none ml-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Delete action
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  {expandedRecord === record.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 ml-2" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 ml-2" />
                  )}
                </div>
              </div>
              
              {expandedRecord === record.id && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm text-gray-700 whitespace-pre-line mb-4">{record.description}</p>
                  <div className="flex justify-end">
                    <Link to={`/records/${patientId}/${record.id}`} className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                      View full details
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientRecord;