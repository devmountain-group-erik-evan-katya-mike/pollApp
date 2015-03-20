var app = angular.module('pollApp');

app.controller('pollCtrl', function($scope, $stateParams, $interval, poll, pollService) {

    $scope.poll = poll;


    $scope.chartData = [];


    var chartInfo = function() {
        var newChartData = [];
        for (var i = 0; i < $scope.poll.choices.length; i++) {
            var newArr = [];
            newArr.push($scope.poll.choices[i].body, $scope.poll.choices[i].counter);
            newChartData.push(newArr);
        }
        $scope.chartData = newChartData;
    }

    chartInfo();


    $scope.castVote = function(){

        pollService.castVote($stateParams.id, $scope.selectedVote)
            .then(function(res){

            })
    };


    $scope.pollData = [];

    var counter = 0;
    var updateCount = function(){
        pollService.getPoll($stateParams.id)
            .then(function(res){
                counter++;
                $scope.poll = res;
            })
    }
    
    $interval(updateCount, 900);
    $interval(chartInfo, 800);

    app.directive('back', ['$window', function($window) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        };
    }]);


});

