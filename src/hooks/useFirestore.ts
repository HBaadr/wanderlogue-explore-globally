import { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { City, Country, Continent, Landmark, UnescoSite } from '@/types/travel';

export function useFirestoreCollection<T>(collectionName: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as T[];
        setData(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName]);

  return { data, loading, error };
}

export function useFirestoreDocument<T>(collectionName: string, docId: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!docId) {
      setLoading(false);
      return;
    }

    const fetchDoc = async () => {
      try {
        const docRef = doc(db, collectionName, docId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setData({ id: docSnap.id, ...docSnap.data() } as T);
        } else {
          setError('Document not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchDoc();
  }, [collectionName, docId]);

  return { data, loading, error };
}

export function useFirestoreQuery<T>(collectionName: string, field: string, value: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, collectionName), where(field, '==', value));
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as T[];
        setData(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, field, value]);

  return { data, loading, error };
}

export function useFirestoreQueryContains<T>(collectionName: string, field: string, value: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // For contains-like functionality, we fetch all documents and filter client-side
        // since Firestore doesn't support contains queries directly
        const querySnapshot = await getDocs(collection(db, collectionName));
        const items = querySnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          .filter((item: any) => {
            const fieldValue = item[field];
            return fieldValue && typeof fieldValue === 'string' && fieldValue.includes(value);
          }) as T[];
        setData(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, field, value]);

  return { data, loading, error };
}