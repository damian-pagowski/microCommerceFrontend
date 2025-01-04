import { productDetailsSelectors } from '../../support/selectors';

describe('Product Details Page', () => {
  let product;
  let reviews;
  let stats;

  before(() => {
    const productId = 1;
    // Fetch product details, reviews, and stats
    cy.fetchProductDetails(productId).then((data) => {
      product = data;
    });
    cy.fetchProductReviews(productId).then((data) => {
      reviews = data;
    });
    cy.fetchProductReviewStats(productId).then((data) => {
      stats = data;
    });
  });

  beforeEach(() => {
    cy.openProductWithId(product.productId);
  });

  it('should display the correct product details', () => {
    cy.get(productDetailsSelectors.productTitle).should('contain', product.name);
    cy.get(productDetailsSelectors.productImage)
      .should('be.visible');
    cy.get(productDetailsSelectors.productPrice).should('contain', `${product.price}`);
    cy.get(productDetailsSelectors.productDescription).should('contain', product.description);
  });

  it('should display review stats summary', () => {
    cy.get(productDetailsSelectors.reviewsSummary).within(() => {
      cy.get(productDetailsSelectors.totalReviews).should('contain', stats.totalReviews);
      cy.get(productDetailsSelectors.averageRating).should('contain', stats.averageRating.toFixed(1));
    });
  });

  it('should display reviews', () => {
    reviews.forEach((review, index) => {
      cy.get(productDetailsSelectors.reviewsList)
        .children()
        .eq(index)
        .within(() => {
          cy.get('.review-username').should('contain', review.username);
          cy.get('.review-rating').should('contain', review.rating);
          cy.get('.review-comment').should('contain', review.comment);
        });
    });
  });
});