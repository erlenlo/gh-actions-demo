describe('App e2e', () => {
  it('should have a root element', () => {
    cy.visit('/');
    cy.get('#root').should('exist');
  });
});
