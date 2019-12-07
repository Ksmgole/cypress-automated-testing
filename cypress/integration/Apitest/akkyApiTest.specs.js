import akkyApiHelper from './akkyApiHelper'

describe('Akky Api Testing',()=>{

    before(function() {
        cy.request(akkyApiHelper.getDeletePageUrl())
    });

    it('Akky Subscription Create API',()=>{
        cy.request({
            method: 'POST',
            url: akkyApiHelper.getSubscriptionCreateApiUrl(),
            body: {
                apiKey: akkyApiHelper.getApiKey(),
                apiSecret: akkyApiHelper.getApiSecret(),
                plan: akkyApiHelper.getAkkyYearlyPlan(),
                facebookPageUrl: akkyApiHelper.getFacebookPageUrl()
            },
        }).then((response)=> {
            var message = response.body.message,
                httpCode = response.body.http_code,
                code =  response.body.code,
                url = response.body.url;     

            assert.equal(message,"Subscription successfully created")
            assert.equal(httpCode,"200")
            assert.equal(url,akkyApiHelper.getLandingPageUrl()+"/?trk_code="+akkyApiHelper.getAkkyTrackingCode()+"&fbid="+akkyApiHelper.getPageId())
            cy.log(code)
        })
    });
})