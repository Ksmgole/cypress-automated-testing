import pagevampHelper from './Helper/pvHelper'

var pagevampUrl = pagevampHelper.getPagevampUrl(),
    pagevampPricingPageUrl = pagevampHelper.getPagevampPricingPageUrl(),
    dollarCurrencySymbol = pagevampHelper.getDollarCurrencySymbol(),
    usYearlyPrice = pagevampHelper.getUsYearlyPrice(),
    usMonthlyPrice = pagevampHelper.getUsMonthlyPrice();

describe('Pagevamp Landing page ',()=>{
    it('should have .com domain extension in index page >> feature section',() => {
        cy.visit(pagevampUrl)
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
    })
    it('should have 14 Days Trial in index page & pricing page',() => {
        cy.get('.pv-try .pv-title .pv-title__lead').contains('14')
        cy.visit("https://"+ Cypress.env("baseUrl")+"/pricing/?desh=us")
        cy.get('.pv-section .pv-title').contains('14')
    })
    it('should have $12 yearly plan & $15 monthly plan in index page',() => {
        cy.get('.pv-section h2.plan-box__pricing').within(() =>{
            cy.contains(dollarCurrencySymbol)
            cy.contains(usYearlyPrice)
            cy.contains(usMonthlyPrice)
        })
    })
    it('should have $12 yearly plan & $15 monthly plan in pricing page',() => {
        cy.visit(pagevampPricingPageUrl)
        cy.get('.pv-section h2.plan-box__pricing').within(() =>{
            cy.contains(dollarCurrencySymbol)
            cy.contains(usYearlyPrice)
            cy.contains(usMonthlyPrice)
        })
    })
    it('should have free domain for yearly and $12/year domain price for monthly plan in index page',() => {
        cy.visit(pagevampUrl)
        cy.get('.pv-section .pv-cta__title').within(() =>{
            cy.contains("Includes a free domain")
            cy.contains("Domain is $12/year")
        })
    })
    it('should have free domain for yearly and $12/year domain price for monthly plan in pricing section',() => {
        cy.visit(pagevampPricingPageUrl)
        cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
            cy.contains("Free custom domain (.com, .net or .org)")
            cy.contains("Domain is $12/year")
        })
    })
    it('should have Pagevamp youtube video(with 14 days trial) in "How it works >> Watch it in action" link',() => {
        cy.visit(pagevampUrl)
        cy.get('#how-it-works-link').click()
        cy.get('.modal-content iframe.embed-responsive-item').should('have.attr', 'src', 'https://www.youtube.com/embed/09Y0Xz_bTpM?enablejsapi=1')
        cy.get('#how-it-works-section a.link').click().invoke('css','display', 'block')
    })
})