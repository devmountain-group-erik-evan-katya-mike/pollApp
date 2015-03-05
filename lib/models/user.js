var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
  twitterId: {type: String},
  userName: {type: String},
  createdAt: {type: Number, default: Date.now()}
})

module.exports = mongoose.model('User', userSchema);