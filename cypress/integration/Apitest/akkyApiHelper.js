class akkyApiHelper {
    static getPageId()
    {
        return('275727663294286')
    }  
    static getFacebookPageUrl()
    {
        return('https://www.facebook.com/'+this.getPageId())
    }
    static getDeletePageUrl()
    {
        return(Cypress.env("apiUrl")+"/delete/"+this.getPageId()+"/truncate?code=jokerisbetterthanbatman")
    }
    static getApiKey(){
        return('kusum')
    }
    static getApiSecret(){
        return('kusum')
    }
    static getAkkyYearlyPlan()
    {
        return('1')
    }
    static getAkkyMonthlyPlan()
    {
        return('2')
    }
    static getSubscriptionCreateApiUrl()
    {
        return(Cypress.env("apiUrl")+"/reseller/subscriptions/")
    }
    static getAkkyTrackingCode()
    {
        return('zsjnb8G')
    }
    static getLandingPageUrl()
    {
        return(Cypress.env("baseStaginUrl"))
    }
}
export default akkyApiHelper