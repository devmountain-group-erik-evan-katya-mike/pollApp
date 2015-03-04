var app = angular.module('pollApp');

app.controller('pollCtrl', function($scope, $stateParams, poll, pollService){
  $scope.poll = poll;

  $scope.createPoll = function(){
    var newTitle = $scope.pollTitle;
    var newPoll = [{"body":$scope.choice1, arrPosition: 0}, {"body":$scope.choice2, "arrPosition": 1}, {"body":$scope.choice3, "arrPosition": 2}, {"body":$scope.choice4, "arrPosition": 3}];

    mainService.createPoll(newTitle, newPoll);
    //socket.emit('poll', options);
    //console.log(options);
  };

  $scope.castVote = function(){
    console.log($stateParams.id, $scope.selectedChoice.arrPosition);
    pollService.castVote($stateParams.id, $scope.selectedChoice.arrPosition)
      .then(function(res){
        console.log(res);
      })
  }

})