class italianHelper {
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

export default italianHelper