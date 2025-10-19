// src/components/layout/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // 1. Import the useAuth hook

const Navbar = () => {
  const { user, logout } = useAuth(); // 2. Get user and logout function from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  const getDashboardPath = () => {
    if (!user) return '/';
    switch (user.user_type) {
      case 'admin':
        return '/admin';
      case 'ngo':
        return '/ngo-dashboard';
      case 'individual':
      default:
        return '/dashboard';
    }
  };

  // --- Styles ---
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: '1px solid #eee',
    marginBottom: '2rem'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    margin: '0 10px',
    cursor: 'pointer'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ ...linkStyle, fontWeight: 'bold' }}>Repurpose</Link>
      <div>
        <Link to="/items" style={linkStyle}>Browse Items</Link>
        
        {/* 3. Conditionally render links based on user status */}
        {user ? (
          <>
            <Link to={getDashboardPath()} style={linkStyle}>Dashboard</Link>
            <span onClick={handleLogout} style={linkStyle}>Logout</span>
          </>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/signup" style={linkStyle}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;