import VerisignHelper from '../Helper/verisignHelper'

var indonesianCfUrl = VerisignHelper.getIndonesianCfUrl(),
    indonesianCfPricingPageUrl=VerisignHelper.getIndonesianCfPricingPageUrl(),
    normalPagevampTrial = VerisignHelper.getNormalPagevampTrial(),
    usPricingCountryCode = VerisignHelper.getUsPricingCountryCode(),
    dollarCurrencySymbol = VerisignHelper.getDollarCurrencySymbol(),
    usPrice = VerisignHelper.getUsYearlyPrice(),
    indianCfUrl= VerisignHelper.getIndianCfUrl(),
    indianCfPricingPageUrl = VerisignHelper.getIndianCfPricingPageUrl(),   
    indianPricingCountryCode = VerisignHelper.getIndianPricingCountryCode(),
    indianCurrencySymbol = VerisignHelper.getIndianCurrencySymbol(),
    indianCfPrice = VerisignHelper.getIndianCfPrice();

describe('Verisign Control flow for Indonesia',()=>{
    it('should not have Promotional Sticker',() => {
        cy.visit(indonesianCfUrl)        
        cy.get('.pv-banner .promo-sticker').should('not.exist')
    })
    it('should have .com domain extension in index page >> feature section',() => {
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
    })
    it('should have 14 Days Trial in index page >> "Try it free for {no.} of days"',() => {
        cy.get('.pv-try .pv-title .pv-title__lead').contains(normalPagevampTrial)
    })
    it('should have 14 Days Trial in Pricing page',() => {
        cy.visit(indonesianCfPricingPageUrl)   
        cy.get('.pv-section .pv-title').contains(normalPagevampTrial)
    })
    it('should display $12/mo price in index page',() => {
        cy.visit(indonesianCfUrl)   
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains(usPricingCountryCode)
            cy.contains(dollarCurrencySymbol)
            cy.contains(usPrice)
        })
    })
    it('should display $12/mo price in pricing page',() => {
        cy.visit(indonesianCfPricingPageUrl)   
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains(usPricingCountryCode)
            cy.contains(dollarCurrencySymbol)
            cy.contains(usPrice)
        })
    })
    it('should have .com, .net or .org domain extensions in pricing page',() => {
        cy.visit(indonesianCfPricingPageUrl)   
        cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
            cy.contains(".com")
            cy.contains(".net")
            cy.contains(".org")
        })   
    })
    it('should have Pagevamp youtube video(without 14 days trial) in "How it works >> Watch it in action" link',() => {
        cy.visit(indonesianCfUrl)   
        cy.get('#how-it-works-link').click()
        cy.get('.modal-content iframe.embed-responsive-item').should('have.attr', 'src', 'https://www.youtube.com/embed/DrTj9mUD2MY?enablejsapi=1')
        cy.get('#how-it-works-section a.link').click().invoke('css','display', 'block')
    })
})


describe('Verisign Control flow for India',()=>{
    it('should not have Promotional Sticker',() => {
        cy.visit(indianCfUrl)  
        cy.get('.pv-banner .promo-sticker').should('not.exist')
    })
    it('should have .com domain extension in index page >> feature section',() => {
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
    })
    it('should have 14 Days Trial in index page"Try it free for {no.} of days"',() => {
        cy.get('.pv-try .pv-title .pv-title__lead').contains(normalPagevampTrial)
    })
    it('should have 14 Days Trial in Pricing page',() => {
        cy.visit(indianCfPricingPageUrl)   
        cy.get('.pv-section .pv-title').contains(normalPagevampTrial)
    })
    it('should display ₹850/mo price in index page',() => {
        cy.visit(indianCfUrl)   
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains(indianPricingCountryCode)
            cy.contains(indianCurrencySymbol)
            cy.contains(indianCfPrice)
        })
    })
    it('should display ₹850/mo price in pricing page',() => {
        cy.visit(indianCfPricingPageUrl)   
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains(indianPricingCountryCode)
            cy.contains(indianCurrencySymbol)
            cy.contains(indianCfPrice)
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
        cy.visit(indianCfUrl)  
        cy.get('#how-it-works-link').click()
        cy.get('.modal-content iframe.embed-responsive-item').should('have.attr', 'src', 'https://www.youtube.com/embed/DrTj9mUD2MY?enablejsapi=1')
        cy.get('#how-it-works-section a.link').click().invoke('css','display', 'block')
    })
})