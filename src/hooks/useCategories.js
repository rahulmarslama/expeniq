import { useState, useEffect } from 'react';
import { useAuth } from 'oidc-react';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = useAuth();

  useEffect(() => {
    const fetchCategories = async () => {
      if (!auth.userData?.access_token) return;

      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3000/api/expendiq/category', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${auth.userData.access_token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [auth.userData]);

  return { categories, loading, error };
};