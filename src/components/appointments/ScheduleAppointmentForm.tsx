import React, { useState } from 'react';
import { X, ArrowLeft, Calendar, Clock, Stethoscope, FileText } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface ScheduleAppointmentFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const ScheduleAppointmentForm: React.FC<ScheduleAppointmentFormProps> = ({ onClose, onSubmit }) => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Mock data for doctors
  const doctors = [
    { id: '1', name: 'Dr. Sarah Johnson', specialty: 'Cardiologist' },
    { id: '2', name: 'Dr. Michael Chen', specialty: 'Endocrinologist' },
    { id: '3', name: 'Dr. Emily Wilson', specialty: 'Dermatologist' },
    { id: '4', name: 'Dr. James Martinez', specialty: 'Psychiatrist' }
  ];

  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      doctorId: formData.get('doctor'),
      date: formData.get('date'),
      time: formData.get('time'),
      type: formData.get('type'),
      reason: formData.get('reason'),
      patientId: currentUser?.uid,
      status: 'pending'
    };

    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Failed to schedule appointment:', error);
    } finally {
      setLoading(false);
    }
  };

  // Get minimum date (today) and maximum date (3 months from now)
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 flex items-center text-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </button>
          <h2 className="text-lg font-semibold text-gray-900">Schedule Appointment</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">
              Select Doctor
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Stethoscope className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="doctor"
                name="doctor"
                required
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              >
                <option value="">Select a doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Select Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                id="date"
                name="date"
                required
                min={today}
                max={maxDateStr}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Select Time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="time"
                name="time"
                required
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              >
                <option value="">Select a time slot</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Appointment Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                <input
                  type="radio"
                  name="type"
                  value="video"
                  className="sr-only"
                  defaultChecked
                />
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <span className="block text-sm font-medium text-gray-900">Video Call</span>
                    <span className="mt-1 flex items-center text-sm text-gray-500">Online consultation</span>
                  </span>
                </span>
                <span className="pointer-events-none absolute -inset-px rounded-lg border-2 border-primary-500" aria-hidden="true"></span>
              </label>

              <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                <input
                  type="radio"
                  name="type"
                  value="in-person"
                  className="sr-only"
                />
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <span className="block text-sm font-medium text-gray-900">In Person</span>
                    <span className="mt-1 flex items-center text-sm text-gray-500">Clinic visit</span>
                  </span>
                </span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Visit
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="reason"
                name="reason"
                required
                rows={3}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Briefly describe your symptoms or reason for visit"
              ></textarea>
            </div>
          </div>

          <div className="flex space-x-3 pt-4 border-t">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {loading ? 'Scheduling...' : 'Schedule Appointment'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleAppointmentForm;