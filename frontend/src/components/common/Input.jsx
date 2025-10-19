// src/components/common/Input.jsx
import React from 'react';

const Input = ({ label, type, value, onChange, placeholder }) => {
  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box' // Ensures padding doesn't affect width
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
    display: 'block'
  };

  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle}
        required
      />
    </div>
  );
};

export default Input;