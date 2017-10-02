// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
  "src_folders": [
    "tests"// Where you are storing your Nightwatch e2e tests
  ],
  "output_folder": "./reports", // reports (test outcome) output by nightwatch

  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": true, // tells nightwatch to start/stop the selenium process
    "server_path": "./bin/selenium-server-standalone-3.6.0.jar",
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
      "webdriver.chrome.driver" : "./bin/chromedriver",
      "webdriver.gecko.driver" : "./bin/geckdriver",
    }
  },

  "test_settings": {
    "default": {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },

      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },
  }
}
