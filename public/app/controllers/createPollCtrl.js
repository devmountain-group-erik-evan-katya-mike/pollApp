var app = angular.module('pollApp');

app.controller("createPollCtrl", function($scope, $rootScope, pollService, authService) {

    $scope.pollQuestion;

    $scope.choices = [{id: "choice1", arrPosition: 0}, {id: "choice2", arrPosition: 1}];
    console.log($scope.choices)


    $scope.addNewChoice = function() {
        var newItemNumber = $scope.choices.length + 1;
        $scope.choices.push({id:'choice'+ newItemNumber});
    };
    $scope.deleteChoice = function() {
        $scope.choices.pop();
    }

    $scope.toggleBox = function() {

        $scope.firstBox = !$scope.firstBox;
        $scope.secondBox = !$scope.secondBox;

       //$scope.pollQuestion =  $scope.title;


    }

    $scope.toggleBack = function() {

        $scope.firstBox = !$scope.firstBox;
        $scope.secondBox = !$scope.secondBox;
        $scope.thirdBox =  $scope.thirdBox;

    }

    $scope.toggleForward = function() {
        $scope.firstBox = $scope.firstBox;
        $scope.secondBox = !$scope.secondBox;
        $scope.thirdBox = !$scope.thirdBox;
        //$scope.choice1 = $scope.optionOne;
        //$scope.choice2 = $scope.optionTwo;
        //$scope.choice3 = $scope.optionThree;
        //$scope.choice4 = $scope.optionFour;

    }

    $scope.toggleFinalBack = function() {

        $scope.firstbox = $scope.firstBox;
        $scope.secondBox = !$scope.secondBox;
        $scope.thirdBox = !$scope.thirdBox;
    }

    $scope.createPoll = function(){

        var newPoll = []
        for (var i = 0; i < $scope.choices.length; i++) {
            newPoll.push({"body": $scope.choices[i].option, "arrPosition": $scope.choices[i].arrPosition});
        }
        console.log(newPoll);
        //var newPollChoices = [{"body":$scope.optionOne, arrPosition: 0}, {"body":$scope.optionTwo, "arrPosition": 1}, {"body":$scope.optionThree, "arrPosition": 2}, {"body":$scope.optionFour, "arrPosition": 3}];
        //var newPollChoices = [{"body":newPoll}];

        var newPollChoices = newPoll;
        pollService.createPoll($rootScope.user.id, $scope.title, newPollChoices).then(function(res) {
            $scope.data = res;
            //$rootscope.user.owner = res.data.owner;
        });


    };

    //$scope.castVote = function(){
    //    console.log($stateParams.id, $scope.selectedChoice.arrPosition);
    //    pollService.castVote($stateParams.id, $scope.selectedChoice.arrPosition)
    //        .then(function(res){
    //            console.log(res);
    //        })
    //}

})