import verisignHelper from '../verisignHelper'
import verisign from '../verisign'


var device = verisignHelper.getDeviceSize();

device.forEach((size) => {
    
    describe('Testing Indonesian-Verisign Tfa pricing page on device: '+size,()=>{
        beforeEach(function(){
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(verisignHelper.getIndonesianTfaPricingPageUrl());
        })
        it('should have 5 Days Trial', () => {
            verisign.checkVerisignTrialOnPricingPage()
        })
        it('should have .com, .net, .org or .cc domain extensions',() => {
            verisign.checkDomainExtensionOnPricingPage()
        })
        it('should have promotional 73% discount on Rp 2.041.333 / tahun in pricing box', () => {
            verisign.checkPromotionalDiscountOnPricingPage('PROMOSI','diskon 73% di',verisignHelper.getPagevampPriceForIndonesia())
        })
        it('should display price IDRRp551.160', () => {
            verisign.checkPriceOnPricingPage(verisignHelper.getIndonesianPricingCountryCode(),verisignHelper.getIndonesianCurrencySymbol(),verisignHelper.getIndonesianCampaignPrice())
        })  
    })

    describe('Testing Indian-Verisign Tfa pricing page on device: ' +size,()=>{
        beforeEach(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(verisignHelper.getIndianTfaPricingPageUrl());
        });
        it('should have 5 Days Trial', () => {
            verisign.checkVerisignTrialOnPricingPage()
        })
        it('should have .com, .net, .org or .cc domain extensions',() => {
            verisign.checkDomainExtensionOnPricingPage()
        })
        it('should have promotional with 73% discount on ₹ 10,222/year in pricing box', () => {
            verisign.checkPromotionalDiscountOnPricingPage('Promotional','73% discount on',verisignHelper.getPagevampPriceForIndia())
        })
        it('should display price ₹2,760', () => {
            verisign.checkPriceOnPricingPage(verisignHelper.getIndianPricingCountryCode(),verisignHelper.getIndianCurrencySymbol(),verisignHelper.getIndianCampaignPrice())
        })
    })
})