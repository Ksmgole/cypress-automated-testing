import akkyHelper from './akkyHelper'

class akky {
    static checkAkkylogo(){
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-mx')
        cy.get('#topmost-nav .navbar-header a.pv-logo--sponsr').should('have.attr', 'href',akkyHelper.getAkkyWebsiteUrl())    
    }
    static checkMxDomainExtention(){
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-mx')
    }
    static checkTrialOnIndexPage(){
        cy.get('.pv-try .pv-title .pv-title__lead').contains(akkyHelper.getNormalPagevampTrial())
    }
    static checkAkkyPricingText(){
        cy.get('.pv-title-support').within(()=>{
            let pricing = [
                'Cada plan incluye todo lo que necesita para que su sitio web esté en línea.',
               'Después podrá contratarlo, ya sea, en este sitio o en Akky para que lo pueda relacionar con el Dominio que desee.',
                'Las tarifas varían dependiendo de la clasificación de nombre de dominio con el que deseas dar a conocer el nombre de tu página web y si cuentas con el dominio registrado en Akky. Revisa el detalle de precios.'
            ]
            cy.contains(pricing[0])
            cy.contains(pricing[1])
            cy.contains(pricing[2])
        })
            
           
    }
    static checkPromotionalDiscount(){
        cy.get('.pv-section .plan-box .plan-box__promotion-banner').within(() =>{
            cy.contains('Promoción')
            cy.contains('50% de descuento')
        })
    }
    static checkAkkyPriceOnIndexPage(){
        cy.get('.pv-section .plan-box--promotion h2.plan-box__pricing').within(() =>{
            cy.contains(akkyHelper.getUsPricingCountryCode())
            cy.contains(akkyHelper.getDollarCurrencySymbol())
            cy.contains(akkyHelper.getAkkyPrice())
        })
    }
    static checkAkkySupportLink(){
        cy.get('.pv-support a.link-txt--white').should('have.attr','href',akkyHelper.getAkkySupportUrl())
    }
    static checkTrialOnPricingPage(){
        cy.get('.pv-section .pv-title').contains(akkyHelper.getNormalPagevampTrial())
    }
    static checkDomainOnPricingPage(){
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
    }
    static checkAkkyContactText(){
        cy.get('.pv-section .pv--cnt-akky').contains(akkyHelper.getAkkyContactText())

    }
}
export default akky