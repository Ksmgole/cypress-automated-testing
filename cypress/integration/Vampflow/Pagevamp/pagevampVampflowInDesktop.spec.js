import Pagevamp from "./functions.spec"

    describe('Pagevamp Vampflow in Desktop',()=>{

        beforeEach(() => {
            window.localStorage.setItem("pvpreview.access_token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnB2ZGVtby5jb21cL2p1c3QtbG9naW4iLCJpYXQiOjE1NzQ3NjU2MDgsImV4cCI6MTU3NDc3MjgwOCwibmJmIjoxNTc0NzY1NjA4LCJqdGkiOiJNUldldG1TMUl0ZncweWNSIiwic3ViIjoxMDcsInBydiI6IjcyY2Y4Njg4NzY4MjkwYTVjZTUyMGZkODE1ZmY3YTBjMTg5YjBiMDgifQ.NTi4BgmDAw2ptw7i2P9Vg3Dvcw2xD0L5Tr5RCsOaj4Y");
            cy.visit("https://app.pvdemo.com/setup/select-page");
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