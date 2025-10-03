import { useState, useEffect } from 'react';
import { 
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
  updateEmail as firebaseUpdateEmail,
  updatePassword as firebaseUpdatePassword
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { UserProfile } from '../types/firebase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setUserProfile(docSnap.data() as UserProfile);
          }
        } catch (err) {
          console.error('Error fetching user profile:', err);
        }
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (email: string, password: string, displayName: string, role: 'patient' | 'doctor' = 'patient') => {
    try {
      setError(null);
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      await updateProfile(user, { displayName });
      
      const userProfile: UserProfile = {
        id: user.uid,
        email,
        displayName,
        role,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      await setDoc(doc(db, 'users', user.uid), userProfile);
      
      setUserProfile(userProfile);
      return user;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      await firebaseSignOut(auth);
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      setError(null);
      await sendPasswordResetEmail(auth, email);
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const updateEmail = async (newEmail: string) => {
    if (!user) throw new Error('No user logged in');
    
    try {
      setError(null);
      await firebaseUpdateEmail(user, newEmail);
      
      await setDoc(doc(db, 'users', user.uid), {
        email: newEmail,
        updatedAt: serverTimestamp()
      }, { merge: true });
      
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const updatePassword = async (newPassword: string) => {
    if (!user) throw new Error('No user logged in');
    
    try {
      setError(null);
      await firebaseUpdatePassword(user, newPassword);
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user) throw new Error('No user logged in');
    
    try {
      setError(null);
      await setDoc(doc(db, 'users', user.uid), {
        ...data,
        updatedAt: serverTimestamp()
      }, { merge: true });
      
      if (data.displayName) {
        await updateProfile(user, { displayName: data.displayName });
      }
      
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  return {
    user,
    userProfile,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateEmail,
    updatePassword,
    updateProfile,
    setError
  };
}