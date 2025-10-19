// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('individual'); // 1. Add state for user type

  const handleSubmit = (event) => {
    event.preventDefault();
    // 2. Include userType in the submitted data
    console.log({ email, password, userType });
    alert('Login data (including user type) has been logged to the console!');
  };

  // --- Styles (no changes needed here) ---
  const formStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '2rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  };
  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
    display: 'block'
  };
  const selectStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '20px', // Added more space at the bottom
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Login</h1>
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {/* 3. Add the dropdown menu for user type */}
        <div>
          <label style={labelStyle}>Login as</label>
          <select 
            value={userType} 
            onChange={(e) => setUserType(e.target.value)} 
            style={selectStyle}
          >
            <option value="individual">User</option>
            <option value="ngo">NGO Member</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <Button type="submit" variant="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;