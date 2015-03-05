var app = angular.module("pollApp");

app.controller("dashboardCtrl", function($scope, $rootScope, dashboardService, authService, $state) {

   
   

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


})