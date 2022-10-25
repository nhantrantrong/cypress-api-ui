const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // Write allure report
      allureWriter(on, config);
      return config;
    },
    video: false,
    specPattern: [
      'cypress/e2e/api/**/*.spec.cy.js',
      'cypress/e2e/ui/**/*.spec.cy.js'
    ],
    downloadsFolder: 'cypress/fixtures/downloads',
    env: {
      api: {
        url: 'https://reqres.in'
      },
      ui: {
        url: 'https://fundingsocieties.com'
      },
      uploadsFolder: 'cypress/fixtures/uploads',
      allure: true,
      allureReuseAfterSpec: true,
      allureResultsPath: "report/allure-results"
    }
  },
});
