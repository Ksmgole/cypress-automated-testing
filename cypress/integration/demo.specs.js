describe('Visual regression tests for News listing page', () => {

it('Mongo data',()=>{
  cy.request('GET','https://seo.pagevamp.com/pages/343049269118318/posts').then((response)=>{
    // var response = response.body,
    //      id = response.data.id
    //      Object.keys(id).length

    cy.log(response.body)
    // var data = JSON.parse(response.data)
    // cy.log(data)
  })
    
          //  totalPosts= data.id
          //  cy.log(response)
          //  totalPostsLength = Object.keys(totalPosts).length
    })
  })

