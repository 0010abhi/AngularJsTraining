/**
 * http://usejsdoc.org/
 */
(function(angular) {
	function Assignment7Controller($scope,randomNumFService,quotesService){
		$scope.message = "Get Random Quotes After Every Refresh";

		var randomNum = randomNumFService.random(1,20);
		quotesService.quotes.then(function(res){
			$scope.RandomQuote = res[randomNum];
		});
	}

  angular.module("AngularApp.Assignment7")
  		.controller("Assignment7Controller",Assignment7Controller);

})(window.angular);
