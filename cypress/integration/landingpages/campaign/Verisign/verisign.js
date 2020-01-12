import verisignHelper from './verisignHelper'

class verisign {
    static checkPromotionalSticker(img){
        cy.get('.pv-banner .promo-sticker img').should('have.attr', 'src',img)
    }
    static checkVerisignTrialOnIndexPage(){
        cy.get('.pv-try .pv-title .pv-title__lead').contains(verisignHelper.getVerisignTrial())
    }
    static checkPromotionalDiscountOnIndexPage(promo, discount, price){
        cy.get('.pv-section .plan-box h2.plan-box__promotion').within(() => {
            cy.contains(promo)
            cy.contains(discount)
            cy.contains(price)
        })
    }
    static checkPriceOnIndexPage(code,currency, price) {
        cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() => {
            cy.contains(code)
            cy.contains(currency)
            cy.contains(price)
        })
    }
    static checkDomainExtensionOnIndexpage(){
        cy.get('.plan-box > .pv-cta > :nth-child(2)').within(()=>{
            cy.url().then(($url)=>{
                if(($url.includes('/?desh=id'))){
                    cy.contains('(.com, .net , .org dan .cc)')
                }
                if(($url.includes('/?desh=in'))){
                    cy.contains('(.com, .net, .org and .cc)')
                }
            })
        })
    }
   static checkVerisignTrialOnPricingPage(){
        cy.get('.pv-section h1.pv-title').contains(verisignHelper.getVerisignTrial())
   }
   static checkDomainExtensionOnPricingPage(){
        cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
            cy.contains(".com")
            cy.contains(".net")
            cy.contains(".org")
            cy.contains(".cc")
        })
   }
   static checkPromotionalDiscountOnPricingPage(promo, discount, price){
        cy.get('.pv-section .plan-box h2.plan-box__promotion').within(() => {
            cy.contains(promo)
            cy.contains(discount)
            cy.contains(price)
        })
    }
    static checkPriceOnPricingPage(code,currency, price) {
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() => {
            cy.contains(code)
            cy.contains(currency)
            cy.contains(price)
        })
    }
}

export default verisign