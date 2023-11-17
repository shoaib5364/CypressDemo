/// <reference types="Cypress" />

import CheckOut from "../POM/CheckOut"
import login from "../POM/login"
import Logout from "../POM/Logout"
import Products from "../POM/Products"

describe(' Internal User ', function () {

    // before(() => {
    //     cy.clearAllSessionStorage()
    //     cy.clearAllLocalStorage()
    //     cy.clearAllCookies()
    //     cy.clearCookies()
    // })

    it('CASE 1 Login - Negative', function () {

        cy.visit(Cypress.env("testurl"))
        cy.wait(2000)
        cy.fixture('Login.json').then((data) => {
            const Loginobj = new login()
            Loginobj.ClickToSignIn().click({ force: true })
            cy.wait(2000)
            Loginobj.username().type(data.NegativeEmail)
            Loginobj.password().type(data.NegativePassword)
            Loginobj.submit().click({ force: true })
            cy.wait(2000)
            Loginobj.errorText().should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
            cy.wait(2000)
        })
    })

    it('CASE 2 Login - Positive', function () {
        cy.wait(2000)
        cy.fixture('Login.json').then((data) => {
            const Loginobj = new login()
            Loginobj.username().clear({ force: true }).type(data.PositiveEmail)
            Loginobj.password().type(data.PositivePassword)
            Loginobj.submit().click({ force: true })
            cy.wait(2000)
        })
    })

    it('CASE 3 Product - Search', function () {
        cy.fixture('Product.json').then((data) => {
            const Productobj = new Products()
            Productobj.SearchProduct().type(data.SearchProduct).type('{enter}')
            cy.wait(3000)
            Productobj.SearchSuccess().should('have.text', "Search results for: 'Balboa Persistence Tee'")
            cy.wait(1000)
        })
    })

    it('CASE 4 Product - Add', function () {

        cy.get('.product-item-link').each((el, index, list) => {
            if (el.text().includes('Balboa Persistence Tee')) {
                const Productobj = new Products()
                Productobj.ClickToAddToCart().eq(index).click({ force: true })
                cy.wait(4000)
                Productobj.ProductSize().click({ force: true })
                cy.wait(2000)
                Productobj.ProductColor().click({ force: true })
                cy.wait(2000)
                Productobj.ProductAddCart().click({ force: true })
                cy.wait(3000)
            }
        })
    })

    it('CASE 5 Product - Remove', function () {
        const Productobj = new Products()
        Productobj.CheckOutBasketIcon().click({ force: true })
        cy.wait(2000)
        Productobj.RemoveProductIcon().eq(0).click({ force: true })
        cy.wait(2000)
        Productobj.RemoveProductConfirmationOK().click({ force: true })
        cy.wait(3000)
    })

    it('CASE 6 Check Out', function () {

        cy.fixture('Checkout.json').then((data) => {
            const Productobj = new Products()
            Productobj.ProductAddCart().click({ force: true })
            cy.wait(3000)
            Productobj.CheckOutBasketIcon().click({ force: true })
            cy.wait(2000)
            const Checkoutobj = new CheckOut()
            Checkoutobj.ClickToCheckOut().click({ force: true })
            cy.wait(5000)
            // Checkoutobj.SignInIcon().click({ force: true })
            // Checkoutobj.SignInEmail().type(data.PositiveEmail)
            // Checkoutobj.SignInPassword().type(data.PositivePassword)
            // Checkoutobj.SignInButton().click({ force: true })
            // cy.wait(3000)
            // const Loginobj = new login()
            // Loginobj.ClickToSignIn().click({ force: true })
            // cy.wait(2000)
            // cy.reload()
            // cy.wait(2000)
            // Loginobj.username().type(data.AnotherEmail)
            // Loginobj.password().type(data.AnotherPassword)
            // Loginobj.submit().click({ force: true })
            // cy.wait(4000)
            // Productobj.CheckOutBasketIcon().click({ force: true })
            // cy.wait(2000)
            // Checkoutobj.ClickToCheckOut().click({ force: true })
            // cy.wait(5000)

            /*For first time, we have added shipping address, now address is saved so we need to commented out these section
    
            Checkoutobj.StreetAddress().type(data.StreetAdress)
            Checkoutobj.City().type(data.City)
            Checkoutobj.State().select(data.State, '{enter}')
            Checkoutobj.Zipcode().type(data.Zipcode)
            Checkoutobj.Phonenumber().type(data.Number)
            */


            Checkoutobj.Shipping().check()
            Checkoutobj.Next().click({ force: true })
            cy.wait(3000)
            Checkoutobj.OrderPlace().click({ force: true })
            cy.wait(4000)
            cy.get('a[class="logo"]').click({ force: true })
            cy.wait(3000)
            const Loginobj = new login()
            Loginobj.ClickToSignIn().click({ force: true })
            cy.wait(2000)
            Loginobj.username().type(data.AnotherEmail)
            Loginobj.password().type(data.AnotherPassword)
            Loginobj.submit().click({ force: true })
            cy.wait(4000)
        })
    })

    it('CASE 7 Logout', function () {
        const Logoutobj = new Logout()
        Logoutobj.ClickToArrow().invoke('show')
        cy.contains('Sign Out').click({ force: true })
        cy.wait(5000)
    })
})