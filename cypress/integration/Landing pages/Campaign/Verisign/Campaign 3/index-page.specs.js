import verisignHelper from '../verisignHelper'

var device = verisignHelper.getDeviceSize();
describe('Verisign Campaign Testflow 3 -Index page for Indonesia',()=>{

        device.forEach((size) => {
            it('Testing on '+size, () => {
                    cy.viewport(size)
                    cy.visit(verisignHelper.getIndonesianTfcUrl());
                    cy.get('.pv-banner .promo-sticker img').should('have.attr', 'src', '/images/indonesian_sticker.png')
                    cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
                    cy.get('.pv-try .pv-title .pv-title__lead').contains(verisignHelper.getVerisignTrial())
                    cy.get('.pv-section .plan-box h2.plan-box__promotion').within(() => {
                        cy.contains('PROMOSI')
                        cy.contains('diskon 73% di')
                        cy.contains(verisignHelper.getPagevampPriceForIndonesia())
                    })
                    cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() => {
                        cy.contains(verisignHelper.getIndonesianPricingCountryCode())
                        cy.contains(verisignHelper.getIndonesianCurrencySymbol())
                        cy.contains(verisignHelper.getIndonesianCampaignPrice())
                    })
            })
        })
})

describe('Verisign Campaign Testflow 3 - Index page for India',()=>{
    device.forEach((size) => {
        it('Testing on '+size, () => {
                cy.viewport(size)
                cy.visit(verisignHelper.getIndianTfcUrl());
                cy.get('.pv-banner .promo-sticker img').should('have.attr', 'src', '/images/indian_sticker.png')
                cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
                cy.get('.pv-try .pv-title .pv-title__lead').contains(verisignHelper.getVerisignTrial())
                cy.get('.pv-section .plan-box h2.plan-box__promotion').within(() => {
                    cy.contains('PROMOSI')
                    cy.contains('diskon 73% di')
                    cy.contains(verisignHelper.getPagevampPriceForIndia())
                })
                cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() => {
                    cy.contains(verisignHelper.getIndianPricingCountryCode())
                    cy.contains(verisignHelper.getIndianCurrencySymbol())
                    cy.contains(verisignHelper.getIndianTfPrice())
                })
        })
    })

})
