import { productListSelectors, searchSelectors, productDetailsSelectors } from '../../support/selectors';

describe('Product Browsing Suite', () => {
    beforeEach(() => {
        cy.visit('/products');
    });

    it('should display a list of products', () => {
        cy.get(productListSelectors.productCard)
            .should('have.length.greaterThan', 0)
            .and('be.visible');
    });

    it('should navigate to product details page when a product is clicked', () => {
        cy.openFirstProduct();
        cy.url().should('include', '/products/');
        cy.get(productDetailsSelectors.productTitle).should('be.visible');
    });

    it('should filter products by search query', () => {
        const searchTerm = 'Durian';
        cy.searchProduct(searchTerm);

        cy.get(productListSelectors.productCard)
            .each(($card) => {
                cy.wrap($card).find(productListSelectors.productTitle).should('contain.text', searchTerm);
            });
    });

    it('should show an empty state if no products match the search query', () => {
        const searchTerm = 'NonExistentProduct123';
        cy.searchProduct(searchTerm);

        cy.get(productListSelectors.productCard)
            .should('not.exist');
    });

    it('should add a product to the cart from the product list', () => {
        cy.openFirstProduct();
        cy.addProductToCart();

        cy.get(productDetailsSelectors.cartNotification)
            .should('be.visible')
            .and('contain.text', 'added to cart');
    });
});

describe('Product Added Notification Links', () => {
    beforeEach(() => {
        cy.visit('/products');
        cy.openFirstProduct();
        cy.addProductToCart();
    });

    it('should navigate to the cart page when "Go to checkout" is clicked', () => {
        cy.get(productDetailsSelectors.cartNotification)
            .should('be.visible')
            .within(() => {
                cy.get('a')
                    .contains('Go to checkout')
                    .click(); 
            });

        cy.url().should('include', '/cart');
        cy.contains('Your Cart').should('be.visible');
    });

    it('should navigate to the product list page when "Continue shopping" is clicked', () => {
        cy.get(productDetailsSelectors.cartNotification)
            .should('be.visible')
            .within(() => {
                cy.get('a')
                    .contains('continue shopping')
                    .click();
            });

        cy.url().should('include', '/products');
        cy.get(productListSelectors.productCard).should('be.visible');
    });
});