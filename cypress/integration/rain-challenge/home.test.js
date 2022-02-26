/// <reference types="cypress" />

describe('Home', () => {
  before(() => {
    cy.visit('https://rain.us/')

    Cypress.Screenshot.defaults({
      capture: 'viewport',
    })
  })

  afterEach(() => {
    cy.screenshot()
  })

  context('First approach', () => {
    it('Verify if the page is loading', () => {
      cy.get('div [class="css-b0lxuf e1jchxfg1"]')
      cy.get('h1').contains("Employees paid")
    })
  })

  context('Contact', () => {
    it('Verify the mail address is correct', () => {
      cy.get('a').contains("care@rain.us").scrollIntoView()
        .should('be.visible')
    })
  })

  context('About', () => {
    it('Load About page in a new tab', () => {
      cy.get('a[href="#about"]').click({
        ctrlKey: true,
      })
    })
  })
})