import VerisignHelper from '../../Helper/verisignHelper'

let sizes = ['iphone-6', 'ipad-2','iphone-4',[1500,1000]];

describe('Verisign Campaign Control Flow -Index page for Indonesia',()=>{

    sizes.forEach((size) => {

        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(VerisignHelper.getIndonesianCfUrl());
        });

        it('testing on '+size, () => {

        })
        it('should not have Promotional Sticker', () => {
            cy.get('.pv-banner .promo-sticker').should('not.exist')
        })
        it('should have .com domain extension in feature', () => {
            cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
        })
        it('should have 14 Days Trial', () => {
            cy.get('.pv-try .pv-title .pv-title__lead').contains(VerisignHelper.getNormalPagevampTrial())
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

describe('Verisign Campaign Control Flow - Index page for India',()=>{

    sizes.forEach((size) => {
        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(VerisignHelper.getIndianCfUrl());
        });

        it('testing on '+size, () => {
        })
        it('should not have Promotional Sticker', () => {
            cy.get('.pv-banner .promo-sticker').should('not.exist')
        })
        it('should have .com domain extension in feature', () => {
            cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
        })
        it('should have 14 Days Trial', () => {
            cy.get('.pv-try .pv-title .pv-title__lead').contains(VerisignHelper.getNormalPagevampTrial())
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
