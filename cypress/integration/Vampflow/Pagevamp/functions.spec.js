
class Pagevamp {
   
    static getSelectPageUrl(){
        return(Cypress.env("appUrl")+"/setup/select-page")
    }
}
export default Pagevamp;