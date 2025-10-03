import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Mail, Lock, User, AlertCircle, Stethoscope, Building2, Phone, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: string;
  specialization?: string;
  hospital?: string;
  phone?: string;
};

interface SignupFormProps {
  onComplete?: (data: any) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onComplete }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    defaultValues: {
      userType: 'patient'
    }
  });
  const { signUp, error, setError } = useAuth();
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState('patient');
  const navigate = useNavigate();

  const password = watch('password');

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      setError(null);

      if (data.userType === 'doctor') {
        // For healthcare providers, pass data to parent for verification flow
        onComplete?.(data);
      } else {
        // For regular patients, create account directly
        await signUp(data.email, data.password, data.name, data.userType);
        navigate('/verify-email');
      }
    } catch (error: any) {
      console.error('Signup failed', error);
      if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists.');
      } else {
        setError('Failed to create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full mx-auto">
      <Link
        to="/"
        className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </Link>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
        <p className="mt-2 text-sm text-gray-600">Join HealthNest today to manage your health better</p>
      </div>

      {error && (
        <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            I am a
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
              userType === 'patient' 
                ? 'border-primary-600 bg-primary-50 text-primary-700' 
                : 'border-gray-200 hover:border-primary-200'
            }`}>
              <input
                type="radio"
                value="patient"
                className="sr-only"
                {...register('userType')}
                onChange={() => setUserType('patient')}
              />
              <User className="h-5 w-5 mr-2" />
              <span className="font-medium">Patient</span>
            </label>
            
            <label className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
              userType === 'doctor' 
                ? 'border-primary-600 bg-primary-50 text-primary-700' 
                : 'border-gray-200 hover:border-primary-200'
            }`}>
              <input
                type="radio"
                value="doctor"
                className="sr-only"
                {...register('userType')}
                onChange={() => setUserType('doctor')}
              />
              <Stethoscope className="h-5 w-5 mr-2" />
              <span className="font-medium">Provider</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className={`input pl-10 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              placeholder="John Doe"
              {...register('name', {
                required: 'Full name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
              })}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={`input pl-10 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              placeholder="you@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              className={`input pl-10 ${errors.password ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              placeholder="••••••••"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: 'Password must include uppercase, lowercase, number and special character',
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              type="password"
              className={`input pl-10 ${errors.confirmPassword ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              placeholder="••••••••"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: value => value === password || 'Passwords do not match',
              })}
            />
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>

        {userType === 'doctor' && (
          <>
            <div>
              <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
                Specialization
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Stethoscope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="specialization"
                  type="text"
                  className={`input pl-10 ${errors.specialization ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  placeholder="e.g., Cardiologist"
                  {...register('specialization', {
                    required: 'Specialization is required',
                  })}
                />
              </div>
              {errors.specialization && (
                <p className="mt-1 text-sm text-red-600">{errors.specialization.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="hospital" className="block text-sm font-medium text-gray-700 mb-1">
                Hospital/Clinic
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="hospital"
                  type="text"
                  className={`input pl-10 ${errors.hospital ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  placeholder="e.g., City Hospital"
                  {...register('hospital', {
                    required: 'Hospital/Clinic name is required',
                  })}
                />
              </div>
              {errors.hospital && (
                <p className="mt-1 text-sm text-red-600">{errors.hospital.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="phone"
                  type="tel"
                  className={`input pl-10 ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  placeholder="e.g., +91 98765 43210"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^\+?[1-9]\d{1,14}$/,
                      message: 'Please enter a valid phone number',
                    },
                  })}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </>
        )}

        <div className="flex items-start">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the{' '}
            <Link to="/terms" className="text-primary-600 hover:text-primary-700">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-primary-600 hover:text-primary-700">
              Privacy Policy
            </Link>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full btn btn-primary"
        >
          {loading ? 'Creating account...' : 'Create account'}
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary-600 hover:text-primary-700">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;