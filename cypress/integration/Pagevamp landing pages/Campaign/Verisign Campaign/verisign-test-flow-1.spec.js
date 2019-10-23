describe('Verisign Campaign Test flow 1',()=>{
    it('should have Promotional Sticker for Indonesia and India',() => {
        cy.visit(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl")+"/?desh=id")        
        cy.get('.pv-banner .promo-sticker img').should('have.attr', 'src', '/images/indonesian_sticker.png')
        
        cy.visit(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl")+"/?desh=in")        
        cy.get('.pv-banner .promo-sticker img').should('have.attr', 'src', '/images/indian_sticker.png')
    })

    it('should have .cc domain extension in index page >> feature section',() => {
        cy.get('.container .pv-cnt--sec .domain-cc img').should('have.attr','src').should('include','/images/cc.svg')
    })

    it('should have 5 Days Trial in index page & pricing page',() => {
        cy.get('.pv-try .pv-title .pv-title__lead').contains('5')
        cy.visit(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl")+"/pricing")        
        cy.get('.pv-section .pv-title').contains('5')
    })

    it('should have promotional 73% discount sticker in pricing box(index page)',() => {
        cy.visit(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl"))        
        cy.get('.pv-section .plan-box .plan-box__promotion-banner').within(() =>{
            cy.contains('Promotional')
            cy.contains('73% discount')
        })
    })

    it('should display price in Rp currency for Indonesia in both index and pricing page',() => {
        cy.visit(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl")+"/?desh=id")        
        cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() =>{
            cy.contains('IDR')
            cy.contains('Rp')
            cy.contains('45930')
        })
        cy.visit(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl")+"/pricing/?desh=id")        
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains('IDR')
            cy.contains('Rp')
            cy.contains('45930')
        })
    })

    it('should display price in ₹ currency for India in both index and pricing page',() => {
        cy.visit(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl")+"/?desh=in")        
        cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() =>{
            cy.contains('INR')
            cy.contains('₹')
            cy.contains('230')
        })
        cy.visit(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl")+"/pricing?desh=in")        
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains('INR')
            cy.contains('₹')
            cy.contains('230')
        })
    })

    it('should have only .cc domain extensions in index and pricing page',() => {
        cy.visit(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl"))        
        cy.get('.pv-pricing .plan-box .pv-cta__title').contains('.cc')
        cy.visit(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl")+"/pricing")        
        cy.get('.pv-section .plan-box .plan-box__list').contains('.cc')
    })

    it('should have Pagevamp youtube video(without 14 days trial) in "How it works >> Watch it in action" link',() => {
        cy.visit(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl"))        
        cy.get('#how-it-works-link').click()
        cy.get('.modal-content iframe.embed-responsive-item').should('have.attr', 'src', 'https://www.youtube.com/embed/DrTj9mUD2MY?enablejsapi=1')
        cy.get('#how-it-works-section a.link').click().invoke('css','display', 'block')
    })
})