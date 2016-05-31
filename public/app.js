(function(angular) {
  'use strict';
angular
.module("AngularApp", ['ngRoute','ui.bootstrap','AngularApp.Assignment1','AngularApp.Assignment2','AngularApp.Assignment5','AngularApp.UiGrid'])
.config(Configuration)
.controller("appController",appController);

Configuration.$inject = ['$routeProvider'];
function Configuration($routeProvider)
{
    $routeProvider
        .when("/", {
            templateUrl: "app.html",
            controller: "appController"
        });
};
appController.$inject = ['$scope'];   
function appController($scope){
			$scope.message = "Welcome";
		};
})(window.angular);
