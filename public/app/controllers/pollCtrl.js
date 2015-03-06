var app = angular.module('pollApp');

app.controller('pollCtrl', function($scope, $stateParams, $interval, poll, pollService){

  $scope.poll = poll;

  //  mainService.createPoll(newTitle, newPoll);
  //  //socket.emit('poll', options);
  //  //console.log(options);
  //};

  $scope.castVote = function(){
    console.log($stateParams.id, $scope.selectedChoice.arrPosition);
    pollService.castVote($stateParams.id, $scope.selectedChoice.arrPosition)
      .then(function(res){
        console.log(res);
      })
  }

})