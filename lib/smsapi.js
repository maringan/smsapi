var restClient = require('node-rest-client').Client
var CONFIG = require('config').SmsApi
var _ = require('underscore')

function SmsApi(){
  this.client = new restClient()

  this.endpoint = endpoint
  this.username = username
  this.password = password

  sendSms: function(from, to, messag, group = false){
    client.get(buildUrl(from, to, message, group), function(data, response){
      return response
    })
  },

  buildUrl: function(hashParams){
    var params = {}
    _.each(hashParams, function(k, v){

    })
  }
}

module.export = SmsApi
