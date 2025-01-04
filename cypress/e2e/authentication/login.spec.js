describe('Login Suite', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('#username').as('usernameField');
    cy.get('#password').as('passwordField');
    cy.get('#submit-button').as('submitButton');
  });

  it('should log in successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      cy.get('@usernameField').type(users.validUser.username);
      cy.get('@passwordField').type(users.validUser.password);
      cy.get('@submitButton').click();
      cy.url().should('eq', Cypress.config().baseUrl + '/products');
      cy.window()
        .its('localStorage.user')
        .should('not.be.empty');
    });
  });

  it('should display error for invalid credentials', () => {
    cy.fixture('users').then((users) => {
      cy.get('@usernameField').type(users.invalidUser.username);
      cy.get('@passwordField').type(users.invalidUser.password);
      cy.get('@submitButton').click();
      cy.get('#login-error').should('contain', 'Login failed. Please check your credentials.');
    });
  });

  it('should log out successfully', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
      cy.visit('/'); 
    });

    cy.get('#nav-logout').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/products');
    cy.window()
      .its('localStorage.user')
      .should('be.undefined');
  });
});