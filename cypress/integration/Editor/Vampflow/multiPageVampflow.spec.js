import Pagevamp from "./helper"

    describe('Testing Pagevamp Vampflow in Desktop',()=>{

        beforeEach(function() {
            cy.login();
            cy.visit(Pagevamp.getMultiPageAccountConfirmationUrl());
            cy.wait(6000);
        });
        it('should prefilled with correct fb data',()=>{
            Pagevamp.getBusinessCategory('Business category: Restaurant / Cafe')
            Pagevamp.getWebsiteTitle('Uju-Restura')
            Pagevamp.getFacebookEmail('ujwal@pagevamp.com')
            Pagevamp.getSiteLanguage('English (US)')
            Pagevamp.getFbStreet('Samakhusi')
            Pagevamp.getFbCityCountry('Kathmandu / Nepal')
            Pagevamp.getZipCode('977')
            Pagevamp.getPhoneNumber('9800000000')
            Pagevamp.getBusinessDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices pellentesque massa, a euismod ante egestas in. Nullam sagittis, neque sed suscipit sollicitudin, nunc nisi vulputate metus, ut tincidunt lacus libero eu leo.')
        })
    
        it('should include steps >> Business Details >> Domain setup >> Demo page',()=>{
            cy.get('.vamp-footer button.btn-submitting').click();
            cy.wait(6000);
            cy.get('.btn-warning').click()
            cy.get('.modal-dialog .modal-footer .btn-warning').click()
            cy.url().should('eq',Pagevamp.getMultiPageDemoPageUrl())     
        })

    })