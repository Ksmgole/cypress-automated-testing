class Helper {
    static getSiteListingUrl(pageid) {
        return(Cypress.env("appUrl")+"/account/${pageid}/sites")
    }

    static getAppUrl() {
        return Cypress.env("appUrl");
    }

    static getFullAcPageId() {
        return 110017313828873;
    }
}

export default Helper
