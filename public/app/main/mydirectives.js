var app = angular.module("myDirectives", []);


app.directive("chart", function() {
    return {
        restrict: 'A',

        link: function($scope, $elm, $attr) {
            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Choices');
            data.addColumn('number', 'Votes');
            //data.addRows([
            //    ['College',3],
            //    ['Onions', 1],
            //    ['Olives', 1],
            //    ['Zucchini', 1],
            //    ['Pepperoni', 2]
            //]);
            //$scope.$apply(function(){
            //
            //});

            $scope.$watch(function(scope){
                return scope.chartData;
            }, function(oldVal, newVal){
                data.addRows(
                    newVal
                );
                var chart = new google.visualization.PieChart($elm[0]);
                chart.draw(data, options);
            })



            console.log("line 152", $scope.chartData);
            //data.addRows($scope.chartData);


            // Set chart options
            var options = {'title':$scope.poll.title,
                'width':400,
                'height':300,
                 is3D: true
            };

            // Instantiate and draw our chart, passing in some options.

        }
    }
});

google.load('visualization', '1', {packages: ['corechart']});

google.setOnLoadCallback(function() {
    angular.bootstrap(document.body, []);
});




