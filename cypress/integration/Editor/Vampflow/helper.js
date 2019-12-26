class Pagevamp {
    static getFacebookPageId(){
        return '104703154379702'
    }
    static getMultiPageAccountConfirmationUrl() {
        return (Cypress.env("appUrl") + "setup/account-confirmation?pageId="+this.getFacebookPageId())
    }
    static getMultiPageDemoPageUrl(){
        return(Cypress.env("appUrl")+this.getFacebookPageId()+"/demo")
    }
    static getOnePageAccountConfirmationUrl() 
    {
        return(Cypress.env("appUrl") + "setup/onepage-account-confirmation")
    }
    static getBusinessCategory(category){
        cy.get('#select_5').should('have.attr','aria-label',category)
    }
    static getWebsiteTitle(title)
    {
        cy.get('#input_7').should('have.value',title)
    }
    static getFacebookEmail(email){
        cy.get('#input_8').should('have.value',email)
    }
    static getSiteLanguage(lang)
    {
        cy.get('#select_value_label_4').contains(lang)
    }
    static getFbStreet(street)
    {
        cy.get('#input_11').should('have.value',street)

    }
    static getFbCityCountry(address)
    {
        cy.get('#input_12').should('have.value',address)
    }
    static getZipCode(code)
    {
        cy.get('#input_13').should('have.value',code)

    }
    static getPhoneNumber(num)
    {
        cy.get('#input_14').should('have.value',num)
    }
    static getBusinessDescription(description)
    {
        cy.get('#input_15').should('have.value',description)
    }

}
export default Pagevamp