describe("Basic tests", () => {
  beforeEach(() => {
    cy.log("User passed authentication");
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Should verify user is on the Sign Up page ", () => {
    cy.get("button[class*='hero-descriptor_btn']").should("be.visible");
    cy.get("button[class*='hero-descriptor_btn']").contains("Sign up");
  });

  it("Find all buttons in the header", () => {
    cy.get(".header_inner.d-flex.justify-content-between.align-items-center")
      .find("button")
      .should("have.length", 4);
  });

  it("Verify links in the footer", () => {
    cy.get("#contactsSection")
      .find("a")
      .should("have.length", 7)
      .and("be.visible");
  });

  it("Verify links are active", () => {
    cy.get("#contactsSection")
      .find("a")
      .each(($el) => {
        const href = $el.prop("href");
        cy.request({
          url: href,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.isOkStatusCode).to.be.true;
        });
      });
  });
});
