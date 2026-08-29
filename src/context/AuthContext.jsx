import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('fitland_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      return null;
    }
  });

  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  const saveUser = useCallback((userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('fitland_user', JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('fitland_user');
  }, []);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  const value = {
    user,
    isAuthenticated,
    saveUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};