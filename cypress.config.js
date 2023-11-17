const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  //require('cypress-mochawesome-reporter/plugin')(on);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  
  viewportWidth: 1800,
  viewportHeight: 1100,
  env:{
    testurl:'https://magento.softwaretestingboard.com/'
  },
  //reporter: 'cypress-mochawesome-reporter',
  e2e: {
    testIsolation: false,
    setupNodeEvents,
    specPattern: 'cypress/e2e/BDD/*.feature'

  },
});
