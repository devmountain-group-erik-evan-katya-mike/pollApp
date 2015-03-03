var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var io = require('socket.io');
var q = require('q');

var app = express();

var pollCtrl = require('./lib/controllers/poll');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/poll');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('the mongoose is loose');
});


app.get('/api/poll/:_id', pollCtrl.get);
app.post('/api/poll/', pollCtrl.post);




app.listen(8080);