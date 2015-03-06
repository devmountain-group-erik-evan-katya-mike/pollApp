var app = angular.module('pollApp');

app.controller('pollResultCtrl', function($scope, $stateParams, $interval, poll, pollService){

  $scope.poll = poll;

  var counter = 0;
  var updateCount = function(){
    pollService.getPoll($stateParams.id)
      .then(function(res){
        counter++;
        //console.log('Updating poll counts. Number of times fetched: ', counter);
        $scope.poll = res;
      })
  }

  $interval(updateCount, 1000);


})