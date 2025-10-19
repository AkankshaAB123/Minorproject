// src/components/common/Button.jsx
import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const baseStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    color: 'white',
  };

  const styles = {
    primary: {
      backgroundColor: '#007bff',
    },
    secondary: {
      backgroundColor: '#6c757d',
    },
    danger: {
      backgroundColor: '#dc3545',
    }
  };

  // Combine the base style with the variant style
  const combinedStyle = { ...baseStyle, ...styles[variant] };

  return (
    <button type={type} onClick={onClick} style={combinedStyle}>
      {children}
    </button>
  );
};

export default Button;