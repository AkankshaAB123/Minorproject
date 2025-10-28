// src/pages/CreateItemPage.jsx
import React from 'react';
import ItemForm from '../components/item/ItemForm';

const CreateItemPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Donate a New Item</h1>
      <p style={{ textAlign: 'center' }}>
        Fill out the details below to list your item for donation.
      </p>
      <ItemForm />
    </div>
  );
};

export default CreateItemPage;