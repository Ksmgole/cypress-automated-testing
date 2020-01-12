import pv from '../helper'
import pvLandingpage from '../pagevamp'

describe('Checking Header Navigation',()=>{
    beforeEach(function() {
        cy.visit(pv.getSpanishUrl());
    });
    it('should have EU cookie policy banner on top',() => {
        pvLandingpage.checkEuCookieBanner()
    })
    it("How it works link scrolls to its section and has 'watch it in action' video",()=>{
        pvLandingpage.checkHowItWorksSection('Sitio web en segundos')
    })
    it('"Pricing" link opens pricing page',()=>{
        pvLandingpage.checkHeaderPricingLink()
    })
    it('"Features" link opens features page',()=>{
        pvLandingpage.checkHeaderFeaturesLink()
    })
    it('"Login" link opens Login popup',()=>{
        pvLandingpage.checkLoginLink()
    })
    it('"Create Website" link opens Continue with Facebook popup',()=>{
        pvLandingpage.checkCreateWebsiteLink()
    })
    it('"Partners" link opens reseller signup page', ()=>{
        pvLandingpage.checkHeaderPartnersLink()
    })
})
describe('Checking Banner section',()=>{
    before(function() {
        cy.visit(pv.getSpanishUrl());
    })
    it('should have banner text "build you in one seconds"',()=>{
        pvLandingpage.checkBannerText('Obtenga más clientes con un hermoso sitio web. Déjanos construirle uno en segundos.')
    })
    it('should have banner image',()=>{
        pvLandingpage.checkBannerImage()
    })
    it('"Start for Free" btn opens Continues with Facebook popup',()=>{
        pvLandingpage.checkBannerStartForFreeCta()
    })
})
describe('Checking Business Value section',()=>{
    beforeEach(function() {
        cy.visit(pv.getSpanishUrl())
    })
    it('"Get Facebook" link should open Facebook Page create',()=>{
        pvLandingpage.checkFacebookPageCreateLink()
    })
})
describe('Checking Features section',()=>{
    beforeEach(function() {
        cy.visit(pv.getSpanishUrl())
    })
    it('should have .com domain extension in feature section',() => {
        pvLandingpage.checkComDomain()
    })
    it('"View all features" opens features page',()=>{
        pvLandingpage.checkViewAllFeaturesLink()
    })
})
describe('Checking Support Team section',()=>{
    beforeEach(function() {
        cy.visit(pv.getSpanishUrl())
    })
    it('"Contact Us" should open intercom',() => {
       pvLandingpage.checkContactUs()
    })
})
describe('Checking Partners section',()=>{
    beforeEach(function() {
        cy.visit(pv.getSpanishUrl())
    })
    it('"Our Partners" should open reseller signup page',() => {
       pvLandingpage.checkOurPartnersLink()
    })
    it('Press logos should open respective links',()=>{
       pvLandingpage.checkPressLogo()
    })
})
describe('Checking Trial section',()=>{
    beforeEach(function() {
        cy.visit(pv.getSpanishUrl())
    })
    it('should contain 14 days Trial',() => {
        pvLandingpage.checkTrialOnIndexPage()
    })
    it('"Start for Free" opens Continue With Facebook popup',()=>{
       pvLandingpage.checkStartForFreeOnTrialSection()
    })
})
describe('Checking Pricing section',()=>{
    beforeEach(function() {
        cy.visit(pv.getSpanishUrl())
    })
    it('Yearly plan should have €144 with free domain',() => {
        pvLandingpage.checkYearlyPlanOnIndexPage()
    })
    it('Monthly plan should have €15 per month with domain price €12/year',() => {
        pvLandingpage.checkMonthlyPlanOnIndexPage()
    })
    it('"Get Pagevamp"cta opens Continue with Facebook popup',()=>{
        pvLandingpage.checkGetPagevampCtaOnPricingSection()
    })   
})
describe('Checking Footer section',()=>{
    beforeEach(function() {
        cy.visit(pv.getSpanishUrl())
    })
    it('"Get Pagevamp"cta opens Continue with Facebook popup',()=>{
        pvLandingpage.checkGetPagevampCtaOnFooter()
    })
    it('"About" link opens About us page',()=>{
        pvLandingpage.checkAboutLink()
    })
    it('"Features" link opens feature page',()=>{
        pvLandingpage.checkFooterFeaturesLink()
    })
    it('"Careers" links to Pagevamp Angel List page',()=>{
        pvLandingpage.checkFooterCareersLink()
    })
    it('"Partners" link opens reseller signup page',()=>{
        pvLandingpage.checkFooterPartnersLink()
    })
    it('"Pricing" link opens pricing page',()=>{
        pvLandingpage.checkFooterPricingLink()
    })
    it('"Business Spotlight" link opens pricing page',()=>{
        pvLandingpage.checkBusinessSpotlightLink()
    })
    it('"Help Center" links to Pagevamp Zendesk page',()=>{
        pvLandingpage.checkFooterHelpCenterLink()
    })
    it('"FAQ" links to Pagevamp Zendesk page',()=>{
        pvLandingpage.checkFooterFaqLink()
    })
    it('"Contact" link opens Intercom',()=>{
        pvLandingpage.checkFooterContactLink()
    })
    it('"Facebook" links to Pagevamp facebook page',()=>{
        pvLandingpage.checkFooterFbLink()
    })
    it('"Angel List" links to Pagevamp Angel List page ',()=>{
        pvLandingpage.checkFooterAngelListLink()
    })
    it('"Linkedin" links to Pagevamp Linkedin page',()=>{
        pvLandingpage.checkFooterLinkedinLink()
    })
    it('"Youtube" links to Pagevamp Youtube page',()=>{
        pvLandingpage.checkFooterYoutubeLink()
    })
    it('"Terms of Service" links to Pagevamp terms of service page',()=>{
        pvLandingpage.checkTermsOfServiceLink()
    })
    it('"Privacy Policy" links to Pagevamp policy page',()=>{
        pvLandingpage.checkPrivacyPolicyLink()
    })
    it('"Getting Started" links to getting started page',()=>{
        pvLandingpage.checkGettingStartedLink()
    })
})