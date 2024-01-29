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


describe("HOME E2E Feature test Cases",() => {


    const productName ='Fancy Green Top'
    const productQuantity = '30'
    const newUserName = 'JeimmyC'
    const randomString = signUpLoginPage.generateRandomString(3);
    const signUpEmailAddress='new-user+'+randomString+'@hotmail.com'
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


   
   

    
    it('Scenario: A0024-01 User choose and selects a product in Feature items list', () => {

        cy.fixture('users.json').then(user => {
            const signUpEmailAddress=user.signUpEmailAddress+randomString+'@hotmail.com'

            cy.visit('https://automationexercise.com/');
            homePage.scrollToProduct(user.productName);
            homePage.clickViewProduct(user.productName);
            productDetailsPage.validateProductDetails(user.productName)
    
            productDetailsPage.typeProductQuantity(user.productQuantity);
            productDetailsPage.clickAddToCartButton();
            productDetailsPage.validateAddedModal();

            productDetailsPage.clickViewCartLink();
            cartSummaryPage.validateCartSummaryPage();

            cartSummaryPage.clickProceedToCheckout();
            cartSummaryPage.validateCheckoutModal();

            cartSummaryPage.clickRegisterLoginLink();
            signUpLoginPage.validateSignUpLoginPage();

            signUpLoginPage.typeNameNewUser(user.newUserName);
            signUpLoginPage.typeSingUpEmailAddress(signUpEmailAddress);
            signUpLoginPage.clickSignUpButton();
            accountInformationPage.validateAccountInformationPage();

            accountInformationPage.selectGenderTitle(user.genderTitle);
            accountInformationPage.retypeName(user.newUserName);
            accountInformationPage.validateNewEmail(signUpEmailAddress);
            accountInformationPage.typePassword(user.password);
            accountInformationPage.selectBirthdayDay(user.birthdayDay);
            accountInformationPage.selectBirthdayMonth(user.birthdayMonth);
            accountInformationPage.selectBirthdayYear(user.birthdayYear);
            accountInformationPage.clickNewsLetter();
            accountInformationPage.clickSpecialOffer();
            accountInformationPage.typeFirstName(user.firstName);
            accountInformationPage.typeLastName(user.lastName);
            accountInformationPage.typeCompany(user.company);
            accountInformationPage.typeAddressOne(user.addresOne);
            accountInformationPage.typeAddressTwo(user.addresTwo);
            accountInformationPage.selectCountry(user.country);
            accountInformationPage.typeState(user.state);
            accountInformationPage.typeCity(user.city);
            accountInformationPage.typeZipCode(user.zipcode);
            accountInformationPage.typeMobilePhone(user.mobile);
            accountInformationPage.clickCreateAccountButton();
            accountCreationConfirmationPage.validateAccountInformationPage();

            accountCreationConfirmationPage.clickContinueButton();
            homePage.validateHomePageLoggedIn();

            navMenuPage.clickCartNavItem();
            cartSummaryPage.validateCartSummaryPage();

            cartSummaryPage.clickProceedToCheckout();
            addressDetailsPage.validateAddressDetailsPage();

            addressDetailsPage.typeCommentTextArea(user.comment);
            addressDetailsPage.clickPlaceOrderButton();
            paymentPage.validatePaymentPage();

            paymentPage.typeNameCardBox(user.nameCard);
            paymentPage.typeNumberCardBox(user.numberCard);
            paymentPage.typeCVCCardBox(user.cvc);
            paymentPage.typeMonthExpirationBox(user.monthCard);
            paymentPage.typeYearExpirationBox(user.yearCard);
            paymentPage.clickPlaceOrderButton();
            paymentConfirmationPage.validatePaymenConfirmationtPage();

            paymentConfirmationPage.clickContinueButton();
            homePage.validateHomePageLoggedIn();

            navMenuPage.clickLogOutNavItem();
            signUpLoginPage.validateSignUpLoginPage();

            signUpLoginPage.typeLoginEmailAddress(signUpEmailAddress);
            signUpLoginPage.typePassword(user.password);
            signUpLoginPage.clickLoginButton();
            homePage.validateHomePageLoggedIn();

            navMenuPage.clickContactUsNavItem();
            contactUsPage.validateContactUsPageBeforeFillingFormat();
            contactUsPage.typeNameBox(user.firstName);
            contactUsPage.typeEmailBox(signUpEmailAddress);
            contactUsPage.typeSubjectBox(user.subject);
            contactUsPage.typeMessageBox(user.comment);

            contactUsPage.clickSubmitButton();
            contactUsPage.validateSuccessSubmit();

            navMenuPage.clickLogOutNavItem();
            signUpLoginPage.validateSignUpLoginPage();

    })

    })

    });