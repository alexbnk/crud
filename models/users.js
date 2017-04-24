var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');
var Schema = mongoose.Schema;

  var userSchema = new Schema({

      fName : {type: String},
      lName : {type: String},
      roles: [],
      photoURI: {type: String},
      lastUdated: {type: Date, default: Date.now },
//Authentication related:
      displayName:{type: String},
      userName: {type: String},
      eMail: { type: String, required: true, index: { unique: true } },
      socialId: {type: String},
      loginCount: {type:Number},
      passWord: { type: String },
      lastLogin: {type: Date},
      provider: { type: String }


  });

  userSchema.plugin(plm);

var User = mongoose.model("User", userSchema);
module.exports = User;
