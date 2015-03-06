var app = angular.module('pollApp');

app.service('authService', function($http, $rootScope){

 var user = {};

 this.updateUser = function(){
   return $http({
     method: 'GET',
     url: '/auth/me'
   }).then(function(res){
       console.log(res.data)
     user = res.data;
     return user;
   })
 }

 this.getUser = function(){
   return user;
 }

 this.logout = function(){
   return $http({
     method: 'GET',
     url: '/auth/logout'
   }).then(function(res){
     return res.data;
   })
 }

})