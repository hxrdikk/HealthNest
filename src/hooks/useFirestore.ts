import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  DocumentData,
  QueryConstraint
} from 'firebase/firestore';
import { db } from '../firebase/config';

interface UseFirestoreOptions {
  collectionName: string;
  queries?: QueryConstraint[];
  orderByField?: string;
  orderDirection?: 'asc' | 'desc';
  limitDocs?: number;
}

export function useFirestore<T extends DocumentData>({
  collectionName,
  queries = [],
  orderByField,
  orderDirection = 'desc',
  limitDocs,
}: UseFirestoreOptions) {
  const [documents, setDocuments] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        let queryConstraints = [...queries];
        
        if (orderByField) {
          queryConstraints.push(orderBy(orderByField, orderDirection));
        }
        
        if (limitDocs) {
          queryConstraints.push(limit(limitDocs));
        }

        const q = query(collection(db, collectionName), ...queryConstraints);
        const querySnapshot = await getDocs(q);
        
        const docs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as T[];

        setDocuments(docs);
      } catch (err) {
        console.error('Error fetching documents:', err);
        setError('Failed to fetch documents');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, JSON.stringify(queries), orderByField, orderDirection, limitDocs]);

  const addDocument = async (data: Omit<T, 'id'>) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      return docRef.id;
    } catch (err) {
      console.error('Error adding document:', err);
      throw err;
    }
  };

  const updateDocument = async (id: string, data: Partial<T>) => {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data);
    } catch (err) {
      console.error('Error updating document:', err);
      throw err;
    }
  };

  const deleteDocument = async (id: string) => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
    } catch (err) {
      console.error('Error deleting document:', err);
      throw err;
    }
  };

  return {
    documents,
    loading,
    error,
    addDocument,
    updateDocument,
    deleteDocument
  };
}