import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoConsultation from '../../components/telemedicine/VideoConsultation';
import { Video, ArrowLeft } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isCallEnded, setIsCallEnded] = useState(false);

  // Mock appointment data - in real app would come from API
  const appointmentData = {
    doctorName: 'Dr. Sarah Johnson',
    patientName: 'John Doe',
    startTime: new Date().toISOString(),
    duration: 30, // minutes
    type: 'Follow-up Consultation',
    notes: 'Regular checkup and medication review'
  };

  const handleEndCall = () => {
    setIsCallEnded(true);
  };

  const handleBackToAppointments = () => {
    navigate('/appointments');
  };

  if (isCallEnded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Video className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Consultation Complete</h2>
          <p className="text-gray-600 mb-8">
            Your consultation with {appointmentData.doctorName} has ended. Thank you for using our telemedicine service.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Return to Dashboard
            </button>
            <button
              onClick={() => navigate('/appointments')}
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              View All Appointments
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <button
            onClick={handleBackToAppointments}
            className="text-white opacity-80 hover:opacity-100 transition-opacity flex items-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Appointments
          </button>
        </div>
        
        <div className="py-4">
          <div className="flex items-center justify-between text-white mb-6">
            <div>
              <h1 className="text-2xl font-semibold">{appointmentData.type}</h1>
              <p className="text-gray-400">with {appointmentData.doctorName}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400">Appointment ID: {id}</p>
            </div>
          </div>
        </div>

        <VideoConsultation
          appointmentId={id || ''}
          doctorName={appointmentData.doctorName}
          patientName={appointmentData.patientName}
          startTime={appointmentData.startTime}
          duration={appointmentData.duration}
          onEnd={handleEndCall}
        />
      </div>
    </div>
  );
};

export default ConsultationPage;