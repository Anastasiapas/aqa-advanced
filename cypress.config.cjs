const {defineConfig} = require('cypress');

module.exports = defineConfig({

    e2e: {

        env: {
            BASE_URL: 'https://qauto.forstudy.space/',
            chromeWebSecurity: false,
            setupNodeEvents(on, config) {
            },
        },
    },
});

