var app = angular.module('pollApp');

app.service('pollService', function($http, $q, $state){

  this.getPoll = function(id){
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/api/poll/' + id
    }).then(function(res){

        var poll = res.data;
            var totalVotes = 0;
            for (var i = 0; i < poll.choices.length; i++) {
                totalVotes += poll.choices[i].counter;

            };
            poll.totalVotes = totalVotes;


      dfd.resolve(res.data);
    })
    return dfd.promise;
  }

  this.castVote = function(id, choice){
    var dfd = $q.defer();
    $http({
      method: 'PUT',
      url: '/api/poll/' + id,
      data: choice
    }).then(function(res){
      console.log(res);
      dfd.resolve(res.data);
        $state.go("pollResults", {id: res.data._id});
    })
    return dfd.promise;
  }

    this.createPoll = function(owner, title, poll) {
        console.log('OWNER: ', owner);
        console.log(poll);
        var dfd = $q.defer()
        $http({
            method: 'POST',
            url: '/api/poll/',
            data: {owner: owner, title: title, choices: poll}
        }).then(function(res) {
            console.log(res.data.owner);
            dfd.resolve(res.data);
            $state.go("poll", {id: res.data._id})
        }, function(err) {
            console.log(err)
            dfd.resolve(err);
        })
        return dfd.promise;
    }

    this.getUserPolls = function(id) {

       var dfd = $q.defer();
       $http({
           method: "GET",
           url: '/api/poll/user/' +id
       }).then(function(res) {
           var arr = res.data;
           for (var i = 0; i < arr.length; i++) {
             var totalVotes = 0;
             for (var j = 0; j < arr[i].choices.length; j++) {
               totalVotes += arr[i].choices[j].counter;
             };
             arr[i].totalVotes = totalVotes;
           };
           dfd.resolve(res.data);
           $state.go("dashboard.activePolls")
       }, function(err){
           dfd.reject(err);
       })
       return dfd.promise;
    }

    this.deletePoll = function(id) {
        var dfd = $q.defer();
        $http({
            method: "DELETE",
            url: 'api/poll/' + id
        }).then(function(res) {
            dfd.resolve(res);
        }, function(err) {
            dfd.reject(err);
        })
        return dfd.promise;
    }

})