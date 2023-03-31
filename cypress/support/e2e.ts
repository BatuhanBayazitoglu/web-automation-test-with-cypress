// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

const addContext = require('mochawesome/addContext');

Cypress.on('uncaught:exception', () => {
  return false;
});

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshot = `screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, `/dashboard-experience/e2e/cypress/${screenshot}`);
  }
});

Cypress.on('uncaught:exception', err => {
  if (err.message.includes("reading 'remove'")) {
    return false;
  }
});
