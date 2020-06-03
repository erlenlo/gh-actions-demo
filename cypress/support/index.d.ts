declare namespace Cypress {
  interface Chainable {
    getTestElement(testId: string): Cypress.Chainable;
  }
}
