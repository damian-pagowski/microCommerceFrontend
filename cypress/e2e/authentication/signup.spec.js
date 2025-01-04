import { signupSelectors } from '../../support/selectors';

describe('Signup Suite', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('should sign up successfully with dynamically generated user details and auto-login', () => {
    const timestamp = Date.now();
    const username = `user_${timestamp}`;
    const email = `${username}@example.com`;
    const password = 'securePassword123';
    cy.signup(username, email, password);

    // Verify redirection to /products after auto-login
    cy.url().should('eq', `${Cypress.config().baseUrl}/products`);

    // Verify user is logged in
    cy.window()
      .its('localStorage.user')
      .should('exist')
      .then((user) => {
        const parsedUser = JSON.parse(user);
        expect(parsedUser.username).to.eq(username);
        expect(parsedUser.email).to.eq(email);
      });
  });

  it('should display error for existing user signup', () => {
    cy.fixture('users').then((users) => {
      cy.signup(users.existingUser.username, users.existingUser.email, users.existingUser.password);
      cy.get(signupSelectors.error)
        .should('have.class', 'alert-danger')
        .and('contain', 'User already exists');
    });
  });
});