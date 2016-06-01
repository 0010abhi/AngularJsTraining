/**
 * http://usejsdoc.org/
 */
(function(angular) {

	function Assignment4Controller($scope,itVisionariesService){
		$scope.message = "Perform $routeParams And  Validation";

	itVisionariesService.Data.then(function(response){
			$scope.VisionariesData = response;
		});
	}

	function visionaryController($scope,$routeParams,itVisionariesService){
		$scope.message = "Vision in the art of seeing what is invisible to others.";
		itVisionariesService.Data.then(function(response){
				var Length = response.length;

				var Id = Number($routeParams.PersonName) - 1;
				$scope.Person = response[Id];

				if(Number($routeParams.PersonName) == 1){
					$scope.Previous = Length;
				} else {
					$scope.Previous = Number($routeParams.PersonName) -1;
				}

				if(Number($routeParams.PersonName) == response.length){
					$scope.Next = 1;
				} else {
					$scope.Next = Number($routeParams.PersonName) +1;
				}
		});

	}

  angular.module("AngularApp.Assignment4")
  		.controller("Assignment4Controller",Assignment4Controller)
			.controller("visionaryController",visionaryController);

})(window.angular);
