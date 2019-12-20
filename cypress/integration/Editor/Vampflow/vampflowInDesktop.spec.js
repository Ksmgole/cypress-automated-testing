import Pagevamp from "./functions"

    describe('Testing Pagevamp Vampflow in Desktop',()=>{

        beforeEach(() => {
            cy.login();
            cy.visit(Pagevamp.getAccountConfirmationUrl());
            cy.wait(6000);
            cy.get('#input_14').type('666666666');
            cy.get('.vamp-footer button.btn-submitting').click();
            cy.wait(6000);
        });
    
        it('should take to Demo page, if user clicks "Skip" in domain setup page',()=>{
            cy.get('.btn-warning').click()
            cy.get('.modal-dialog .modal-footer .btn-warning').click()
            cy.url().should('include', '/demo')
        });

        it('should take to Demo page, if user choose custom domain and click "Next"',()=>{
            cy.get('section.vamp-content .panel-group').eq(1).click()
            cy.get('.vamp-footer .btn-success').click()
            cy.url().should('include', '/demo')
        });

        it('should take to Demo page, if user choose sub-domain and click "Next"',()=>{
            cy.get('section.vamp-content .panel-group .choose-subdomain-vampflow').click()
            cy.get('.vamp-footer .btn-success').click()
            cy.url().should('include', '/demo')
        });
        
        it('should take to Demo page, if user choose link domain and click "Next"',()=>{
            cy.get('section.vamp-content .panel-group .choose-customdomain-vampflow').click()
            cy.get('.vamp-footer .btn-success').click()
            cy.url().should('include', '/demo')
        });
    })