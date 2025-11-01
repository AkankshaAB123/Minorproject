// src/pages/AdminDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { useAuth } from '../hooks/useAuth';
import Button from '../components/common/Button'; // 2. Import your Button

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate(); // 3. Get the navigate function

  // Style for the button wrapper to control width
  const buttonWrapperStyle = {
    maxWidth: '400px',
    marginBottom: '1rem',
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Administrator {user ? user.name : ''}!</p>
      
      {/* 4. Use Buttons with onClick to navigate */}
      <div style={buttonWrapperStyle}>
        <Button variant="primary" onClick={() => navigate('/admin/requests')}>
          View & Manage Donation Requests
        </Button>
      </div>
      
      <div style={buttonWrapperStyle}>
        <Button variant="primary" onClick={() => navigate('/admin/categories')}>
          Manage Categories
        </Button>
      </div>

      <div style={buttonWrapperStyle}>
        <Button variant="primary" onClick={() => navigate('/admin/users')}>
          Manage Users (Donators)
        </Button>
      </div>

      <div style={buttonWrapperStyle}>
        <Button variant="primary" onClick={() => navigate('/admin/ngos')}>
          Manage NGOs (Requesters)
        </Button>
      </div>
    </div>
  );
};

export default AdminDashboard;