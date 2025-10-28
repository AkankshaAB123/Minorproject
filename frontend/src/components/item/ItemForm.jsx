// src/components/item/ItemForm.jsx
import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const ItemForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('1'); // Default to 'Clothing' (ID 1 from your DB)
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your API.
    // For now, we log the data to see it.
    console.log("Form Submitted:");
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Category ID:", category);
    console.log("Image File:", image);
    
    alert("Check the console to see the form data and image file!");
  };

  // --- Styles ---
  const formStyle = {
    maxWidth: '600px',
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
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  };
   const textareaStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    minHeight: '100px',
    fontFamily: 'sans-serif'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <Input
        label="Item Title"
        type="text"
        placeholder="e.g., Old Wooden Chair"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div>
        <label style={labelStyle}>Description</label>
        <textarea
          style={textareaStyle}
          placeholder="Add a brief description of the item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label style={labelStyle}>Category</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          style={selectStyle}
        >
          <option value="1">Clothing</option>
          <option value="2">Books</option>
          <option value="3">Furniture</option>
          <option value="4">Electronics</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginBottom: '20px' }}
        />
      </div>

      <Button type="submit">Donate Item</Button>
    </form>
  );
};

export default ItemForm;