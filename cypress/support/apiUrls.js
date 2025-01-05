const BASE_URL_ORDER = Cypress.env('ORDER_SERVICE_URL') || 'http://127.0.0.1:3032';
const BASE_URL_PRODUCT = Cypress.env('PRODUCT_SERVICE_URL') || 'http://127.0.0.1:3034';
const BASE_URL_REVIEW = Cypress.env('REVIEW_SERVICE_URL') || 'http://127.0.0.1:3037';
const BASE_URL_USER = Cypress.env('USER_SERVICE_URL') || 'http://127.0.0.1:3035';
const BASE_URL_PAYMENT = Cypress.env('PAYMENT_SERVICE_URL') || 'http://127.0.0.1:3033';
export const API_URLS = {
    orders: {
        base: `${BASE_URL_ORDER}/orders`,
        create: `${BASE_URL_ORDER}/orders/create`,
        getByRef: (orderRef) => `${BASE_URL_ORDER}/orders/${orderRef}`,
    },
    products: {
        base: `${BASE_URL_PRODUCT}/products`,
        getById: (productId) => `${BASE_URL_PRODUCT}/products/${productId}`,
    },
    reviews: {
        base: `${BASE_URL_REVIEW}/reviews`,
        stats: (productId) => `${BASE_URL_REVIEW}/reviews/stats/${productId}`,
        getByProductId: (productId) => `${BASE_URL_REVIEW}/reviews/${productId}`,
    },
    users: {
        base: `${BASE_URL_USER}/users`,
        login: `${BASE_URL_USER}/users/login`,
    },
    payments: {
        base: `${BASE_URL_PAYMENT}/payments`,
    },

};