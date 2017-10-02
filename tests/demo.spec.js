WAIT_TIME = 1000

module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', WAIT_TIME)
      .setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
