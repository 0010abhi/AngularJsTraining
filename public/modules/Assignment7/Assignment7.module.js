(function(angular) {
  'use strict';
angular
.module("AngularApp.Assignment7", [])
.config(Configuration);

Configuration.$inject = ['$routeProvider'];
function Configuration($routeProvider)
{
    $routeProvider
        .when("/Assignment7", {
            templateUrl: "modules/Assignment7/Assignment7.html",
            controller: "Assignment7Controller"
        });

};

})(window.angular);
