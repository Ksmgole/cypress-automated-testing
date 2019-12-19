import akkyHelper from './akkyHelper';


let sizes = ['iphone-6', 'ipad-2',[1500,1000]];
    

describe('Akky landing page - pricing page',()=>{

    sizes.forEach((size) => {
        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1], size[2])
            } else {
                cy.viewport(size)
            }
            cy.visit(akkyHelper.getAkkyPricingPageUrl());
        });
        it('Testing on devices >> '+size, () => {

        })
        it('should have 14 Days Trial',() => {
            cy.get('.pv-section .pv-title').contains(akkyHelper.getNormalPagevampTrial())
        })
        it('should have Akky own domain prices',() => {
            cy.get(".table--akky").within(() => {
                  cy.contains(".MX, .LAT y, .TV")
                  cy.contains("$130.00")
                  cy.contains("$10.83")
                  cy.contains(".CC")
                  cy.contains("$122.50")
                  cy.contains("$10.21")
                  cy.contains(".COM.MX, ORG.MX, .COM.NET, .COM, .Net")
                  cy.contains("$108.25")
                  cy.contains("$9.02")
              })
        })
        it('should have Akky contact message',() => {
            cy.get('.pv-section .pv--cnt-akky').contains('Comunícate al (01) 81-8864-2626 con gusto atenderemos tus dudas. Si aún no tienes un sitio en Facebook, Akky te ayudará a generar la primer versión de tu sitio Web.')
        })

    });
})
