// src/pages/ItemDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom'; // This hook gets the ID from the URL

// We'll use the same sample data from the HomePage for now
const sampleItems = [
  { id: 1, title: 'Old Wooden Chair', description: 'A sturdy chair, needs a new coat of paint.', category: 'Furniture' },
  { id: 2, title: 'Classic Novels Set', description: 'A collection of 5 classic books.', category: 'Books' },
  { id: 3, title: 'Vintage Denim Jacket', description: 'A cool jacket from the 90s.', category: 'Clothing' },
];

const ItemDetailsPage = () => {
  const { itemId } = useParams(); // Gets the 'itemId' from the URL (e.g., '/item/1' -> itemId is '1')
  const item = sampleItems.find(i => i.id === parseInt(itemId));

  const pageStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    border: '1px solid #eee',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem'
  };

  // If no item is found with that ID
  if (!item) {
    return <h2>Item not found!</h2>;
  }

  return (
    <div style={pageStyle}>
      <h1>{item.title}</h1>
      <p><strong>Category:</strong> {item.category}</p>
      <p>{item.description}</p>
      <button style={buttonStyle}>Request This Item</button>
    </div>
  );
};

export default ItemDetailsPage;