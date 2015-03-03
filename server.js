var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var io = require('socket.io');

var app = express();

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());



app.listen(8080);