
class addressDetailsPage{


    elements = {

        addressDetailsTitle: () =>  cy.get('.heading').contains('Address Details'),
        reviewYourOrderTitle: () =>  cy.get('.heading').contains('Review Your Order'),
        commentTextArea: () =>  cy.get('textarea[name="message"]'),
        placeOrderButton: () =>  cy.get('a[href="/payment"]'),
    }

    validateAddressDetailsPage(){

        this.elements.addressDetailsTitle().should('have.text','Address Details');
        this.elements.reviewYourOrderTitle().should('have.text','Review Your Order');
    }

    typeCommentTextArea(comment){
        this.elements.commentTextArea().clear();
        this.elements.commentTextArea().type(comment);
    }

   clickPlaceOrderButton(){
    this.elements.placeOrderButton().click()
    };

}

module.exports = new addressDetailsPage();