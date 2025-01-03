const BASE_URL_USERS = 'http://127.0.0.1:3035/users';

export const loginUser = async (username, password) => {
  const response = await fetch(`${BASE_URL_USERS}/login`, {
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

export const registerUser = async (username, email, password) => {
  const response = await fetch(`${BASE_URL_USERS}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Signup failed');
  }
  return await response.json();
};