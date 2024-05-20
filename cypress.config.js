const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    // if true, it will create a "videos" folder in the root of the project, leaving it false to save memory
    video: false,

    viewportWidth: 1920,
    viewportHeight: 1080,    

    setupNodeEvents(on, config) {
      allureCypress(on);
    },

    experimentalModifyObstructiveThirdPartyCode: true,
  },
});
