describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have correct header', () => {
    cy.get('h2')
      .first()
      .should('contain.text', 'Home');
  });
});
