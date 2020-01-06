class pv {
    static getPagevampUrl(){
        return("https://"+ Cypress.env("baseUrl")+"?desh=us")
    }
    static getPagevampPricingPageUrl(){
        return("https://"+ Cypress.env("baseUrl")+"pricing/?desh=us")
    }
    static getPagevampFeaturesPageUrl(){
        return("https://"+ Cypress.env("baseUrl")+"features/?desh=us")
    }
    static getItalianUrl(){
        return("https://"+ Cypress.env("baseUrl")+"?desh=it")
    }
    static getItalianPricingPageUrl(){
        return("https://"+ Cypress.env("baseUrl")+"pricing/?desh=it")
    }
    static getItalianFeaturesPageUrl(){
        return("https://"+ Cypress.env("baseUrl")+"features/?desh=it")
    }
    static getSpanishUrl(){
        return("https://"+ Cypress.env("baseUrl")+"?desh=es")
    }
    static getSpanishPricingPageUrl(){
        return("https://"+ Cypress.env("baseUrl")+"pricing/?desh=es")
    }
    static getSpanishFeaturesPageUrl(){
        return("https://"+ Cypress.env("baseUrl")+"features/?desh=es")
    }
    static getMexicoUrl(){
        return("https://"+ Cypress.env("baseUrl")+"?desh=mx")
    }
    static getMexicoPricingPageUrl(){
        return("https://"+ Cypress.env("baseUrl")+"pricing/?desh=mx")
    }
    static getMexicoFeaturesPageUrl(){
        return("https://"+ Cypress.env("baseUrl")+"features/?desh=mx")
    }
    
    static getUsPricingCountryCode()
    {
        return 'US';
    }
    static getMxPricingCountryCode()
    {
        return 'MXN';
    }
    static getDollarCurrencySymbol()
    {
        return '$';
    }
    static getEuroCurrencySymbol()
    {
        return '€';
    }
    static getItIva()
    {
        return '+IVA';
    }
    static getNormalPagevampTrial()
    {
        return '14';
    }
    static getPagevampYearlyPrice(){
        return '12';
    }
    static getTotalYearlyPrice(){
        return '144';
    }
    static getPagevampMonthlyPrice(){
        return '15';
    }
    static getMxYearlyPrice()
    {
        return '2700'
    }
    static getMxMonthlyPrice()
    {
        return '280'
    }
    static getPagevampDomainPrice(){
        return '12'
    }
    static getItDomainPrice(){
        return '15';
    }
    static getMxDomainPrice(){
        return '225'
    }
    static getDeviceSize()
    {
        let sizes = ['iphone-6','ipad-2',[1500,1000]];
        return sizes;
    }
    
    static getResellerSignupPageUrl()
    {
        return("https://reseller."+Cypress.env("baseUrl"))
    }
    static getMexicoPartnersTypeformUrl()
    {
        return("https://www."+Cypress.env("baseUrl")+"mx/partners")
    }
    static getMexicoSupportPageUrl()
    {
        return('http://www.ayudaenlineapagevamp.mx/onlinehelp/offline.php?LANGUAGE=es')
    }
    static getPagevampZendeskPageUrl()
    {
        return('https://pagevamp.zendesk.com/hc/en-us')
    }
    static getPagevampZendeskFaqPageUrl()
    {
        return('https://pagevamp.zendesk.com/hc/en-us/categories/201159396-FAQ')
    }
    static getPagevampCareersPageurl()
    {
        return('https://angel.co/pagevamp')
    }
    static getBusinessSpotlightUrl()
    {
        return("https://spotlight."+ Cypress.env('baseUrl'))
    }
    static getPagevampFacebookPageUrl()
    {
        return('https://www.facebook.com/pagevamp')
    }
    static getPagevampLinkedinPageUrl()
    {
        return('https://www.linkedin.com/company/pagevamp')
    }
    static getPagevampYoutubePageUrl()
    {
        return('https://www.youtube.com/user/Pagevamp')
    }
    static getItCookiePolicyPageUrl()
    {
        return("https://www."+Cypress.env("baseUrl")+"it/cookie-policy")
    }
    static getItDistributorUrl()
    {
        return('http://sediin.it')
    }
    static getFaqConnectLink()
    {
        return ('https://pagevamp.zendesk.com/hc/en-us/articles/204463719-Connecting-a-Domain-Purchased-Elsewhere')
    }
    static getFaqItConnectLink()
    {
        return('https://pagevamp.zendesk.com/hc/en-us/articles/207752723-Collegare-un-Dominio-Acquistato-Altrove-Italian')
    }
    static getFaqInstructionsLink()
    {
        return ('https://pagevamp.zendesk.com/hc/en-us/articles/204463719-Connecting-a-Domain-Purchased-Elsewhere')
    }
    static getFaqItInstructionsLink()
    {
        return ('https://pagevamp.zendesk.com/hc/en-us/articles/207752723-Collegare-un-Dominio-Acquistato-Altrove-Italian')
    }
    static getFaqGsuiteLink()
    {
        return('https://gsuite.google.com/')
    }
    static getFaqZohoLink()
    {
        return('https://www.zoho.com/mail/')
    }
}

export default pv