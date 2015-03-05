var app = angular.module("pollApp");

app.service("mainService", function($http, $q, $state) {

    //this.createPoll = function(title, poll) {
    //    console.log(poll);
    //    var dfd = $q.defer()
    //    $http({
    //        method: 'POST',
    //        url: '/api/poll/',
    //        data: {title: title, choices: poll}
    //    }).then(function(res) {
    //        console.log(res)
    //        dfd.resolve(res);
    //    }, function(err) {
    //        console.log(err)
    //        dfd.resolve(err);
    //    })
    //    return dfd.promise;
    //}

});