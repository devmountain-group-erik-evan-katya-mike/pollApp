var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var config = require('./config');
var passport = require('passport');
var io = require('socket.io')();
var TwitterStrategy = require('passport-twitter').Strategy;
var app = express();
var userCtrl = require('./lib/controllers/user');
var pollCtrl = require('./lib/controllers/poll');


        //middleware start
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(session({
	secret: config.session_secret
}));
app.use(passport.initialize());
app.use(passport.session());
        //middleware end

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

        //twitter oauth start                       
passport.use(new TwitterStrategy({
	consumerKey: config.twitter_key,
	consumerSecret: config.twitter_secret,
	callbackURL: 'http://localhost:8080/auth/twitter/callback'
  }, 
  function(token, tokenSecret, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      console.log(profile);
      userCtrl.updateOrCreate(profile).then(function(results){
      done(null, profile);
      }, function(err){
      done(err, profile);
      })
    });
  }
));

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', {
	
  successRedirect: '/#/dashboard',
	failureRedirect: '/login.html'
}));

app.get('/auth/logout', function(req, res){
  req.logout();
  res.status(200).json(req.user);
})

app.get('/auth/me', function(req, res){
  return res.json(req.user);
});



var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.redirect('/login.html');
	}
	next();
}

        //twitter oauth end


        //mongoDB start

mongoose.connect('mongodb://localhost/poll');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('the mongoose is loose');
});
        //mongoDB end


        //socket.io start

//io.on('connection', function(socket){
//    console.log('Connection made!')
//
//    socket.emit('connection')
//
//    socket.on('joinRoom', function(room){
//        socket.join(room);
//    });
//
//    socket.on('pollCreated', function(){
//        io.to('mainRoom').emit('pollCreated');
//    });
//
//    socket.on('joinRoom', function(room){
//        socket.join(room);
//
//
//        socket.on('voted', function(room){
//            io.to(room).emit('voted')
//            // socket.join('joinRoom', function(err, room){
//            // 		io.sockets.to(room).emit('voted')
//            // 	})
//        })
//    });
//});

        //socket.io end



app.get('/api/poll/:_id', pollCtrl.get);
app.post('/api/poll/', pollCtrl.post);
app.put('/api/poll/:_id', pollCtrl.put);
app.delete('/api/poll/:_id', pollCtrl.delete);

app.get('/api/poll/user/:_id', pollCtrl.getUserPolls);





app.listen(8080);