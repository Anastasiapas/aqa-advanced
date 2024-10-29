import profilePageCy from "./ProfilePage.cy.js";

describe("Auth", () => {
  let sid;

  before(() => {
    const userCreds = {
      email: "pasichnyk.nas23+678@gmail.com",
      password: "12345Rr!",
      remember: true,
    };
    cy.request(
      "POST",
      `${Cypress.env("BASE_URL")}api/auth/signin`,
      userCreds,
    ).then((response) => {
      const headers = response.headers;
      const cookie = headers["set-cookie"][1];
      const cookieArray = cookie.split("\n");
      for (const cookie of cookieArray) {
        if (cookie.trim().startsWith("sid=")) {
          sid = cookie.trim().split("=")[1].split(";")[0];
          break;
        }
      }
    });
  });
  beforeEach(() => {
    cy.log("User passed authentication");
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
      headers: {
        Cookie: `sid=${sid}`,
      },
    });
  });

  it("Verify Profile name can be updated ", () => {
    const updatedProfile = {
      userId: 154487,
      photoFilename: "default-user.png",
      name: "Polar",
      lastName: "Bear",
    };

    cy.intercept(
      {
        method: "GET",
        url: `${Cypress.env("BASE_URL")}api/users/profile`,
      },
      (req) => {
        req.reply((res) => {
          res.send({
            statusCode: 200,
            body: { data: updatedProfile },
          });
        });
      },
    );
    cy.request({
      method: "GET",
      url: `${Cypress.env("BASE_URL")}api/users/profile`,
      headers: {
        Cookie: `sid=${sid}`,
      },
    });

    profilePageCy.clickProfile();
    cy.contains("Polar Bear").should("be.visible");
  });
});
