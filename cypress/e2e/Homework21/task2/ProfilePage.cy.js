
class ProfilePage {
get profileBtn() {
    return cy.get(".btn.btn-white.btn-sidebar.sidebar_btn.-profile");
}
clickProfile (){
    this.profileBtn.click();
}};
export default new ProfilePage();