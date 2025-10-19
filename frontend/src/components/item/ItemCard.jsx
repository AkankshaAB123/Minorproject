// src/components/item/ItemCard.jsx
import React from 'react';
import Card from '../common/Card'; // 1. Import Card

const ItemCard = ({ item }) => {
  return (
    // 2. Use the Card component as the main container
    <Card>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <small>Category: {item.category}</small>
    </Card>
  );
};

export default ItemCard;