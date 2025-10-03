import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Video, Clock, Activity, FileText, ChevronRight, Bell, LayoutDashboard } from 'lucide-react';

const DoctorDashboardPage: React.FC = () => {
  // Mock data for demonstration
  const upcomingAppointments = [
    {
      id: '1',
      patientName: 'John Doe',
      time: '10:00 AM',
      date: '2024-06-02',
      type: 'video',
      reason: 'Follow-up consultation'
    },
    {
      id: '2',
      patientName: 'Sarah Smith',
      time: '11:30 AM',
      date: '2024-06-02',
      type: 'in-person',
      reason: 'Annual checkup'
    }
  ];

  const recentPatients = [
    {
      id: '1',
      name: 'Emily Johnson',
      age: 45,
      lastVisit: '2024-05-28',
      condition: 'Hypertension'
    },
    {
      id: '2',
      name: 'Michael Brown',
      age: 32,
      lastVisit: '2024-05-27',
      condition: 'Diabetes Type 2'
    },
    {
      id: '3',
      name: 'Lisa Davis',
      age: 28,
      lastVisit: '2024-05-26',
      condition: 'Annual checkup'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <LayoutDashboard className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Doctor Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, Dr. Johnson</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Today's Patients</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
            </div>
            <div className="p-2 bg-primary-100 rounded-md">
              <Users className="h-5 w-5 text-primary-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">Next appointment in 30 mins</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Pending Reports</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
            </div>
            <div className="p-2 bg-primary-100 rounded-md">
              <FileText className="h-5 w-5 text-primary-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">2 urgent reviews needed</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Consultations</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
            </div>
            <div className="p-2 bg-primary-100 rounded-md">
              <Video className="h-5 w-5 text-primary-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">4 video calls scheduled</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Messages</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">5</p>
            </div>
            <div className="p-2 bg-primary-100 rounded-md">
              <Bell className="h-5 w-5 text-primary-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">2 unread messages</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content area - 2/3 width */}
        <div className="lg:col-span-2 space-y-8">
          {/* Upcoming Appointments */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Today's Appointments</h2>
              <Link to="/appointments" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center">
                View all
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="divide-y divide-gray-200">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        appointment.type === 'video' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                        {appointment.type === 'video' ? (
                          <Video className={`h-5 w-5 text-blue-600`} />
                        ) : (
                          <Users className={`h-5 w-5 text-green-600`} />
                        )}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">{appointment.patientName}</h3>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{appointment.time}</span>
                          <span className="mx-2">•</span>
                          <span>{appointment.reason}</span>
                        </div>
                      </div>
                    </div>
                    {appointment.type === 'video' && (
                      <Link
                        to={`/consultation/${appointment.id}`}
                        className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                      >
                        Join Call
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Patient Analytics */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Patient Analytics</h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Activity className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Patient analytics chart would appear here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - 1/3 width */}
        <div className="space-y-8">
          {/* Recent Patients */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Recent Patients</h2>
              <Link to="/patients" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center">
                View all
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="divide-y divide-gray-200">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          {patient.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{patient.name}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{patient.age} years</span>
                        <span className="mx-1">•</span>
                        <span>{patient.condition}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Tasks</h2>
            </div>
            <div className="p-4">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <input
                    type="checkbox"
                    className="h-4 w-4 mt-1 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-3 text-sm text-gray-600">
                    Review lab results for Emily Johnson
                  </span>
                </li>
                <li className="flex items-start">
                  <input
                    type="checkbox"
                    className="h-4 w-4 mt-1 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-3 text-sm text-gray-600">
                    Update treatment plan for Michael Brown
                  </span>
                </li>
                <li className="flex items-start">
                  <input
                    type="checkbox"
                    className="h-4 w-4 mt-1 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-3 text-sm text-gray-600">
                    Sign off on prescription renewals
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardPage;