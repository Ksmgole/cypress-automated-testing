import Pagevamp from "./helper"

    describe('Testing Pagevamp Vampflow in Desktop',()=>{

        beforeEach(function() {
            cy.login();
            cy.visit(Pagevamp.getMultiPageAccountConfirmationUrl());
            cy.wait(6000);
        });
        it('should prefilled with correct fb data',()=>{
            cy.get('#select_5').should('have.attr','aria-label','Business category: Other')
            cy.get('#input_7').should('have.value','Ujwala')
            cy.get('#input_8').should('have.value','ujwal@pagevamp.com')
            cy.get('#select_value_label_4').contains('English (US)')
            cy.get('#input_15').should('have.value','Welcome to our website! Take a look around and feel free to contact us for more information.')
        })
    
        it.only('should include steps >> Business Details >> Domain setup >> Demo page',()=>{
            cy.get('#input_11').type('Samakhusi-23')
            cy.get('#input_12').type('Kathmandu,Nepal')
            cy.get('#input_13').type('977')
            cy.get('#input_14').type('666666666');
            cy.get('.vamp-footer button.btn-submitting').click();
            cy.wait(6000);
            cy.get('.btn-warning').click()
            cy.get('.modal-dialog .modal-footer .btn-warning').click()
            cy.url().should('eq',Pagevamp.getMultiPageDemoPageUrl())     
        })

    })