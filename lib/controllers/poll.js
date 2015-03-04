var pollModel = require('../models/poll');

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

module.exports.post = function(req, res){
  console.log('Posting poll', req.body);
  var newPoll = new pollModel(req.body);
  newPoll.save(function(err, response){
    if(!err){
      res.status(200).json(response);
    } else {
      res.json(err);
    }
  })
}

module.exports.put = function(req, res){
  console.log('Voting in poll', req.body);
  pollModel.findById(req.params._id , function(err, doc){
    if(!err){
      console.log('*************');
      console.log('DOC: ', doc);
      console.log('*******');
      console.log('req.body.choice: ',req.body.choice);
      doc.choices[req.body.choice].counter++;
      doc.save();
      res.status(200).json(doc);
    } else {
      res.status(500).json(err);
    }
  })
}







