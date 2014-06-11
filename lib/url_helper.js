var _ = require('underscore')
var url = require('url');

function UrlHelper(url, params){
  this.url = url
  this.params = params
}

UrlHelper.prototype.paramsToString = function(params){
  var arrParams = []
  _.each(params, function(v, k){
    arrParams.push(k + "=" + v)
  })

  return "?" + arrParams.join("&")
}

UrlHelper.prototype.buildUrlWithParams = function(){
  return url.parse(this.url + this.paramsToString(this.params)).href
}

module.exports = UrlHelper
