// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext(null);

// Create a custom hook to use the context easily
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // In a real app, you would make an API call here.
  // We'll simulate it with dummy data.
  const login = (userData) => {
    // The userData would come from your login form submission
    const fakeUser = {
      id: 1,
      name: 'John Doe',
      email: userData.email,
      user_type: userData.userType, // Matches your database enum
    };
    setUser(fakeUser);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};