class Pagevamp {
    
    static getPagevampSitesUrl(){
        return(Cypress.env("appUrl")+"/account/323789891728074/sites")
    }
}
export default Pagevamp;