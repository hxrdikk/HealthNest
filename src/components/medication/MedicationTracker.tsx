import React, { useState } from 'react';
import { Plus, Check, Clock, Circle, AlertCircle, Pill, Calendar, BellRing, ChevronDown, ChevronUp } from 'lucide-react';
import AddMedicationForm from './AddMedicationForm';
import EditMedicationForm from './EditMedicationForm';
import MedicationDetails from './MedicationDetails';

const MedicationTracker: React.FC = () => {
  const [expandedMed, setExpandedMed] = useState<string | null>(null);
  const [medications, setMedications] = useState(mockMedications);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState<string | null>(null);
  const [today] = useState<string>('2024-05-31'); // Using fixed date for demo purposes

  const toggleExpand = (id: string) => {
    if (expandedMed === id) {
      setExpandedMed(null);
    } else {
      setExpandedMed(id);
    }
  };

  const toggleMedicationStatus = (medicationId: string, timeOfDay: 'morning' | 'evening') => {
    setMedications(prevMeds => 
      prevMeds.map(med => {
        if (med.id === medicationId) {
          const updatedStatus = [...med.status];
          const todayStatusIndex = updatedStatus.findIndex(s => s.date === today);
          
          if (todayStatusIndex >= 0) {
            const currentStatus = updatedStatus[todayStatusIndex][timeOfDay];
            updatedStatus[todayStatusIndex] = {
              ...updatedStatus[todayStatusIndex],
              [timeOfDay]: currentStatus === 'taken' ? 'pending' : 'taken'
            };
          }
          
          return {
            ...med,
            status: updatedStatus
          };
        }
        return med;
      })
    );
  };

  const handleAddMedication = (data: any) => {
    const newMedication = {
      id: String(medications.length + 1),
      ...data,
      status: [
        { date: today, morning: 'pending', evening: 'pending' }
      ]
    };
    setMedications([...medications, newMedication]);
    setShowAddForm(false);
  };

  const handleEditMedication = (data: any) => {
    setMedications(prevMeds =>
      prevMeds.map(med =>
        med.id === data.id ? { ...med, ...data } : med
      )
    );
    setShowEditForm(null);
  };

  const handleDeleteMedication = (id: string) => {
    setMedications(prevMeds => prevMeds.filter(med => med.id !== id));
    setShowDetails(null);
  };

  const handleViewDetails = (id: string) => {
    setShowDetails(id);
  };

  const handleEdit = (id: string) => {
    setShowEditForm(id);
  };

  const getTodayMedStatus = (med: any) => {
    const todayStatus = med.status.find((s: any) => s.date === today);
    if (!todayStatus) return null;
    
    return {
      morning: todayStatus.morning || null,
      evening: todayStatus.evening || null
    };
  };

  const todayCounts = medications.reduce((counts, med) => {
    const todayStatus = med.status.find((s: any) => s.date === today);
    if (todayStatus) {
      if (todayStatus.morning === 'pending') counts.pending++;
      if (todayStatus.evening === 'pending') counts.pending++;
      if (todayStatus.morning === 'taken') counts.taken++;
      if (todayStatus.evening === 'taken') counts.taken++;
      if (todayStatus.morning === 'missed') counts.missed++;
      if (todayStatus.evening === 'missed') counts.missed++;
    }
    return counts;
  }, { pending: 0, taken: 0, missed: 0 });

  const totalDoses = todayCounts.pending + todayCounts.taken + todayCounts.missed;
  const adherenceRate = totalDoses > 0 ? Math.round((todayCounts.taken / totalDoses) * 100) : 0;

  // Find the medication to edit
  const medicationToEdit = showEditForm ? medications.find(med => med.id === showEditForm) : null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Medication Schedule</h2>
            <p className="text-sm text-gray-500 mt-1">Track your daily medications</p>
          </div>
          <button 
            className="btn btn-primary flex items-center"
            onClick={() => setShowAddForm(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Medication
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">{todayCounts.taken}</div>
              <div className="text-sm text-gray-500">Taken</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">{todayCounts.pending}</div>
              <div className="text-sm text-gray-500">Pending</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">{todayCounts.missed}</div>
              <div className="text-sm text-gray-500">Missed</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Today's Adherence</span>
              <span className="text-sm font-medium text-gray-900">{adherenceRate}%</span>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div 
                className={`h-full rounded-full ${
                  adherenceRate >= 80 ? 'bg-green-500' : 
                  adherenceRate >= 50 ? 'bg-amber-500' : 
                  'bg-red-500'
                }`}
                style={{ width: `${adherenceRate}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {medications.map((med) => {
            const todayStatus = getTodayMedStatus(med);
            
            return (
              <div key={med.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div 
                  className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => toggleExpand(med.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <Pill className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {med.name} <span className="text-gray-500">{med.dosage}</span>
                      </h3>
                      <p className="text-xs text-gray-500">{med.frequency}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {med.timeSlots.includes('08:00') && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMedicationStatus(med.id, 'morning');
                        }}
                        className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
                          todayStatus?.morning === 'taken' ? 'bg-green-100 text-green-800' :
                          todayStatus?.morning === 'missed' ? 'bg-red-100 text-red-800' :
                          'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {todayStatus?.morning === 'taken' ? (
                          <Check className="h-4 w-4 mr-1" />
                        ) : todayStatus?.morning === 'missed' ? (
                          <AlertCircle className="h-4 w-4 mr-1" />
                        ) : (
                          <Circle className="h-4 w-4 mr-1" />
                        )}
                        <span>Morning</span>
                      </button>
                    )}
                    
                    {med.timeSlots.includes('20:00') && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMedicationStatus(med.id, 'evening');
                        }}
                        className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
                          todayStatus?.evening === 'taken' ? 'bg-green-100 text-green-800' :
                          todayStatus?.evening === 'missed' ? 'bg-red-100 text-red-800' :
                          'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {todayStatus?.evening === 'taken' ? (
                          <Check className="h-4 w-4 mr-1" />
                        ) : todayStatus?.evening === 'missed' ? (
                          <AlertCircle className="h-4 w-4 mr-1" />
                        ) : (
                          <Circle className="h-4 w-4 mr-1" />
                        )}
                        <span>Evening</span>
                      </button>
                    )}
                    
                    {expandedMed === med.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
                
                {expandedMed === med.id && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs uppercase font-semibold text-gray-500 mb-2">Schedule</h4>
                        <div className="space-y-2">
                          {med.timeSlots.map((time, index) => (
                            <div key={index} className="flex items-center text-sm">
                              <Clock className="h-4 w-4 text-gray-400 mr-2" />
                              <span>{time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase font-semibold text-gray-500 mb-2">Instructions</h4>
                        <p className="text-sm text-gray-600">{med.instructions}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <div className="text-xs text-gray-500">
                        Started: {new Date(med.startDate).toLocaleDateString()}
                      </div>
                      <div className="space-x-4">
                        <button 
                          onClick={() => handleEdit(med.id)}
                          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleViewDetails(med.id)}
                          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {showAddForm && (
        <AddMedicationForm
          onClose={() => setShowAddForm(false)}
          onSubmit={handleAddMedication}
        />
      )}

      {showEditForm && medicationToEdit && (
        <EditMedicationForm
          medication={medicationToEdit}
          onClose={() => setShowEditForm(null)}
          onSubmit={handleEditMedication}
        />
      )}

      {showDetails && (
        <MedicationDetails
          medication={medications.find(med => med.id === showDetails)}
          onClose={() => setShowDetails(null)}
          onEdit={handleEdit}
          onDelete={handleDeleteMedication}
        />
      )}
    </div>
  );
};

// Mock data
const mockMedications = [
  {
    id: '1',
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    timeSlots: ['08:00', '20:00'],
    startDate: '2024-01-10',
    endDate: '2024-07-10',
    instructions: 'Take with meals',
    status: [
      { date: '2024-05-29', morning: 'taken', evening: 'missed' },
      { date: '2024-05-30', morning: 'taken', evening: 'taken' },
      { date: '2024-05-31', morning: 'pending', evening: 'pending' },
    ]
  },
  {
    id: '2',
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    timeSlots: ['08:00'],
    startDate: '2024-02-15',
    endDate: '2024-08-15',
    instructions: 'Take in the morning',
    status: [
      { date: '2024-05-29', morning: 'taken' },
      { date: '2024-05-30', morning: 'taken' },
      { date: '2024-05-31', morning: 'pending' },
    ]
  },
  {
    id: '3',
    name: 'Atorvastatin',
    dosage: '20mg',
    frequency: 'Once daily',
    timeSlots: ['20:00'],
    startDate: '2024-03-01',
    endDate: '2024-09-01',
    instructions: 'Take in the evening',
    status: [
      { date: '2024-05-29', evening: 'taken' },
      { date: '2024-05-30', evening: 'missed' },
      { date: '2024-05-31', evening: 'pending' },
    ]
  }
];

export default MedicationTracker;