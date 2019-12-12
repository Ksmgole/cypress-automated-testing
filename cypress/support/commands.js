// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login",function () {
    console.log("this is fuck");
    cy.request({
        url : Cypress.env("apiUrl")+"cypress/users/token/"+Cypress.env('test_users_id'),
        method :"GET"
    }).then(function (res) {
        if(res.body.access_token !== undefined && res.body.access_token) {
            window.localStorage.setItem("pvpreview.access_token",res.body.access_token);
        }
    })
});
