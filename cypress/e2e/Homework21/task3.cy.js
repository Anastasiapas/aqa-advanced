import {error} from "mochawesome-report-generator/bin/logger.js";

describe("Verify API tests with plugin", () => {
  const baseUrl = "https://qauto.forstudy.space/api/";

  it("Verify car brands", () => {
    cy.api("GET", baseUrl + "cars/brands").should((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Verify car by ID", () => {
    cy.api("GET", baseUrl + "cars/brands/2").should((response) => {
      expect(response.body.data.title).to.eq("BMW");
    });
  });
  it("Verify car models", () => {
    cy.api("GET", baseUrl + "cars/models/2").should((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
