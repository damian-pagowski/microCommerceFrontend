const BASE_URL_PRODUCT = 'http://127.0.0.1:3034/products';
const BASE_URL_REVIEWS = 'http://127.0.0.1:3037/reviews';

export const fetchProduct = async (productId) => {
  const response = await fetch(`${BASE_URL_PRODUCT}/${productId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
};

export const fetchReviews = async (productId) => {
  const response = await fetch(`${BASE_URL_REVIEWS}/${productId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch reviews');
  }
  return response.json();
};

export const fetchReviewStats = async (productId) => {
  const response = await fetch(`${BASE_URL_REVIEWS}/stats/${productId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch review stats');
  }
  return response.json();
};
export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL_PRODUCT}`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return await res.json();
};