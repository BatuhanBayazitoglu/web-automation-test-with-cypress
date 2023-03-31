import { defineConfig } from 'cypress';

import { config } from './cypress.config';

export default defineConfig({
  ...config,
  defaultCommandTimeout: 30000,
  e2e: {
    ...config.e2e,
    baseUrl: "https://useinsider.com/",
  },
});
