(function(angular) {
angular
.module("AngularApp.Assignment5", [])
.config(Configuration);

Configuration.$inject = ['$routeProvider'];
function Configuration($routeProvider)
{
    $routeProvider
        .when("/Assignment5", {
            templateUrl: "modules/Assignment5/Assignment5.html",
            controller: "Assignment5Controller"
        });
};

})(window.angular);
