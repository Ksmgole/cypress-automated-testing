import Helper from "../helper";

var publishedListSelector = `.published-site-listing-${Helper.getFullAcPageId()}`;
var unublishedListSelector = `.unpublished-site-listing-${Helper.getFullAcPageId()}`;

describe('Sites listing test', () => {

    beforeEach(function () {
        cy.login()
        cy.visit(Helper.getAppUrl());
        cy.get('#trial-wrap').then(($div) => {
            if (!$div.hasClass('hide')) {
                cy.get('#trial-wrap .close').click();
            }
        })
    })

    //
    it('check if correct number of pages are listed', () => {
        // cy.get('.published-wrap').find('.col-md-12').its('length').should('eq', 1);
        // after you done then change this
    });

    it('Click create a new site button', () => {
        cy.get('.create-a-new-site').click();
        cy.get('.modal--onepage').should('be.visible');
        cy.get('.modal--onepage').find('.close').click();
        cy.get('.modal--onepage').should('not.exist');
    });


    it("unpublish a site", () => {
        //check what happens after cancel
        cy.get(publishedListSelector).find('.switch-sites').click();
        cy.get('.genaral-popup').should('be.visible');
        cy.get('.genaral-popup .cancel-unpublish-btn').click()
        cy.get('.genaral-popup').should('not.be.visible');


        //check what happens after unpublish
        cy.get(publishedListSelector).find('.switch-sites').click();
        cy.get('.genaral-popup').should('be.visible');
        cy.get('.genaral-popup .unpublish-btn').click()
        cy.wait(10000)
        cy.get(unublishedListSelector).should('exist');
    });

    it("publish a site",() => {
        cy.get(unublishedListSelector).find('.switch-sites').click();
        cy.get(publishedListSelector).should('exist');
    });



});
