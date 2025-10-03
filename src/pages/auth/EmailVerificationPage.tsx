import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, AlertCircle, CheckCircle2, RefreshCw, ArrowLeft, Clock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebase/config';

const COOLDOWN_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const EmailVerificationPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [verificationSent, setVerificationSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldownEnd, setCooldownEnd] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/login');
      return;
    }

    if (auth.currentUser.emailVerified) {
      navigate('/dashboard');
    }

    // Check email verification status every 5 seconds
    const interval = setInterval(async () => {
      try {
        await auth.currentUser?.reload();
        if (auth.currentUser?.emailVerified) {
          navigate('/dashboard');
        }
      } catch (err) {
        console.error('Error checking email verification:', err);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    // Load cooldown from localStorage
    const savedCooldown = localStorage.getItem('emailVerificationCooldown');
    if (savedCooldown) {
      const cooldownTime = parseInt(savedCooldown, 10);
      if (cooldownTime > Date.now()) {
        setCooldownEnd(cooldownTime);
      } else {
        localStorage.removeItem('emailVerificationCooldown');
      }
    }
  }, []);

  useEffect(() => {
    if (!cooldownEnd) return;

    const updateTimeRemaining = () => {
      const now = Date.now();
      if (now >= cooldownEnd) {
        setCooldownEnd(null);
        setTimeRemaining('');
        localStorage.removeItem('emailVerificationCooldown');
        return;
      }

      const diff = cooldownEnd - now;
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setTimeRemaining(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    };

    updateTimeRemaining();
    const interval = setInterval(updateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [cooldownEnd]);

  const handleResendVerification = async () => {
    if (cooldownEnd) return;

    try {
      setLoading(true);
      setError(null);
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        setVerificationSent(true);
        
        // Set cooldown
        const newCooldownEnd = Date.now() + COOLDOWN_DURATION;
        setCooldownEnd(newCooldownEnd);
        localStorage.setItem('emailVerificationCooldown', newCooldownEnd.toString());
      }
    } catch (err: any) {
      if (err?.code === 'auth/too-many-requests') {
        setError('Too many verification emails sent. Please wait a few minutes before trying again.');
        // Set cooldown on error as well
        const newCooldownEnd = Date.now() + COOLDOWN_DURATION;
        setCooldownEnd(newCooldownEnd);
        localStorage.setItem('emailVerificationCooldown', newCooldownEnd.toString());
      } else {
        setError('Failed to resend verification email. Please try again later.');
      }
      console.error('Error sending verification email:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  if (!auth.currentUser) {
    return null;
  }

  return (
    <div className="max-w-md w-full mx-auto p-6">
      <Link
        to="/"
        className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </Link>

      <div className="text-center mb-8">
        <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="h-8 w-8 text-primary-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify your email</h1>
        <p className="text-gray-600">
          We've sent a verification email to:
          <br />
          <span className="font-medium text-gray-900">{auth.currentUser.email}</span>
        </p>
      </div>

      {error && (
        <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      {verificationSent && (
        <div className="mb-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg flex items-start">
          <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <p>Verification email has been resent successfully!</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Next steps:</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-600">
          <li>Check your email inbox for the verification link</li>
          <li>Click the link to verify your email address</li>
          <li>You'll be automatically redirected to your dashboard</li>
        </ol>
      </div>

      <div className="space-y-4">
        <button
          onClick={handleResendVerification}
          disabled={loading || !!cooldownEnd}
          className={`w-full btn btn-primary flex justify-center items-center ${
            cooldownEnd ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <>
              <RefreshCw className="animate-spin h-5 w-5 mr-2" />
              Sending...
            </>
          ) : cooldownEnd ? (
            <>
              <Clock className="h-5 w-5 mr-2" />
              Resend available in {timeRemaining}
            </>
          ) : (
            'Resend verification email'
          )}
        </button>

        <div className="text-center">
          <button
            onClick={handleLogout}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Sign out
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          Didn't receive the email? Check your spam folder
          {!cooldownEnd && (
            <>
              {' '}or{' '}
              <button
                onClick={handleResendVerification}
                className="text-primary-600 hover:text-primary-700"
              >
                click here to resend
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default EmailVerificationPage;