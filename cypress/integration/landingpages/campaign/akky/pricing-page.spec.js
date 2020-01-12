import akkyHelper from './akkyHelper';
import akky from './akky';


var device = akkyHelper.getDeviceSize();

device.forEach((size) => {

    describe('Akky landing page - pricing page on device: '+size,()=>{
        beforeEach(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(akkyHelper.getAkkyPricingPageUrl());
        });
        it('should have 14 Days Trial',() => {
            akky.checkTrialOnPricingPage()
        })
        it('should have Akky own domain prices',() => {
            akky.checkDomainOnPricingPage()
        })
        it('should have Akky contact message',() => {
            akky.checkAkkyContactText()
        })
    })
})
