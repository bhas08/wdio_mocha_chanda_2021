/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class LandingPage {

    open (path) {
        browser.maximizeWindow();
        return browser.url('./')
    }
    get loginBtn () { return $('#login-button') }
}

module.exports = new LandingPage();