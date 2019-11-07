class akkyHelper {
    static getAkkyUrl(){
        return("https://"+ Cypress.env("baseUrl")+"/akky")
    }
    static getAkkyPricingPageUrl(){
        return("https://"+ Cypress.env("baseUrl")+"/akky/pricing")
    }
    static getNormalPagevampTrial()
    {
        return '14';
    }
    static getUsPricingCountryCode(){
            return 'US';
    }
    static getDollarCurrencySymbol(){
            return '$';
    }
    static getAkkyPrice(){
        return '72.00';
    }
}
export default akkyHelper