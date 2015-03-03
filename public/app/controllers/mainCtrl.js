var app = angular.module("pollApp");

app.controller("mainCtrl", function($scope, mainService) {



	//var socket = io.connect();
    //
	//	$scope.Opt1 = options;
	//	console.log('hello');

		$scope.createPoll = function(){
            var newPoll = [$scope.choice1, $scope.choice2, $scope.choice3, $scope.choice4];

                mainService.createPoll(newPoll);


			//socket.emit('poll', options);
			//console.log(options);
		};


});