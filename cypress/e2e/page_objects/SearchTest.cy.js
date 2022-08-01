/// <reference types="cypress" />

export default class Search {

    searchProduct() {
        cy.get('.search-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Я шукаю...' )
        }).type('Samsung s22 ultra{enter}')
        cy.wait(2000)
    }
}

