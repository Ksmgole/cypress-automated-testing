
class Pagevamp {
    static deleteUser(){
        var url = "https://api.pvdemo.com/delete/users/507832912916578/truncate?code=jokerisbetterthanbatman"
        return (url);
    }
    static getPagevampUrl(){
        return("https://"+ Cypress.env("baseUrl"))
    }
}
export default Pagevamp;