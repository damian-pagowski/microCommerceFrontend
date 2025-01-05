import { cartSelectors } from '../../support/selectors';

describe('Cart Management', () => {
    before(() => {
        cy.visit('/products');
    });

    it('should add a product to the cart and verify its presence', () => {
        cy.fixture('cart').then(({ product }) => {
            cy.openToCartProductWithId(product.productId);
            cy.get(cartSelectors.cartItems)
                .first()
                .within(() => {
                    cy.get(cartSelectors.cartItemName).should('contain.text', product.name);
                    cy.get(cartSelectors.cartItemPrice).should('contain.text', product.price);
                });
        });
    });

    it('should update the quantity of a product in the cart', () => {
        cy.fixture('cart').then(({ product }) => {
            cy.openToCartProductWithId(product.productId);
            // increase the quantity
            cy.get(cartSelectors.cartItemIncreaseQuantity).click();
            cy.get(cartSelectors.cartItemQuantity)
                .should('contain.text', '2');
            cy.get(cartSelectors.cartTotal).should('contain.text', (product.price * 2).toFixed(2));
            // decrease the quantity
            cy.get(cartSelectors.cartItemDecreaseQuantity).click();
            cy.get(cartSelectors.cartItemQuantity)
                .should('contain.text', '1');
            cy.get(cartSelectors.cartTotal).should('contain.text', (product.price));
        });
    });

    it('should remove a product from the cart', () => {
        cy.fixture('cart').then(({ product }) => {
            cy.openToCartProductWithId(product.productId);

            // Remove the product from the cart
            cy.get(cartSelectors.cartItemRemoveButton).click();

            // Verify the cart is empty
            cy.get(cartSelectors.cartItems).should('not.exist');
            cy.get(cartSelectors.emptyCartMessage).should('contain.text', 'Your cart is empty.');
        });
    });

    it('should handle an empty cart gracefully', () => {
        cy.visit('/cart');
        cy.get(cartSelectors.emptyCartMessage).should(
            'contain.text',
            'Your cart is empty.'
        );
    });
});