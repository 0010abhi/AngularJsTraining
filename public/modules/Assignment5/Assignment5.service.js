/**
 * http://usejsdoc.org/
 */
(function(angular) {

	dateFormatService.$inject = ['$http'];

	function dateFormatService($http){
		this.dateFormats =  [
		     {"Label" : "Only Date", "Value": "DD-MM-YYYY"},
		     {"Label" : "Date with 12 hr Format", "Value": "DD.MM.YYYY HH:mm:ss"},
		     {"Label" : "Date with 24 hr Format", "Value": "DD.MM.YYYY hh:mm:ss a"},
		     {"Label" : "Date String", "Value": "MM DD YY"}
		];
	}

  angular.module("AngularApp.Assignment5")
  		.service("dateFormatService",dateFormatService);

})(window.angular);
