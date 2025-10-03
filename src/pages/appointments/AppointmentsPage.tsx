import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Video, MapPin, Plus, Search, Filter, ChevronDown, ChevronUp, X } from 'lucide-react';
import ScheduleAppointmentForm from '../../components/appointments/ScheduleAppointmentForm';

interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  type: 'video' | 'in-person';
  status: 'upcoming' | 'completed' | 'cancelled';
  location?: string;
  notes?: string;
}

const AppointmentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all');
  const [filterType, setFilterType] = useState<'all' | 'video' | 'in-person'>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showScheduleForm, setShowScheduleForm] = useState(false);

  // Mock appointments data
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: '1',
      doctorName: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: '2024-06-02',
      time: '10:00 AM',
      type: 'video',
      status: 'upcoming',
      notes: 'Regular checkup and medication review'
    },
    {
      id: '2',
      doctorName: 'Dr. Michael Chen',
      specialty: 'Endocrinologist',
      date: '2024-06-10',
      time: '2:30 PM',
      type: 'in-person',
      status: 'upcoming',
      location: 'Medical Center, Suite 302, 123 Health Ave',
      notes: 'Follow-up appointment for diabetes management'
    },
    {
      id: '3',
      doctorName: 'Dr. Emily Wilson',
      specialty: 'Dermatologist',
      date: '2024-05-15',
      time: '11:15 AM',
      type: 'in-person',
      status: 'completed',
      location: 'Dermatology Clinic, 456 Skin Care Blvd',
      notes: 'Annual skin examination'
    },
    {
      id: '4',
      doctorName: 'Dr. James Martinez',
      specialty: 'Psychiatrist',
      date: '2024-05-20',
      time: '3:00 PM',
      type: 'video',
      status: 'cancelled',
      notes: 'Monthly therapy session'
    }
  ]);

  // Filter appointments based on search term and filters
  const filteredAppointments = appointments
    .filter(appointment => {
      const matchesSearch = appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          appointment.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || appointment.status === filterStatus;
      const matchesType = filterType === 'all' || appointment.type === filterType;
      return matchesSearch && matchesStatus && matchesType;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleScheduleAppointment = async (data: any) => {
    // In a real application, this would make an API call to create the appointment
    const newAppointment: Appointment = {
      id: String(appointments.length + 1),
      doctorName: 'Dr. Sarah Johnson', // This would come from the doctor data
      specialty: 'Cardiologist',
      date: data.date,
      time: data.time,
      type: data.type,
      status: 'upcoming',
      notes: data.reason,
      ...(data.type === 'in-person' && { location: 'Medical Center, Suite 302, 123 Health Ave' })
    };

    setAppointments([...appointments, newAppointment]);
    setShowScheduleForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="h-8 w-8 text-primary-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
              <p className="text-gray-600 mt-1">Manage your upcoming and past medical appointments</p>
            </div>
          </div>
          <button
            onClick={() => setShowScheduleForm(true)}
            className="btn btn-primary flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Schedule Appointment
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by doctor or specialty"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
                {showFilters ? (
                  <ChevronUp className="h-4 w-4 ml-2" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-2" />
                )}
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as any)}
                  className="w-full border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as any)}
                  className="w-full border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Types</option>
                  <option value="video">Video Consultation</option>
                  <option value="in-person">In-Person Visit</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {filteredAppointments.length === 0 ? (
            <div className="p-6 text-center">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No appointments found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredAppointments.map((appointment) => (
                <div key={appointment.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                        appointment.type === 'video' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                        {appointment.type === 'video' ? (
                          <Video className={`h-6 w-6 text-blue-600`} />
                        ) : (
                          <MapPin className={`h-6 w-6 text-green-600`} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{appointment.doctorName}</h3>
                        <p className="text-gray-600">{appointment.specialty}</p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {new Date(appointment.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{appointment.time}</span>
                        </div>
                        {appointment.location && (
                          <div className="mt-1 flex items-center text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{appointment.location}</span>
                          </div>
                        )}
                        {appointment.notes && (
                          <p className="mt-2 text-sm text-gray-600">{appointment.notes}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(appointment.status)}`}>
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </span>
                      {appointment.status === 'upcoming' && (
                        <div className="flex space-x-2">
                          {appointment.type === 'video' && (
                            <Link
                              to={`/consultation/${appointment.id}`}
                              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                            >
                              Join call
                            </Link>
                          )}
                          <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                            Cancel
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Schedule Appointment Form */}
      {showScheduleForm && (
        <ScheduleAppointmentForm
          onClose={() => setShowScheduleForm(false)}
          onSubmit={handleScheduleAppointment}
        />
      )}
    </div>
  );
};

export default AppointmentsPage;