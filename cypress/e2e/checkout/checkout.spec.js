import { cartSelectors, checkoutSelectors } from '../../support/selectors';
import { API_URLS } from '../../support/apiUrls';

describe('Checkout - Guest User', () => {
    beforeEach(() => {
        cy.fixture('cartCheckout').then((cart) => {
            cy.setCart(cart);
            cy.visit('/cart');
        });
    });

    it('should disable checkout for guest users', () => {
        cy.get(cartSelectors.cartTotal).should('contain.text', 105.98);
        cy.get(cartSelectors.cartCheckoutButton).should('be.disabled');
    });
});

describe('Checkout Flow', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.validUser.username, users.validUser.password);
        });
        cy.fixture('cartCheckout').then((cart) => {
            cy.setCart(cart);
            cy.visit('/cart');
        });
    });

    it('should display cart summary and proceed to checkout', () => {
        cy.get(cartSelectors.cartTotal).should('contain.text', 105.98);
        cy.get(cartSelectors.cartCheckoutButton).click();
        cy.get(checkoutSelectors.paymentForm).should('exist');
    });

    it('should complete checkout successfully with valid payment details', () => {
        cy.fixture('payments').then((payment) => {

            cy.intercept('POST', API_URLS.orders.base).as('createOrder');
            cy.intercept('POST', API_URLS.payments.base).as('processPayment');

            cy.get(cartSelectors.cartCheckoutButton).click();
            cy.fillInPaymentDetails(payment.validCard);

            // Wait for all API calls
            cy.wait('@createOrder').its('response.statusCode').should('eq', 201);
            cy.wait('@processPayment').its('response.statusCode').should('eq', 200);
            // Verify success message
            cy.get(checkoutSelectors.paymentSuccessMessage)
                .should('contain', 'Payment successful')
        });
    });

    it('should handle failed payment gracefully', () => {
        cy.fixture('payments').then((payment) => {

            cy.intercept('POST', API_URLS.orders.base).as('createOrder');
            cy.intercept('POST', API_URLS.payments.base).as('processPayment');

            cy.get(cartSelectors.cartCheckoutButton).click();
            cy.fillInPaymentDetails(payment.brokeUser);

            // Wait for API calls
            cy.wait('@createOrder').its('response.statusCode').should('eq', 201);
            cy.wait('@processPayment').its('response.statusCode').should('eq', 402);

            // Verify error message
            cy.get(checkoutSelectors.paymentErrorMessage).should('contain', 'An error occurred during payment');
        });
    });
    it('should prevent checkout if cart is empty', () => {
        cy.clearLocalStorage('cart');
        cy.visit('/cart');

        // Verify cart is empty
        cy.get(cartSelectors.cartItems).should('not.exist');
        cy.get(cartSelectors.cartCheckoutButton).should('be.disabled');
    });
});