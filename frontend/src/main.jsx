// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext'; // 1. Make sure this import is correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. The <App /> component MUST be inside AuthProvider */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);