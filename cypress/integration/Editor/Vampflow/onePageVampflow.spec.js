/// <reference types = "cypress"/>

import Pagevamp from './helper'

describe('Testing one page site creation', ()=>{
    beforeEach(function(){
        cy.login()
        cy.visit(Pagevamp.getOnePageAccountConfirmationUrl())
        cy.wait(4000)
    })
    it('Checking that user emails and site_language are prefilled in Account confirmation details',()=>{
        Pagevamp.getFacebookEmail('ujwal@pagevamp.com')
        Pagevamp.getSiteLanguage('English (US)')
        Pagevamp.getWebsiteTitle('')
        Pagevamp.getBusinessCategory('Business category')
    })
    it('Input Business details >> Skips Domain setup >> Demo page',()=>{
        cy.get('#select_5').click().then(($click)=>{
            cy.get('.md-select-menu-container #select_option_31').click()
        })
        cy.wait(3000)
        cy.get('#input_7').type('One Page')
        cy.get('#input_11').type('Samakhusi-23')
        cy.get('#input_12').type('Kathmandu,Nepal')
        cy.get('#input_13').type('977')
        cy.get('#input_14').type('9851287988')
        cy.get('#input_15').type('Welcome to my page')
        cy.get('.btn-submitting').click()
        cy.wait(4000)      
        cy.get('.btn-warning').click()
        cy.get('.modal-dialog .modal-footer .btn-warning').click()
        cy.url().should('include','/demo') 
    })

   
})