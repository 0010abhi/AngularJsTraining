/**
 * http://usejsdoc.org/
 */
var app = angular.module("UiRouterApp", ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
	 $urlRouterProvider.otherwise("/");
	 
	 $stateProvider
	 	.state("logInPage",{
	 		url : "/",
	 		templateUrl : "templates/logIn.html",
	 		controller : "logInControl"
	 	})
	 	.state("userProfile",{
	 		url : "/user",
	 		templateUrl : "templates/user.html",
	 		controller : "userControl"
	 	}); 
});

