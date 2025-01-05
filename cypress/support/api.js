import { API_URLS } from './apiUrls';

export const fetchProductDetails = (productId) => {
    return cy.request({
        method: 'GET',
        // url: `http://127.0.0.1:3034/products/${productId}`,
        url: API_URLS.products.getById(productId),

    });
};

export const fetchProductReviews = (productId) => {
    return cy.request({
        method: 'GET',
        // url: `http://127.0.0.1:3037/reviews/${productId}`,
        url: API_URLS.reviews.getByProductId(productId),
    });
};

export const fetchProductReviewStats = (productId) => {
    return cy.request({
        method: 'GET',
        // url: `http://127.0.0.1:3037/reviews/stats/${productId}`,
        url: API_URLS.reviews.stats(productId),
    });
};

export const loginUser = (username,password) => {
    // return cy.request('POST', 'http://127.0.0.1:3035/users/login', {
        return cy.request('POST', API_URLS.users.login, {

        username,
        password,
    });
};

