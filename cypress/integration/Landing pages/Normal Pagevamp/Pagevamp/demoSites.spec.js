import pagevampHelper from '../pvHelper'

describe('Checking Pagevamp three demo sites',()=>{
    beforeEach(function(){
        cy.visit(pagevampHelper.getPagevampUrl());
    })
    it('should open J&D Expresso site when J&D Expression section "View Site" is clicked',()=>{
        cy.get('.pv-section-cnt .pv-block-divide a[data-url="https://jdespresso1.pagevamp.com"]').click()
        cy.wait(6000)
        cy.get('#sample-site .modal-body .pv-loading__overlay').should('have.attr','style','display: none;')
        cy.get('.modal-body .scroll-wrapper iframe').should('have.attr','src','https://jdespresso1.pagevamp.com')
    })
    it('should open Glamour by Linda Radostová site when Glamour by Linda Radostová "View Site" is clicked',()=>{
        cy.get('.pv-section-cnt .pv-block-divide a[data-url="https://glamourbylr1.pagevamp.com"]').click()
        cy.wait(6000)
        cy.get('#sample-site .modal-body .pv-loading__overlay').should('have.attr','style','display: none;')
        cy.get('.modal-body .scroll-wrapper iframe').should('have.attr','src','https://glamourbylr1.pagevamp.com')
    })
    it('should open Meet Social Grill site when Meet Social Grill "View Site" is clicked',()=>{
        cy.get('.pv-section-cnt .pv-block-divide a[data-url="https://meetsocialgrill1.pagevamp.com"]').click()
        cy.wait(6000)
        cy.get('#sample-site .modal-body .pv-loading__overlay').should('have.attr','style','display: none;')
        cy.get('.modal-body .scroll-wrapper iframe').should('have.attr','src','https://meetsocialgrill1.pagevamp.com')
    })

}) 