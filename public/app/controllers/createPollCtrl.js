var app = angular.module('pollApp');

app.controller("createPollCtrl", function($scope, $rootScope, pollService, authService) {

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
        console.log('USER: ', $rootScope.user.id);
        var newPollChoices = [{"body":$scope.choice1, arrPosition: 0}, {"body":$scope.choice2, "arrPosition": 1}, {"body":$scope.choice3, "arrPosition": 2}, {"body":$scope.choice4, "arrPosition": 3}];
        pollService.createPoll($rootScope.user.id, $scope.pollQuestion, newPollChoices).then(function(res) {
            $scope.data = res;
        });
        ;

    };

    $scope.castVote = function(){
        console.log($stateParams.id, $scope.selectedChoice.arrPosition);
        pollService.castVote($stateParams.id, $scope.selectedChoice.arrPosition)
            .then(function(res){
                console.log(res);
            })
    }



})