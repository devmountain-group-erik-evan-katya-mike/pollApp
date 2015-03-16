var app = angular.module("pollApp");

app.controller("dashboardCtrl", function($scope, $rootScope, dashboardService, authService, $state, pollService) {

    $scope.userPolls;

    console.log($scope.userPolls)

    // var socket = io.connect();

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

       });
    };

    //$scope.getUserPolls();

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);

    $scope.accordion = null;




})