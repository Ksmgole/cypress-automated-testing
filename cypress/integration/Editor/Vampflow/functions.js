class Pagevamp {
    static deletePage()
    {
        return(Cypress.env("apiUrl")+"/delete/110017313828873/truncate?code=jokerisbetterthanbatman");
    }
    static getSelectPageUrl()
    {
        return(Cypress.env("appUrl")+"/setup/select-page")
    }
}
export default Pagevamp;