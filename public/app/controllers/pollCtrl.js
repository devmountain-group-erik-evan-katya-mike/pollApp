var app = angular.module('pollApp');

app.controller('pollCtrl', function($scope, $stateParams, $interval, poll, pollService) {

    $scope.poll = poll;
    console.log($scope.poll);

    $scope.chartData = [];


    var chartInfo = function() {
        var newChartData = [];
        for (var i = 0; i < $scope.poll.choices.length; i++) {
            var newArr = [];
            newArr.push($scope.poll.choices[i].body, $scope.poll.choices[i].counter);
            newChartData.push(newArr);
        }
        $scope.chartData = newChartData;
        console.log($scope.chartData);
    }

    chartInfo();


    $scope.castVote = function(){
        console.log($scope.selectedVote);
        console.log($stateParams.id);
        pollService.castVote($stateParams.id, $scope.selectedVote)
            .then(function(res){
                console.log(res);
            })
    };

    //<!------------------------>

    //$scope.pollData = [];
    //
    //var counter = 0;
    //var updateCount = function(){
    //    pollService.getPoll($stateParams.id)
    //        .then(function(res){
    //            counter++;
    //            //console.log('Updating poll counts. Number of times fetched: ', counter);
    //            $scope.poll = res;
    //            console.log($scope.poll);
    //        })
    //}
    //
    //$interval(updateCount, 1000)

});

