var app = angular.module('pollApp');

app.controller('pollCtrl', function($scope, $stateParams, poll, pollService){
  $scope.poll = poll;

  $scope.castVote = function(){
    console.log($stateParams.id, $scope.selectedChoice.arrPosition);
    pollService.castVote($stateParams.id, $scope.selectedChoice.arrPosition)
      .then(function(res){
        console.log(res);
      })
  }

})