var mongoose = require('mongoose');
var schema = mongoose.Schema;

var User = require('./user');

var pollSchema = new schema({
  owner: {type: mongoose.Schema.ObjectId, ref: 'User'},
  title: {type: String},
  choices: [{
      body: String,
      arrPosition: Number,
      counter: {type: Number, default: 0}
    }],
  active: {type: Boolean, default: true},
  createdAt: {type: Number, default: Date.now()}
})

module.exports = mongoose.model('Poll', pollSchema);






