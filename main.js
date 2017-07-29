var foodieApp = angular.module('foodieApp',[]);  //initilization of angular app

foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];
})
