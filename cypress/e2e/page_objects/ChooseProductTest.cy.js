/// <reference types="cypress" />

export default class Choose {
        
    chooseProduct() {
        cy.get('div[data-goods-id="334091347"]').should('contain', ' Мобільний телефон Samsung Galaxy S22 Ultra 12/256 GB Green (SM-S908BZGGSEK) ').click()
        cy.wait(3000)
    }
}


