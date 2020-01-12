import pv from '../helper'
import pvLandingpage from '../pagevamp'

describe('Checking Pricing Page',()=>{
    before(function(){
        cy.visit(pv.getMexicoPricingPageUrl())
    })
    it('should have 14 days Trial',()=>{
        pvLandingpage.checkTrialOnPricingPage()
    })
    it('Yearly plan should have MXN $2700 with free domain',() => {
        pvLandingpage.checkYearlyPlanOnPricingPage()
    })
    it('Monthly plan should have MXN $280 per month with domain price $225/year',() => {
        pvLandingpage.checkMonthlyPlanOnPricingPage()
    })
    it('"Get Pagevamp"cta opens MX policy popup and then Continue with Facebook popup',()=>{
        pvLandingpage.checkGetPagevampCtaOnPricingPage()
    }) 
})

describe('Checking FAQ section',()=>{
    before(function(){
        cy.visit(pv.getMexicoPricingPageUrl())
    })
    it('FAQ toggle is working properly',()=>{
        pvLandingpage.checkFaqtoggle()
    })
    it('FAQ 2nd: "Connect it" link opens Pagevamp Zendesk support page for domain connection',()=>{
        pvLandingpage.checkFaqConnectItLink()
    })
    it('FAQ 3nd: "Instructions" link opens Pagevamp Zendesk support page for domain connection',()=>{
        pvLandingpage.checkFaqInstructionsLink()
    })
    it('FAQ 6th: Email services links open respective pages',()=>{
        pvLandingpage.checkFaqEmailServicesLinks()
    })
    it('FAQ 7th:Click Here cta links opens Continue with Facebook popup',()=>{
        pvLandingpage.checkFaqClickHere()
    })
})