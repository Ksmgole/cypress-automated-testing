
describe('Verisign Campaign Test flow 3',()=>{
    it('Checking Promotional Sticker',() => {
        cy.visit(Cypress.env("verisign-cf-3")+ Cypress.env("baseUrl")+"/?desh=id")
        cy.get('.pv-banner .promo-sticker img').should('have.attr', 'src', '/images/indonesian_sticker.png')
        cy.visit(Cypress.env("verisign-cf-3")+ Cypress.env("baseUrl")+"/?desh=in")
        cy.get('.pv-banner .promo-sticker img').should('have.attr', 'src', '/images/indian_sticker.png')
    })
    
    it('Checking feature section >> Domain',() => {
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
    })

    it('Checking 5 Days Trial ',() => {
        cy.get('.pv-try .pv-title .pv-title__lead').contains('5')
        cy.visit(Cypress.env("verisign-cf-3")+ Cypress.env("baseUrl")+"/pricing")
        cy.get('.pv-section .pv-title').contains('5')
    })

    it('Checking Price promotional sticker ',() => {
        cy.visit(Cypress.env("verisign-cf-3")+ Cypress.env("baseUrl"))
        cy.get('.pv-section .plan-box .plan-box__promotion-banner').within(() =>{
            cy.contains('Promotional')
            cy.contains('73% discount')
        })
    })

    it('Checking Campaign price for Indonesia ',() => {
        cy.visit(Cypress.env("verisign-cf-3")+ Cypress.env("baseUrl")+"/?desh=id")
        cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() =>{
            cy.contains('IDR')
            cy.contains('Rp')
            cy.contains('45930')
        })
        cy.visit(Cypress.env("verisign-cf-3")+ Cypress.env("baseUrl")+"/pricing/?desh=id")
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains('IDR')
            cy.contains('Rp')
            cy.contains('45930')
        })
    })

    it('Checking Campaign price for India ',() => {
        cy.visit(Cypress.env("verisign-cf-3")+ Cypress.env("baseUrl")+"/?desh=in")
        cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() =>{
            cy.contains('INR')
            cy.contains('₹')
            cy.contains('230')
        })
        cy.visit(Cypress.env("verisign-cf-3")+ Cypress.env("baseUrl")+"/pricing/?desh=in")
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains('INR')
            cy.contains('₹')
            cy.contains('230')
        })
    })

    it('Checking domain in pricing section',() => {
        cy.visit(Cypress.env("verisign-cf-3")+ Cypress.env("baseUrl")+"/pricing")
        cy.get('.pv-section .plan-box .plan-box__list').contains('Free custom domain (.com, .net , .org or .cc)')
    })

    it('How it works video link',() => {
        cy.visit(Cypress.env("verisign-cf-3")+ Cypress.env("baseUrl"))
        cy.get('#how-it-works-link').click()
        cy.contains('Watch it in action >').click()
    })
})