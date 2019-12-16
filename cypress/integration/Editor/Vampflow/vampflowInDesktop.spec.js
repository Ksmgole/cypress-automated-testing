import Pagevamp from "./functions"

    describe('Pagevamp Vampflow in Desktop',()=>{

        beforeEach(() => {
            cy.login();
            cy.request(Pagevamp.deletePage());
            cy.visit(Pagevamp.getSelectPageUrl());
            cy.wait(15000);
            cy.get(':nth-child(1) > .media').click();
            cy.get('.btn').click();
            cy.get('#input_29').type('666666666');
            cy.get('.btn > .ng-binding').click();
            cy.wait(15000);
        });
    
        it('should take to Demo page, if user clicks "Skip" in domain setup page',()=>{
            cy.get('.btn-warning').click()
            cy.get('.modal-footer > .row > .text-right > .btn').click()
            cy.url().should('include', '/demo')
        });

        it('should take to Demo page, if user choose custom domain and click "Next"',()=>{
            cy.get('.btn-success > .ng-binding').click()
            cy.url().should('include', '/demo')
        });

        it('should take to Demo page, if user choose sub-domain and click "Next"',()=>{
            cy.get('section.vamp-content .panel-group').eq(1).click()
            cy.get('.btn-success > .ng-binding').click()
            cy.url().should('include', '/demo')
        });
        it('should take to Demo page, if user choose link domain and click "Next"',()=>{
            cy.get('section.vamp-content .panel-group').eq(1).click()
            cy.get('.btn-success > .ng-binding').click()
            cy.url().should('include', '/demo')
        });
    });