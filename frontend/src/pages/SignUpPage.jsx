// src/pages/SignUpPage.jsx
import React, { useState, useEffect } from 'react'; // 1. Import useEffect
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('individual');
  
  const { user, login } = useAuth(); // 2. Get the 'user' object
  const navigate = useNavigate();

  // 3. Add this useEffect hook
  useEffect(() => {
    if (user) {
      // If a user exists, the signup/login was successful. Redirect.
      if (user.user_type === 'admin') {
        navigate('/admin');
      } else if (user.user_type === 'ngo') {
        navigate('/ngo-dashboard');
      } else {
        navigate('/dashboard');
      }
    }
  }, [user, navigate]); // This effect runs whenever 'user' or 'navigate' changes

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { name, email, password, userType };
    login(userData);
    // 4. We no longer need to call navigate() here.
  };

  // --- Styles (no changes) ---
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
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Create an Account</h1>
        <Input
          label="Name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div>
          <label style={labelStyle}>Sign up as</label>
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

        <Button type="submit" variant="secondary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;