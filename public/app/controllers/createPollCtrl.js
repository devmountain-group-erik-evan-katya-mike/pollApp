var app = angular.module('pollApp');

app.controller("createPollCtrl", function($scope, pollService) {

    $scope.pollQuestion;

    $scope.toggleBox = function() {

        $scope.firstBox = !$scope.firstBox;
        $scope.secondBox = !$scope.secondBox;

       $scope.pollQuestion =  $scope.title;


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
        $scope.choice1 = $scope.optionOne;
        $scope.choice2 = $scope.optionTwo;
        $scope.choice3 = $scope.optionThree;
        $scope.choice4 = $scope.optionFour;

    }

    $scope.toggleFinalBack = function() {

        $scope.firstbox = $scope.firstBox;
        $scope.secondBox = !$scope.secondBox;
        $scope.thirdBox = !$scope.thirdBox;
    }

    $scope.createPoll = function(){
        var newPoll = [{"body":$scope.choice1, arrPosition: 0}, {"body":$scope.choice2, "arrPosition": 1}, {"body":$scope.choice3, "arrPosition": 2}, {"body":$scope.choice4, "arrPosition": 3}];
        pollService.createPoll($scope.pollQuestion, newPoll);
        ;

    };



})