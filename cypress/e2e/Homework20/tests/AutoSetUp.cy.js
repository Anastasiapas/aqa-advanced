import LoginPageCy from "../../Homework19/pages/LoginPage.cy.js";
import GaragePageCy from "../pages/GaragePage.cy.js";
import FuelExpensesPageCy from "../pages/FuelExpensesPage.cy.js";

const env = Cypress.env('ENV') || 'env1';
const config = require(`../config/config_${env}.json`);

const brand = "Ford";
const model = "Fusion";
const mileage = "89 500";
const numOfLiters = "30";
const totalCost = "56.67";
describe("Auto Set Up", () => {
  let isVehicleAdded = false;

  beforeEach(() => {
    cy.log("User passed authentication");
    cy.visit(config.baseUrl, {
      auth: {
        username: config.usernameAuth,
        password: config.passwordAuth,
      },
    });
    LoginPageCy.clickSignIn();
    LoginPageCy.typeEmail(config.email)
      .typePassword(config.password, { sensitive: true })
      .clickLogin();
    cy.contains("My profile", { timeout: 10000 }).should("be.visible");
  });

  it("Verify user can add a car", () => {
    GaragePageCy.clickGarage()
      .addCar()
      .selectBrand(brand)
      .selectModel(model)
      .enterMileage(mileage)
      .add();
    GaragePageCy.addedVehicle.should("contains.text", "Ford Fusion");
    isVehicleAdded = true;
    if (isVehicleAdded) {
      FuelExpensesPageCy.selectAddExpense()
        .enterNumberOfLiters(numOfLiters)
        .enterTotalCost(totalCost)
        .selectAdd();
      FuelExpensesPageCy.fuelExpensesTable.should("contain.text", numOfLiters);
    }
  });
});
