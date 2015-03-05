var app = angular.module('pollApp');

app.service('pollService', function($http, $q, $state){

  this.getPoll = function(id){
    console.log('in getpoll service');
    console.log(id);
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/api/poll/' + id
    }).then(function(res){
      console.log(res.data);
      dfd.resolve(res.data);
    })
    return dfd.promise;
  }

  this.castVote = function(id, choice){
    var dfd = $q.defer();
    $http({
      method: 'PUT',
      url: '/api/poll/' + id,
      data: {choice: choice}
    }).then(function(res){
      console.log(res);
      dfd.resolve(res.data);
    })
    return dfd.promise;
  }

    this.createPoll = function(title, poll) {
        console.log(poll);
        var dfd = $q.defer()
        $http({
            method: 'POST',
            url: '/api/poll/',
            data: {title: title, choices: poll}
        }).then(function(res) {
            console.log(res)
            dfd.resolve(res);
            $state.go("dashboard.activePolls")
        }, function(err) {
            console.log(err)
            dfd.resolve(err);
        })
        return dfd.promise;
    }

})