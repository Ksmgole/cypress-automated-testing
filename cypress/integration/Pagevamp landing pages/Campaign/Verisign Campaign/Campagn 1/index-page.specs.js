import VerisignHelper from '../../Helper/verisignHelper'

let indonesianCfUrl = VerisignHelper.getIndonesianCfUrl(),
    indonesianCfPricingPageUrl=VerisignHelper.getIndonesianCfPricingPageUrl(),
    normalPagevampTrial = VerisignHelper.getNormalPagevampTrial(),
    usPricingCountryCode = VerisignHelper.getUsPricingCountryCode(),
    dollarCurrencySymbol = VerisignHelper.getDollarCurrencySymbol(),
    usPrice = VerisignHelper.getUsYearlyPrice(),
    indianTfaUrl = VerisignHelper.getIndianTfaUrl(),
    indianCfUrl= VerisignHelper.getIndianCfUrl(),
    indianCfPricingPageUrl = VerisignHelper.getIndianCfPricingPageUrl(),
    indianPricingCountryCode = VerisignHelper.getIndianPricingCountryCode(),
    indianCurrencySymbol = VerisignHelper.getIndianCurrencySymbol(),
    verisignTrial = VerisignHelper.getVerisignTrial(),
    indianTfPrice = VerisignHelper.getIndianTfPrice(),
    indianCfPrice = VerisignHelper.getIndianCfPrice(),
    sizes = ['iphone-6', 'ipad-2','iphone-4',[1500,1000]];



describe('Verisign Campaign Test flow 1 for India',()=>{

    sizes.forEach((size) => {

        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(VerisignHelper.getIndianTfaUrl());
        });

        it('testing on '+size, () => {

        })

        it('should have Promotional Sticker', () => {
            cy.get('.pv-banner .promo-sticker img').should('have.attr', 'src', '/images/indian_sticker.png')
        })
        it('should have .cc domain extension in index page >> feature section', () => {
            cy.get('.container .pv-cnt--sec .domain-cc img').should('have.attr', 'src').should('include', '/images/cc.svg')
        })

        it('should have 5 Days Trial in index page', () => {
            cy.get('.pv-try .pv-title .pv-title__lead').contains(verisignTrial)
        })

        it('should have promotional 73% discount sticker in pricing box(index page)', () => {
            cy.get('.pv-section .plan-box h2.plan-box__promotion').within(() => {
                cy.contains('Promotional')
                cy.contains('73% discount')
            })
        })
        it('should display price ₹230/mo currency in index page', () => {
            cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() => {
                cy.contains(indianPricingCountryCode)
                cy.contains(indianCurrencySymbol)
                cy.contains(indianTfPrice)
            })
        })

    });
})
