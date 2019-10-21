
describe('Verisign Control flow',()=>{
    it('Checking Promotional Sticker',() => {
        cy.visit('https://cc4.pvdemo.com/?desh=ID')
        cy.get('.pv-banner .promo-sticker').should('not.exist')
        cy.visit('https://cc4.pvdemo.com/?desh=IN')
        cy.get('.pv-banner .promo-sticker').should('not.exist')
    })
    it('Checking feature section >> Domain',() => {
        cy.get('.pv-section .container .pv-cnt .pv-cnt__img .pvg-domain')
    })
    it('Checking 14 Days Trial',() => {
        cy.get('.pv-try .pv-title .pv-title__lead').contains('14')
        cy.visit('https://cc4.pvdemo.com/pricing')
        cy.get('.pv-section .pv-title').contains('14')
    })
    it('Checking Campaign price for Indonesia ',() => {
        cy.visit('https://cc4.pvdemo.com/?desh=id')
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains('US')
            cy.contains('$')
            cy.contains('12')
        })
        cy.visit('https://cc4.pvdemo.com/pricing/?desh=id')
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains('US')
            cy.contains('$')
            cy.contains('12')
        })
    })
    it('Checking Campaign price for India ',() => {
        cy.visit('https://cc4.pvdemo.com/?desh=in')
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains('INR')
            cy.contains('₹')
            cy.contains('850')
        })
        cy.visit('https://cc4.pvdemo.com/pricing/?desh=in')
        cy.get('.pv-section .plan-box h2.plan-box__pricing').within(() =>{
            cy.contains('INR')
            cy.contains('₹')
            cy.contains('850')
        })
    })
    it('Checking domain in pricing section',() => {
        cy.visit('https://cc4.pvdemo.com/pricing')
        cy.get('.pv-section .plan-box .plan-box__list').contains('Free custom domain (.com, .net or .org)')
    })
    it('How it works video link',() => {
        cy.visit('https://cc4.pvdemo.com')
        cy.get('#how-it-works-link').click()
        cy.contains('Watch it in action >').click()
    })
})