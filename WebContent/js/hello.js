var app = angular.module("userApp",[]);
	app.controller("Hello",  ["$scope", "$http", function($scope, $http) {
	
 
	$http.get('rest/user').success(function(data)    {$scope.listperson = data.person;             });}]);