var mongoose = require('mongoose');
var schema = mongoose.Schema;

var choice = require('./shared/choice');

var pollSchema = new schema({
  owner: {type: String},
  question: {type: String},
  choices: [choice],
  createdAt: {type: Number, default: Date.now()}
})

module.exports = mongoose.model('Poll', pollSchema);






