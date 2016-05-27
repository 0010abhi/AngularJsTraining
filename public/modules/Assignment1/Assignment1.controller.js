/**
 * http://usejsdoc.org/
 */
(function(angular) {
	function Assignment1Controller($scope){
		$scope.message = "Perform Dependency Injection and Controllers";
	}
	function AdminController($scope,userDataService){
		$scope.message = "Admin Section";
		
		
		$scope.Submit = function(data){
			
			var message = userDataService.submit(data);
			if(message == "Submitted"){
				$scope.user = null;
			} else if(message == "DuplicateEntry") {
				alert("Duplicate Entry");
			}
			
		}
	}
	
	function UserController($scope,userDataService){
		$scope.message = "User Section";
		$scope.userFound = 'NoUserFound';
		
		$scope.userData = userDataService.userData;
		
		$scope.GetUser = function(dataField){
			
			$scope.userFound = userDataService.getUser(dataField);
			
			if($scope.userFound != "NoUserFound"){
				$scope.getuser = "";
			}
		}
	}
  
  angular.module("AngularApp.Assignment1")
  		.controller("Assignment1Controller",Assignment1Controller)
  		.controller("adminController",AdminController)
  		.controller("userController",UserController);

})(window.angular);

