/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
*/
var bcrypt = require('bcrypt');

module.exports = {

   attributes: {
      id: {
         type: 'integer',
         primaryKey: true,
         autoIncrement: true
      },
      name: {
         type: 'string'
      },
      email: {
         type: 'string',
         required: true,
         unique: true
      },
      password: {
         type: 'string'
      },
      firebase_token: {
         type: 'string'
      },
      avatar: {
         type: 'string'
      },
      phone_number: {
         type: 'string'
      },
      toJSON: function() {
         var obj = this.toObject();
         delete obj.password;
         return obj;
      }
   },
   beforeCreate : function (values, next) {
      bcrypt.genSalt(10, function (err, salt) {
         if(err) return next(err);
         bcrypt.hash(values.password, salt, function (err, hash) {
            if(err) return next(err);
            values.password = hash;
            next();
         })
      })
   },
   comparePassword : function (password, user, cb) {
      bcrypt.compare(password, user.password.replace('$2y$', '$2a$'), function (err, match) {
         if(err) cb(err);
         if(match) {
            cb(null, true);
         } else {
            cb(err);
         }
      })
   }
};
