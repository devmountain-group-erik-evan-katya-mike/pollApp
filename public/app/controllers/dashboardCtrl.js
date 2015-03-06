var app = angular.module("pollApp");

app.controller("dashboardCtrl", function($scope, $rootScope, dashboardService, authService, $state, pollService) {


    var socket = io.connect();

    var updateUser = function(){
        authService.updateUser()
            .then(function(data){
                $rootScope.user = data;
                console.log('root scope user: ', $rootScope.user);
            })
    }
    updateUser();

    $scope.logout = function(){
        authService.logout()
            .then(function(data){
                updateUser();
                $state.go("home");
            })
    }
    //
    //$scope.getUserPolls = function() {
    //    console.log($rootScope.user);
    //    console.log("getUserPolls Function")
    //    pollService.getUserPolls($rootScope.user.id);
    //}



})