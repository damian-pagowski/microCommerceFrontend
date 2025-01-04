import { signupSelectors, productListSelectors, productDetailsSelectors, searchSelectors } from './selectors';
import { loginUser, fetchProductDetails, fetchProductReviews, fetchProductReviewStats } from './api';

Cypress.Commands.add('fillSignupForm', (username, email, password) => {
    cy.get(signupSelectors.usernameInput).type(username);
    cy.get(signupSelectors.emailInput).type(email);
    cy.get(signupSelectors.passwordInput).type(password);
});

Cypress.Commands.add('signup', (username, email, password) => {
    cy.fillSignupForm(username, email, password);
    cy.get(signupSelectors.submitButton).click();
});

Cypress.Commands.add('login', (username, password) => {
    loginUser(username, password).then((response) => {
        expect(response.status).to.eq(200);
        window.localStorage.setItem('user', JSON.stringify(response.body));
        cy.wrap(response.body).as('loggedInUser');
    });
});

Cypress.Commands.add('openFirstProduct', () => {
    cy.get(productListSelectors.productCard)
        .first()
        .find(productListSelectors.productLink)
        .click();
});

Cypress.Commands.add('addProductToCart', () => {
    cy.get(productDetailsSelectors.addToCartButton).click();
});

Cypress.Commands.add('searchProduct', (searchTerm) => {
    cy.get(searchSelectors.searchInput).type(searchTerm);
    cy.get(searchSelectors.searchButton).click();
});

Cypress.Commands.add('fetchProductDetails', (productId) => {
    return fetchProductDetails(productId)
        .then((response) => {
            expect(response.status).to.eq(200);
            return response.body;
        });
});

Cypress.Commands.add('fetchProductReviews', (productId) => {
    return fetchProductReviews(productId).then((response) => {
        expect(response.status).to.eq(200);
        return response.body.reviews;
    });
});

Cypress.Commands.add('fetchProductReviewStats', (productId) => {
    return fetchProductReviewStats(productId).then((response) => {
        expect(response.status).to.eq(200);
        return response.body.stats;
    });
});

Cypress.Commands.add('openProductWithId', (productId) => {
    cy.visit(`/products/${productId}`);
});

