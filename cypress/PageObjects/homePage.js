
class homePage{


    elements = {

        product: () =>  cy.get('p'),
        fullFledgedText: () =>  cy.get('h2').contains('Full-Fledged practice website for Automation Engineers'),
        loggedInText : () =>  cy.get('a').contains(' Logged in as'+' '),
    }

    validateHomePageLoggedIn(){
        this.elements.fullFledgedText().should('have.text','Full-Fledged practice website for Automation Engineers');
        this.elements.loggedInText().should('include.text',' Logged in as ');
    }

    scrollToProduct(productName){

        
        this.elements.product().contains(productName).scrollIntoView();
    }

    clickViewProduct(productName)
   {
    this.elements.product().contains(productName).parents('.single-products').next().click()
   } 


}

module.exports = new homePage();