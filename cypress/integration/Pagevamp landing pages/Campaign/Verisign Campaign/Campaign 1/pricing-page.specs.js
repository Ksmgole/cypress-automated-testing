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
        it('should have .com, .net, .org or .cc domain extensions',() => {
            cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
                cy.contains(".com")
                cy.contains(".net")
                cy.contains(".org")
                cy.contains(".cc")
            })
        })
        it('should have promotional 73% discount on Rp 2.041.333 / tahun in pricing box', () => {
            cy.get('.pv-section .plan-box h2.plan-box__promotion').within(() => {
                cy.contains('PROMOSI')
                cy.contains('diskon 73% di')
                cy.contains(VerisignHelper.getPagevampPriceForIndonesia())

            })
        })
        it('should display price IDRRp551.160', () => {
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
        it('should have .com, .net, .org or .cc domain extensions',() => {
            cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
                cy.contains(".com")
                cy.contains(".net")
                cy.contains(".org")
                cy.contains(".cc")
            })
        })
        it('should have promotional with 73% discount on ₹ 10,222/year in pricing box', () => {
            cy.get('.pv-section .plan-box h2.plan-box__promotion').within(() => {
                cy.contains('Promotional')
                cy.contains('73% discount on')
                cy.contains(VerisignHelper.getPagevampPriceForIndia())
            })
        })
        it('should display price  ₹2,760', () => {
            cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() => {
                cy.contains(VerisignHelper.getIndianPricingCountryCode())
                cy.contains(VerisignHelper.getIndianCurrencySymbol())
                cy.contains(VerisignHelper.getIndianTfPrice())
            })
        })
    });
})
