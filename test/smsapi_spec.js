var should = require('chai').should(),
    smsApi = require('../index'),
    nock = require('nock')

describe('SmsApi', function(){
  describe("#sendSms", function(){
    it("should send sms", function(done){
      var endpoint = 'https://ssl.smsapi.pl/sms.do'
      var username = 'username'
      var password = 'password'
      var phoneNumber = '48600600600'

      nock(endpoint)
        .filteringPath(function(path){
          return '/';
        })
        .get('/')
        .reply(200, 'Ok');

      var smsApiInstance = new smsApi(endpoint, username, password)
      smsApiInstance.sendSms(phoneNumber, 'Some Body', function(data, response){
        data.should.eql('Ok')
        done()
      })

    })
  })
})
