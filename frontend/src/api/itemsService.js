// src/api/itemsService.js

// This is our dummy database. ADD IMAGE LINKS HERE.
const sampleItems = [
  { 
    id: 1, 
    title: 'Old Wooden Chair', 
    description: 'A sturdy chair, needs a new coat of paint.', 
    category: 'Furniture',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Wooden+Chair' // <-- ADD LINK
  },
  { 
    id: 2, 
    title: 'Classic Novels Set', 
    description: 'A collection of 5 classic books.', 
    category: 'Books',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Books' // <-- ADD LINK
  },
  { 
    id: 3, 
    title: 'Vintage Denim Jacket', 
    description: 'A cool jacket from the 90s.', 
    category: 'Clothing',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Denim+Jacket' // <-- ADD LINK
  },
];

// ... (rest of the file is the same)
export const getItems = () => { /* ... */ };
export const getItemById = (id) => { /* ... */ };