export const loginUser = async (username, password) => {
    const response = await fetch('http://127.0.0.1:3035/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }
  
    return await response.json();
  };