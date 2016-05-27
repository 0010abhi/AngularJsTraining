(function(angular) {
  'use strict';
angular
.module("AngularApp.Assignment1", [])
.config(Configuration);

Configuration.$inject = ['$routeProvider'];
function Configuration($routeProvider)
{
    $routeProvider
        .when("/Assignment1", {
            templateUrl: "modules/Assignment1/Assignment1.html",
            controller: "Assignment1Controller"
        });

};

})(window.angular);

