import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  User,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateEmail,
  updatePassword,
  AuthError
} from 'firebase/auth';
import { auth, db, ADMIN_EMAIL } from '../firebase/config';
import { doc, setDoc, getDoc, Timestamp } from 'firebase/firestore';

interface AuthContextType {
  currentUser: User | null;
  userRole: string | null;
  isAdmin: boolean;
  isDoctor: boolean;
  isPatient: boolean;
  loading: boolean;
  isOnline: boolean;
  signUp: (email: string, password: string, displayName: string, role: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserEmail: (email: string) => Promise<void>;
  updateUserPassword: (password: string) => Promise<void>;
  updateUserProfile: (displayName: string) => Promise<void>;
  setupPhoneAuth: (elementId: string) => RecaptchaVerifier;
  sendOtp: (phoneNumber: string, appVerifier: RecaptchaVerifier) => Promise<string>;
  confirmOtp: (verificationId: string, otp: string) => Promise<void>;
  error: string | null;
  setError: (error: string | null) => void;
  retryConnection: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second
const DEFAULT_ROLE = 'patient';

async function retryOperation<T>(operation: () => Promise<T>, retries = MAX_RETRIES, delay = RETRY_DELAY): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    if (retries > 0 && navigator.onLine) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return retryOperation(operation, retries - 1, delay * 2);
    }
    throw error;
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setError(null);
      if (currentUser) {
        getUserRole(currentUser).catch(console.error);
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      setError('You are currently offline. Some features may be limited.');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [currentUser]);

  const getUserRole = async (user: User) => {
    try {
      // Check if user is admin by email
      if (user.email === ADMIN_EMAIL) {
        setUserRole('admin');
        setError(null);
        return;
      }

      const docRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(docRef);

      if (userDoc.exists()) {
        setUserRole(userDoc.data().role);
        setError(null);
      } else {
        setUserRole(DEFAULT_ROLE);
      }
    } catch (error) {
      console.warn('Error fetching user role:', error);
      setUserRole(DEFAULT_ROLE);
      
      if (!navigator.onLine) {
        setError('You are currently offline. Some features may be limited.');
      }
    }
  };

  const retryConnection = async () => {
    if (!currentUser) return;
    
    setLoading(true);
    try {
      await getUserRole(currentUser);
      setError(null);
    } catch (error) {
      console.error('Retry failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await getUserRole(user);
      } else {
        setUserRole(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Sign up function
  const signUp = async (email: string, password: string, displayName: string, role: string) => {
    try {
      setError(null);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with display name
      await updateProfile(userCredential.user, {
        displayName
      });
      
      // Create user document in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        displayName,
        role,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      
      // Send email verification
      await sendEmailVerification(userCredential.user);
      
      setUserRole(role);
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message);
      throw error;
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    try {
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message);
      throw error;
    }
  };

  // Reset password function
  const resetPassword = async (email: string) => {
    try {
      setError(null);
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message);
      throw error;
    }
  };

  // Update user email function
  const updateUserEmail = async (email: string) => {
    try {
      setError(null);
      if (currentUser) {
        await updateEmail(currentUser, email);
        // Update Firestore user document
        await setDoc(doc(db, 'users', currentUser.uid), {
          email,
          updatedAt: Timestamp.now()
        }, { merge: true });
      }
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message);
      throw error;
    }
  };

  // Update user password function
  const updateUserPassword = async (password: string) => {
    try {
      setError(null);
      if (currentUser) {
        await updatePassword(currentUser, password);
      }
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message);
      throw error;
    }
  };

  // Update user profile function
  const updateUserProfile = async (displayName: string) => {
    try {
      setError(null);
      if (currentUser) {
        await updateProfile(currentUser, { displayName });
        // Update Firestore user document
        await setDoc(doc(db, 'users', currentUser.uid), {
          displayName,
          updatedAt: Timestamp.now()
        }, { merge: true });
      }
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message);
      throw error;
    }
  };

  // Setup phone authentication
  const setupPhoneAuth = (elementId: string) => {
    return new RecaptchaVerifier(auth, elementId, {
      size: 'invisible',
      callback: () => {
        // reCAPTCHA solved, allow sending OTP
      }
    });
  };

  // Send OTP
  const sendOtp = async (phoneNumber: string, appVerifier: RecaptchaVerifier) => {
    try {
      setError(null);
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      return confirmationResult.verificationId;
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message);
      throw error;
    }
  };

  // Confirm OTP
  const confirmOtp = async (verificationId: string, otp: string) => {
    try {
      setError(null);
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithPhoneNumber(auth, '+', auth.currentUser ? auth.currentUser : undefined);
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message);
      throw error;
    }
  };

  const isAdmin = userRole === 'admin' || (currentUser?.email === ADMIN_EMAIL);
  const isDoctor = userRole === 'doctor';
  const isPatient = userRole === 'patient';

  const value = {
    currentUser,
    userRole,
    isAdmin,
    isDoctor,
    isPatient,
    loading,
    isOnline,
    signUp,
    login,
    logout,
    resetPassword,
    updateUserEmail,
    updateUserPassword,
    updateUserProfile,
    setupPhoneAuth,
    sendOtp,
    confirmOtp,
    error,
    setError,
    retryConnection
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}