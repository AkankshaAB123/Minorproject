// src/components/common/Card.jsx
import React from 'react';

const Card = ({ children }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#fff' // Ensure card has a background color
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;