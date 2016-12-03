/**
 * http://usejsdoc.org/
 */
(function(angular) {

	function getRandom(){
				//retrun inclusive of min and max;
				return {
					random : function(min, max) {
			    	return Math.floor(Math.random() * (max - min + 1)) + min;
					}
				}
	}
	function quotesService($http){
		this.quotes = $http.get('modules/Assignment7/quotes.json').then(function(res){
				return res.data;
			},function(error){
				alert("service not giving data");
		});
		}

  angular.module("AngularApp.Assignment7")
			.factory("randomNumFService",getRandom)
  		.service("quotesService",quotesService);

})(window.angular);
