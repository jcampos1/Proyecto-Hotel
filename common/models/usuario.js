'use strict';

var config = require('../../server/config.json');
var path = require('path');

module.exports = function(Usuario) {
//send verification email after registration
  Usuario.afterRemote('create', function(context, userInstance, next) {
    console.log('> user.afterRemote triggered');
    var options = {
      type: 'email',
      to: userInstance.email,
      from: 'jcampos@ea-asc.com',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/verified',
      user: Usuario
    };

    var options = {
     type: 'email',
      to: userInstance.email,
      from: 'jcampos@ea-asc.com',
     subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
     redirect: '/',
     tokenGenerator: function (userInstance, cb) { cb("random-token"); }
   };

   userInstance.verify(options, next);

  });
};
