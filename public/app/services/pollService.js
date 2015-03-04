var app = angular.module('pollApp');

app.service('pollService', function($http, $q){
  this.getPoll = function(id){
    console.log('in getpoll service');
    console.log(id);
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/api/poll/' + id
    }).then(function(res){
      console.log(res);
      dfd.resolve(res.data);
    })
    return dfd.promise;
  }
})