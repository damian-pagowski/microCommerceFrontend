export const fetchProductDetails = (productId) => {
    return cy.request({
        method: 'GET',
        url: `http://127.0.0.1:3034/products/${productId}`,
    });
};

export const fetchProductReviews = (productId) => {
    return cy.request({
        method: 'GET',
        url: `http://127.0.0.1:3037/reviews/${productId}`,
    });
};

export const fetchProductReviewStats = (productId) => {
    return cy.request({
        method: 'GET',
        url: `http://127.0.0.1:3037/reviews/stats/${productId}`,
    });
};

export const loginUser = (username,password) => {
    return cy.request('POST', 'http://127.0.0.1:3035/users/login', {
        username,
        password,
    });
};

