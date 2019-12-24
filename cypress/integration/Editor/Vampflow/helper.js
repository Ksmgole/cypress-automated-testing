class Pagevamp {
    static getMultiPageAccountConfirmationUrl() {
        return (Cypress.env("appUrl") + "setup/account-confirmation?pageId=110017313828873")
    }
    navigateOnePageUrl() 
    {
        cy.login()
        cy.visit(Cypress.env("appUrl") + "setup/onepage-account-confirmation")
    }
    validateUserEmail(email)
    {
        cy.get('#input_8').should('have.value', email)
    }
    validateSiteLanguage(lang)
    {
        cy.get('#select_value_label_4').contains(lang)
    }
    validateWebsiteTitle()
    {
        cy.get('#input_7').should('have.value', '')
    }
    validateBusinessCategory() 
    {
        cy.get('#select_5').should('have.attr','aria-label','Business category')
    }
    selectBusinessCategory()
    {
        cy.get('#select_5').click().then(($click)=>{
            cy.get('.md-select-menu-container #select_option_31').click()
        })
    }
    inputWebsiteTitle(title)
    {
        cy.get('#input_7').type(title)
    }
    inputPhoneNumber(number)
    {
        cy.get('#input_14').type(number)
    }
    inputBusinessDescription(description)
    {
        cy.get('#input_15').type(description)
    }
    submitBusinessDetails()
    {
        cy.get('.vamp-footer button.btn-submitting').click()
    }
    skipDomainSetup()
    {
        cy.get('.btn-warning').click()
        cy.get('.modal-dialog .modal-footer .btn-warning').click()
    }
    verifyDemoPage(url)
    {
        cy.url().should('include',url)
    }

}
export default Pagevamp