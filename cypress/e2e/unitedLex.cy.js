/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://unitedlex.com/#')
    cy.title().should('eq', 'Legal Data Analytics & Management Solution by UnitedLex')
})

describe('united lex testing', () => {
    it('check dropdown menu', () => {
        cy.contains('a', "Solutions")
            .click()

        cy.contains('a', 'Litigation & Investigations')
            .should('be.visible')
      })

      it('Fill some contact us form, but not submitting', { tags: ['@smoke'] }, () => {
        cy.contains('span', "Let’s Connect ")
            .click()

        cy.contains('h1[class*=elementor-heading-title]', 'Contact Us')
            .should('be.visible')

        cy.get('#area_of_interest_contact_form-95a42221-4715-4685-ad85-5ad2dbf7164e')
            .select('Intellectual Property')
            
        cy.get('#firstname-95a42221-4715-4685-ad85-5ad2dbf7164e')
            .type('this is an automation demo')
        
        cy.get('#lastname-95a42221-4715-4685-ad85-5ad2dbf7164e')
            .type('last name for automation')

        cy.get('#business_type__c-95a42221-4715-4685-ad85-5ad2dbf7164e')
            .select('Law Firm')

        cy.get('input[value=SUBMIT]').click()

        cy.get('label[class=hs-main-font-element]')
            .should('have.text', 'Please complete all required fields.')
      })
})