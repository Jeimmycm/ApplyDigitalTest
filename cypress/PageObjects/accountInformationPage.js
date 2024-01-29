
class accountInformationPage{


    elements = {

        radioMr: () =>  cy.get('#id_gender1'),
        radioMrs: () =>  cy.get('#id_gender2'),
        nameBox: () =>  cy.get('#name'),
        emailBox: () =>  cy.get('#email'),
        passwordBox: () =>  cy.get('#password'),
        daySelector: () =>  cy.get('#days'),
        monthSelector: () =>  cy.get('#months'),
        yearSelector: () =>  cy.get('#years'),
        checkBoxNewsLetter: () =>  cy.get('#newsletter'),
        checkBoxSpecialOffers: () =>  cy.get('#optin'),
        firstNameBox: () =>  cy.get('#first_name'),
        lastNameBox : () =>  cy.get('#last_name'),
        companyBox: () =>  cy.get('#company'),
        addressBox: () =>  cy.get('#address1'),
        addressBoxTwo: () =>  cy.get('#address2'),
        countrySelector: () =>  cy.get('#country'),
        stateBox: () =>  cy.get('#state'),
        cityBox: () =>  cy.get('#city'),
        zipCodeBox: () =>  cy.get('#zipcode'),
        mobileNumberBox: () =>  cy.get('#mobile_number'),
        createAccountButton: () =>  cy.get('button[data-qa="create-account"]'),
        enterAccountInformationTittle : () => cy.get('.login-form').children('h2').contains('Enter Account Information'),
        addressInformationTitle : () =>  cy.get('form[action="/signup"]').children('h2').contains('Address Information'),
    }

    validateAccountInformationPage(){

        this.elements.enterAccountInformationTittle().should('have.text','Enter Account Information');
        this.elements.addressInformationTitle().should('have.text','Address Information');
    }

    selectGenderTitle(titleGender){
        if(titleGender=='Mr'){
            this.elements.radioMr().click();
        }else if(titleGender=='Mrs'){
            this.elements.radioMrs().click();
        }else{
            console.log('No valid data')
        }
    }

    retypeName(newUserName){
        this.elements.nameBox().clear();
        this.elements.nameBox().type(newUserName);

    }

    validateNewEmail(signUpEmailAddress){
        this.elements.emailBox().should('have.value',signUpEmailAddress)
    }

    typePassword(password){
        this.elements.passwordBox().clear();
        this.elements.passwordBox().type(password);
    }

    selectBirthdayDay(birthdayDay){
        this.elements.daySelector().select(birthdayDay);

    }

    selectBirthdayMonth(birthdayMonth){
        this.elements.monthSelector().select(birthdayMonth);

    }

    selectBirthdayYear(birthdayYear){
        this.elements.yearSelector().select(birthdayYear);

    }

    clickNewsLetter(){
        this.elements.checkBoxNewsLetter().click();
    }
    clickSpecialOffer(){
        this.elements.checkBoxSpecialOffers().click();
    }

    typeFirstName(firstName){
        this.elements.firstNameBox().clear();
        this.elements.firstNameBox().type(firstName);
    }

    typeLastName(lastName){
        this.elements.lastNameBox().clear();
        this.elements.lastNameBox().type(lastName);
    }

    typeCompany(company){
        this.elements.companyBox().clear();
        this.elements.companyBox().type(company);
    }


    typeAddressOne(addresOne){
        this.elements.addressBox().clear();
        this.elements.addressBox().type(addresOne);
    }

    typeAddressTwo(addresTwo){
        this.elements.addressBoxTwo().clear();
        this.elements.addressBoxTwo().type(addresTwo);
    }

    selectCountry(country){
        this.elements.countrySelector().select(country);

    }

    typeState(state){
        this.elements.stateBox().clear();
        this.elements.stateBox().type(state);
    }

    typeCity(city){
        this.elements.cityBox().clear();
        this.elements.cityBox().type(city);
    }

    typeZipCode(zipcode){
        this.elements.zipCodeBox().clear();
        this.elements.zipCodeBox().type(zipcode);
    }

    typeMobilePhone(mobile){
        this.elements.mobileNumberBox().clear();
        this.elements.mobileNumberBox().type(mobile);
    }


    clickCreateAccountButton(){
        this.elements.createAccountButton().click();
    }
    
}


module.exports = new accountInformationPage();