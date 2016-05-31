/**
 * http://usejsdoc.org/
 */
(function(angular) {

	dateFormatService.$inject = ['$http'];

	function dateFormatService($http){
		this.dateFormats =  [
		     {"Label" : "Only Date", "Value": "DD-MM-YYYY"},
		     {"Label" : "Date with 12 hr Format", "Value": "DD MM YYYY HH:MM:SS a"},
		     {"Label" : "Date with 24 hr Format", "Value": "DD MM YYYY HH:MM:SS"},
		     {"Label" : "Date with 12 hr Format", "Value": ""}
		];
	}

  angular.module("AngularApp.Assignment5")
  		.service("dateFormatService",dateFormatService);

})(window.angular);
