var express = require('express');
var bodyParser = require('body-parser');
//var expressSession = require('express-session');
var config = require('./etc/config');
var mongoose = require('mongoose');

require("fs").readdirSync('./models').forEach(function(file) {
  var temp = (file.replace(/\.[^/.]+$/, ""));
  var myModel = temp.charAt(0).toUpperCase()+temp.slice(1);

   //require("/models/" + file);
   console.log('Loading models:\n'+'File: '+file+' for model: '+myModel);

});










mongoose.connect(config.db, function(err) {
    if (err) throw err;
});
var User = require('./models/users'); //used by passport
// JWT stuff
var expressJWT = require('express-jwt');
var ensureAuthenticated = expressJWT({ secret: config.localKey });

var app = express();

//Use body parser for
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));








// Start a server listener
app.listen(3000, function() {
    console.log("App: " + app.name + " is listening on 3000. ");

});
