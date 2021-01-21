const LandingPage = require('./landing.page');

class LoginPage {

   get userName () {
       return $("input[name='username']");
    }
    get password () {
       return $("input[name='password']");
    }
    get btnSubmit () {
       return $("button[name='login-submit-button']")
   }

       login (username, password) {
        this.userName.setValue(username);
        this.password.setValue(password);
        this.btnSubmit.click(); 
    }


}

module.exports = new LoginPage();
