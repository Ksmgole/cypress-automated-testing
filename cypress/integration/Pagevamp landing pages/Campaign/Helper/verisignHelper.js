class VerisignHelper {
    static getIndonesianPricingCountryCode()
    {
            return 'IDR';
    }
    static getIndonesianCurrencySymbol()
    {
            return 'Rp';
    }
    static getIndonesianCampaignPrice(){
            return '45930';
    }
    static getIndonesianCfUrl(){
            return (Cypress.env("verisign-cf")+Cypress.env("baseUrl")+"/?desh=id");
    }
    static getIndonesianCfPricingPageUrl(){
            return(Cypress.env("verisign-cf")+Cypress.env("baseUrl")+"/pricing/?desh=id");
    }
    static getIndonesianTfaUrl(){
            return(Cypress.env("verisign-cf-1")+Cypress.env("baseUrl")+"/?desh=id");
    }
    static getIndonesianTfaPricingPageUrl(){
            return(Cypress.env("verisign-cf-1")+Cypress.env("baseUrl")+"/pricing/?desh=id");
    }
    static getIndonesianTfbUrl(){
        return(Cypress.env("verisign-cf-2")+Cypress.env("baseUrl")+"/?desh=id");
    }
    static getIndonesianTfbPricingPageUrl(){
        return(Cypress.env("verisign-cf-2")+Cypress.env("baseUrl")+"/pricing/?desh=id");
    }
    static getIndonesianTfcUrl(){
        return(Cypress.env("verisign-cf-3")+Cypress.env("baseUrl")+"/?desh=id");
    }
    static getIndonesianTfcPricingPageUrl(){
        return(Cypress.env("verisign-cf-3")+Cypress.env("baseUrl")+"/pricing/?desh=id");
    }
    static getIndianCfUrl(){
            return(Cypress.env("verisign-cf")+ Cypress.env("baseUrl")+"/?desh=in");
    }
    static getIndianCfPricingPageUrl(){
            return (Cypress.env("verisign-cf")+ Cypress.env("baseUrl")+"/pricing/?desh=in");
    }
    static getIndianTfaUrl(){
            return(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl")+"/?desh=in");
    }
    static getIndianTfaPricingPageUrl(){
            return(Cypress.env("verisign-cf-1")+ Cypress.env("baseUrl")+"/pricing/?desh=in");
    }
    static getIndianTfbUrl(){
        return(Cypress.env("verisign-cf-2")+ Cypress.env("baseUrl")+"/?desh=in");
    }
    static getIndianTfbPricingPageUrl(){
        return(Cypress.env("verisign-cf-2")+ Cypress.env("baseUrl")+"/pricing/?desh=in");
    }
    static getIndianTfcUrl(){
        return(Cypress.env("verisign-cf-3")+ Cypress.env("baseUrl")+"/?desh=in");
    }
    static getIndianTfcPricingPageUrl(){
        return(Cypress.env("verisign-cf-3")+ Cypress.env("baseUrl")+"/pricing/?desh=in");
    }
    static getIndianPricingCountryCode()
    {
            return 'INR';
    }
    static getIndianCurrencySymbol()
    {
            return '₹';
    }
    static getIndianCfPrice()
    {
            return '850';
    }
    static getIndianTfPrice()
    {
            return '230';
    }
    static getUsPricingCountryCode()
    {
            return 'US';
    }
    static getDollarCurrencySymbol()
    {
            return '$';
    }
    static getUsYearlyPrice()
    {
        return '12';
    }
    static getNormalPagevampTrial()
    {
        return '14';
    }
    static getVerisignTrial()
    {
        return '5';
    }
   
}


export default VerisignHelper