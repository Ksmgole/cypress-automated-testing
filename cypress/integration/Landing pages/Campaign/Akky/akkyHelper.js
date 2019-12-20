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
    static getDeviceSize()
    {
        let sizes = ['iphone-6','ipad-2',[1500,1000]];
        return sizes;
    }
}
export default akkyHelper