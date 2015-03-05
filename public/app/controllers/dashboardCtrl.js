var app = angular.module("pollApp");

app.controller("dashboardCtrl", function($scope, dashboardService, authService, $state) {



    var socket = io.connect();

    var updateUser = function(){
        authService.updateUser()
            .then(function(data){
                console.log('Auth data: ', data);
                $scope.user = data;
                //console.log($scope.user);
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


})