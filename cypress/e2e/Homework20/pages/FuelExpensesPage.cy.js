class FuelExpensesPage {

  // locators
  get addExpenseBtn() {
    return cy.contains("button", "Add fuel expense");
  }

  get numberOfLitersInput() {
    return cy.get("#addExpenseLiters");
  }

  get totalCostInput() {
    return cy.get("#addExpenseTotalCost");
  }

  get addBtn() {
    return cy.get(".modal-content").contains("button", "Add");
  }

  get fuelExpensesTable() {
    return cy.get(".table.expenses_table");
  }

  // methods
  selectAddExpense() {
    this.addExpenseBtn.click();
    return this;
  }

  enterNumberOfLiters(numOfLiters) {
    this.numberOfLitersInput.type(numOfLiters);
    return this;
  }
  enterTotalCost(totalCost) {
    this.totalCostInput.type(totalCost);
    return this;
  }
  selectAdd() {
    this.addBtn.click();
  }
}

export default new FuelExpensesPage();
