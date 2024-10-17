import RegistrationPageCy from "../pages/RegistrationPage.cy.js";

const testDataRegistration = [
  {
    name: "Ana",
    lastName: "Pas",
    email: "pasichnyk.nas23+" + Math.floor(Math.random() * 200) + "@gmail.com",
    password: "ABCabc!+89",
    reEnterPassword: "ABCabc!+89",
    description: "valid data",
  },
  {
    name: "Ana123",
    lastName: "Pas--",
    email: "pasichnyk.nas23+" + Math.floor(Math.random() * 99) + "@gmail.com",
    password: "ABCabc!44",
    reEnterPassword: "ABCabc!44",
    description: "invalid data",
  },
  {
    name: "Ana123",
    lastName: "Pas--",
    email: "pasichnyk.nas23+" + Math.floor(Math.random() * 99) + "@gmail.com",
    password: "ABCabc!44",
    reEnterPassword: "ABCabc!44",
    description: "invalid data",
  },
  {
    name: "$$$",
    lastName: "Pas",
    email: "pasichnyk.nas23+" + Math.floor(Math.random() * 99) + "@gmail.com",
    password: "ABCabc!44",
    reEnterPassword: "ABCabc!44",
    description: "invalid Name",
  },
  {
    name: "Ana",
    lastName: "%^$#",
    email: "pasichnyk.nas23+" + Math.floor(Math.random() * 99) + "@gmail.com",
    password: "ABCabc!44",
    reEnterPassword: "ABCabc!44",
    description: "invalid Last Name",
  },
  {
    name: "Ana",
    lastName: "Pas",
    email: "test.com",
    password: "ABCabc!44",
    reEnterPassword: "ABCabc!44",
    description: "incorrect email",
  },
  {
    name: "Ana",
    lastName: "Pas",
    email: "pasichnyk.nas23+" + Math.floor(Math.random() * 99) + "@gmail.com",
    password: "ABC",
    reEnterPassword: "ABC",
    description: "wrong password data",
  },
  {
    name: "Ana",
    lastName: "Pas",
    email: "pasichnyk.nas23+" + Math.floor(Math.random() * 99) + "@gmail.com",
    password: "ABCabc!23",
    reEnterPassword: "ABCabc!2543",
    description: "not matching passwords",
  },
];

describe("Registration tests", () => {
  beforeEach(() => {
    cy.log("User passed authentication");
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  Cypress._.each(testDataRegistration, (testData) => {
    it(`User tries to register with ${testData.description}`, () => {
      cy.contains("Sign up").should("be.visible");

      RegistrationPageCy.clickSignUp();

      RegistrationPageCy.typeName(testData.name)
        .typeLastName(testData.lastName)
        .typeEmail(testData.email)
        .typePassword(testData.password)
        .typeReEnterPassword(testData.reEnterPassword);

      if (testData.description === "valid data") {
        RegistrationPageCy.clickRegister();
        cy.contains("My profile", { timeout: 10000 }).should("be.visible");
      } else if (testData.description === "invalid data") {
        RegistrationPageCy.registerBtn.should("be.disabled");
      } else if (testData.description === "empty data") {
        RegistrationPageCy.nameInput.clear();
        RegistrationPageCy.lastNameInput.clear();
        RegistrationPageCy.emailInput.clear();
        RegistrationPageCy.passwordInput.clear();
        RegistrationPageCy.reEnterPasswordInput.clear();

        const expectedMessages = [
          "Name required",
          "Last name required",
          "Email required",
          "Password required",
          "Re-enter password required",
        ];

        RegistrationPageCy.errors
          .should("have.length", 5)
          .each(($el, index) => {
            cy.wrap($el).should("contain.text", expectedMessages[index]);
            cy.wrap($el)
              .find(RegistrationPageCy.allInputFields)
              .should("have.css", "border-bottom-color", "rgb(220, 53, 69)");
          });
      } else if (testData.description === "invalid Name") {
        RegistrationPageCy.errors.should("contain.text", "Name is invalid");
      } else if (testData.description === "invalid Last Name") {
        RegistrationPageCy.errors.should(
          "contain.text",
          "Last name is invalid",
        );
      } else if (testData.description === "incorrect email") {
        RegistrationPageCy.errors.should("contain.text", "Email is incorrect");
      } else if (testData.description === "wrong password data") {
        RegistrationPageCy.errors.should(
          "contain.text",
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
        );
      } else if (testData.description === "not matching passwords") {
        RegistrationPageCy.passwordInput.click();
        RegistrationPageCy.errors.should(
          "contain.text",
          "Passwords do not match",
        );
      }
    });
  });
});
