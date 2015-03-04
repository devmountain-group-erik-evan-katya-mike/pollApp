var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var config = require('./config');
var passport = require('passport');
var io = require('socket.io')();
var TwitterStrategy = require('passport-twitter').Strategy;
var app = express();


        //middleware start
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(session({
	secret: config.session_secret
}));
app.use(passport.initialize());
app.use(passport.session());
        //middleware end


        //twitter oauth start                       
passport.use(new TwitterStrategy({
	consumerKey: config.twitter_key,
	consumerSecret: config.twitter_secret,
	callbackURL: 'http://localhost:8080/auth/twitter/callback'
}, function(token, tokenSecret, profile, done) {
	//create/update/lookup db record
	done(null, profile);
}));

passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', {
	successRedirect: '/',
	failureRedirect: '/login.html'
}));

var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.redirect('/login.html');
	}
	next();
}

app.get('/', isAuthed, function(req, res) {
	return res.sendFile(__dirname+'/public/home.html');
});
        //twitter oauth end


        //mongoDB start
var pollCtrl = require('./lib/controllers/poll');

mongoose.connect('mongodb://localhost/poll');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('the mongoose is loose');
});
        //mongoDB end


        //socket.io start
io.on('connection', function(socket){
	console.log('connected!')
	socket.on('poll', function(options){
	})
})
        //socket.io end


app.get('/api/poll/:_id', pollCtrl.get);
app.post('/api/poll/', pollCtrl.post);






app.listen(8080);