/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://auth0.com/')
    cy.title().should('eq', 'Auth0: Secure access for everyone. But not just anyone.')
    
    // Temporary solution to deal with cookies
    cy.get('#onetrust-reject-all-handler').then($requiredOnly => {
        if($requiredOnly.is(':visible')){
            cy.get('#onetrust-reject-all-handler').click()
        }
        else {
            cy.contains('header a', "Login").should('be.visible')
        }
    })
})

describe("SSO login", () => {
    it('login via microsoft SSO', () => {
        cy.contains('header a', "Login")
            .click()

        cy.contains('button', 'Continue with Microsoft Account').click()

        // cy.origin Visit multiple domains of different origin in a single test
        // we're adding a callback and performing actions related to the new domain inside that callback
        cy.origin('https://login.live.com', () => {
            cy.get('[data-testid="i0116"]').type("gabrielstabilee.cypress@gmail.com")

            cy.get('#idSIButton9').click()

            cy.get('[data-testid="i0118"]').type("Pass@123456")

            cy.get('#idSIButton9').click()

            cy.get('#declineButton').should('be.visible').click()  
        })

        // finishing the validations out of the callback
        cy.location('pathname').should('eq', '/profile')
        cy.contains('h1', "Let's set you up for success").should('be.visible')
      })
})