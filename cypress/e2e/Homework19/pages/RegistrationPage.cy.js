class RegistrationPage {
  // Locators
  get signUpBtn() {
    return cy.contains("button", "Sign up");
  }

  get nameInput() {
    return cy.get("#signupName");
  }

  get lastNameInput() {
    return cy.get("#signupLastName");
  }
  get emailInput() {
    return cy.get("#signupEmail");
  }

  get passwordInput() {
    return cy.get("#signupPassword");
  }

  get reEnterPasswordInput() {
    return cy.get("#signupRepeatPassword");
  }

  get registerBtn() {
    return cy.contains("button", "Register");
  }

  get profileBtn(){
    return cy.get("#userNavDropdown");
  }
  get errors() {
    return cy.get(".invalid-feedback");
  }

  get allInputFields(){
    return cy.get(".modal-content input");
  }

  // Methods
  clickSignUp() {
    this.signUpBtn.click();
  }

  typeName(name) {
    this.nameInput.type(name);
    return this;
  }

  typeLastName(lastName) {
    this.lastNameInput.type(lastName);
    return this;
  }

  typeEmail(email) {
    this.emailInput.type(email);
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }

  typeReEnterPassword(reEnterPassword) {
    this.reEnterPasswordInput.type(reEnterPassword);
    return this;
  }

  clickRegister() {
    this.registerBtn.click();
  }
}

export default new RegistrationPage();
