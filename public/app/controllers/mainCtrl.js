var app = angular.module("pollApp");

app.controller("mainCtrl", function($scope, mainService, authService) {



	var socket = io.connect();

  var updateUser = function(){
    authService.updateUser()
      .then(function(data){
        console.log('Auth data: ', data);
        $scope.user = data;
        //console.log($scope.user);
      })
  }
  updateUser();

  $scope.logout = function(){
    authService.logout()
      .then(function(data){
        updateUser();
      })
  }


  $scope.createPoll = function(){
    var newTitle = $scope.pollTitle;
    var newPoll = [{"body":$scope.choice1}, {"body":$scope.choice2}, {"body":$scope.choice3}, {"body":$scope.choice4}];

    mainService.createPoll(newTitle, newPoll);
    //socket.emit('poll', options);
		//console.log(options);
	};

});