
class navMenuPage{


    elements = {

        cartNavItem: () =>  cy.get('li').children('a[href="/view_cart"]'),
        logOutNavItem: () =>  cy.get('li').children('a[href="/logout"]'),
        contactUsNavItem: () => cy.get('li').children('a[href="/contact_us"]'),
    }

   clickCartNavItem(){
    this.elements.cartNavItem().click()
   };

   clickLogOutNavItem(){
    this.elements.logOutNavItem().click()
   };

   clickContactUsNavItem(){
    this.elements.contactUsNavItem().click()
    };

}

module.exports = new navMenuPage();