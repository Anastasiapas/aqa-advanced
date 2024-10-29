class GaragePage {
  // locators

  get garageTab() {
    return cy.get("a.btn.header-link.-active").contains("Garage");
  }
  get addCarBtn() {
    return cy.get(".btn.btn-primary");
  }

  get brandDd() {
    return cy.get("#addCarBrand");
  }

  get modelDd() {
    return cy.get("#addCarModel");
  }

  get milageInput() {
    return cy.get("#addCarMileage");
  }

  get addBtn() {
    return cy.get(".modal-content").contains("button", "Add");
  }

  get addedVehicle(){
    return cy.get('p.car_name.h2');
  }

  // methods

  clickGarage() {
    this.garageTab.click();
    return this;
  }

  addCar() {
    this.addCarBtn.click();
    return this;
  }

  selectBrand(brand) {
    this.brandDd.select(brand);
    return this;
  }

  selectModel(model) {
    this.modelDd.select(model);
    return this;
  }

  enterMileage(mileage) {
    this.milageInput.type(mileage);
    return this;
  }
  add() {
    this.addBtn.should("be.enabled").click();
    return this;
  }
}

export default new GaragePage();
