import Pagevamp from "./functions.spec"



// var deleteUserUrl = Pagevamp.deleteUser();

    describe('Verisign Control flow for Indonesia',()=>{

        beforeEach(() => {
            window.localStorage.setItem("pvpreview.access_token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnB2ZGVtby5jb21cL2p1c3QtbG9naW4iLCJpYXQiOjE1NzQyMjk0NTEsImV4cCI6MTU3NDIzNjY1MSwibmJmIjoxNTc0MjI5NDUxLCJqdGkiOiJkWHdZWGJpcEJoNW9nbmtoIiwic3ViIjo5OSwicHJ2IjoiNzJjZjg2ODg3NjgyOTBhNWNlNTIwZmQ4MTVmZjdhMGMxODliMGIwOCJ9.dVAWbG_RZZXalNDCFTYjN5GkgHnQbbSDCfQZJvlz2_I");
            cy.visit("https://app.pvdemo.com/setup/select-page");
            cy.get(':nth-child(1) > .media').click();
            cy.get('.btn').click();
            cy.get('#input_29').type('23840924');
            cy.get('.btn > .ng-binding').click();
            cy.wait(5000)
        });
    
        it('should take to Demo page, if user clicks "Skip" in domain setup page',()=>{
            cy.get('.btn-warning').click()
            cy.get('.modal-footer > .row > .text-right > .btn').click()
            cy.url().should('include', '/demo')
        });

        it('should take to Editor, if user choose custom domain and click "Next"',()=>{
            cy.get('.btn-success > .ng-binding').click()
            cy.url().should('include', '/demo')
        });
    });