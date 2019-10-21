describe('Pagevamp ',()=>{
    it('Checking feature section >> Domain',() => {
        cy.visit('https://www.pagevamp.com')
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
    })
    // it('Checking Prices',() => {
    //     cy.get('.pv-section .plan-box h2.plan-box__pricing').contains('$12')
    // })
    it('Checking 14 Days Trial',() => {
        cy.get('.pv-try .pv-title .pv-title__lead').contains('14')
        cy.visit('https://cf.pagevamp.com/pricing')
        cy.get('.pv-section .pv-title').contains('14')
    })
    it('Checking domain in pricing section',() => {
        cy.visit('https://www.pagevamp.com/pricing')
        cy.get('.pv-section .plan-box .plan-box__list').contains('Free custom domain (.com, .net or .org)')
    })
    it('How it works video link',() => {
        cy.visit('https://www.pagevamp.com')
        cy.get('#how-it-works-link').click()
        cy.contains('Watch it in action >').click()
    })
})