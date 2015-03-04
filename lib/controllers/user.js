var User = require('./../models/user');
var q = require('q');

module.exports = {
  updateOrCreate: function(user){
    var deferred = q.defer();
    User.findOne({ twitterId: user.id }, function(err, results){
      if(err) return deferred.reject(err);
      if(results){
        User.update({ _id: results._id }, {
          userName: user.username,
        }, function(err, results){
          if(err){
            return deferred.reject(err);
          } else {
            deferred.resolve(results);
          }
        })
      } else {
        User.create({
          twitterId: user.id,
          userName: user.username,
        }, function(err, results){
          if(err){
            return deferred.reject(err);
          } else {
            deferred.resolve(results);
          }
        })
      }
    })
    return deferred.promise;
  },
  getUser: function(id){
    var deferred = q.defer();
    User.findOne({ twitterId: id }, function(err, results){
      if(err){
        deferred.reject(err);
      } else {
        console.log(results);
        deferred.resolve(results);
      }
    })
    return deferred.promise;
  }
}