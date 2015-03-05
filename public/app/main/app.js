var app = angular.module("pollApp", ["ui.router"]);

app.config(function($stateProvider) {

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
            controller: "pollCtrl"
        })
        .state("dashboard.createPoll", {
                url: "/createpoll",
                templateUrl: "/app/views/createpoll.html",
                controller: "createPollCtrl"
        })
        //.state("dashboard.singlePoll", {
        //    url: "/singlepoll",
        //    templateUrl: "/app/views/single_poll_view.html",
        //    controller: "createPollCtrl"
        //})

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