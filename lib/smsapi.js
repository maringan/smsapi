var restClient = require('node-rest-client').Client,
    merge = require('deepmerge'),
    urlHelper = require('./url_helper')

function SmsApi(endpoint, username, password, params){
  if(!params){ params = {} }
  this.client = new restClient()

  this.endpoint = endpoint
  this.paramsHash = merge({ username: username, password: password }, params)
  this.lastResponse = null
}

SmsApi.prototype.sendSms = function(to, message, responseCallback){
  var params = merge(this.paramsHash, {to: to, message: message})
  urlH = new urlHelper(this.endpoint, params)
  requestUrl = urlH.buildUrlWithParams()

  this.client.get(requestUrl, responseCallback)
}

module.exports = SmsApi
