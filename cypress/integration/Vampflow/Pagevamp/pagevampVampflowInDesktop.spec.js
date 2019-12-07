import Pagevamp from "./functions.spec"

    describe('Pagevamp Vampflow in Desktop',()=>{

        beforeEach(() => {
            window.localStorage.setItem("pvpreview.access_token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnB2ZGVtby5jb21cL2p1c3QtbG9naW4iLCJpYXQiOjE1NzU3MzE2ODYsImV4cCI6MTU3NTczODg4NiwibmJmIjoxNTc1NzMxNjg2LCJqdGkiOiJRQkg1R29wVjFzcTVocE43Iiwic3ViIjoxMjIsInBydiI6IjcyY2Y4Njg4NzY4MjkwYTVjZTUyMGZkODE1ZmY3YTBjMTg5YjBiMDgifQ.sCu3bAgGPnNwiBgurOqcQsKMxvg19S5UJ9mBAY9wnew");
            cy.visit(Pagevamp.getSelectPageUrl());
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