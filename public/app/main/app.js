var app = angular.module("pollApp", ["ui.router"]);

app.config(function($stateProvider) {

    $stateProvider
        .state("home", {


    })
        .state("login", {
            url: "/login",
            templateUrl: "views/login.html",
            controller: "loginCtrl"
    })
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            controller: "dashboardCtrl"
        })




})