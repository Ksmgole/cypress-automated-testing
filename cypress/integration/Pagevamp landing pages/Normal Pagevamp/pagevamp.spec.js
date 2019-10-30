import pagevampHelper from './Helper/pvHelper'

let sizes = ['iphone-6', 'ipad-2','iphone-4',[1500,1000]];

describe('Pagevamp Landing page - index page',()=>{

    sizes.forEach((size) => {

        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(pagevampHelper.getPagevampUrl());
        });

        it('testing on '+size, () => {

        })
        it('should have .com domain extension in feature section',() => {
            cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
        })
        it('should have 14 Days Trial',() => {
            cy.get('.pv-try .pv-title .pv-title__lead').contains(pagevampHelper.getNormalPagevampTrial())
        })  
        it('should have $12 yearly plan & $15 monthly plan',() => {
            cy.get('.pv-section h2.plan-box__pricing').within(() =>{
                cy.contains(pagevampHelper.getDollarCurrencySymbol())
                cy.contains(pagevampHelper.getUsYearlyPrice())
                cy.contains(pagevampHelper.getUsYearlyPrice())
            })
        })
        it('should have free domain for yearly and $12/year domain price for monthly plan',() => {
            cy.get('.pv-section .pv-cta__title').within(() =>{
                cy.contains("Includes a free domain")
                cy.contains("Domain is $12/year")
            })
        })
       
    });
})

describe('Pagevamp landing page - pricing page',()=>{

    sizes.forEach((size) => {
        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(pagevampHelper.getPagevampPricingPageUrl());
        });
        it('testing on'+size, () => {
        })
        it('should have 14 Days Trial',() => {
            cy.get('.pv-section .pv-title').contains(pagevampHelper.getNormalPagevampTrial())
        })
        it('should have $12 yearly plan & $15 monthly plan',() => {
            cy.get('.pv-section h2.plan-box__pricing').within(() =>{
                cy.contains(pagevampHelper.getDollarCurrencySymbol())
                cy.contains(pagevampHelper.getUsYearlyPrice())
                cy.contains(pagevampHelper.getUsYearlyPrice())
            })
        })
        it('should have free domain for yearly and $12/year domain price for monthly plan',() => {
            cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
                cy.contains("Free custom domain (.com, .net or .org)")
                cy.contains("Domain is $12/year")
            })
        })
    });
})
