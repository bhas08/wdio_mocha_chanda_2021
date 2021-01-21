class BettingPage {

    get accountBalanceDropdown() {
        return $("button[class*='cp-ma-myaccount-dropdown-button']");
    }

    get logout() {
        return $("//span[text()='Logout']");
    }

    get logIn() {
        return $("//span[text()='Login']");
    }
    clickLogOut() {
        this.accountBalanceDropdown.click();
        this.logout.click();
    }

}

module.exports = new BettingPage();