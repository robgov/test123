export const getGreeting = () => cy.get('h1');
export const injectAxe = () => {
    //cy.injectAxe();
    // cy.injectAxe is currently broken. https://github.com/component-driven/cypress-axe/issues/82
    // Creating our own injection logic
    cy.readFile('../../node_modules/axe-core/axe.min.js').then((source) => {
      return cy.window({ log: false }).then((window) => {
        window.eval(source);
      });
    });
  };
