// src/pages/AdminDashboard.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Administrator!</p>
      <p>From here, you can manage all users, items, and requests on the platform.</p>
    </div>
  );
};

export default AdminDashboard;