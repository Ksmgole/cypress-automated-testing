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
    static getUsYearlyPrice(){
        return '12';
    }
    static getUsMonthlyPrice(){
        return '15';
    }
}

export default pagevampHelper