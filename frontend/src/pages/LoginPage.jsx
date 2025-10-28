// src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import styles from './LoginPage.module.css'; // 1. Import the page styles

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('individual');
  
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.user_type === 'admin') navigate('/admin');
      else if (user.user_type === 'ngo') navigate('/ngo-dashboard');
      else navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { email, password, userType };
    login(userData);
  };

  return (
    <div>
      {/* 2. Apply the layout styles */}
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        
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
        
        <div>
          <label className={styles.selectLabel}>Login as</label>
          <select 
            value={userType} 
            onChange={(e) => setUserType(e.target.value)} 
            className={styles.select} // 3. Apply select style
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