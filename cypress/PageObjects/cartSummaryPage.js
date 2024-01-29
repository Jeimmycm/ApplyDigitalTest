
class cartSummaryPage{


    elements = {

        cartInfoSummaryTable: () =>  cy.get('#cart_info'),
        proceedToCheckoutButton: ()=> cy.get('.btn.btn-default.check_out'),
        registerLoginLink: ()=> cy.get('.modal-body').children('p').children('a[href="/login"]'),
        checkoutCartModalTitle: ()=> cy.get('.modal-title.w-100'),
        checkoutModal: () => cy.get('#checkoutModal'),
        checkOutMessageConfirmation :()=> cy.get('.modal-body').children('p').contains('Register / Login account to proceed on checkout.'),

    }

    validateCartSummaryPage(){
        this.elements.cartInfoSummaryTable().should('be.visible');
    }

    clickProceedToCheckout(){
        this.elements.proceedToCheckoutButton().click();
    }

    clickRegisterLoginLink(){
        this.elements.registerLoginLink().click();
    }

    validateCheckoutModal(){
        this.elements.checkoutCartModalTitle().should('have.text','Checkout');
        this.elements.checkoutModal().should('have.class','modal show');
        this.elements.checkOutMessageConfirmation().should('have.text','Register / Login account to proceed on checkout.');
    }


}

module.exports = new cartSummaryPage();