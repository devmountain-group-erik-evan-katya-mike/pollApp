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
        .state("dashboard.pollResults", {
            url: "/dashboard/pollresults",
            templateUrl: "/app/views/pollresults.html",
            controller: "pollCtrl"
        })
        .state("dashboard.createPoll", {
                url: "/createpoll",
                templateUrl: "/app/views/createpoll.html",
                controller: "pollCtrl"
        })
        .state("dashboard.createPoll.pollOptions", {
            url: "/polloptions",
            templateUrl: "/app/views/polloptions.html",
            controller: "pollCtrl"

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