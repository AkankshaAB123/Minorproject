// src/api/adminService.js

// This is our in-memory "database" of all users.
// In a real app, you would fetch this from your MySQL 'users' table.
const allUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', user_type: 'individual' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', user_type: 'individual' },
  { id: 3, name: 'City Hope NGO', email: 'hope@ngo.org', user_type: 'ngo' },
  { id: 4, name: 'Green Earth Foundation', email: 'green@ngo.org', user_type: 'ngo' },
  { id: 5, name: 'Admin User', email: 'admin@app.com', user_type: 'admin' },
];

// Simulates an API call to get users by their role
export const getUsersByRole = (role) => {
  return new Promise((resolve) => {
    // Simulate a network delay
    setTimeout(() => {
      const users = allUsers.filter(user => user.user_type === role);
      resolve(users);
    }, 500);
  });
};