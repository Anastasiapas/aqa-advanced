class LoginPage{
    // locators
    get signInBtn() {
        return cy.contains("button", "Sign In");
    }
    get emailInput() {
        return cy.get("#signinEmail");
    }
    get passwordInput() {
        return cy.get("#signinPassword");
    }
    get loginBtn() {
        return cy.contains("button", "Login");
    }

    //methods
    typeEmail(email) {
        this.emailInput.type(email);
        return this;
    }

    typePassword(password){
        this.passwordInput.type(password);
        return this;
    }

    clicSignIn (){
        this.signInBtn.click();
    }
    clickLogin (){
        this.loginBtn.click();
    }
}

export default new LoginPage();