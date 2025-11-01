// src/api/requestsService.js
import { updateItemStatus } from './itemsService';

// This is our in-memory "database" for pending requests
let requests = [];
let nextId = 1;

// Simulates an API call to create a new request
export const createRequest = (item, requester) => {
  return new Promise((resolve) => {
    const newRequest = {
      id: nextId++,
      item: {
        id: item.id,
        title: item.title,
      },
      requester: {
        id: requester.id,
        name: requester.name,
      },
      status: 'pending',
    };
    requests.push(newRequest);
    console.log("New request added:", newRequest);
    resolve(newRequest);
  });
};

// Simulates getting all pending requests for the admin
export const getPendingRequests = () => {
  return new Promise((resolve) => {
    resolve(requests.filter(r => r.status === 'pending'));
  });
};

// Simulates approving a request
export const approveRequest = (requestId) => {
  return new Promise((resolve) => {
    const request = requests.find(r => r.id === requestId);
    if (request) {
      request.status = 'approved';
      // Update the item's status to 'Approved'
      updateItemStatus(request.item.id, 'Approved');
    }
    console.log("Updated requests:", requests);
    resolve(request);
  });
};

// Simulates rejecting a request
export const rejectRequest = (requestId) => {
  return new Promise((resolve) => {
    const request = requests.find(r => r.id === requestId);
    if (request) {
      request.status = 'rejected';
    }
    console.log("Updated requests:", requests);
    resolve(request);
  });
};

// Simulates getting ALL requests for the admin (all statuses)
export const getAllRequests = () => {
  return new Promise((resolve) => {
    // Simulate a network delay
    setTimeout(() => {
      resolve([...requests]); // Return a copy of all requests
    }, 300);
  });
};