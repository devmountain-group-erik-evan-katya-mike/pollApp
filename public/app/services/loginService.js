var app = angular.module("pollApp");

app.service("loginService", function($http, $q, $state) {

    this.loginUser = function() {
        var dfd = $q.defer();
        $http({
            method: "GET",
            url: "/auth/twitter"

        }).then(function(res) {
            $state.go("dashboard");
            dfd.resolve(res);
        }, function(err) {
            dfd.reject(err)
        })
        return dfd.promise;
    }

});