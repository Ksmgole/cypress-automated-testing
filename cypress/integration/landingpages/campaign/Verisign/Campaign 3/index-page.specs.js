import verisignHelper from '../verisignHelper'
import verisign from '../verisign'

var device = verisignHelper.getDeviceSize();

device.forEach((size) => {

    describe('Testing Indonesian-Verisign Tfc homepage on device: '+size,()=>{
        beforeEach(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(verisignHelper.getIndonesianTfcUrl());
        });
        it('should have Promotional Sticker', () => {
            verisign.checkPromotionalSticker('/images/indonesian_sticker.png')
        })
        it('should have 5 Days Trial', () => {
            verisign.checkVerisignTrialOnIndexPage()
        })
        it('should have promotional 73% discount on Rp 2.041.333 / tahun in pricing box', () => {
            verisign.checkPromotionalDiscountOnIndexPage('PROMOSI','diskon 73% di',verisignHelper.getPagevampPriceForIndonesia())   
        })
        it('should display price IDR Rp 551.160', () => {
            verisign.checkPriceOnIndexPage(verisignHelper.getIndonesianPricingCountryCode(),verisignHelper.getIndonesianCurrencySymbol(),verisignHelper.getIndonesianCampaignPrice())
        })
        it('should have .com,.net,.org and .cc domain extension in pricing section', () => {
            verisign.checkDomainExtensionOnIndexpage()
        })
    })


    describe('Testing Indian-Verisign Tfc homepage on device: '+size,()=>{
        beforeEach(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(verisignHelper.getIndianTfcUrl());
        });
        it('should have Promotional Sticker', () => {
            verisign.checkPromotionalSticker('/images/indian_sticker.png')
        })
        it('should have 5 Days Trial', () => {
            verisign.checkVerisignTrialOnIndexPage(verisignHelper.getVerisignTrial())
        })
        it('should have promotional with 73% discount on ₹ 10,222/year in pricing box', () => {
            verisign.checkPromotionalDiscountOnIndexPage('Promotional','73% discount on',verisignHelper.getPagevampPriceForIndia())
        })
        it('should display price ₹2,760', () => {
            verisign.checkPriceOnIndexPage(verisignHelper.getIndianPricingCountryCode(),verisignHelper.getIndianCurrencySymbol(),verisignHelper.getIndianCampaignPrice())
        })
        it('should have .com,.net,.org and .cc domain extension in pricing section', () => {
            verisign.checkDomainExtensionOnIndexpage()
        })
    })
})
