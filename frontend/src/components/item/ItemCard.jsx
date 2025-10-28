// src/components/item/ItemCard.jsx
import React from 'react';
import Card from '../common/Card'; // We will use the base Card component
import styles from './ItemCard.module.css';

const ItemCard = ({ item }) => {
  return (
    <Card>
      <div className={styles.card}>
        <div className={styles.imagePlaceholder}>
          
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
          <span className={styles.categoryTag}>{item.category}</span>
        </div>
      </div>
    </Card>
  );
};

export default ItemCard;