var app = angular.module('pollApp');

app.controller('pollCtrl', function($scope, poll){
  $scope.poll = poll;
})