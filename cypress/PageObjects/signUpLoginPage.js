const { typePassword } = require("./accountInformationPage");

class signUpLoginPage{


    elements = {

        nameBox: () =>  cy.get('input[data-qa="signup-name"]'),
        signUpEmailAddressBox: () =>  cy.get('input[data-qa="signup-email"]'),
        signUpButton: () =>  cy.get('button[data-qa="signup-button"]'),
        logInEmailAdressBox : () =>  cy.get('input[data-qa="login-email"]'),
        passwordBox: () =>  cy.get('input[data-qa="login-password"]'),
        loginButton: () =>  cy.get('button[data-qa="login-button"]'),
        loginFormTitle: () => cy.get('.login-form').children('h2'),
        signUpFormTitle: () => cy.get('.signup-form').children('h2'),
    }

    validateSignUpLoginPage(){
        this.elements.loginFormTitle().should('have.text','Login to your account');
        this.elements.signUpFormTitle().should('have.text','New User Signup!');
    }

    
    typeNameNewUser(newUserName){
        this.elements.nameBox().clear();
        this.elements.nameBox().type(newUserName);
    }

    typeSingUpEmailAddress(signUpEmailAddress){
        this.elements.signUpEmailAddressBox().clear();
        this.elements.signUpEmailAddressBox().type(signUpEmailAddress);
    }
    typeLoginEmailAddress(loginEmailAddress){
        this.elements.logInEmailAdressBox().clear();
        this.elements.logInEmailAdressBox().type(loginEmailAddress);
    }

    typePassword(password){
        this.elements.passwordBox().clear();
        this.elements.passwordBox().type(password);
    }

    clickLoginButton(){
        this.elements.loginButton().click();
    }

    clickSignUpButton(){
        this.elements.signUpButton().click();
    }

    generateRandomString(length){
        let result = '';
        const characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      };


}

module.exports = new signUpLoginPage();