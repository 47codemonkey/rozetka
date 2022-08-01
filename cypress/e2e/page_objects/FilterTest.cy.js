/// <reference types="cypress" />

export default class Filter {
    filterProduct() {
        cy.get('a[data-id="Rozetka"]').should('contain', 'Rozetka').click()
        cy.wait(2000)
        cy.get('a[data-id="Samsung"]').should('contain', 'Samsung').click()
        cy.scrollTo('top')
    }
}