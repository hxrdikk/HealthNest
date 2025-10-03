import React, { useState } from 'react';
import { Shield, CheckCircle, XCircle, Eye, Download, Clock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface VerificationRequest {
  id: string;
  doctorName: string;
  email: string;
  specialization: string;
  hospital: string;
  submittedAt: string;
  documents: {
    medicalLicense: string;
    identityProof: string;
    degreeDocument: string;
  };
  status: 'pending' | 'approved' | 'rejected';
}

const ProviderVerificationPage: React.FC = () => {
  const { isAdmin } = useAuth();
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

  // Mock verification requests
  const [requests, setRequests] = useState<VerificationRequest[]>([
    {
      id: '1',
      doctorName: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@example.com',
      specialization: 'Cardiologist',
      hospital: 'City Hospital',
      submittedAt: '2024-03-15T10:30:00Z',
      documents: {
        medicalLicense: 'license.pdf',
        identityProof: 'id.pdf',
        degreeDocument: 'degree.pdf'
      },
      status: 'pending'
    },
    {
      id: '2',
      doctorName: 'Dr. Michael Chen',
      email: 'michael.chen@example.com',
      specialization: 'Neurologist',
      hospital: 'Central Medical Center',
      submittedAt: '2024-03-14T15:45:00Z',
      documents: {
        medicalLicense: 'license.pdf',
        identityProof: 'id.pdf',
        degreeDocument: 'degree.pdf'
      },
      status: 'pending'
    }
  ]);

  const handleApprove = async (id: string) => {
    // In a real application, make API call to approve the request
    setRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status: 'approved' } : request
      )
    );
  };

  const handleReject = async (id: string) => {
    // In a real application, make API call to reject the request
    setRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status: 'rejected' } : request
      )
    );
  };

  const filteredRequests = requests.filter(request => 
    filterStatus === 'all' || request.status === filterStatus
  );

  if (!isAdmin) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Access Denied</h1>
          <p className="mt-2 text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Provider Verification</h1>
            <p className="text-gray-600 mt-1">Review and verify healthcare provider credentials</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filterStatus === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              All Requests
            </button>
            <button
              onClick={() => setFilterStatus('pending')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filterStatus === 'pending'
                  ? 'bg-amber-100 text-amber-800 border border-amber-300'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Clock className="inline-block h-4 w-4 mr-1" />
              Pending
            </button>
            <button
              onClick={() => setFilterStatus('approved')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filterStatus === 'approved'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <CheckCircle className="inline-block h-4 w-4 mr-1" />
              Approved
            </button>
            <button
              onClick={() => setFilterStatus('rejected')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filterStatus === 'rejected'
                  ? 'bg-red-100 text-red-800 border border-red-300'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <XCircle className="inline-block h-4 w-4 mr-1" />
              Rejected
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredRequests.map((request) => (
            <div key={request.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-medium text-gray-900">{request.doctorName}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      request.status === 'approved' ? 'bg-green-100 text-green-800' :
                      request.status === 'rejected' ? 'bg-red-100 text-red-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{request.email}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>{request.specialization} at {request.hospital}</p>
                    <p className="mt-1">Submitted on {new Date(request.submittedAt).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setSelectedRequest(request.id)}
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View Documents
                  </button>
                  {request.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleApprove(request.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </div>

              {selectedRequest === request.id && (
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">Verification Documents</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(request.documents).map(([key, value]) => (
                      <div key={key} className="bg-white p-4 rounded-lg border border-gray-200">
                        <h5 className="text-sm font-medium text-gray-900 capitalize mb-2">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h5>
                        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredRequests.length === 0 && (
            <div className="p-8 text-center">
              <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No requests found</h3>
              <p className="text-gray-600">There are no verification requests matching your filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProviderVerificationPage;