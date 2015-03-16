var app = angular.module('pollApp');

app.controller('pollCtrl', function($scope, $stateParams, $interval, poll, pollService) {

    $scope.poll = poll;
    console.log($scope.poll);

  $scope.chartData = [];


    var chartInfo = function() {
        for (var i = 0; i < $scope.poll.choices.length; i++) {
            var newArr = [];
            newArr.push($scope.poll.choices[i].body, $scope.poll.choices[i].counter);
            $scope.chartData.push(newArr);
        }
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
    }

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


//app.directive("chart", function() {
//    return {
//        restrict: 'A',
//        //scope: {
//        //        chartPoll: '='
//        //    },
//
//        link: function($scope, $elm, $attr) {
//            // Create the data table.
//            var data = new google.visualization.DataTable();
//            data.addColumn('string', 'Choices');
//            data.addColumn('number', 'Votes');
//            //data.addRows([
//            //    ['College',3],
//            //    ['Onions', 1],
//            //    ['Olives', 1],
//            //    ['Zucchini', 1],
//            //    ['Pepperoni', 2]
//            //]);
//            console.log("line 152", $scope.chartData);
//            data.addRows($scope.chartData);
//
//
//            // Set chart options
//            var options = {'title':$scope.poll.title,
//                'width':400,
//                'height':300};
//
//            // Instantiate and draw our chart, passing in some options.
//            var chart = new google.visualization.PieChart($elm[0]);
//            chart.draw(data, options);
//        }
//    }
//});
//
//    google.setOnLoadCallback(function() {
//    angular.bootstrap(document.body, ['pollApp']);
//    });
//
//    google.load('visualization', '1', {packages: ['corechart']});
