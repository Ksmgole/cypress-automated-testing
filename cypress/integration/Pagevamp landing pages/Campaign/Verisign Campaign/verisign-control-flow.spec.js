
describe('Verisign Control flow',()=>{
    it('should not have Promotional Sticker for Indonesia and India',() => {
        cy.visit(Cypress.env("verisign-cf")+ Cypress.env("baseUrl")+"/?desh=id")        
        cy.get('.pv-banner .promo-sticker').should('not.exist')
        cy.visit(Cypress.env("verisign-cf")+ Cypress.env("baseUrl")+"/?desh=in")   
        cy.get('.pv-banner .promo-sticker').should('not.exist')
    })

    it('should have .com domain extension in index page >> feature section',() => {
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
    })

    it('should have 14 Days Trial in index page & pricing page',() => {
        cy.get('.pv-try .pv-title .pv-title__lead').contains('14')
        cy.visit(Cypress.env("verisign-cf")+ Cypress.env("baseUrl")+"/pricing")   
        cy.get('.pv-section .pv-title').contains('14')
    })

    it('should display price in  $ currency for Indonesia in both index and pricing page',() => {
        cy.visit(Cypress.env("verisign-cf")+ Cypress.env("baseUrl")+"/?desh=id")   
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains('US')
            cy.contains('$')
            cy.contains('12')
        })
        cy.visit(Cypress.env("verisign-cf")+ Cypress.env("baseUrl")+"/pricing/?desh=id")   
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains('US')
            cy.contains('$')
            cy.contains('12')
        })
    })

    it('should display price in ₹ currency for India in both index and pricing page',() => {
        cy.visit(Cypress.env("verisign-cf")+ Cypress.env("baseUrl")+"/?desh=in")   
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains('INR')
            cy.contains('₹')
            cy.contains('850')
        })
        cy.visit(Cypress.env("verisign-cf")+ Cypress.env("baseUrl")+"/pricing/?desh=in")   
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains('INR')
            cy.contains('₹')
            cy.contains('850')
        })
    })

    it('should have .com, .net or .org domain extensions in pricing page',() => {
        cy.visit(Cypress.env("verisign-cf")+ Cypress.env("baseUrl")+"/pricing")  
        cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
            cy.contains(".com")
            cy.contains(".net")
            cy.contains(".org")
        })
    })

    it('should have Pagevamp youtube video(without 14 days trial) in "How it works >> Watch it in action" link',() => {
        cy.visit(Cypress.env("verisign-cf")+ Cypress.env("baseUrl"))  
        cy.get('#how-it-works-link').click()
        cy.get('.modal-content iframe.embed-responsive-item').should('have.attr', 'src', 'https://www.youtube.com/embed/DrTj9mUD2MY?enablejsapi=1')
        cy.get('#how-it-works-section a.link').click().invoke('css','display', 'block')
    })
})