/**
 * http://usejsdoc.org/
 */
(function(angular) {

	uiGridService.$inject = ['$http'];

	function uiGridService($http){
		this.gridData =  $http.get('modules/UiGrid/UiGridData.json').then(function(response){
			return response.data;
		},function(error){
			alert("Unable to fetch Grid Data");
		});
	}

  angular.module("AngularApp.Assignment1")
  		.service("uiGridService",uiGridService);

})(window.angular);
