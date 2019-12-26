import pagevampHelper from '../pvHelper'

describe('Checking Landing Page Translation',() => {
    before(function(){
        cy.visit(pagevampHelper.getPagevampUrl())
    })

    it('should load Spanish Language if I choose ES',()=>{
        cy.get('#topmost-nav .navbar-right .dropdown-toggle').click()
        cy.contains('Spanish').click()
        cy.get('.pv-banner .pv-title').contains('Obtenga más clientes con un hermoso sitio web. Déjanos construirle uno en segundos.')
    })

    it('should load Indonesian Language if I choose ID',()=>{
        cy.get('#topmost-nav .navbar-right .dropdown-toggle').click()
        cy.contains('Indonesian').click()
        cy.get('.pv-banner .pv-title').contains('Dapatkan pelanggan yang lebih banyak dengan situs web yang indah. Biarkan kami membuatnya untuk Anda dalam sekejap.')
    })
    it('should load Italian Language if I choose IT',()=>{
        cy.get('#topmost-nav .navbar-right .dropdown-toggle').click()
        cy.contains('Italian').click()
        cy.get('.pv-banner .pv-title').contains('Ottieni più clienti con un sito web bellissimo. Fattene costruire uno da noi in pochi secondi.')
    })
    it('should load Vietnamese Language if I choose VI',()=>{
        cy.get('#topmost-nav .navbar-right .dropdown-toggle').click()
        cy.contains('Vietnamese').click()
        cy.get('.pv-banner .pv-title').contains('Nhận được nhiều khách hàng với một trang web đẹp. Hãy xây dựng một cho bạn trong vài giây.')
    })
    it('should load Thai Language if I choose TH',()=>{
        cy.get('#topmost-nav .navbar-right .dropdown-toggle').click()
        cy.contains('Thai').click()
        cy.get('.pv-banner .pv-title').contains('ได้ลูกค้ามากขึ้นจากเว็บไซต์ที่สวยงาม ให้เราสร้างเว็บไซต์ให้คุณภายในไม่กี่วินาที')
    })
    it('should load English Language if I choose EN',()=>{
        cy.get('#topmost-nav .navbar-right .dropdown-toggle').click()
        cy.contains('English').click()
        cy.get('.pv-banner .pv-title').contains('Get more customers with a beautiful website. Let us build you one in seconds.')
    })

})