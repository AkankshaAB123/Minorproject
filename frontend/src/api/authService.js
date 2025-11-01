// This file simulates a remote API for authentication

/**
 * Simulates a login API call.
 * In a real app, this would be a 'fetch' request to your backend.
 */
export const apiLogin = (email, password, userType) => {
  console.log("Attempting login with:", { email, userType });
  
  return new Promise((resolve, reject) => {
    // Simulate a network delay
    setTimeout(() => {
      // Check if credentials are (simulated) valid
      if (email && password) {
        // Return a fake user object based on the userType
        const fakeUser = {
          id: userType === 'admin' ? 99 : (userType === 'ngo' ? 50 : 1),
          name: userType === 'admin' ? 'Admin' : (userType === 'ngo' ? 'Hope NGO' : 'John Doe'),
          email: email,
          user_type: userType, // 'individual', 'ngo', or 'admin'
        };
        console.log("Login successful, returning user:", fakeUser);
        resolve(fakeUser);
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 500);
  });
};

/**
 * Simulates a signup API call.
 */
export const apiSignUp = (name, email, password, userType) => {
  console.log("Attempting signup with:", { name, email, userType });

  return new Promise((resolve, reject) => {
    // Simulate a network delay
    setTimeout(() => {
      if (name && email && password) {
        // Return a new fake user object
        const newUser = {
          id: Math.floor(Math.random() * 1000), // A random ID
          name: name,
          email: email,
          user_type: userType,
        };
        console.log("Signup successful, returning user:", newUser);
        resolve(newUser);
      } else {
        reject(new Error("Missing signup details"));
      }
    }, 500);
  });
};

