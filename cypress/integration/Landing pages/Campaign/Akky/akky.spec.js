import akkyHelper from './akkyHelper';


let sizes = ['iphone-6', 'ipad-2','iphone-4',[1500,1000]];

describe('Akky Landing page - index page',()=>{

    sizes.forEach((size) => {

        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(akkyHelper.getAkkyUrl());
        });

        it('testing on '+size, () => {

        })
        it('should have Akky logo', () => {
            cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-mx')
            cy.get('#topmost-nav .navbar-header a.pv-logo--sponsr').should('have.attr', 'href', 'https://www.akky.mx/jsf/static_content/pagevamp/index.jsf?lng=es')    
        })
        it('should have .mx domain extension in index page >> feature section',() => {
            cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-mx')
        })
        it('should have 14 Days Trial',() => {
            cy.get('.pv-try .pv-title .pv-title__lead').contains(akkyHelper.getNormalPagevampTrial())
        })
        it('should have Akky texts in pricing section',() => {
            cy.get('.pv-pricing .pv-heading-group p.pv-title-support').within(() =>{
                  cy.contains("Cada plan incluye todo lo que necesita para que su sitio web esté en línea.")
                  cy.contains("Después podrá contratarlo, ya sea, en este sitio o en Akky para que lo pueda relacionar con el Dominio que desee.")
                  cy.contains("Las tarifas varían dependiendo de la clasificación de nombre de dominio con el que deseas dar a conocer el nombre de tu página web y si cuentas con el dominio registrado en Akky. Revisa el detalle de precios.")
              })
        })
        it('should have promotional 50% discount sticker in pricing box(index page)',() => {
            cy.get('.pv-section .plan-box .plan-box__promotion-banner').within(() =>{
                  cy.contains('Promoción')
                  cy.contains('50% de descuento')
              })
        })
        it('should have USD $72 plan in pricing section',() => {
            cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() =>{
                cy.contains(akkyHelper.getUsPricingCountryCode())
                cy.contains(akkyHelper.getDollarCurrencySymbol())
                cy.contains(akkyHelper.getAkkyPrice())
            })
        })
        it('should have Akky support link in intercom',() => {
            cy.get('.pv-support a.link-txt--white').should('have.attr','href','http://www.ayudaenlineapagevamp.mx/onlinehelp/offline.php?LANGUAGE=es')
        })
    
    });
})

describe('Akky landing page - pricing page',()=>{

    sizes.forEach((size) => {
        before(function() {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit(akkyHelper.getAkkyPricingPageUrl());
        });
        it('testing on'+size, () => {

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
