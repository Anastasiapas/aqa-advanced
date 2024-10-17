import LoginPageCy from "../pages/LoginPage.cy.js";

describe("Login test", () => {
  beforeEach(() => {
    cy.log("User passed authentication");
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  const validCredentials = require("../fixtures/validCredentials.json");

  it("User can login with valid credentials", () => {
    LoginPageCy.clicSignIn();
    LoginPageCy
        .typeEmail(validCredentials.email)
      .typePassword(validCredentials.password, {sensetive: true})
      .clickLogin();

    cy.contains("My profile", { timeout: 10000 }).should("be.visible");
  });
});
