var app = angular.module('pollApp');

app.controller("createPollCtrl", function($scope, $rootScope, pollService, authService) {

    $scope.pollQuestion;

    $scope.choices = [{id: "choice1", arrPosition: 0}, {id: "choice2", arrPosition: 1}];
    console.log($scope.choices);


    $scope.addNewChoice = function() {
        var newItemNumber = $scope.choices.length + 1;
        $scope.choices.push({id:'choice'+ newItemNumber});
    };
    $scope.deleteChoice = function() {
        $scope.choices.pop();
    }

    $scope.createPoll = function(){

        var newPoll = [];
        for (var i = 0; i < $scope.choices.length; i++) {
            newPoll.push({"body": $scope.choices[i].option, "arrPosition": $scope.choices[i].arrPosition});
        }
        console.log(newPoll);

        var newPollChoices = newPoll;
        pollService.createPoll($rootScope.user.id, $scope.title, newPollChoices).then(function(res) {
            $scope.data = res;
        });


    };

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);

})