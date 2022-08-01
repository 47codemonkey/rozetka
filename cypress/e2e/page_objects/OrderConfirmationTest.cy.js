/// <reference types="cypress" />

export default class Order {

    orderConfirmation() {
        const surname = 'Мороз'
        const name = 'Олексій'
        const phone = '07377777777'

        cy.wait(3000)
        cy.get('rz-checkout-contact-info [formcontrolname="surname"]').type(`${surname}`).should('have.value', 'Мороз')
        cy.get('rz-checkout-contact-info [formcontrolname="name"]').type(`${name}`).should('have.value', 'Олексій')   
        cy.get('rz-checkout-contact-info [formcontrolname="phone"]').type(`${phone}`).should('have.value', '07377777777')  
    }
}