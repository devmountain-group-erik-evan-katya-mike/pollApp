var app = angular.module("pollApp", ["ui.router"]);

app.config(function($stateProvider) {

    $stateProvider
        .state("home", {


        })
        .state("login", {
            url: "/login",
            templateUrl: "app/views/login.html",
            controller: "loginCtrl"
        })
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/views/dashboard.html",
            controller: "dashboardCtrl"
        })
        .state("poll", {
            url:"/poll/:id",
            templateUrl: 'app/views/single_poll_view.html',
            controller: 'pollCtrl',
            resolve: {
                poll: function(pollService, $stateParams){
                    console.log('in get poll resolve');
                    return pollService.getPoll($stateParams.id);
                }
            }
        })

})