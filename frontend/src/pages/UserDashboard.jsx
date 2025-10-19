// src/pages/UserDashboard.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to your Dashboard, {user ? user.name : 'User'}!</h1>
      <p>This is where you can see your posted items and requests.</p>
      {/* Your user-specific components and data will go here */}
    </div>
  );
};

export default UserDashboard;