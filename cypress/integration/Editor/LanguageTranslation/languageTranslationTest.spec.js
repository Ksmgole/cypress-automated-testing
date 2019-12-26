import Pagevamp from "./helper";

describe('Pagevamp Admin Language Translation',()=>{

        before(function() {
            cy.login()
            cy.visit(Pagevamp.getPagevampSitesUrl());
            cy.wait(6000)
        });
        it('checking Spanish Translation',()=>{
           cy.get('#language-dropdown-menu').click()
           cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(2)').click()
           cy.get('.aligning-center').contains('Sitios')
        });
        it('checking Italian Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(3)').click()
            cy.get('.aligning-center').contains('Siti')
        });
        it('checking Korean Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(4)').click()
            cy.get('.aligning-center').contains('사이트')
        });
        it('checking Portuguese Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(5)').click()
            cy.get('.aligning-center').contains('Sites')
        });
        it('checking Japanese Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(6)').click()
            cy.get('.aligning-center').contains('サイト')
        });
        it('checking Thai Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(7)').click()
            cy.get('.aligning-center').contains('เว็บไซต์')
        });
        it('checking Turkish Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(8)').click()
            cy.get('.aligning-center').contains('Siteler')
        });
        it('checking Arabic Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(9)').click()
            cy.get('.aligning-center').contains('المواقع')
        });
        it('checking Indonesian Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(10)').click()
            cy.get('.aligning-center').contains('Situs')
        });
        it('checking Polish Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(11)').click()
            cy.get('.aligning-center').contains('Strony')
        });
        it('checking Dutch Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(12)').click()
            cy.get('.aligning-center').contains('Websites')
        });
        it('checking Chinese Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(13)').click()
            cy.get('.aligning-center').contains('網站')
        });
        it('checking Czech Republic Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(14)').click()
            cy.get('.aligning-center').contains('Stránky')
        });
        it('checking French Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(15)').click()
            cy.get('.aligning-center').contains('Mes sites')
        });
        it('checking English Translation',()=>{
            cy.get('#language-dropdown-menu').click()
            cy.get('.language .dropdown .uib-dropdown-menu li:nth-child(1)').click()
            cy.get('.aligning-center').contains('Sites')
        });

});
