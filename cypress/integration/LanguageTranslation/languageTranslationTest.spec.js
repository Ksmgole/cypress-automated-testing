
describe('Pagevamp Vampflow in mobile',()=>{

        before(function() {
            window.localStorage.setItem("pvpreview.access_token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnBhZ2V2YW1wLmNvbVwvanVzdC1sb2dpbiIsImlhdCI6MTU3NTM4OTI1OSwiZXhwIjoxNTc1Mzk2NDU5LCJuYmYiOjE1NzUzODkyNTksImp0aSI6InlVYnRXTGxBZ1NFYm1vVjEiLCJzdWIiOjUyMDM2LCJwcnYiOiI3MmNmODY4ODc2ODI5MGE1Y2U1MjBmZDgxNWZmN2EwYzE4OWIwYjA4In0.W40FmpsE0hjwfTKIsEsjvuEIArCRjsRp1ZhiqaH4C1I");
            cy.visit("https://app.pagevamp.com/account/1422199391384377/sites");
            cy.wait(60000)
        });
        it('checking Spanish Translation',()=>{
           cy.get('#language-dropdown-menu').click()
           cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(2) > .ng-binding').click()
           cy.get('.aligning-center').contains('Sitios')
        });
        it('checking Italian Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(3) > .ng-binding').click()
            cy.get('.aligning-center').contains('Siti')
        });
        it('checking Korean Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(4) > .ng-binding').click()
            cy.get('.aligning-center').contains('사이트')
        });
        it('checking Portuguese Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(5) > .ng-binding').click()
            cy.get('.aligning-center').contains('Sites')
        });
        it('checking Japanese Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(6) > .ng-binding').click()
            cy.get('.aligning-center').contains('サイト')
        });
        it('checking Thai Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(7) > .ng-binding').click()
            cy.get('.aligning-center').contains('เว็บไซต์')
        });
        it('checking Turkish Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(8) > .ng-binding').click()
            cy.get('.aligning-center').contains('Siteler')
        });
        it('checking Arabic Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(9) > .ng-binding').click()
            cy.get('.aligning-center').contains('المواقع')
        });
        it('checking Indonesian Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(10) > .ng-binding').click()
            cy.get('.aligning-center').contains('Situs')
        });
        it('checking Polish Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(11) > .ng-binding').click()
            cy.get('.aligning-center').contains('Strony')
        });
        it('checking Dutch Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(12) > .ng-binding').click()
            cy.get('.aligning-center').contains('Websites')
        });
        it('checking Chinese Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(13) > .ng-binding').click()
            cy.get('.aligning-center').contains('網站')
        });
        it('checking Czech Republic Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(14) > .ng-binding').click()
            cy.get('.aligning-center').contains('Stránky')
        });
        it('checking French Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language > .dropdown > .uib-dropdown-menu > :nth-child(15) > .ng-binding').click()
            cy.get('.aligning-center').contains('Mes sites')
        });
       
});