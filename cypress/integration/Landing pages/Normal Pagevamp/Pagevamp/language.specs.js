import pv from '../helper'
import pagevampLandingpage from '../pagevamp'

describe('Checking Landing Page Translation',() => {
    before(function(){
        cy.visit(pv.getPagevampUrl())
    })

    it('should load Spanish Language if ES is chosen',()=>{
        pagevampLandingpage.checkLanguage('Spanish','Obtenga más clientes con un hermoso sitio web. Déjanos construirle uno en segundos.')
    })

    it('should load Indonesian Language if ID is chosen',()=>{
        pagevampLandingpage.checkLanguage('Indonesian','Dapatkan pelanggan yang lebih banyak dengan situs web yang indah. Biarkan kami membuatnya untuk Anda dalam sekejap.')
    })

    it('should load Italian Language if IT is chosen',()=>{
        pagevampLandingpage.checkLanguage('Italian','Ottieni più clienti con un sito web bellissimo. Fattene costruire uno da noi in pochi secondi.')
    })

    it('should load Vietnamese Language if VI is chosen',()=>{
        pagevampLandingpage.checkLanguage('Vietnamese','Nhận được nhiều khách hàng với một trang web đẹp. Hãy xây dựng một cho bạn trong vài giây.')
    })

    it('should load Thai Language if TH is chosen',()=>{
        pagevampLandingpage.checkLanguage('Thai','ได้ลูกค้ามากขึ้นจากเว็บไซต์ที่สวยงาม ให้เราสร้างเว็บไซต์ให้คุณภายในไม่กี่วินาที')
    })

    it('should load English Language if EN is chosen',()=>{
        pagevampLandingpage.checkLanguage('English','Get more customers with a beautiful website. Let us build you one in seconds.')
    })

})