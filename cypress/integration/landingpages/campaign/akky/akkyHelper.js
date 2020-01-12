class akkyHelper {
    static getAkkyUrl(){
        return("https://"+ Cypress.env("baseUrl")+"akky")
    }
    static getAkkyPricingPageUrl(){
        return("https://"+ Cypress.env("baseUrl")+"akky/pricing")
    }
    static getNormalPagevampTrial()
    {
        return '14';
    }
    static getUsPricingCountryCode(){
            return 'US';
    }
    static getDollarCurrencySymbol(){
            return '$'
    }
    static getAkkyPrice(){
        return '72.00';
    }
    static getDeviceSize()
    {
        let sizes = ['iphone-6','ipad-2',[1500,1000]];
        return sizes;
    }
    static getAkkyWebsiteUrl(){
        return 'https://www.akky.mx/jsf/static_content/pagevamp/index.jsf?lng=es'
    }
    static getAkkySupportUrl(){
        return 'http://www.ayudaenlineapagevamp.mx/onlinehelp/offline.php?LANGUAGE=es'
    }
    static getAkkyContactText(){
        return 'Comunícate al (01) 81-8864-2626 con gusto atenderemos tus dudas. Si aún no tienes un sitio en Facebook, Akky te ayudará a generar la primer versión de tu sitio Web.'
    }
}
export default akkyHelper