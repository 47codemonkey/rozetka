/// <reference types="cypress" />

export default class Buy {
    buyProduct() {
        cy.get('[data-id="a0e41591ce3e885fa7d64cab2acf8bef"]').click().should('have.attr', 'href') // choose the color
        cy.wait(2000)
        cy.get('app-product-buy-btn[class="product__buy"]').click()
        cy.get('[data-testid="cart-receipt-submit-order"]').click() // in case the popup will not be shown need to choose the request below
        // cy.get('rz-cart[class="header-actions__component"]').click() 
    }
}
