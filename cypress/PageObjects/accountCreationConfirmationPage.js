
class accountInformationPage{


    elements = {

        continueButton: () =>  cy.get('a[data-qa="continue-button"]'),
        accountCreatedTitle: () =>  cy.get('h2[data-qa="account-created"]').children('b'),
        accountCreationMessage: () =>  cy.get('p').contains('Congratulations! Your new account has been successfully created!'),
  
    }

    validateAccountInformationPage(){
        this.elements.accountCreatedTitle().should('have.text','Account Created!');
        this.elements.accountCreationMessage().should('have.text','Congratulations! Your new account has been successfully created!');
    }

    clickContinueButton(){
    this.elements.continueButton().click();
   } 


}

module.exports = new accountInformationPage();