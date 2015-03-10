var pollModel = require('../models/poll');
var userModel = require('../models/user');

module.exports.get = function(req, res){
  console.log('Getting poll');
  console.log(req.params._id)
  pollModel.findById(req.params._id , function(err, results){
      console.log(err, results);
    if(!err){
      res.status(200).json(results);
    } else {
      res.status(500).json(err);
    }
  })
}

module.exports.getUserPolls = function(req, res){
  console.log('Getting all polls for user');
  console.log('req.params._id', req.params._id );
  userModel.findOne({twitterId: req.params._id}, function(err, user){
    console.log('USER: ', user);
    pollModel
      .find({owner: user._id})
      .exec(function (err, polls){
        if (err) console.log('there is an error: ', err);
        if (!err) console.log('The polls are an array: ', polls);
        res.status(200).json(polls);
      })
    })
}



module.exports.post = function(req, res){
    //console.log("Posting Poll", req.body)
    console.log("Testing 123", req.body.choices)
  userModel.findOne({twitterId: req.body.owner}, function(err, user){
    console.log('*****USER: ', user);
    console.log('*****USER: ', user._id);
    req.body.owner = user._id;
    console.log('%%%%% req.body.owner: ', req.body.owner);
    var newPoll = new pollModel(req.body);
    newPoll.save(function(err, response){
    if(!err){
      res.status(200).json(response);
    } else {
      res.json(err);
    }
  })
  })
}


module.exports.put = function(req, res){
  console.log('Voting in poll', req.body);
  //var choice = JSON.parse(req.body);
  //  console.log(444444444444444444444444444, choice);
  pollModel.findById(req.params._id , function(err, doc){
    if(!err){
      console.log('1111111111111111');
      console.log('DOC: ', doc);
      console.log('2222222222222');
      console.log('req.body.choice: ',req.body);
      console.log(55555555555555555555, req.body._id)
      //doc.choices[req.body.choice].counter++;
      for(var i = 0; i < doc.choices.length; i++) {
          if(doc.choices[i]._id == req.body._id) {
              doc.choices[i].counter++

          }
      };
      doc.save()
      res.status(200).json(doc);
    } else {
      res.status(500).json(err);
    }
  })
}







