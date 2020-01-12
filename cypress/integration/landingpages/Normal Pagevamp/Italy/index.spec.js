import pv from '../helper'
import pvLandingpage from '../pagevamp'

describe('Checking Header Navigation',()=>{
        beforeEach(function() {
            cy.visit(pv.getItalianUrl());
        });
        it('should have EU cookie policy banner on top',() => {
            pvLandingpage.checkEuCookieBanner()
        })
        it("How it works link scrolls to its section and doesn't have 'watch it in action' video",()=>{
            pvLandingpage.checkHowItWorksSection('Sito web in pochi secondi')
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
        it('"Create Website" link opens IT policy popup and then Continue with Facebook popup',()=>{
            pvLandingpage.checkCreateWebsiteLink()
        })
        it('"Partners" link opens reseller signup page', ()=>{
            pvLandingpage.checkHeaderPartnersLink()
        })
})

describe('Checking Banner section',()=>{
    before(function() {
        cy.visit(pv.getItalianUrl());
    })
    it('should have banner text "build you in one seconds"',()=>{
        pvLandingpage.checkBannerText('Ottieni più clienti con un sito web bellissimo. Fattene costruire uno da noi in pochi secondi.')
    })
    it('should have banner image',()=>{
        pvLandingpage.checkBannerImage()
    })
    it('"Start for Free" btn opens IT policy popup and then Continue with Facebook popup',()=>{
        pvLandingpage.checkBannerStartForFreeCta()
    })
})

describe('Checking Business Value section',()=>{
    beforeEach(function() {
        cy.visit(pv.getItalianUrl())
    })
    it('"Get Facebook" link should open Facebook Page create',()=>{
        pvLandingpage.checkFacebookPageCreateLink()
    })
})

describe('Checking Features section',()=>{
    beforeEach(function() {
        cy.visit(pv.getItalianUrl())
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
        cy.visit(pv.getItalianUrl())
    })
    it('"Contact Us" should open IT contact widget',() => {
       pvLandingpage.checkContactUs()
    })
})

describe('Checking Partners section',()=>{
    beforeEach(function() {
        cy.visit(pv.getItalianUrl())
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
        cy.visit(pv.getItalianUrl())
    })
    it('should contain 14 days Trial',() => {
        pvLandingpage.checkTrialOnIndexPage()
    })
    it('Start for Free" btn opens IT policy popup and then Continue with Facebook popup',()=>{
       pvLandingpage.checkStartForFreeOnTrialSection()
    })
})

describe('Checking Pricing section',()=>{
    beforeEach(function() {
        cy.visit(pv.getItalianUrl())
    })
    it('Yearly plan should have €144 +IVA with free domain',() => {
        pvLandingpage.checkYearlyPlanOnIndexPage()
    })
    it('Monthly plan should have €15 +IVA per month with domain price €15/year',() => {
        pvLandingpage.checkMonthlyPlanOnIndexPage()
    })
    it('"Get Pagevamp"cta opens IT policy popup and then Continue with Facebook popup',()=>{
        pvLandingpage.checkGetPagevampCtaOnPricingSection()
    })   
})

describe('Checking Footer section',()=>{
    beforeEach(function() {
        cy.visit(pv.getItalianUrl())
    })
    it('"Get Pagevamp"cta opens IT policy popup and then Continue with Facebook popup',()=>{
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
    it('"Contact" should open IT contact widget',()=>{
        pvLandingpage.checkFooterContactLink()
    })
    it('"Facebook" links to Pagevamp facebook page',()=>{
        pvLandingpage.checkFooterFbLink()
    })
    it('"Angel List" links to Pagevamp Angel List page',()=>{
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
    it('"Policy" links to Pagevamp policy page',()=>{
        pvLandingpage.checkPrivacyPolicyLink()
    })
    it('"Cookie Policy" link opens IT Cookie policy page',()=>{
        pvLandingpage.checkItCookiePolicyLink()
    })
    it('"Getting Started" links to getting started page',()=>{
        pvLandingpage.checkGettingStartedLink()
    })
    it('"Sediin" logo links to Sediin site',()=>{
        pvLandingpage.checkSediinLogoLink()
    })
})
