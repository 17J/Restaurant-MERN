
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

interface User {
  id: string;
  username: string;
  email: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in via localStorage
    const storedUser = localStorage.getItem('foodMoreUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        localStorage.removeItem('foodMoreUser');
      }
    }
    setIsLoading(false);
  }, []);

  // For this demo, we'll simulate API calls
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // This would be an actual API call in a real app
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo user for testing
      if (email === 'demo@example.com' && password === 'password123') {
        const userData = {
          id: '1',
          username: 'DemoUser',
          email: 'demo@example.com',
          token: 'demo-jwt-token'
        };
        
        setUser(userData);
        localStorage.setItem('foodMoreUser', JSON.stringify(userData));
        toast({
          title: "Login Successful",
          description: "Welcome back to FoodMore!",
        });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // This would be an actual API call in a real app
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validate input
      if (!username || !email || !password) {
        throw new Error('All fields are required');
      }
      
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      
      // For demo purposes, simulate a successful registration
      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        username,
        email,
        token: 'mock-jwt-token-' + Math.random().toString(36).substr(2, 9)
      };
      
      setUser(userData);
      localStorage.setItem('foodMoreUser', JSON.stringify(userData));
      toast({
        title: "Registration Successful",
        description: "Welcome to FoodMore!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('foodMoreUser');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
