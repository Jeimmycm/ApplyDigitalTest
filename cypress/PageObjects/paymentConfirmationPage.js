
class paymentConfirmationPage{


    elements = {

        orderPlacedTittle: () =>  cy.get('h2[data-qa="order-placed"]'),
        continueButton: () =>  cy.get('a[data-qa="continue-button"]'),
    }


    validatePaymenConfirmationtPage(){
        this.elements.orderPlacedTittle().should('have.attr','style','color: green;')
        this.elements.orderPlacedTittle().should('have.text','Order Placed!');   
    }

   clickContinueButton(){
        this.elements.continueButton().click()
    };

    

}

module.exports = new paymentConfirmationPage();