export const signupSelectors = {
  usernameInput: '#username',
  emailInput: '#email',
  passwordInput: '#password',
  submitButton: '#submit-button',
  error: '#error',
};
export const productListSelectors = {
  productCard: '.product-card',
  productLink: '.productLink',
  productTitle: '.productTitle',
};
export const productDetailsSelectors = {
  productTitle: '#productTitle',
  addToCartButton: '#add-to-cart',
  cartNotification: '#added-to-cart-notification',
  productImage: '#product-image',
  productPrice: '#product-price',
  productDescription: '#product-desc',
  reviewsSummary: '#reviews-summary',
  reviewsList: '#reviews-list',
  totalReviews: '#total-reviews',
  averageRating: '#average-rating',
};
export const searchSelectors = {
  searchInput: '#search-input',
  searchButton: '#search-submit',
};

export const cartSelectors = {
  cartItems: '.cart-item',
  cartItemName: '.cart-item-name',
  cartItemQuantity: '.cart-item-quantity',
  cartItemRemoveButton: '.cart-item-remove',
  cartItemIncreaseQuantity: '.cart-item-increase',
  cartItemDecreaseQuantity: '.cart-item-decrease',
  cartItemPrice: '.cart-item-price',
  emptyCartMessage: '#empty-cart',
  cartTotal: '#total',
  cartCheckoutButton: '#checkout-button',
};


export const checkoutSelectors = {
  paymentForm: '#payment-form',
  cardNumberInput: '#card-number',
  cardNameInput: '#card-name',
  cardExpiryInput: '#expiry-date',
  cardCvvInput: '#cvv',
  submitPaymentButton: '#payment-submit',
  paymentSuccessMessage: '#checkout-success',
  paymentErrorMessage: '#checkout-error',
};

export const orderSelectors = {
  orderList: '#order-list',
  orderCard: '.order-card',
  orderTotal: '.order-total',
  orderStatus: '.order-status',
  orderDate: '.order-date',
  orderTime: '.order-time',
  errorMessage: '[data-test="error-message"]',
  orderItem: '.order-item',
  orderItemName: '.order-item-name',
  orderItemPrice: '.order-item-price',
  orderItemQuantity: '.order-item-quantity',
  orderItemReviewButton: '.order-item-review',
};