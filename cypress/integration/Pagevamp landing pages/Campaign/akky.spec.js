import akkyHelper from './Helper/akkyHelper';

var akkyUrl = akkyHelper.getAkkyUrl(),
    akkyPricingPageUrl = akkyHelper.getAkkyPricingPageUrl(),
    usPricingCountryCode = akkyHelper.getUsPricingCountryCode(),
    dollarCurrencySymbol = akkyHelper.getDollarCurrencySymbol(),
    akkyPrice = akkyHelper.getAkkyPrice();

describe('Akky Landing page',()=>{
    it('should have Akky logo', () => {
        cy.visit(akkyUrl)
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-mx')
        cy.get('#topmost-nav .navbar-header a.pv-logo--sponsr').should('have.attr', 'href', 'https://www.akky.mx/jsf/static_content/pagevamp/index.jsf?lng=es')    
    })
    it('should have .mx domain extension in index page >> feature section',() => {
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-mx')
    })
    it('should have 14 Days Trial in index page',() => {
        cy.get('.pv-try .pv-title .pv-title__lead').contains('14')
    })
    it('should have 14 Days Trial in pricing page',() => {
        cy.visit(akkyPricingPageUrl)
        cy.get('.pv-section .pv-title').contains('14')
    })

    it('should have Akky texts in index page >> pricing section',() => {
        cy.visit(akkyUrl)
        cy.get('.pv-pricing .pv-heading-group p.pv-title-support').within(() =>{
              cy.contains("Cada plan incluye todo lo que necesita para que su sitio web esté en línea.")
              cy.contains("Después podrá contratarlo, ya sea, en este sitio o en Akky para que lo pueda relacionar con el Dominio que desee.")
              cy.contains("Las tarifas varían dependiendo de la clasificación de nombre de dominio con el que deseas dar a conocer el nombre de tu página web y si cuentas con el dominio registrado en Akky. Revisa el detalle de precios.")
          })
    })

    it('should have promotional 50% discount sticker in pricing box(index page)',() => {
        cy.visit(akkyUrl)
        cy.get('.pv-section .plan-box .plan-box__promotion-banner').within(() =>{
              cy.contains('Promoción')
              cy.contains('50% de descuento')
          })
    })

    it('should have USD $72 plan in index page >> pricing section',() => {
        cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() =>{
            cy.contains(usPricingCountryCode)
            cy.contains(dollarCurrencySymbol)
            cy.contains(akkyPrice)
        })
    })

    it('should have Akky own domain prices in pricing page',() => {
        cy.visit(akkyPricingPageUrl)
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

    it('should have Akky contact message in pricing page',() => {
        cy.visit(akkyPricingPageUrl)
        cy.get('.pv-section .pv--cnt-akky').contains('Comunícate al (01) 81-8864-2626 con gusto atenderemos tus dudas. Si aún no tienes un sitio en Facebook, Akky te ayudará a generar la primer versión de tu sitio Web.')
    })
    
    it('should have Pagevamp youtube video(with 14 days trial) in "How it works >> Watch it in action" link',() => {
        cy.visit(akkyUrl)
        cy.get('#how-it-works-link').click()
        cy.get('.modal-content iframe.embed-responsive-item').should('have.attr', 'src', 'https://www.youtube.com/embed/09Y0Xz_bTpM?enablejsapi=1')
        cy.get('#how-it-works-section a.link').click().invoke('css','display', 'block')
    })

    it('should have Akky support link in intercom',() => {
        cy.visit(akkyUrl)
        cy.get('.pv-support a.link-txt--white').should('have.attr','href','http://www.ayudaenlineapagevamp.mx/onlinehelp/offline.php?LANGUAGE=es')
    })
})