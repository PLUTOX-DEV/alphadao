import { useState, useEffect } from 'react';
import { getUserProfiles } from '../services/apiProfile';

// Match the return type from your getUserProfiles() function
type UserProfile = {
  id: string;
  fullname?: string;
  created_at?: string;
  // Add more fields as needed
};

export function useProfiles() {
  const [profiles, setProfiles] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfiles = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await getUserProfiles();

      if (error) {
        setError(error);
        setProfiles(null);
      } else {
        setProfiles(data);
      }
    } catch (err: any) {
      setError(err.message || 'Unknown error');
      setProfiles(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return { profiles, loading, error};
}