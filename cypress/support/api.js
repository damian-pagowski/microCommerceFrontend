import { API_URLS } from './apiUrls';

export const fetchProductDetails = (productId) => {
    return cy.request({
        method: 'GET',
        url: API_URLS.products.getById(productId),
    });
};

export const fetchProductReviews = (productId) => {
    return cy.request({
        method: 'GET',
        url: API_URLS.reviews.getByProductId(productId),
    });
};

export const fetchProductReviewStats = (productId) => {
    return cy.request({
        method: 'GET',
        url: API_URLS.reviews.stats(productId),
    });
};

export const loginUser = (username,password) => {
        return cy.request('POST', API_URLS.users.login, {
        username,
        password,
    });
};

