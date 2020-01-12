import akkyHelper from './akkyHelper';
import akky from './akky';


var device = akkyHelper.getDeviceSize();

device.forEach((size) => {

    describe('Akky Landing page - index page on device: ',()=>{
        beforeEach(function() {
            cy.visit(akkyHelper.getAkkyUrl());
        });
        it('should have Akky logo', () => {
            akky.checkAkkylogo()
        })
        it('should have .mx domain extension in index page >> feature section',() => {
            akky.checkMxDomainExtention()
        })
        it('should have 14 Days Trial',() => {
            akky.checkTrialOnIndexPage()
        })
        it('should have Akky texts in pricing section',() => {
           akky.checkAkkyPricingText()
        })
        it('should have promotional 50% discount sticker in pricing box(index page)',() => {
            akky.checkPromotionalDiscount()
        })
        it('should have USD $72 plan in pricing section',() => {
            akky.checkAkkyPriceOnIndexPage()
        })
        it('should have Akky support link in intercom',() => {
            akky.checkAkkySupportLink()
        })
    })
})