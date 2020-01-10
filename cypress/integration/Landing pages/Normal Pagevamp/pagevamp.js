import pv from "./helper"

class pvLandingpage{
    static checkEuCookieBanner(){
        cy.url().then(($url)=>{
            if(($url.includes('/?desh=it'))||($url.includes('/?desh=es'))){
                cy.get('.pv-cookie__alert')
            }
            else{
                cy.get('.pv-cookie_alert').should('not.exist')
            }
        })
    }
    static checkHowItWorksSection(text)
    {
            cy.url().then(($url)=>{
                if(($url.includes('/?desh=it'))){
                    cy.visit("https://www."+Cypress.env("baseUrl")+"?desh=it#how-it-works")
                    cy.get('#how-it-works-section .pv-title').contains(text)
                    cy.get('#how-it-works-yt-video').should('not.be.visible')
                }
                if(($url.includes('/?desh=mx'))){
                    cy.visit("https://www."+Cypress.env("baseUrl")+"?desh=mx#how-it-works")
                    cy.get('#how-it-works-section .pv-title').contains(text)
                    cy.get('#how-it-works-section .col-md-6 > .link').click()
                    cy.get('#how-it-works-yt-video').should('be.visible')
                    cy.get('.modal-content > .close > span').click()
                }
                if(($url.includes('/?desh=es'))){
                    cy.visit("https://www."+Cypress.env("baseUrl")+"?desh=es#how-it-works")
                    cy.get('#how-it-works-section .pv-title').contains(text)
                    cy.get('#how-it-works-section .col-md-6 > .link').click()
                    cy.get('#how-it-works-yt-video').should('be.visible')
                    cy.get('.modal-content > .close > span').click()
                }
                if(($url.includes('/?desh=us'))){
                    cy.get('#how-it-works-link').click()
                    cy.get('#how-it-works-section .pv-title').contains(text)
                    cy.get('#how-it-works-section .col-md-6 > .link').click()
                    cy.get('#how-it-works-yt-video').should('be.visible')
                    cy.get('.modal-content > .close > span').click()
                }
            })
       
    }
    static checkHeaderPricingLink()
    {
        cy.get('.nav > :nth-child(2) > a').click()
        cy.url().should('contain','/pricing')
    }
    static checkHeaderPartnersLink()
    {
        cy.url().then(($url)=>{
            if(($url.includes('/?desh=mx'))){
                cy.get('.nav > :nth-child(3) > a').should('have.attr','href',pv.getMexicoPartnersTypeformUrl())
            }
            else{
                cy.get('.nav > :nth-child(3) > a').click()
                cy.url().should('eq',pv.getResellerSignupPageUrl())
            }
        })
    }
    static checkHeaderFeaturesLink()
    {
        cy.get('.nav > :nth-child(4) > a').click()
        cy.url().should('contain','/features')
    }
    static checkLoginLink()
    {
        cy.get('.pv-login-trigger').click()
        cy.get('#login-pv-continue #continue-with-facebook').should('be.visible')
        cy.get('#pv-login-modal .close').click()
    }
    static checkCreateWebsiteLink()
    {
        cy.get('.pv-header .pv-continue').click()
        cy.url().then(($url)=>{
            if($url.includes('/?desh=it')){
                cy.get('#pv-terms-and-condition-modal h5').contains('Attenzione!')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(1)').should('have.attr','href','/it/privacypolicy-terms')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(2)').should('have.attr','href','/it/privacypolicy-terms?terms')
                cy.get('#agree_privacy-btn').click().then(()=>{
                    cy.get('#continue-with-facebook').should('be.visible')
                    cy.get('#pv-continue-modal .close').click()      
                }) 
            }
            if($url.includes('/?desh=mx')){
                cy.get('#pv-terms-and-condition-modal h5').contains('¡Atención!')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(1)').should('have.attr','href','/mx/privacypolicy-terms')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(2)').should('have.attr','href','/mx/privacypolicy-terms?terms')
                cy.get('#agree_privacy-btn').click().then(()=>{
                    cy.get('#continue-with-facebook').should('be.visible')
                    cy.get('#pv-continue-modal .close').click()      
                }) 
            }
            if(($url.includes('/?desh=us'))||($url.includes('/?desh=es'))){
                cy.get('#continue-with-facebook').should('be.visible')
                cy.get('#pv-continue-modal .close').click()           
            }
        }) 
    }
    static checkBannerText(text)
    {
        cy.get('.pv-banner__cnt  .pv-title').contains(text)  
    }
    static checkBannerImage()
    {
        cy.get('.pv-banner-img__wrap .img-responsive').should('have.attr','src','/images/banner.jpg')
    }
    static checkBannerStartForFreeCta()
    {
        cy.get('.pv-banner__cnt .pv-cta .btn').click()
        cy.url().then(($url)=>{
            if($url.includes('/?desh=it')){
                cy.get('#pv-terms-and-condition-modal h5').contains('Attenzione!')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(1)').should('have.attr','href','/it/privacypolicy-terms')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(2)').should('have.attr','href','/it/privacypolicy-terms?terms')
                cy.get('#agree_privacy-btn').click().then(()=>{
                    cy.get('#continue-with-facebook').should('be.visible')
                    cy.get('#pv-continue-modal .close').click()      
                }) 
            }
            if($url.includes('/?desh=mx')){
                cy.get('#pv-terms-and-condition-modal h5').contains('¡Atención!')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(1)').should('have.attr','href','/mx/privacypolicy-terms')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(2)').should('have.attr','href','/mx/privacypolicy-terms?terms')
                cy.get('#agree_privacy-btn').click().then(()=>{
                    cy.get('#continue-with-facebook').should('be.visible')
                    cy.get('#pv-continue-modal .close').click()      
                }) 
            }
            if(($url.includes('/?desh=us'))||($url.includes('/?desh=es'))){
                cy.get('#continue-with-facebook').should('be.visible')
                cy.get('#pv-continue-modal .close').click()           
            }
        })
    }
    static checkFacebookPageCreateLink()
    {
        cy.get('.pv-cnt .link').click()
        cy.url().should('contain','/facebook-page-creation-service')
    }
    static checkComDomain()
    {
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
    }
    static checkViewAllFeaturesLink()
    {
        cy.get('.pv-features .link').click()
        cy.url().should('contain','/features')   
    }
    static checkContactUs()
    {
        cy.url().then(($url)=>{
            if($url.includes('/?desh=mx')){
                cy.get('.pv-support a').should('have.attr','href',pv.getMexicoSupportPageUrl())
            }
            if($url.includes('/?desh=it')){
                cy.get('#contact-us-btn').click()
                cy.get('.pv-support .pv-support__title').within(() =>{
                            cy.contains('800 929 200')
                            cy.contains('06 888 12168')
                })
            }
            if(($url.includes('/?desh=us'))||($url.includes('/?desh=es'))){
                cy.get('#contact-us-btn').click()
                cy.get('.intercom-messenger-frame iframe').should('be.visible')
            }
        })
      
    }
    static checkOurPartnersLink()
    {
        cy.url().then(($url)=>{
            if(($url.includes('/?desh=mx'))){
                cy.get('.pv-header-group a').should('have.attr','href',pv.getMexicoPartnersTypeformUrl())
            }
            else{
                cy.get('.pv-header-group .link').click()
                cy.url().should('eq',pv.getResellerSignupPageUrl())
            }
        })
    }
    static checkPressLogo()
    {
        cy.get('.pv-press-img .col-lg-offset-1 a[href="http://techcrunch.com/2013/06/19/pagevamp-dorm-room-fund/"]').should('have.visible')
        cy.get('.pv-press-img .col-lg-offset-1 a[href="http://www.nytimes.com/2015/11/11/us/large-companies-game-h-1b-visa-program-leaving-smaller-ones-in-the-cold.html?_r=0"]').should('have.visible')
        cy.get('.pv-press-img .col-lg-offset-1 a[href="http://www.foxbusiness.com/features/2014/10/17/elevator-pitch-pagevamp-for-business-websites.html"').should('have.visible')
        cy.get('.pv-press-img .col-lg-offset-1 a[href="http://e27.co/nyc-startup-helps-traditional-southeast-asian-smes-go-digital-20150820/"]').should('have.visible')
        cy.get('.pv-press-img .col-lg-offset-1 a[href="https://www.forbes.com/sites/celinnedacosta/2016/09/26/what-nepali-entrepreneurs-can-teach-us-about-perseverance/"]').should('have.visible')
    }
    static checkTrialOnIndexPage()
    {
        cy.get('.pv-title__lead').contains(pv.getNormalPagevampTrial())
    }
    static checkStartForFreeOnTrialSection()
    {
        cy.get('.pv-try .pv-continue').click()
        cy.url().then(($url)=>{
            if($url.includes('/?desh=it')){
                cy.get('#pv-terms-and-condition-modal h5').contains('Attenzione!')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(1)').should('have.attr','href','/it/privacypolicy-terms')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(2)').should('have.attr','href','/it/privacypolicy-terms?terms')
                cy.get('#agree_privacy-btn').click().then(()=>{
                    cy.get('#continue-with-facebook').should('be.visible')
                    cy.get('#pv-continue-modal .close').click()      
                }) 
            }
            if($url.includes('/?desh=mx')){
                cy.get('#pv-terms-and-condition-modal h5').contains('¡Atención!')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(1)').should('have.attr','href','/mx/privacypolicy-terms')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(2)').should('have.attr','href','/mx/privacypolicy-terms?terms')
                cy.get('#agree_privacy-btn').click().then(()=>{
                    cy.get('#continue-with-facebook').should('be.visible')
                    cy.get('#pv-continue-modal .close').click()      
                }) 
            }
            if(($url.includes('/?desh=us'))||($url.includes('/?desh=es'))){
                cy.get('#continue-with-facebook').should('be.visible')
                cy.get('#pv-continue-modal .close').click()           
            }
        })

    }
    static checkYearlyPlanOnIndexPage()
    {
        cy.url().then(($url)=>{
            if($url.includes('/?desh=us')){
                cy.get(':nth-child(1) .pv-section h2.plan-box__pricing').within(() =>{
                    cy.contains(pv.getDollarCurrencySymbol())
                    cy.contains(pv.getPagevampYearlyPrice())
                })
                cy.get(':nth-child(1) > .plan-box > .pv-cta > .pv-cta__title').contains('Includes a free domain')
            }
            if($url.includes('/?desh=es')){
                cy.get(':nth-child(1) .pv-section h2.plan-box__pricing').within(() =>{
                    cy.contains(pv.getEuroCurrencySymbol())
                    cy.contains(pv.getTotalYearlyPrice())     
                })
                 cy.get(':nth-child(1) > .plan-box > .pv-cta > .pv-cta__title').contains('Incluye un dominio gratis')         
            }
            if($url.includes('/?desh=mx')){
                cy.get(':nth-child(1) .pv-section h2.plan-box__pricing').within(() =>{
                    cy.contains(pv.getMxPricingCountryCode())
                    cy.contains(pv.getDollarCurrencySymbol())
                    cy.contains(pv.getMxYearlyPrice())   
                })
                 cy.get(':nth-child(1) > .plan-box > .pv-cta > .pv-cta__title').contains('Incluye un dominio gratis')         
            }
            if($url.includes('/?desh=it')){
                cy.get(':nth-child(1) .pv-section h2.plan-box__pricing').within(() =>{
                    cy.contains(pv.getEuroCurrencySymbol())
                    cy.contains(pv.getTotalYearlyPrice())     
                    cy.contains(pv.getItIva()) 
                })
                 cy.get(':nth-child(1) > .plan-box > .pv-cta > .pv-cta__title').contains('Include un dominio gratis')
            }
        })
    }
    static checkMonthlyPlanOnIndexPage()
    {
        cy.url().then(($url)=>{
            if($url.includes('/?desh=us')){
                cy.get(':nth-child(2) .plan-box .plan-box__pricing').within(() =>{
                    cy.contains(pv.getDollarCurrencySymbol())
                    cy.contains(pv.getPagevampMonthlyPrice())
                })
                cy.get(':nth-child(2) > .plan-box > .pv-cta > .pv-cta__title').contains(pv.getDollarCurrencySymbol()+pv.getPagevampDomainPrice())
            }
            if($url.includes('/?desh=es')){
                cy.get(':nth-child(2) .plan-box .plan-box__pricing').within(() =>{
                    cy.contains(pv.getEuroCurrencySymbol())
                    cy.contains(pv.getPagevampMonthlyPrice())     
                })
                cy.get(':nth-child(2) > .plan-box > .pv-cta > .pv-cta__title').contains(pv.getEuroCurrencySymbol()+pv.getPagevampDomainPrice())
            }
            if($url.includes('/?desh=mx')){
                cy.get(':nth-child(2) .plan-box .plan-box__pricing').within(() =>{
                    cy.contains(pv.getMxPricingCountryCode())
                    cy.contains(pv.getDollarCurrencySymbol())
                    cy.contains(pv.getMxMonthlyPrice())       
                })
                cy.get(':nth-child(2) > .plan-box > .pv-cta > .pv-cta__title').contains(pv.getDollarCurrencySymbol()+pv.getMxDomainPrice())
            }
            if($url.includes('/?desh=it')){
                cy.get(':nth-child(2) .plan-box .plan-box__pricing').within(() =>{
                    cy.contains(pv.getEuroCurrencySymbol())
                    cy.contains(pv.getPagevampMonthlyPrice())    
                    cy.contains(pv.getItIva())    
                })
                cy.get(':nth-child(2) > .plan-box > .pv-cta > .pv-cta__title').contains(pv.getEuroCurrencySymbol()+pv.getItDomainPrice())
            }
        })
    }
    static checkGetPagevampCtaOnPricingSection()
    {
        cy.get(':nth-child(1) > .plan-box > .pv-cta > .btn').click()
        cy.url().then(($url)=>{
            if($url.includes('/?desh=it')){
                cy.get('#pv-terms-and-condition-modal h5').contains('Attenzione!')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(1)').should('have.attr','href','/it/privacypolicy-terms')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(2)').should('have.attr','href','/it/privacypolicy-terms?terms')
                cy.get('#agree_privacy-btn').click().then(()=>{
                    cy.get('#continue-with-facebook').should('be.visible')
                    cy.get('#pv-continue-modal .close').click()      
                }) 
            }
            if($url.includes('/?desh=mx')){
                cy.get('#pv-terms-and-condition-modal h5').contains('¡Atención!')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(1)').should('have.attr','href','/mx/privacypolicy-terms')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(2)').should('have.attr','href','/mx/privacypolicy-terms?terms')
                cy.get('#agree_privacy-btn').click().then(()=>{
                    cy.get('#continue-with-facebook').should('be.visible')
                    cy.get('#pv-continue-modal .close').click()      
                }) 
            }
            if(($url.includes('/?desh=us'))||($url.includes('/?desh=es'))){
                cy.get('#continue-with-facebook').should('be.visible')
                cy.get('#pv-continue-modal .close').click()           
            }
        })
    }
    static checkGetPagevampCtaOnFooter()
    {
        cy.get('.pv-getpv').click()
        cy.url().then(($url)=>{
            if($url.includes('/?desh=it')){
                cy.get('#pv-terms-and-condition-modal h5').contains('Attenzione!')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(1)').should('have.attr','href','/it/privacypolicy-terms')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(2)').should('have.attr','href','/it/privacypolicy-terms?terms')
                cy.get('#agree_privacy-btn').click().then(()=>{
                    cy.get('#continue-with-facebook').should('be.visible')
                    cy.get('#pv-continue-modal .close').click()      
                }) 
            }
            if($url.includes('/?desh=mx')){
                cy.get('#pv-terms-and-condition-modal h5').contains('¡Atención!')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(1)').should('have.attr','href','/mx/privacypolicy-terms')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(2)').should('have.attr','href','/mx/privacypolicy-terms?terms')
                cy.get('#agree_privacy-btn').click().then(()=>{
                    cy.get('#continue-with-facebook').should('be.visible')
                    cy.get('#pv-continue-modal .close').click()      
                }) 
            }
            if(($url.includes('/?desh=us'))||($url.includes('/?desh=es'))){
                cy.get('#continue-with-facebook').should('be.visible')
                cy.get('#pv-continue-modal .close').click()           
            }
        })
    }
    static checkAboutLink()
    {
        cy.get('.pv-footer .row div:nth-child(2) .pv-footer-list li:nth-child(1) a').click()
        cy.url().should('contain','/about')
    }
    static checkFooterFeaturesLink()
    {
        cy.get('.pv-footer .row div:nth-child(2) .pv-footer-list li:nth-child(2) a').click()
        cy.url().should('contain','/features')
    }
    static checkFooterCareersLink()
    {
        cy.get('.pv-footer .row div:nth-child(2) .pv-footer-list li:nth-child(3) a').should('have.attr','href',pv.getPagevampCareersPageurl())

    }
    static checkFooterPartnersLink()
    {
        cy.url().then(($url)=>{
            if(($url.includes('/?desh=mx'))){
                cy.get('.pv-footer .row div:nth-child(2) .pv-footer-list li:nth-child(4) a').should('have.attr','href',pv.getMexicoPartnersTypeformUrl())
            }
            else{
                cy.get('.pv-footer .row div:nth-child(2) .pv-footer-list li:nth-child(4) a').click()
                cy.url().should('eq',pv.getResellerSignupPageUrl())
            }
        })
    }
    static checkFooterPricingLink()
    {
        cy.get('.pv-footer .row div:nth-child(2) .pv-footer-list li:nth-child(5) a').click()
        cy.url().should('contain','/pricing')
    }
    static checkBusinessSpotlightLink()
    {
        cy.get('.pv-footer .row div:nth-child(2) .pv-footer-list li:nth-child(6) a').click()
        cy.url().should('eq',pv.getBusinessSpotlightUrl())
    }
    static checkFooterHelpCenterLink()
    {
        cy.get('.col-md-2.col-sm-6 > .pv-footer-block > .pv-footer-list > :nth-child(1) > a').should('have.attr','href',pv.getPagevampZendeskPageUrl())
    }
    static checkFooterFaqLink()
    {
        cy.get('.col-md-2.col-sm-6 > .pv-footer-block > .pv-footer-list > :nth-child(2) > a').should('have.attr','href',pv.getPagevampZendeskFaqPageUrl())
    }
    static checkFooterContactLink()
    {
        cy.url().then(($url)=>{
            if($url.includes('/?desh=mx')){
                cy.get('.col-md-2.col-sm-6 > .pv-footer-block > .pv-footer-list > :nth-child(3) > a').should('have.attr','href',pv.getMexicoSupportPageUrl())
            }
            if($url.includes('/?desh=it')){
                cy.get('#contact-footer-link').click()
                cy.get('.pv-support .pv-support__title').within(() =>{
                    cy.contains('800 929 200')
                    cy.contains('06 888 12168')
        })
            }
            if(($url.includes('/?desh=us'))||($url.includes('/?desh=es'))){
                cy.get('#contact-footer-link').click()
                cy.get('.intercom-messenger-frame iframe').should('be.visible')
            }
        })
    }
    static checkFooterFbLink()
    {
        cy.get('.pv-social li:nth-child(1) a ').should('have.attr','href',pv.getPagevampFacebookPageUrl())
    }
    static checkFooterAngelListLink()
    {
        cy.get('.pv-social li:nth-child(2) a ').should('have.attr','href',pv.getPagevampCareersPageurl())
    }
    static checkFooterLinkedinLink()
    {
        cy.get('.pv-social li:nth-child(3) a ').should('have.attr','href',pv.getPagevampLinkedinPageUrl())
    }
    static checkFooterYoutubeLink()
    {
        cy.get('.pv-social li:nth-child(4) a ').should('have.attr','href',pv.getPagevampYoutubePageUrl())
    }
    static checkTermsOfServiceLink()
    {
        cy.get('.pv-footer__sub .pv-footer-bot--links li:nth-child(1)').click()
        cy.url().should('contain','/privacypolicy-terms?term')
    }
    static checkPrivacyPolicyLink()
    {
        cy.get('.pv-footer__sub .pv-footer-bot--links li:nth-child(2)').click()
        cy.url().should('contain','/privacypolicy-terms')
    }
    static checkGettingStartedLink()
    {
        cy.url().then(($url)=>{
            if($url.includes('/?desh=it')){
                cy.get('.pv-footer__sub .pv-footer-bot--links li:nth-child(4)').click()
                cy.url().should('contain','/getting-started') 
            }
            else{
                cy.get('.pv-footer__sub .pv-footer-bot--links li:nth-child(3)').click()
                cy.url().should('contain','/getting-started')
            }
        })
    }
    static checkItCookiePolicyLink()
    {
        cy.get('.pv-footer__sub .pv-footer-bot--links li:nth-child(3)').click()
        cy.url().should('eq',pv.getItCookiePolicyPageUrl())
    }
    static checkSediinLogoLink()
    {
        cy.get('.pv-distributor a').should('have.attr','href',pv.getItDistributorUrl())
    }

    static checkTrialOnPricingPage()
    {
        cy.get('.pv-heading-group > .pv-title').contains(pv.getNormalPagevampTrial())
    }
    static checkYearlyPlanOnPricingPage()
    {           
        cy.url().then(($url)=>{
                if($url.includes('/?desh=us')){
                    cy.get(':nth-child(1) > .plan-box > .plan-box__pricing').within(() =>{
                        cy.contains(pv.getDollarCurrencySymbol())
                        cy.contains(pv.getPagevampYearlyPrice())
                    })
                    cy.get(':nth-child(1) > .plan-box > .plan-box__list > li:nth-child(1)').within(()=>{
                        cy.contains('.com')
                        cy.contains('.net')
                        cy.contains('.org')
                    })
                }
                if($url.includes('/?desh=es')){
                    cy.get(':nth-child(1) > .plan-box > .plan-box__pricing').within(() =>{
                        cy.contains(pv.getEuroCurrencySymbol())
                        cy.contains(pv.getTotalYearlyPrice())     
                    })
                    cy.get(':nth-child(1) > .plan-box > .plan-box__list > li:nth-child(1)').within(()=>{
                        cy.contains('.com')
                        cy.contains('.net')
                        cy.contains('.org')
                    })
                }
                if($url.includes('/?desh=mx')){
                    cy.get(':nth-child(1) > .plan-box > .plan-box__pricing').within(() =>{
                        cy.contains(pv.getMxPricingCountryCode())
                        cy.contains(pv.getDollarCurrencySymbol())
                        cy.contains(pv.getMxYearlyPrice())   
                    })
                    cy.get(':nth-child(1) > .plan-box > .plan-box__list > li:nth-child(1)').within(()=>{
                        cy.contains('.com')
                        cy.contains('.net')
                        cy.contains('.org')
                    })
                }
                if($url.includes('/?desh=it')){
                    cy.get(':nth-child(1) > .plan-box > .plan-box__pricing').within(() =>{
                        cy.contains(pv.getEuroCurrencySymbol())
                        cy.contains(pv.getTotalYearlyPrice())     
                        cy.contains(pv.getItIva()) 
                    })
                    cy.get(':nth-child(1) > .plan-box > .plan-box__list > li:nth-child(1)').within(()=>{
                        cy.contains('.com')
                        cy.contains('.net')
                        cy.contains('.org')
                        cy.contains('.it')

                    })
                }
            })
    }
    
    static checkMonthlyPlanOnPricingPage()
    {
        cy.url().then(($url)=>{
            if($url.includes('/?desh=us')){
                cy.get(':nth-child(2) > .plan-box > .plan-box__pricing').within(() =>{
                    cy.contains(pv.getDollarCurrencySymbol())
                    cy.contains(pv.getPagevampMonthlyPrice())
                })
                cy.get(':nth-child(2) > .plan-box > .plan-box__list > :nth-child(1)').contains(pv.getDollarCurrencySymbol()+pv.getPagevampDomainPrice())

            }
            if($url.includes('/?desh=es')){
                cy.get(':nth-child(2) > .plan-box > .plan-box__pricing').within(() =>{
                    cy.contains(pv.getEuroCurrencySymbol())
                    cy.contains(pv.getPagevampMonthlyPrice())     
                })
                cy.get(':nth-child(2) > .plan-box > .plan-box__list > :nth-child(1)').contains(pv.getEuroCurrencySymbol()+pv.getPagevampDomainPrice())
            }
            if($url.includes('/?desh=mx')){
                cy.get(':nth-child(2) > .plan-box > .plan-box__pricing').within(() =>{
                    cy.contains(pv.getMxPricingCountryCode())
                    cy.contains(pv.getDollarCurrencySymbol())
                    cy.contains(pv.getMxMonthlyPrice())   
                })
                cy.get(':nth-child(2) > .plan-box > .plan-box__list > :nth-child(1)').contains(pv.getDollarCurrencySymbol()+pv.getMxDomainPrice())
            }
            if($url.includes('/?desh=it')){
                cy.get(':nth-child(2) > .plan-box > .plan-box__pricing').within(() =>{
                    cy.contains(pv.getEuroCurrencySymbol())
                    cy.contains(pv.getPagevampMonthlyPrice())     
                    cy.contains(pv.getItIva()) 
                })
                cy.get(':nth-child(2) > .plan-box > .plan-box__list > :nth-child(1)').contains(pv.getEuroCurrencySymbol()+pv.getItDomainPrice())
            }
        })
    }
    
    static checkGetPagevampCtaOnPricingPage()
    {
        cy.get(':nth-child(1) > .plan-box > .pv-cta > .btn').click()
        cy.url().then(($url)=>{
            if($url.includes('/?desh=it')){
                cy.get('#pv-terms-and-condition-modal h5').contains('Attenzione!')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(1)').should('have.attr','href','/it/privacypolicy-terms')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(2)').should('have.attr','href','/it/privacypolicy-terms?terms')
                cy.get('#agree_privacy-btn').click().then(()=>{
                    cy.get('#continue-with-facebook').should('be.visible')
                    cy.get('#pv-continue-modal .close').click()      
                }) 
            }
            if($url.includes('/?desh=mx')){
                cy.get('#pv-terms-and-condition-modal h5').contains('¡Atención!')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(1)').should('have.attr','href','/mx/privacypolicy-terms')
                cy.get('#pv-terms-and-condition-modal p a:nth-child(2)').should('have.attr','href','/mx/privacypolicy-terms?terms')
                cy.get('#agree_privacy-btn').click().then(()=>{
                    cy.get('#continue-with-facebook').should('be.visible')
                    cy.get('#pv-continue-modal .close').click()      
                }) 
            }
            if(($url.includes('/?desh=us'))||($url.includes('/?desh=es'))){
                cy.get('#continue-with-facebook').should('be.visible')
                cy.get('#pv-continue-modal .close').click()           
            }
        })

    }
    static checkFaqtoggle()
    {
        cy.get('#heading-1').click()
        cy.get('#heading-2').click()
        cy.get('#heading-3').click()   
        cy.get('#heading-4').click()
        cy.get('#heading-5').click()
        cy.get('#heading-6').click()
        cy.get('#heading-7').click()
    }
    static checkFaqConnectItLink()
    {
        cy.get('#heading-2').click()
        cy.url().then(($url)=>{
            if($url.includes('/?desh=it')){
                cy.get('#ques-2 .panel-body  a').should('have.attr','href',pv.getFaqItConnectLink())
            }
            else{
                cy.get('#ques-2 .panel-body  a').should('have.attr','href',pv.getFaqConnectLink())
            }
        })
    }
    static checkFaqInstructionsLink()
    {
        cy.get('#heading-3').click()
        cy.url().then(($url)=>{
            if($url.includes('/?desh=it')){
                cy.get('#ques-3 .panel-body a').should('have.attr','href',pv.getFaqItInstructionsLink())
            }
            else{
                cy.get('#ques-3 .panel-body a').should('have.attr','href',pv.getFaqInstructionsLink())
            }
        })
    }
    static checkFaqEmailServicesLinks()
    {
        cy.get('#heading-6').click()
        cy.get('#ques-6 .panel-body  a:nth-child(1)').should('have.attr','href',pv.getFaqGsuiteLink())
        cy.get('#ques-6 .panel-body  a:nth-child(2)').should('have.attr','href',pv.getFaqZohoLink())
    }
    static checkFaqClickHere()
    {
        cy.get('#heading-7').click()
        cy.get('.panel-body > .btn').click()
        cy.get('#continue-with-facebook').should('be.visible')
        cy.get('#pv-continue-modal .close').click()
    }
    static checkLanguage(Lang, text){
        cy.get('#topmost-nav .navbar-right .dropdown-toggle').click()
        cy.contains(Lang).click()
        cy.get('.pv-banner .pv-title').contains(text)


    }
}

export default pvLandingpage