const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  viewportWidth: 1800,
  viewportHeight: 1100,
  env:{
    testurl:'https://magento.softwaretestingboard.com/'
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
