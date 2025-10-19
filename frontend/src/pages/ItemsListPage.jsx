// src/pages/ItemsListPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../components/item/ItemCard';

// Dummy data - later this will be fetched from your backend API
const sampleItems = [
  { id: 1, title: 'Old Wooden Chair', description: 'A sturdy chair, needs a new coat of paint.', category: 'Furniture' },
  { id: 2, title: 'Classic Novels Set', description: 'A collection of 5 classic books.', category: 'Books' },
  { id: 3, title: 'Vintage Denim Jacket', description: 'A cool jacket from the 90s.', category: 'Clothing' },
  { id: 4, title: 'Old Monitor', description: 'A 19-inch Dell monitor, still works.', category: 'Electronics' },
  { id: 5, title: 'Children\'s Bicycle', description: 'A small bike for a child aged 5-7.', category: 'Other' },
];

const ItemsListPage = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem', // Adds space between the cards
    justifyContent: 'center' // Centers the cards if they don't fill the whole row
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Browse Repurposed Items</h1>
      <div style={containerStyle}>
        {sampleItems.map(item => (
          <Link to={`/item/${item.id}`} key={item.id} style={linkStyle}>
            <ItemCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemsListPage;