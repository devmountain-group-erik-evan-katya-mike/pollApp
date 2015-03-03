var mongoose = require('mongoose');
var schema = mongoose.Schema;

var pollSchema = new schema({
  owner: {type: String},
  title: {type: String},
  choices: [{
      body: String,
      counter: {type:Number, default: 0}
    }],
  createdAt: {type: Number, default: Date.now()}
})

module.exports = mongoose.model('Poll', pollSchema);






