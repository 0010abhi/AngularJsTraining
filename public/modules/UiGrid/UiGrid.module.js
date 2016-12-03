(function(angular) {
  'use strict';
angular
.module("AngularApp.UiGrid", ['ui.grid'])
.config(Configuration);

Configuration.$inject = ['$routeProvider'];
function Configuration($routeProvider)
{
    $routeProvider
        .when("/UiGrid", {
            templateUrl: "modules/UiGrid/UiGrid.html",
            controller: "UiGridController"
        });

};

})(window.angular);
