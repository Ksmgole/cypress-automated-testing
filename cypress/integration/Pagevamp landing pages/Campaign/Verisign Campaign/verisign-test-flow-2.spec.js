import VerisignHelper from '../Helper/verisignHelper'

var indonesianTfbUrl = VerisignHelper.getIndonesianTfbUrl(),
    indonesianTfbPricingPageUrl = VerisignHelper.getIndonesianTfbPricingPageUrl(),
    indianTfbUrl = VerisignHelper.getIndianTfbUrl(),
    indianTfbPricingPageUrl = VerisignHelper.getIndianTfbPricingPageUrl(),
    indonesianPricingCountryCode = VerisignHelper.getIndonesianPricingCountryCode(),
    indonesianCurrencySymbol = VerisignHelper.getIndonesianCurrencySymbol(),
    indonesianCampaignPrice = VerisignHelper.getIndonesianCampaignPrice(),
    indianPricingCountryCode = VerisignHelper.getIndianPricingCountryCode(),
    indianCurrencySymbol = VerisignHelper.getIndianCurrencySymbol(),
    indianTfPrice = VerisignHelper.getIndianTfPrice(),
    verisignTrial = VerisignHelper.getVerisignTrial();


describe('Verisign Campaign Test flow 2 for Indonesia',()=>{
    it('should have Promotional Sticker',() => {
        cy.visit(indonesianTfbUrl)        
        cy.get('.pv-banner .promo-sticker img').should('have.attr', 'src', '/images/indonesian_sticker.png')
    })
    it('should have .com domain extension in index page >> feature section',() => {
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
    })
    it('should have 5 Days Trial in index page',() => {
        cy.get('.pv-try .pv-title .pv-title__lead').contains(verisignTrial)
    })
    it('should have 5 Days Trial in pricing page',() => {
        cy.visit(indonesianTfbPricingPageUrl)
        cy.get('.pv-section h1.pv-title').contains(verisignTrial)
    })
    it('should have promotional 73% discount sticker in pricing box(index page)',() => {
        cy.visit(indonesianTfbUrl)        
        cy.get('.pv-section .plan-box h2.plan-box__promotion').within(() =>{
            cy.contains('PROMOSI')
            cy.contains('73% Diskon')
        })
    })
    it('should display price IDR Rp45930/mo currency in index page',() => {
        cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() =>{
            cy.contains(indonesianPricingCountryCode)
            cy.contains(indonesianCurrencySymbol)
            cy.contains(indonesianCampaignPrice)
        })
    })
    it('should display price IDR Rp45930/mo currency in pricing page',() => {
        cy.visit(indonesianTfbPricingPageUrl)        
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains(indonesianPricingCountryCode)
            cy.contains(indonesianCurrencySymbol)
            cy.contains(indonesianCampaignPrice)
        })
    })
    it('should have .com, .net, .org or .cc domain extensions in pricing page',() => {
        cy.visit(indonesianTfbPricingPageUrl)   
        cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
            cy.contains(".com")
            cy.contains(".net")
            cy.contains(".org")
            cy.contains(".cc")
        })
    })
    it('should have Pagevamp youtube video(without 14 days trial) in "How it works >> Watch it in action" link',() => {
        cy.visit(indonesianTfbUrl)        
        cy.get('#how-it-works-link').click()
        cy.get('.modal-content iframe.embed-responsive-item').should('have.attr', 'src', 'https://www.youtube.com/embed/DrTj9mUD2MY?enablejsapi=1')
        cy.get('#how-it-works-section a.link').click().invoke('css','display', 'block')
    })
})


describe('Verisign Campaign Test flow 2 for India',()=>{
    it('should have Promotional Sticker',() => {
        cy.visit(indianTfbUrl)        
        cy.get('.pv-banner .promo-sticker img').should('have.attr', 'src', '/images/indian_sticker.png')
    })
    it('should have .com domain extension in index page >> feature section',() => {
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
    })
    it('should have 5 Days Trial in index page',() => {
        cy.get('.pv-try .pv-title .pv-title__lead').contains(verisignTrial)
    })
    it('should have 5 Days Trial in pricing page',() => {
        cy.visit(indianTfbPricingPageUrl)
        cy.get('.pv-section h1.pv-title').contains(verisignTrial)
    })
    it('should have promotional 73% discount sticker in pricing box(index page)',() => {
        cy.visit(indianTfbUrl)        
        cy.get('.pv-section .plan-box h2.plan-box__promotion').within(() =>{
            cy.contains('Promotional')
            cy.contains('73% discount')
        })
    })
    it('should display price ₹230/mo currency in index page',() => {
        cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() =>{
            cy.contains(indianPricingCountryCode)
            cy.contains(indianCurrencySymbol)
            cy.contains(indianTfPrice)
        })
    })
    it('should display price ₹230/mo currency in pricing page',() => {
        cy.visit(indianTfbPricingPageUrl)
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains(indianPricingCountryCode)
            cy.contains(indianCurrencySymbol)
            cy.contains(indianTfPrice)
        })
    })
    it('should have .com, .net, .org or .cc domain extensions in pricing page',() => {
        cy.visit(indianTfbPricingPageUrl)   
        cy.get('.pv-section .plan-box .plan-box__list').within(() =>{
            cy.contains(".com")
            cy.contains(".net")
            cy.contains(".org")
            cy.contains(".cc")
        })
    })
    it('should have Pagevamp youtube video(without 14 days trial) in "How it works >> Watch it in action" link',() => {
        cy.visit(indianTfbUrl)        
        cy.get('#how-it-works-link').click()
        cy.get('.modal-content iframe.embed-responsive-item').should('have.attr', 'src', 'https://www.youtube.com/embed/DrTj9mUD2MY?enablejsapi=1')
        cy.get('#how-it-works-section a.link').click().invoke('css','display', 'block')
    })
})