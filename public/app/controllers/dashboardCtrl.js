var app = angular.module("pollApp");

app.controller("dashboardCtrl", function($scope, $rootScope, dashboardService, authService, $state, pollService) {

    $scope.userPolls

    var updateUser = function(){
        authService.updateUser()
            .then(function(data){
                $rootScope.user = data;

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
    };



    //var activeChartInfo = function() {
    //    var newChartData = [];
    //    for (var i = 0; i < $scope.userPolls.length; i++) {
    //        var newArr = [];
    //        newArr.push($scope.userPolls.choices[i].body, $scope.userPolls.choices[i].counter);
    //        newChartData.push(newArr);
    //    }
    //    $scope.activeChartData = newChartData;
    //    console.log($scope.activeChartData);
    //}
    //activeChartInfo();

});