import verisignHelper from '../verisignHelper'

var device = verisignHelper.getDeviceSize();

device.forEach((size) => {

    describe('Testing Indonesian-Verisign Tfc homepage on device '+size,()=>{
        beforeEach(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(verisignHelper.getIndonesianTfcUrl());
        });
        it('should have Promotional Sticker', () => {
            cy.get('.pv-banner .promo-sticker img').should('have.attr', 'src', '/images/indonesian_sticker.png')
        })
        it('should have .com domain extension in feature', () => {
            cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
        })
        it('should have 5 Days Trial', () => {
            cy.get('.pv-try .pv-title .pv-title__lead').contains(verisignHelper.getVerisignTrial())
        })
        it('should have promotional 73% discount on Rp 2.041.333 / tahun in pricing box', () => {
            cy.get('.pv-section .plan-box h2.plan-box__promotion').within(() => {
                cy.contains('PROMOSI')
                cy.contains('diskon 73% di')
                cy.contains(verisignHelper.getPagevampPriceForIndonesia())
            })
        })
        it('should display price IDRRp551.160', () => {
            cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() => {
                cy.contains(verisignHelper.getIndonesianPricingCountryCode())
                cy.contains(verisignHelper.getIndonesianCurrencySymbol())
                cy.contains(verisignHelper.getIndonesianCampaignPrice())
            })
        })
    })


    describe('Testing Indian-Verisign Tfc homepage on device '+size,()=>{
        beforeEach(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(verisignHelper.getIndianTfcUrl());
        });
        it('should have Promotional Sticker', () => {
            cy.get('.pv-banner .promo-sticker img').should('have.attr', 'src', '/images/indian_sticker.png')
        })
        it('should have .com domain extension in feature', () => {
            cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
        })
        it('should have 5 Days Trial', () => {
            cy.get('.pv-try .pv-title .pv-title__lead').contains(verisignHelper.getVerisignTrial())
        })
        it('should have promotional with 73% discount on ₹ 10,222/year in pricing box', () => {
            cy.get('.pv-section .plan-box h2.plan-box__promotion').within(() => {
                cy.contains('Promotional')
                cy.contains('73% discount on')
                cy.contains(verisignHelper.getPagevampPriceForIndia())
            })
        })
        it('should display price ₹2,760', () => {
            cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() => {
                cy.contains(verisignHelper.getIndianPricingCountryCode())
                cy.contains(verisignHelper.getIndianCurrencySymbol())
                cy.contains(verisignHelper.getIndianCampaignPrice())
            })
        })
    })
})
