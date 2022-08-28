const { defineConfig } = require('cypress')

// eslint-disable-next-line no-undef
module.exports = defineConfig({
  e2e: {
    // 'pageLoadTimeout': 20000,
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
