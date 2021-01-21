const LoginPage = require('../pageobjects/login.page');
const landingPage = require('../pageobjects/landing.page');
const bettingPage = require('../pageobjects/betting.page');

describe('My Login application', () => { // Test suite
    before('', () => {
        // Data base connection code
        landingPage.open();
        browser.pause(5000);
        console.log('Before Hook')
    });
    after('', () => {
        console.log('After Hook')
    });
    beforeEach('', () => {
        console.log('Before Each Hook');
    });
    afterEach('', () => {
        console.log('After Each Hook');
    });
    it('should login with valid credentials', () => {
        landingPage.loginBtn.click();
        browser.pause(3000);
        LoginPage.login('bhas08', 'Bh2021bh');
        browser.pause(3000);
        bettingPage.clickLogOut();
    }); // Block nothing but a test case.

    it('should login with invalid userName', () => {
        browser.pause(5000);
        bettingPage.logIn.click();
        browser.pause(3000);
        LoginPage.login('bhas08blabla', 'Bh2021bh');
        browser.pause(3000)
    });
});


