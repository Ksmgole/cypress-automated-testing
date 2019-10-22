describe('Italian Landing page ',()=>{
    it('should have cookie policy banner on top',() => {
        cy.visit("https://"+ Cypress.env("baseUrl")+"/?desh=it")
        cy.get('.pv-cookie__alert')
    })

    it('should have .com domain extension in index page >> feature section',() => {
        cy.visit("https://"+ Cypress.env("baseUrl")+"/?desh=it")
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
    })

    it('should have €144+IVA yearly plan & €15+IVA monthly plan in index page & pricing page',() => {
        cy.get('.pv-section h2.plan-box__pricing').within(() =>{
            cy.contains('€')
            cy.contains('144')
            cy.contains('15')
            cy.contains('+IVA')
        })
        cy.visit("https://"+ Cypress.env("baseUrl")+"/pricing/?desh=it")
        cy.get('.pv-section h2.plan-box__pricing').within(() =>{
            cy.contains('€')
            cy.contains('144')
            cy.contains('15')
            cy.contains('+IVA')
        })
    })

    it('should have free domain for yearly and $15/year domain price for monthly plan in index page & pricing section',() => {
        cy.visit("https://"+ Cypress.env("baseUrl")+"/?desh=it")
        cy.get('.pv-section .pv-cta__title').within(() =>{
            cy.contains("Include un dominio gratis")
            cy.contains("Il dominio è €15/anno")
        })
        cy.visit("https://"+ Cypress.env("baseUrl")+"/pricing/?desh=it")
        cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
            cy.contains("Dominio personalizzato gratuito (.com, .net, .it o .org)")
            cy.contains("Il dominio è €15/anno")  
        })
    })

    it('should have IT contact widget',() => {
        cy.visit("https://"+ Cypress.env("baseUrl")+"/?desh=it")
        cy.get('.pv-support .pv-support__title').within(() =>{
            cy.contains('800 929 200')
            cy.contains('06 888 12168')
        })
    })
})