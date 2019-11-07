import VerisignHelper from '../../Helper/verisignHelper'

let sizes = ['iphone-6', 'ipad-2','iphone-4',[1500,1000]];

describe('Verisign Campaign Testflow 1 - Pricing page for Indonesia',()=>{

    sizes.forEach((size) => {

        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(VerisignHelper.getIndonesianTfaPricingPageUrl());
        });

        it('testing on '+size, () => {

        })
        it('should have 5 Days Trial', () => {
            cy.get('.pv-section h1.pv-title').contains(VerisignHelper.getVerisignTrial())
        })
        it('should have .cc domain extension', () => {
            cy.get('.pv-section .plan-box .plan-box__list').contains('.cc')
        })
        it('should display price IDR Rp 45930/mo', () => {
            cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() => {
                cy.contains(VerisignHelper.getIndonesianPricingCountryCode())
                cy.contains(VerisignHelper.getIndonesianCurrencySymbol())
                cy.contains(VerisignHelper.getIndonesianCampaignPrice())
            })
        })
    });
})

describe('Verisign Campaign Testflow 1- Pricing page for India',()=>{

    sizes.forEach((size) => {
        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(VerisignHelper.getIndianTfaPricingPageUrl());
        });

        it('testing on '+size, () => {
        })
        it('should have 5 Days Trial', () => {
            cy.get('.pv-section h1.pv-title').contains(VerisignHelper.getVerisignTrial())
        })
        it('should have .cc domain extension', () => {
            cy.get('.pv-section .plan-box .plan-box__list').contains('.cc')
        })
        it('should display price ₹230/mo', () => {
            cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() => {
                cy.contains(VerisignHelper.getIndianPricingCountryCode())
                cy.contains(VerisignHelper.getIndianCurrencySymbol())
                cy.contains(VerisignHelper.getIndianTfPrice())
            })
        })
    });
})
