var url = "http://xyz.com"
var testHash = {a: 1, b: 2}

var should = require('chai').should(),
    UrlHelper = require('../lib/url_helper'),
    urlInstance = new UrlHelper(url, testHash),
    paramsToString = urlInstance.paramsToString

describe("UrlHelper", function(){
  describe("#paramsToString", function(){
    it("should change hash to string", function(){
      paramsToString(testHash).should.eql("?a=1&b=2")
    })
  })

  describe("#buildUrlWithParams", function(){
    it("should build correct url with params", function(){
      urlInstance.buildUrlWithParams().should.eql("http://xyz.com/?a=1&b=2")
    })
  })
})
