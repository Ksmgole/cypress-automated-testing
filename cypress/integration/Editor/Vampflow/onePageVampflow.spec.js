/// <reference types = "cypress"/>

import Pagevamp from './helper'

describe('Testing one page site creation', ()=>{
    const onePage = new Pagevamp()
    beforeEach(()=>{
        onePage.navigateOnePageUrl()
        cy.wait(3000)
    })
    it('Checking that user emails and site_language are prefilled in Account confirmation details',()=>{
        onePage.validateUserEmail('ujwal@pagevamp.com')
        onePage.validateSiteLanguage('English (US)')
        onePage.validateWebsiteTitle()
        onePage.validateBusinessCategory()
    })
    it('Input Business details >> Skips Domain setup >> Demo page',()=>{
        onePage.selectBusinessCategory()
        cy.wait(3000)
        onePage.inputWebsiteTitle('One Page')
        onePage.inputPhoneNumber('9851287988')
        onePage.inputBusinessDescription('Welcome to my page')
        onePage.submitBusinessDetails()
        cy.wait(4000)
        onePage.skipDomainSetup()
        onePage.verifyDemoPage('/demo')
    })
   
})