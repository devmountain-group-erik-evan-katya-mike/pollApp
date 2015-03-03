var app = angular.module("pollApp");

app.controller("loginCtrl", function($scope, loginService) {


    $scope.loginUser = function() {
        loginService.loginUser()

        };


})