import pagevampHelper from './Helper/pvHelper'

let sizes = ['iphone-6', 'ipad-2','iphone-4',[1500,1000]];

describe('Italian Pagevamp Landing page - index page',()=>{

    sizes.forEach((size) => {

        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(pagevampHelper.getItalianUrl());
        });

        it('testing on '+size, () => {

        })
        it('should have cookie policy banner on top',() => {
            cy.get('.pv-cookie__alert')
        })
        it('should have .com domain extension in feature section',() => {
            cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
        })
        it('should have 14 Days Trial',() => {
            cy.get('.pv-try .pv-title .pv-title__lead').contains(pagevampHelper.getNormalPagevampTrial())
        })
        it('should have €144+IVA yearly plan & €15+IVA monthly plan',() => {
            cy.get('.pv-section h2.plan-box__pricing').within(() =>{
                cy.contains(pagevampHelper.getEuroCurrencySymbol())
                cy.contains(pagevampHelper.getItYearlyPrice())
                cy.contains(pagevampHelper.getItMonthlyPrice())
                cy.contains(pagevampHelper.getItIva())
            })
        })
        it('should have free domain for yearly and $15/year domain price for monthly plan',() => {
            cy.get('.pv-section .pv-cta__title').within(() =>{
                cy.contains("Include un dominio gratis")
                cy.contains("Il dominio è €15/anno")
            })
        })
        it('should have IT contact widget',() => {
            cy.get('.pv-support .pv-support__title').within(() =>{
                cy.contains('800 929 200')
                cy.contains('06 888 12168')
            })
        })
    });
})

describe('Italian Pagevamp landing page - pricing page',()=>{

    sizes.forEach((size) => {
        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(pagevampHelper.getItalianPricingPageUrl());
        });
        it('testing on'+size, () => {
        })
        it('should have €144+IVA yearly plan & €15+IVA monthly plan',() => {
            cy.get('.pv-section h2.plan-box__pricing').within(() =>{
                cy.contains(pagevampHelper.getEuroCurrencySymbol())
                cy.contains(pagevampHelper.getItYearlyPrice())
                cy.contains(pagevampHelper.getItMonthlyPrice())
                cy.contains(pagevampHelper.getItIva())
            })
        })
        it('should have free domain for yearly and $15/year domain price for monthly plan',() => {
            cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
                cy.contains("Dominio personalizzato gratuito (.com, .net, .it o .org)")
                cy.contains("Il dominio è €15/anno")  
            })
        })
    });
})
