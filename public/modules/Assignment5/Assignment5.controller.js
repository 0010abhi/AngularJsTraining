/**
 * http://usejsdoc.org/
 */
(function(angular) {
  function Assignment5Controller($scope,dateFormatService){
		$scope.message = "Perform Moment JS Date Filters and Read Dragged File";
		
		//$scope.DateSelected = 
		
		$scope.DateFormatOptions = dateFormatService.dateFormats;
		$scope.DateFormat = $scope.DateFormatOptions[0].Value;
		
		$scope.FormattedDate = moment($scope.DateSelected).format($scope.DateFormat);
		
		$scope.Show = function(date,format){
			$scope.FormattedDate = moment(date).format(format); 
		}
		
 
	}
  angular.module("AngularApp.Assignment5").controller("Assignment5Controller",Assignment5Controller);

})(window.angular);
