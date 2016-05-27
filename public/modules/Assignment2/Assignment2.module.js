(function(angular) {
angular
.module("AngularApp.Assignment2", [])
.config(Configuration);

Configuration.$inject = ['$routeProvider'];
function Configuration($routeProvider)
{
    $routeProvider
        .when("/Assignment2", {
            templateUrl: "modules/Assignment2/Assignment2.html",
            controller: "Assignment2Controller"
        });
};

})(window.angular);

