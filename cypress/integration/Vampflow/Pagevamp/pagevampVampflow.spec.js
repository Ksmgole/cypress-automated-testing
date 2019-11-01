import Pagevamp from "./functions.spec"
const {TBD} = require('cypress-social-logins').plugins
module.exports = (on, config) => {
    on('task', {
      TBD: TBD
    })
  }


var deleteUserUrl = Pagevamp.deleteUser(),
    pagevampUrl = Pagevamp.getPagevampUrl();

describe('Pagevamp vampflow',() =>{
    it('When brand new user with fb pages, logins, user first lands on Select page',()=>{
        cy.request(deleteUserUrl)
        cy.visit(pagevampUrl)
        cy.get('#topmost-nav .navbar-right .pv-login-trigger').click()
        cy.get('#login-pv-continue').click()
        cy.window().then((win) => {
            const email = Cypress.env('fbLoginEmail')
            const password = Cypress.env ('fbLoginPassword')
            const cookieName = Cypress.env('cookieName')
            const socialLoginOptions = {
                    username,
                    password,
                    loginUrl: Cypress.env('loginUrl'),
                    headless: true,
                    logs: false,
                    loginSelector: 'a[href="/auth/auth0/google-oauth2"]',
                    postLoginSelector: '.account-panel'
            }
        })
    })
})