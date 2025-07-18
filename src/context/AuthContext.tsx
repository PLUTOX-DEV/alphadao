// AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import supabase from '../services/supabaseClient';


type AuthContextType = {
  user: any;

  isAuthenticated: boolean;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

 

  
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    
  };

  const isAuthenticated = !!user 
  return (
    <AuthContext.Provider
      value={{
        user,
       
        isAuthenticated,

        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
