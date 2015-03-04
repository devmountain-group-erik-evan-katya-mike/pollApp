var app = angular.module("pollApp");

app.controller("mainCtrl", function($scope, mainService) {



	//var socket = io.connect();
    //
	//	$scope.Opt1 = options;
	//	console.log('hello');

		$scope.createPoll = function(){
            var newTitle = $scope.pollTitle;
            var newPoll = [{"body":$scope.choice1}, {"body":$scope.choice2}, {"body":$scope.choice3}, {"body":$scope.choice4}];

                mainService.createPoll(newTitle, newPoll);


			//socket.emit('poll', options);
			//console.log(options);
		};


});