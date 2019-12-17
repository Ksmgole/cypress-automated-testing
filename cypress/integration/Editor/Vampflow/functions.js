class Pagevamp {
    static getAccountConfirmationUrl()
    {
        return(Cypress.env("appUrl")+"setup/account-confirmation?pageId=110017313828873")
    }
}
export default Pagevamp;