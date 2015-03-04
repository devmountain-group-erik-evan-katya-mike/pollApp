var mongoose = require('mongoose');
var schema = mongoose.Schema;

var pollSchema = new schema({
  owner: {type: String},
  title: {type: String},
  choices: [{
      body: String,
      arrPosition: Number,
      counter: {type:Number, default: 0}
    }],
  createdAt: {type: Number, default: Date.now()}
})

module.exports = mongoose.model('Poll', pollSchema);






