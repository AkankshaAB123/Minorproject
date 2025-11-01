// src/api/categoriesService.js

// This is our in-memory "database" for categories
// We'll use the ones from your database schema
let categories = [
  { id: 1, name: 'Clothing' },
  { id: 2, name: 'Books' },
  { id: 3, name: 'Furniture' },
  { id: 4, name: 'Electronics' },
];
let nextId = 5;

// Simulates getting all categories
export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...categories]), 300); // Send a copy
  });
};

// Simulates adding a new category
export const addCategory = (categoryName) => {
  return new Promise((resolve) => {
    const newCategory = { id: nextId++, name: categoryName };
    categories.push(newCategory);
    resolve(newCategory);
  });
};

// Simulates deleting a category
export const deleteCategory = (categoryId) => {
  return new Promise((resolve) => {
    categories = categories.filter(cat => cat.id !== categoryId);
    resolve({ success: true });
  });
};