/// <reference types="cypress" />


export default class BasePage {
 
    launchApplication() {
            cy.visit('https://rozetka.com.ua/ua/')
            cy.viewport(1920, 1080)
            cy.location('protocol').should('eq', 'https:')
            cy.title().should('eq', 'Інтернет-магазин ROZETKA™: офіційний сайт найпопулярнішого онлайн-гіпермаркету в Україні')
        
    }
}
