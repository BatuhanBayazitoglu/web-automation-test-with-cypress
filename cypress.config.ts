import { defineConfig } from 'cypress';

export const config: Cypress.ConfigOptions = {
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageLoadTimeout: 80000,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 2,
  },
  reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: true,
    json: true,
    reportDir: "cypress/reports",
  },
  screenshotsFolder: "cypress/screenshots",
  video: true,
  e2e: {
    setupNodeEvents(on, conf) {
      // eslint-disable-next-line global-require, import/extensions, @typescript-eslint/no-var-requires
      return require("./cypress/plugins/index.js")(on, conf);
    },
  },
};

export default defineConfig(config);
