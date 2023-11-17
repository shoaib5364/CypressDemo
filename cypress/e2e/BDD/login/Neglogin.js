/// <reference types="Cypress" />
import { Given,When,Then,dataTable } from "@badeball/cypress-cucumber-preprocessor"

import login from "../../../POM/login"

const Loginobj = new login()

    // before(() => {
    //     cy.clearAllSessionStorage()
    //     cy.clearAllLocalStorage()
    //     cy.clearAllCookies()
    //     cy.clearCookies()
    // })

    Given('Visit Excel Edge Test Demo Website', function () {
        cy.visit(Cypress.env("testurl"))
        cy.wait(2000)
    })
    
    When('Click to Sign In Button', function () {
        Loginobj.ClickToSignIn().click({ force: true })
        cy.wait(2000)
    })
    
    When('User provide Invalid Email & Password', function(dataTable) {
        
        //Retrieve Data from BDD Feature file
        Loginobj.username().type(dataTable.rawTable[1][0])
        Loginobj.password().type(dataTable.rawTable[1][1])

        /*Retrieve Data from Mocha Json File
         cy.fixture('Login.json').then((data) => {
         Loginobj.username().type(data.NegativeEmail)
         Loginobj.password().type(data.NegativePassword)
        })*/
    })
    
    Then('Click on Login Button & Verify the error', function () {
        Loginobj.submit().click({ force: true })
        cy.wait(2000)
        Loginobj.errorText().should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
        cy.wait(3000)
    })

    When('User provide Valid Email & Password', function(dataTable){
        
        //Retrieve Data from BDD Feature file
        Loginobj.username().clear({ force: true }).type(dataTable.rawTable[1][0])
        Loginobj.password().type(dataTable.rawTable[1][1])

        /*Retrieve Data from Mocha Json File
        //cy.fixture('Login.json').then((data) => {
        // Loginobj.username().clear({ force: true }).type(data.PositiveEmail)
        // Loginobj.password().type(data.PositivePassword)
        cy.wait(2000)
        })*/
    })

    Then('Click on Login Button', function () {
        Loginobj.submit().click({ force: true })
        cy.wait(3000)
    })

