class verisignHelper {
    static getDeviceSize()
    {
        let sizes = ['iphone-6','ipad-2','macbook-15'];
        return sizes;
    }
    static getIndonesianPricingCountryCode()
    {
            return 'IDR';
    }
    static getIndonesianCurrencySymbol()
    {
            return 'Rp';
    }
    static getIndonesianCampaignPrice(){
            return '551.160';
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
            return '2,760';
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
    static getPagevampPriceForIndonesia(){
        return 'Rp 2.041.333 / tahun';
    }
    static getPagevampPriceForIndia(){
        return '₹ 10,222 / year';
    }
    static getUsPricingCountryCode()
    {
            return 'US';
    }
    static getDollarCurrencySymbol()
    {
            return '$';
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
   
}

export default verisignHelper