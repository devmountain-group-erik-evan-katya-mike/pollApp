var app = angular.module("pollApp", ["ui.router", "myDirectives", "ui.bootstrap"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .otherwise("/home");

    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "app/views/home.html",
            controller: "dashboardCtrl"
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
        .state("dashboard.activePolls", {
            url: "/activepolls",
            templateUrl: "/app/views/activepolls.html",
            controller: "dashboardCtrl"
        })
        .state("dashboard.createPoll", {
                url: "/createpoll",
                templateUrl: "/app/views/createpoll.html",
                controller: "createPollCtrl"
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
        .state("pollResults", {
            url:"/poll/results/:id",
            templateUrl: "app/views/singlepollresults.html",
            controller: 'pollCtrl',
            resolve: {
                poll: function(pollService, $stateParams){
                    console.log('in get poll results resolve');
                    return pollService.getPoll($stateParams.id);
                }
            }
        })


});