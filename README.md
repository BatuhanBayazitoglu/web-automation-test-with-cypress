# E2E tests for Insider

## One time setup

1. Install dependencies using `npm ci`

## Commands

```bash
# --
# npm scripts
# --
# run cypress (e2e tests)
npm run cy:test -- --headed --browser chrome # open local machine chrome browser
npm run cy:test -- --headed --browser firefox # open local machine firefox browser
npm run cy:test:chrome # run cypress (e2e tests) on headless' mode (Chrome)
npm run cy:test:firefox # run cypress (e2e tests) on headless' mode (Firefox)


# run an specific tests file:
# Examples:
npm run cy:test:chrome -- --spec cypress/e2e/TEST_NAME.cy.ts

# Video:
/cypress/videos

# Screenshots:
/cypress/screenshots

# Mochaawesome Reports:
/cypress/reports

```
