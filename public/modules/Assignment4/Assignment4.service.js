/**
 * http://usejsdoc.org/
 */
(function(angular) {

	itVisionariesService.$inject = ['$http'];

	function itVisionariesService($http){
		this.Data =  $http.get('modules/Assignment4/ITvisionaries.json').then(function(response){
			return response.data;
		},function(error){
			alert("Unable to fetch Data");
		});
	}

  angular.module("AngularApp.Assignment4")
  		.service("itVisionariesService",itVisionariesService);

})(window.angular);
