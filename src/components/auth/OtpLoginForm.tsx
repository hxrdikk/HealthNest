import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Phone, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

type PhoneFormData = {
  phoneNumber: string;
};

type OtpFormData = {
  otp: string;
};

const OtpLoginForm: React.FC = () => {
  const { register: registerPhone, handleSubmit: handlePhoneSubmit, formState: { errors: phoneErrors } } = useForm<PhoneFormData>();
  const { register: registerOtp, handleSubmit: handleOtpSubmit, formState: { errors: otpErrors } } = useForm<OtpFormData>();
  const { setupPhoneAuth, sendOtp, confirmOtp, error, setError } = useAuth();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [verificationId, setVerificationId] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize recaptcha when component mounts
    if (recaptchaRef.current) {
      setupPhoneAuth('recaptcha-container');
    }
  }, []);

  const onPhoneSubmit = async (data: PhoneFormData) => {
    try {
      setLoading(true);
      setError(null);
      setPhoneNumber(data.phoneNumber);
      
      // Setup recaptcha
      if (recaptchaRef.current) {
        const appVerifier = setupPhoneAuth('recaptcha-container');
        
        // Send OTP
        const verificationIdResult = await sendOtp(data.phoneNumber, appVerifier);
        setVerificationId(verificationIdResult);
        setStep('otp');
      }
    } catch (error) {
      console.error('Failed to send OTP', error);
      setError('Failed to send verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const onOtpSubmit = async (data: OtpFormData) => {
    try {
      setLoading(true);
      setError(null);
      
      // Confirm OTP
      await confirmOtp(verificationId, data.otp);
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to verify OTP', error);
      setError('Invalid verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Phone Login</h2>
        <p className="mt-2 text-gray-600">
          {step === 'phone' 
            ? 'Enter your phone number to receive a one-time password' 
            : 'Enter the verification code sent to your phone'}
        </p>
      </div>

      {error && (
        <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      {step === 'phone' ? (
        <form onSubmit={handlePhoneSubmit(onPhoneSubmit)} className="space-y-6">
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="phoneNumber"
                type="tel"
                inputMode="numeric"
                className={`input pl-10 ${phoneErrors.phoneNumber ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="+91 98765 43210"
                {...registerPhone('phoneNumber', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^\+91[6-9]\d{9}$/,
                    message: 'Please enter a valid Indian phone number starting with +91',
                  },
                })}
              />
            </div>
            {phoneErrors.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">{phoneErrors.phoneNumber.message}</p>
            )}
          </div>

          <div id="recaptcha-container" ref={recaptchaRef}></div>

          <div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? 'Sending code...' : 'Send verification code'}
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit(onOtpSubmit)} className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                Verification code
              </label>
              <button
                type="button"
                className="text-sm text-primary-600 hover:text-primary-700"
                onClick={() => setStep('phone')}
              >
                Change phone number
              </button>
            </div>
            <input
              id="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              className={`input text-center tracking-widest ${otpErrors.otp ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              placeholder="Enter 6-digit code"
              {...registerOtp('otp', {
                required: 'Verification code is required',
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: 'Please enter a valid 6-digit code',
                },
              })}
            />
            {otpErrors.otp && (
              <p className="mt-1 text-sm text-red-600">{otpErrors.otp.message}</p>
            )}
          </div>
          
          <div>
            <p className="text-sm text-gray-600 mb-4">
              We sent a 6-digit code to <strong>{phoneNumber}</strong>
            </p>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify and login'}
            </button>
          </div>
        </form>
      )}

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Prefer to use password?{' '}
          <Link to="/login" className="font-medium text-primary-600 hover:text-primary-700">
            Sign in with email
          </Link>
        </p>
      </div>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-primary-600 hover:text-primary-700">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpLoginForm;