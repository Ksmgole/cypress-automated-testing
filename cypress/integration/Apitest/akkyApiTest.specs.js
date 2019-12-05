import { AssertionError } from "assert";

describe('Akky Api Testing',()=>{

    before(function() {
        cy.request("https://api.pvdemo.com/delete/275727663294286/truncate?code=jokerisbetterthanbatman")
    });

    it('Akky Subscription Create API',()=>{
        cy.request({
            method: 'POST',
            url: 'https://api.pvdemo.com/reseller/subscriptions/',
            body: {
                apiKey: 'kusum',
                apiSecret: 'kusum',
                plan: '1',
                facebookPageUrl: 'https://www.facebook.com/BeautySpa-275727663294286'
            },
        }).then((response)=> {
            var message = response.body.message,
                httpCode = response.body.http_code,
                code =  response.body.code,
                url = response.body.url;     

            assert.equal(message,"Subscription successfully created")
            assert.equal(httpCode,"200")
            cy.log(code)
            assert.equal(url,"https://pvdemo.com/?trk_code=zsjnb8G&fbid=275727663294286")
        })
    });
})