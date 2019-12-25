class Pagevamp {
    
    static getMultiPageAccountConfirmationUrl() {
        return (Cypress.env("appUrl") + "setup/account-confirmation?pageId=110017313828873")
    }
    static getMultiPageDemoPageUrl(){
        return(Cypress.env("appUrl")+'110017313828873/demo')
    }
    static getOnePageAccountConfirmationUrl() 
    {
        return(Cypress.env("appUrl") + "setup/onepage-account-confirmation")
    }
}
export default Pagevamp