class pagevampHelper {
    static getPagevampUrl(){
        return("https://"+ Cypress.env("baseUrl")+"/?desh=us")
    }
    static getPagevampPricingPageUrl(){
        return("https://"+ Cypress.env("baseUrl")+"/pricing/?desh=us")
    }
    static getUsPricingCountryCode()
    {
        return 'US';
    }
    static getDollarCurrencySymbol()
    {
        return '$';
    }
    static getNormalPagevampTrial()
    {
        return '14';
    }
    static getUsYearlyPrice(){
        return '12';
    }
    static getUsMonthlyPrice(){
        return '15';
    }
    static getItalianUrl(){
        return("https://"+ Cypress.env("baseUrl")+"/?desh=it")
    }
    static getItalianPricingPageUrl(){
        return("https://"+ Cypress.env("baseUrl")+"/pricing/?desh=it")
    }
    static getEuroCurrencySymbol()
    {
        return '€';
    }
    static getItYearlyPrice(){
        return '144';
    }
    static getItMonthlyPrice(){
        return '15';
    }
    static getItIva()
    {
        return '+IVA';
    }
}

export default pagevampHelper