(function(angular) {
  'use strict';
angular
.module("AngularApp.Assignment4", [])
.config(Configuration);

Configuration.$inject = ['$routeProvider'];
function Configuration($routeProvider)
{
    $routeProvider
        .when("/Assignment4", {
            templateUrl: "modules/Assignment4/Assignment4.html",
            controller: "Assignment4Controller"
        })
        .when("/Assignment4/:PersonName", {
            templateUrl: "modules/Assignment4/Visionary.html",
            controller: "visionaryController"
        });

};

})(window.angular);
