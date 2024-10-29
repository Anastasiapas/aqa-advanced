
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'My Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // env: {
    //   BASE_URL: config.baseUrl,
    //   AUTH_USERNAME: config.usernameAuth,
    //   AUTH_PASSWORD: config.passwordAuth,
    // },
  },
});

