class CheckOut{

    ClickToCheckOut(){
        return cy.get('#top-cart-btn-checkout')
    }
    CheckOutEmail(){
        return cy.get('#customer-email-fieldset > .required > .control > #customer-email')
    }
    CheckOutPassword(){
        return cy.get('#customer-password')
    }
    CheckOutLogin(){
        return cy.get('#customer-email-fieldset > .fieldset > .actions-toolbar > div.primary > .action')
    }
    SignInIcon(){
        return cy.get('.action-auth-toggle > span')
    }
    SignInEmail(){
        return cy.get('input[id="login-email"]')
    }
    SignInPassword(){
        return cy.get('input[id="login-password"]')
    }
    SignInButton(){
        return cy.get('.block-content > form > .actions-toolbar > .primary > .action')
    }
    StreetAddress(){
        return cy.get('div[name="shippingAddress.street.0"]')
    }
    City(){
        return cy.get('div[name="shippingAddress.city"]')
    }
    State(){
        return cy.get('select[name="region_id"]')
    }
    Zipcode(){
        return cy.get('div[name="shippingAddress.postcode"]')
    }
    Phonenumber(){
        return cy.get('div[name="shippingAddress.telephone"]')
    }
    Shipping(){
        return cy.get(':nth-child(1) > :nth-child(1) > .radio')
    }
    Next(){
        return cy.get('.button')
    }
    OrderPlace(){
        return cy.get('.payment-method-content > :nth-child(4) > div.primary > .action')
    }
    
    }
    export default CheckOut