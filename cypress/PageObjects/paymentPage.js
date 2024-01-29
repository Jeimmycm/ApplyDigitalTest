
class paymentPage{


    elements = {

        paymentHeader: () =>  cy.get('.heading').contains('Payment'),
        nameOnCardBox: () =>  cy.get('input[data-qa="name-on-card"]'),
        cardNumberBox: () =>  cy.get('input[data-qa="card-number"]'),
        cvcBox: () =>  cy.get('input[data-qa="cvc"]'),
        monthExpirationBox: () =>  cy.get('input[data-qa="expiry-month"]'),
        yearExpirationBox: () =>  cy.get('input[data-qa="expiry-year"]'),
        payAndConfirmationOrderButton: () =>  cy.get('button[data-qa="pay-button"]'),
    }

    validatePaymentPage(){
        this.elements.paymentHeader().should('have.text','Payment');
    }

    typeNameCardBox(nameCard){
        this.elements.nameOnCardBox().clear();
        this.elements.nameOnCardBox().type(nameCard);
    }
    typeNumberCardBox(numberCard){
        this.elements.cardNumberBox().clear();
        this.elements.cardNumberBox().type(numberCard);
    }
    typeCVCCardBox(cvc){
        this.elements.cvcBox().clear();
        this.elements.cvcBox().type(cvc);
    }
    typeMonthExpirationBox(monthCard){
        this.elements.monthExpirationBox().clear();
        this.elements.monthExpirationBox().type(monthCard);
    }

    typeYearExpirationBox(yearCard){
        this.elements.yearExpirationBox().clear();
        this.elements.yearExpirationBox().type(yearCard);
    }

   clickPlaceOrderButton(){
        this.elements.payAndConfirmationOrderButton().click()
    };

    

}

module.exports = new paymentPage();