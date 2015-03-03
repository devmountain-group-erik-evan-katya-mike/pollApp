var app = angular.module("pollApp");

app.controller("mainCtrl", function($scope, mainService) {

	var socket = io.connect();

		$scope.Opt1 = options;
		console.log('hello');

		$scope.createPoll = function(options){
			socket.emit('poll', options);
			console.log(options);		
		};


})