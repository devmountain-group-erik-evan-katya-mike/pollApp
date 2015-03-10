var app = angular.module('pollApp');

app.controller('pollCtrl', function($scope, $stateParams, $interval, poll, pollService){

  $scope.poll = poll;
    console.log(poll);
    console.log(poll.choices);

  //  mainService.createPoll(newTitle, newPoll);
  //  //socket.emit('poll', options);
  //  //console.log(options);
  //};
  //
  //$scope.castVote = function(){
  //  console.log($stateParams.id, $scope.selectedChoice.arrPosition);
  //  pollService.castVote($stateParams.id, $scope.selectedChoice.arrPosition)
  //    .then(function(res){
  //      console.log(res);
  //    })
  //}

    $scope.castVote = function(){
        console.log($scope.selectedVote);
        console.log($stateParams.id);
        pollService.castVote($stateParams.id, $scope.selectedVote)
            .then(function(res){
                console.log(res);
            })
    }

})