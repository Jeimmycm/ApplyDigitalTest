class contactUsPage{


    elements = {
    
        contactUsTitle: () =>  cy.get('h2').contains('Contact '),
        nameBox: () =>  cy.get('input[data-qa="name"]'),
        emailBox: () =>  cy.get('input[data-qa="email"]'),
        subjectBox: () =>  cy.get('input[data-qa="subject"]'),
        messageBox: () =>  cy.get('textarea[data-qa="message"]'),
        submitButton: () =>  cy.get('input[data-qa="submit-button"]'),
        alertSuccessMessage: () =>  cy.get('.status.alert.alert-success'),
    }

    validateContactUsPageBeforeFillingFormat(){
        this.elements.contactUsTitle().should('include.text','Contact ');
    }

    typeNameBox(name){
        this.elements.nameBox().clear();
        this.elements.nameBox().type(name);
    }

    typeEmailBox(email){
        this.elements.emailBox().clear();
        this.elements.emailBox().type(email);
    }

    typeSubjectBox(subject){
        this.elements.subjectBox().clear();
        this.elements.subjectBox().type(subject);
    }

    typeMessageBox(message){
        this.elements.messageBox().clear();
        this.elements.messageBox().type(message);
    }

   clickSubmitButton(){
    this.elements.submitButton().click()
    };

    validateSuccessSubmit(){
        this.elements.alertSuccessMessage().should('have.text','Success! Your details have been submitted successfully.')
    }


}

module.exports = new contactUsPage();