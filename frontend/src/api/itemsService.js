// src/api/itemsService.js

// This is our dummy database
let sampleItems = [
  { 
    id: 1, 
    title: 'Old Wooden Chair', 
    description: 'A sturdy chair, needs a new coat of paint.', 
    category: '1', // Category ID (e.g., '1' for Furniture)
    // --- ADD YOUR IMAGE LINK FOR THE CHAIR HERE ---
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3puESPgaEeHzNtKFVLhOg3oXvfQ_IQ8hNw&s', 
    status: 'Available',
    userId: 1
  },
  { 
    id: 2, 
    title: 'Classic Novels Set', 
    description: 'A collection of 5 classic books.', 
    category: '2', // e.g., '2' for Books
    // --- ADD YOUR IMAGE LINK FOR THE BOOKS HERE ---
    imageUrl: 'https://media.newyorker.com/photos/5909773a8b51cf59fc4233a1/master/pass/bookcovers_final10.jpg', 
    status: 'Available',
    userId: 1 
  },
  { 
    id: 3, 
    title: 'Vintage Denim Jacket', 
    description: 'A cool jacket from the 90s.', 
    category: '1', // e.g., '1' for Clothing
    // --- ADD YOUR IMAGE LINK FOR THE JACKET HERE ---
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBv4ZQYG5GVHdCJpWrgUHS1VT0ZC-51ei1Zw&s', 
    status: 'Available',
    userId: 2
  },
  { 
    id: 4, 
    title: 'Old Monitor', 
    description: 'A 19-inch Dell monitor, still works.', 
    category: '4', // e.g., '4' for Electronics
    // --- ADD YOUR IMAGE LINK FOR THE MONITOR HERE ---
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECFXupvlwm4ayEOSP50si34tDKhjgZ5M8Bw&s', 
    status: 'Available',
    userId: 2
  },
  { 
    id: 5, 
    title: 'Children\'s Bicycle', 
    description: 'A small bike for a child aged 5-7.', 
    category: '5', // e.g., '5' for Other
    // --- ADD YOUR IMAGE LINK FOR THE BICYCLE HERE ---
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/9/NA/EV/XP/100663267/16inch-benzo-kids-bicycle.jpg', 
    status: 'Available',
    userId: 1
  },
];
let nextId = 6; // Make sure this is one higher than your last item ID

// Simulates an API call to get all available items
export const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleItems.filter(item => item.status === 'Available'));
    }, 300); // Short delay
  });
};

// Simulates getting a single item by its ID
export const getItemById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = sampleItems.find(i => i.id === parseInt(id));
      if (item) {
        resolve(item);
      } else {
        reject(new Error('Item not found'));
      }
    }, 300);
  });
};

// Simulates creating a new item
export const createItem = (itemData, user) => {
  return new Promise((resolve) => {
    const newItem = {
      ...itemData,
      id: nextId++,
      status: 'Available',
      userId: user.id
    };
    sampleItems.push(newItem);
    console.log("New item created:", newItem);
    resolve(newItem);
  });
};

// Simulates getting all items donated by a specific user
export const getItemsByUserId = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleItems.filter(item => item.userId === userId));
    }, 300);
  });
};

// Simulates updating an item's status (e.g., when approved)
export const updateItemStatus = (itemId, newStatus) => {
  return new Promise((resolve) => {
    const item = sampleItems.find(i => i.id === parseInt(itemId));
    if (item) {
      item.status = newStatus;
    }
    resolve(item);
  });
};

// Simulates deleting an item by its ID
export const deleteItem = (itemId) => {
  return new Promise((resolve) => {
    sampleItems = sampleItems.filter(item => item.id !== itemId);
    resolve({ success: true });
  });
};

// Simulates updating an item
export const updateItem = (itemId, updatedData) => {
  return new Promise((resolve) => {
    const itemIndex = sampleItems.findIndex(item => item.id === parseInt(itemId));
    if (itemIndex > -1) {
      // Merge the old item data with the new data
      sampleItems[itemIndex] = { ...sampleItems[itemIndex], ...updatedData };
      console.log("Item updated:", sampleItems[itemIndex]);
      resolve(sampleItems[itemIndex]);
    } else {
      resolve(null);
    }
  });
};

// Simulates getting ALL items for the admin (regardless of status)
export const getAllItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...sampleItems]); // Return a copy of all items
    }, 300);
  });
};
