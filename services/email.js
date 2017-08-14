var Seneca = require('seneca')
var email = require("emailjs");

var {smtp, email_message} = require('../config.js');
var server = email.server.connect(smtp);



var plugin = function (options) {
  var seneca = this;
  /**
   * send email
   *
   */
  seneca.add({area: 'email', action: 'send'},
             function(args, done) {
               /**
                * send the message and get a callback
                * with an error or details of the message that was sent
                */
               server.send(email_message, function(err, message) {
                 console.log(err || message);
                 done(null, {test: 'manageOrder'});
               });
             }
  ); 
}

module.exports = plugin;

var seneca = Seneca();

seneca.use(plugin)
      .listen(7700)
      .ready(function(){
        console.log('[Email Service] started on 7700')
        this.act({area: 'email', action: 'send'}, console.log)
      })
