import React, { createContext, useState } from 'react';
//
// THIS IS THE FIX:
// Change 'apilogin' to 'apiLogin' and 'apisignup' to 'apiSignUp'
//
import { apiLogin, apiSignUp } from '../api/authService'; 

// Make sure to export the context itself
export const AuthContext = createContext(null);

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // login function now calls the apiService
  const login = async (email, password, userType) => {
    try {
      // Pass all arguments to the API function
      const userData = await apiLogin(email, password, userType);
      setUser(userData);
      return userData; // Return user on success
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error; // Re-throw error to be caught by the page
    }
  };

  // signup function now calls the apiService
  const signup = async (name, email, password, userType) => {
    try {
      // Pass all arguments to the API function
      const userData = await apiSignUp(name, email, password, userType);
      setUser(userData);
      return userData; // Return user on success
    } catch (error) {
      console.error("Sign up failed:", error.message);
      throw error; // Re-throw error
    }
  };

  const logout = () => {
    setUser(null);
  };

  // The value provided by the context
  const value = {
    user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

