describe('About page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('should have correct header', () => {
    cy.get('h2')
      .first()
      .should('contain.text', 'About');
  });
});
