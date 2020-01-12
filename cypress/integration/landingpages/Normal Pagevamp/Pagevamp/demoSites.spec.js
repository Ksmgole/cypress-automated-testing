import pv from '../helper'

describe('Checking three demo sites',()=>{
    beforeEach(function(){
        cy.visit(pv.getPagevampUrl());
    })
 
    it('checking J&D Expresso site',()=>{
        cy.get('.pv-section-cnt .pv-block-divide a[data-url="'+pv.getJdespressoSiteLink()+'"]').click()
        cy.wait(6000)
        cy.get('#sample-site .modal-body .pv-loading__overlay').should('have.attr','style','display: none;')
        cy.get('.modal-body .scroll-wrapper iframe').should('have.attr','src',pv.getJdespressoSiteLink())
    })
    it('Checking Glamour by Linda Radostová site',()=>{
        cy.get('.pv-section-cnt .pv-block-divide a[data-url="'+pv.getGlamourSiteLink()+'"]').click()
        cy.wait(6000)
        cy.get('#sample-site .modal-body .pv-loading__overlay').should('have.attr','style','display: none;')
        cy.get('.modal-body .scroll-wrapper iframe').should('have.attr','src',pv.getGlamourSiteLink())
    })
    it('Checking Meet Social Grill site ',()=>{
        cy.get('.pv-section-cnt .pv-block-divide a[data-url="'+pv.getMeetSocialGrillSiteLink()+'"]').click()
        cy.wait(6000)
        cy.get('#sample-site .modal-body .pv-loading__overlay').should('have.attr','style','display: none;')
        cy.get('.modal-body .scroll-wrapper iframe').should('have.attr','src',pv.getMeetSocialGrillSiteLink())
    })

}) 