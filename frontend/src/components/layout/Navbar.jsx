// src/components/layout/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './Navbar.module.css'; // Import the styles

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getDashboardPath = () => {
    // ... (no change to this function)
    if (!user) return '/';
    switch (user.user_type) {
      case 'admin': return '/admin';
      case 'ngo': return '/ngo-dashboard';
      case 'individual': default: return '/dashboard';
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>Repurpose</Link>
      <div className={styles.navLinks}>
        <Link to="/items">Browse Items</Link>
        
        {user ? (
          <>
            {/* This link should use the secondary color! */}
            <Link to="/donate-item">Donate Item</Link>
            <Link to={getDashboardPath()}>Dashboard</Link>
            <span onClick={handleLogout}>Logout</span>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;