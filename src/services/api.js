const BASE_URL_PRODUCT = 'http://127.0.0.1:3034/products';
const BASE_URL_REVIEWS = 'http://127.0.0.1:3037/reviews';
const BASE_URL_ORDER = 'http://127.0.0.1:3032/orders';
const BASE_URL_PAYMENT = 'http://127.0.0.1:3033/payments';

// Get authentication headers for API requests
//  - This function retrieves the authentication token from local storage
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw new Error('Authentication token is missing. Please log in.');
  }
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

// Fetch a product by ID
export const fetchProduct = async (productId) => {
  const response = await fetch(`${BASE_URL_PRODUCT}/${productId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
};

// Fetch reviews for a product
export const fetchReviews = async (productId) => {
  const response = await fetch(`${BASE_URL_REVIEWS}/${productId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch reviews');
  }
  return response.json();
};

// Fetch review stats
export const fetchReviewStats = async (productId) => {
  const response = await fetch(`${BASE_URL_REVIEWS}/stats/${productId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch review stats');
  }
  return response.json();
};

// Fetch all products
export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL_PRODUCT}`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return await res.json();
};

// Create a new order
export const createOrder = async (items) => {
  const request = {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ items }),
  };
  try {
    const response = await fetch(`${BASE_URL_ORDER}`, request);
    return await response.json();
  } catch (error) {
    throw new Error('Failed to create order');
  }
};

// Make a payment
export const makePayment = async (paymentData) => {
  const response = await fetch(`${BASE_URL_PAYMENT}`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(paymentData),
  });
  if (!response.ok) {
    throw new Error('Payment failed');
  }
  return await response.json();
};

// Fetch order by ID
export const fetchOrder = async (orderId) => {
  const response = await fetch(`${BASE_URL_ORDER}/${orderId}`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch order');
  }
  return await response.json();
};

// Fetch order history
export const fetchOrderHistory = async () => {
  const response = await fetch(`${BASE_URL_ORDER}`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch order');
  }
  return await response.json();
};

// Create a new review
export const createReview = async (reviewData) => {
  const response = await fetch(`${BASE_URL_REVIEWS}`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(reviewData),
  });
  if (!response.ok) {
    throw new Error('Payment failed');
  }
  return await response.json();
};
