var app = angular.module("pollApp");

app.controller("dashboardCtrl", function($scope, $rootScope, dashboardService, authService, $state, pollService) {





    var updateUser = function(){
        authService.updateUser()
            .then(function(data){
                $rootScope.user = data;
                console.log('root scope user: ', $rootScope.user);
            })
    };
    updateUser();

    $scope.logout = function(){
        console.log("LogOut Link")
        authService.logout()
            .then(function(data){
                updateUser();
                $state.go("home");
            })
    };
    
    $scope.getUserPolls = function() {
       console.log($rootScope.user);
       console.log("getUserPolls Function");
       pollService.getUserPolls($rootScope.user.id).then(function(res) {
           $scope.userPolls = res;
           console.log($scope.userPolls)


       });
    };

    $scope.deletePoll = function(id) {
        console.log(id)
        pollService.deletePoll(id).then(function(res) {
            console.log("Poll deleted");
            $scope.getUserPolls();
        })
    }

})