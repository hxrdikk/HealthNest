import React, { useState } from 'react';
import SignupForm from '../../components/auth/SignupForm';
import ProviderVerificationForm from '../../components/auth/ProviderVerificationForm';

const SignupPage: React.FC = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSignupComplete = (data: any) => {
    if (data.userType === 'doctor') {
      setUserData(data);
      setShowVerification(true);
    }
  };

  return showVerification ? (
    <ProviderVerificationForm userData={userData} />
  ) : (
    <SignupForm onComplete={handleSignupComplete} />
  );
};

export default SignupPage;