import accountCreationConfirmationPage from "../../PageObjects/accountCreationConfirmationPage";
import accountInformationPage from "../../PageObjects/accountInformationPage";
import addressDetailsPage from "../../PageObjects/addressDetailsPage";
import cartSummaryPage from "../../PageObjects/cartSummaryPage";
import contactUsPage from "../../PageObjects/contactUsPage";
import homePage from "../../PageObjects/homePage";
import navMenuPage from "../../PageObjects/navMenuPage";
import paymentConfirmationPage from "../../PageObjects/paymentConfirmationPage";
import paymentPage from "../../PageObjects/paymentPage";
import productDetailsPage from "../../PageObjects/productDetails";
import signUpLoginPage from "../../PageObjects/signUpLoginPage";


describe("A0024 Integration Testing", {testIsolation:false},() => {
    const productName ='Fancy Green Top'
    const productQuantity = '30'
    const newUserName = 'JeimmyC'
    const randomString = signUpLoginPage.generateRandomString(3);
    const signUpEmailAddress='new-user'+randomString+'@hotmail.com'

    const genderTitle='Mrs';
    const password='Password1@';
    const birthdayDay='4';
    const birthdayMonth= 'June';
    const birthdayYear ='1994';
    const firstName='Jeimmy';
    const lastName='Camacho';
    const company='Apply Digital';
    const addresOne='Test Address 1';
    const addresTwo='Test Address 2';
    const country= 'United States';
    const state='Test state';
    const city='Boston';
    const zipcode='Test zipcode';
    const mobile='3167970702';
    const comment='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    const subject='Help me with info'


    const nameCard='Jeimmy Camacho Medina';
    const numberCard='4970100000000055';
    const cvc='345';
    const monthCard='08';
    const yearCard='2028';



    before(() => {
        cy.visit('https://automationexercise.com/');

      })



    it('Scenario: A0024-01 User choose and selects a product in Feature items list', () => {
    
      
            homePage.scrollToProduct(productName);
            homePage.clickViewProduct(productName);
            productDetailsPage.validateProductDetails(productName)

     

    })

    it('Scenario: A0024-02 User adds n products to cart', () => {
    
        productDetailsPage.typeProductQuantity(productQuantity);
        productDetailsPage.clickAddToCartButton();
        productDetailsPage.validateAddedModal();

    })

    it('Scenario: A0024-03 User wants to view cart', () => {
        productDetailsPage.clickViewCartLink();
        cartSummaryPage.validateCartSummaryPage();
    })

    it('Scenario: A0024-04 User proceeds to checkout: Logged out', () => {
        cartSummaryPage.clickProceedToCheckout();
        cartSummaryPage.validateCheckoutModal();
    })

    it('Scenario: A0024-05 User wants to registert', () => {
        cartSummaryPage.clickRegisterLoginLink();
        signUpLoginPage.validateSignUpLoginPage();
    })

    it('Scenario: A0024-06 User enter name and email under New User Signup field', () => {
        signUpLoginPage.typeNameNewUser(newUserName);
        signUpLoginPage.typeSingUpEmailAddress(signUpEmailAddress);
        signUpLoginPage.clickSignUpButton();
        accountInformationPage.validateAccountInformationPage();
    })


    it('Scenario: A0024-07 User creates new account successfully', () => {
        accountInformationPage.selectGenderTitle(genderTitle);
        accountInformationPage.retypeName(newUserName);
        accountInformationPage.validateNewEmail(signUpEmailAddress);
        accountInformationPage.typePassword(password);
        accountInformationPage.selectBirthdayDay(birthdayDay);
        accountInformationPage.selectBirthdayMonth(birthdayMonth);
        accountInformationPage.selectBirthdayYear(birthdayYear);
        accountInformationPage.clickNewsLetter();
        accountInformationPage.clickSpecialOffer();
        accountInformationPage.typeFirstName(firstName);
        accountInformationPage.typeLastName(lastName);
        accountInformationPage.typeCompany(company);
        accountInformationPage.typeAddressOne(addresOne);
        accountInformationPage.typeAddressTwo(addresTwo);
        accountInformationPage.selectCountry(country);
        accountInformationPage.typeState(state);
        accountInformationPage.typeCity(city);
        accountInformationPage.typeZipCode(zipcode);
        accountInformationPage.typeMobilePhone(mobile);
        accountInformationPage.clickCreateAccountButton();
        accountCreationConfirmationPage.validateAccountInformationPage();
    })

    it('Scenario: A0024-08 User confirms account creation', () => {
        accountCreationConfirmationPage.clickContinueButton();
        homePage.validateHomePageLoggedIn();
    })


    it('Scenario: A0024-09 User visits cart header ', () => {
        navMenuPage.clickCartNavItem();
        cartSummaryPage.validateCartSummaryPage();
    })

    it('Scenario: A0024-10 User proceeds to checkout: Logged in ', () => {
        cartSummaryPage.clickProceedToCheckout();
        addressDetailsPage.validateAddressDetailsPage();
    })

    it('Scenario: A0024-11 User place order ', () => {
        addressDetailsPage.typeCommentTextArea(comment);
        addressDetailsPage.clickPlaceOrderButton();
        paymentPage.validatePaymentPage();
    })

    it('Scenario: A0024-12 User input payment valid data ', () => {
        paymentPage.typeNameCardBox(nameCard);
        paymentPage.typeNumberCardBox(numberCard);
        paymentPage.typeCVCCardBox(cvc);
        paymentPage.typeMonthExpirationBox(monthCard);
        paymentPage.typeYearExpirationBox(yearCard);
        paymentPage.clickPlaceOrderButton();
        paymentConfirmationPage.validatePaymenConfirmationtPage();
    })


    it('Scenario: A0024-13 User confirms order placed ', () => {
        paymentConfirmationPage.clickContinueButton();
        homePage.validateHomePageLoggedIn();
    })

    it('Scenario: A0024-14 User wants to logout  ', () => {
        navMenuPage.clickLogOutNavItem();
        signUpLoginPage.validateSignUpLoginPage();
    })

    it('Scenario: A0024-15 User wants to login   ', () => {
        signUpLoginPage.typeLoginEmailAddress(signUpEmailAddress);
        signUpLoginPage.typePassword(password);
        signUpLoginPage.clickLoginButton();
        homePage.validateHomePageLoggedIn();
    })

    it('Scenario: A0024-16 User wants to contact team  ', () => {
        navMenuPage.clickContactUsNavItem();
        contactUsPage.validateContactUsPageBeforeFillingFormat();
        contactUsPage.typeNameBox(firstName);
        contactUsPage.typeEmailBox(signUpEmailAddress);
        contactUsPage.typeSubjectBox(subject);
        contactUsPage.typeMessageBox(comment);
    })


    it('Scenario: A0024-17 User accepts Press OK to proceed modal ', () => {
        contactUsPage.clickSubmitButton();
        contactUsPage.validateSuccessSubmit();
    })

    
    it('Scenario: A0024-18 User wants to logout ', () => {
        navMenuPage.clickLogOutNavItem();
        signUpLoginPage.validateSignUpLoginPage();
    })

})

