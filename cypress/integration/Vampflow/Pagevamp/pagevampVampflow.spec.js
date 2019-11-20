import Pagevamp from "./functions.spec"

var deleteUserUrl = Pagevamp.deleteUser(),
    pagevampUrl = Pagevamp.getPagevampUrl();

describe('Pagevamp vampflow',() =>{
    it('When brand new user with fb pages, logins, user first lands on Select page',()=>{
        cy.request(deleteUserUrl)
        cy.visit(pagevampUrl)
    })
})