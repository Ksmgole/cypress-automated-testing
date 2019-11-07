import VerisignHelper from '../../Helper/verisignHelper'

let sizes = ['iphone-6', 'ipad-2','iphone-4',[1500,1000]];

describe('Verisign Campaign Control Flow - Pricing page for Indonesia',()=>{

    sizes.forEach((size) => {

        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(VerisignHelper.getIndonesianCfPricingPageUrl());
        });

        it('testing on '+size, () => {

        })
        it('should have 14 Days Trial', () => {
            cy.get('.pv-section .pv-title').contains(VerisignHelper.getNormalPagevampTrial())
        })
        it('should have .com, .net, or .org domain extensions',() => {
            cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
                cy.contains(".com")
                cy.contains(".net")
                cy.contains(".org")
            })
        })
        it('should display price US $12/mo', () => {
            cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() => {
                cy.contains(VerisignHelper.getUsPricingCountryCode())
                cy.contains(VerisignHelper.getDollarCurrencySymbol())
                cy.contains(VerisignHelper.getUsYearlyPrice())
            })
        })
    });
})

describe('Verisign Campaign Control Flow- Pricing page for India',()=>{

    sizes.forEach((size) => {
        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(VerisignHelper.getIndianCfPricingPageUrl());
        });

        it('testing on '+size, () => {
        })
        it('should have 14 Days Trial', () => {
            cy.get('.pv-section .pv-title').contains(VerisignHelper.getNormalPagevampTrial())
        })
        it('should have .com, .net, or .org domain extensions',() => {
            cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
                cy.contains(".com")
                cy.contains(".net")
                cy.contains(".org")
            })
        })
        it('should display price ₹850/mo', () => {
            cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() => {
                cy.contains(VerisignHelper.getIndianPricingCountryCode())
                cy.contains(VerisignHelper.getIndianCurrencySymbol())
                cy.contains(VerisignHelper.getIndianCfPrice())
            })
        })
    });
})
