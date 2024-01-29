
class productDetailsPage{


    elements={

        productNameInformation: () =>  cy.get('.product-information').children('h2'),
        quantityLabel: () => cy.get('label').contains('Quantity:'),
        quantityBox: () => cy.get('#quantity'),
        addToCartButton: () => cy.get('.btn-default.cart'),
        addedCartModalTitle: () => cy.get('.modal-title.w-100'),
        addedModal: ()=> cy.get('#cartModal'),
        addedMessageConfirmation :()=> cy.get('.modal-body').children('p').contains('Your product has been added to cart.'),
        viewCartLink: ()=> cy.get('.modal-body').children('p').children('a[href="/view_cart"]')
    }

    validateProductDetails(productName){
        this.elements.productNameInformation().should('have.text',productName);
        this.elements.quantityLabel().should('have.text','Quantity:');
    }
    
    typeProductQuantity(number){
        this.elements.quantityBox().clear();
        this.elements.quantityBox().type(number);
    }

    clickAddToCartButton(){
        this.elements.addToCartButton().click();
    };

    validateAddedModal(){
        this.elements.addedCartModalTitle().should('have.text','Added!');
        this.elements.addedModal().should('have.class','modal show');
        this.elements.addedMessageConfirmation().should('have.text','Your product has been added to cart.');
    }

    clickViewCartLink(){
        this.elements.viewCartLink().click();
    }
}
module.exports = new productDetailsPage();