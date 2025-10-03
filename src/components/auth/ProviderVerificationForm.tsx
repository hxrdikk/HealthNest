import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface ProviderVerificationFormProps {
  userData: any;
}

const ProviderVerificationForm: React.FC<ProviderVerificationFormProps> = ({ userData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signUp } = useAuth();
  const navigate = useNavigate();
  
  const [documents, setDocuments] = useState({
    medicalLicense: null,
    identityProof: null,
    degreeDocument: null
  });

  const handleFileChange = (type: string, file: File | null) => {
    setDocuments(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Create the doctor account
      await signUp(userData.email, userData.password, userData.name, 'doctor');
      
      // In a real application, you would:
      // 1. Upload the documents to secure storage
      // 2. Create verification request in database
      // 3. Send notification to admin for review
      
      // Navigate to verification pending page
      navigate('/verification-pending');
    } catch (err: any) {
      console.error('Verification submission failed:', err);
      if (err.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists.');
      } else {
        setError('Failed to submit verification documents. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Verify Your Credentials</h2>
        <p className="mt-2 text-gray-600">
          Please provide the following documents to verify your healthcare provider status
        </p>
      </div>

      {error && (
        <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Medical License
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-primary-500 transition-colors">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="medical-license" className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                  <span>Upload a file</span>
                  <input
                    id="medical-license"
                    name="medical-license"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange('medicalLicense', e.target.files?.[0] || null)}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
            </div>
          </div>
          {documents.medicalLicense && (
            <div className="mt-2 flex items-center text-sm text-green-600">
              <CheckCircle className="h-4 w-4 mr-1" />
              {documents.medicalLicense.name}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Identity Proof
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-primary-500 transition-colors">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="identity-proof" className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                  <span>Upload a file</span>
                  <input
                    id="identity-proof"
                    name="identity-proof"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange('identityProof', e.target.files?.[0] || null)}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
            </div>
          </div>
          {documents.identityProof && (
            <div className="mt-2 flex items-center text-sm text-green-600">
              <CheckCircle className="h-4 w-4 mr-1" />
              {documents.identityProof.name}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Medical Degree
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-primary-500 transition-colors">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="degree-document" className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                  <span>Upload a file</span>
                  <input
                    id="degree-document"
                    name="degree-document"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange('degreeDocument', e.target.files?.[0] || null)}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
            </div>
          </div>
          {documents.degreeDocument && (
            <div className="mt-2 flex items-center text-sm text-green-600">
              <CheckCircle className="h-4 w-4 mr-1" />
              {documents.degreeDocument.name}
            </div>
          )}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>All documents must be clear and legible</li>
                  <li>Documents will be verified by our team</li>
                  <li>Verification process may take 2-3 business days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading || !documents.medicalLicense || !documents.identityProof || !documents.degreeDocument}
            className="flex-1 btn btn-primary"
          >
            {loading ? 'Submitting...' : 'Submit for Verification'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProviderVerificationForm;