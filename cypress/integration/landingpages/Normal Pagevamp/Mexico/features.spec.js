import pv from '../helper'
import pvLandingpage from '../pagevamp'

describe('Checking Features page',()=>{
    before(function(){
        cy.visit(pv.getMexicoFeaturesPageUrl())
    })
    it('should have 24/7 Support Text',()=>{
        cy.get('.p-b-0 > :nth-child(1) > .col-md-8 > .row > :nth-child(1) > .pv-cnt > .pv-cnt__title').contains('Atención Personalizada, Tel. es: +52 (81) 8864-2626')
    })
    it('"Support docs" should link to Pagevamp Zendesk page',()=>{
        cy.get('.pv-cnt__txt > .link').should('have.attr','href',pv.getPagevampZendeskPageUrl())
    })
})

