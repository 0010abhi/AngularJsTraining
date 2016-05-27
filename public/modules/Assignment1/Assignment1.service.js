/**
 * http://usejsdoc.org/
 */
(function(angular) {
	function userDataService(){
		var userData = [];
		var user = {
				"username" : "",
				"email" : "",
				"phone" : ""
		}
		var submit = function(data){
			user = angular.copy(data);
			var count = 0;
			angular.forEach(userData,function(val,key){
				if((count == 0) && (val.username.toLowerCase() == user.username.toLowerCase() || val.email.toLowerCase() == user.email.toLowerCase() || val.phone == user.phone)){
					count = 1;
				}
			});
			if(count==0){
				userData.push(user);
				return "Submitted";
			} else if(count==1) {
				return "DuplicateEntry";
			}
		}
		
		var getUser = function(dataField){
			//return dataField;
			var count = 0;
			userFound = {
					"username" : "",
					"email" : "",
					"phone" : ""
			}
			angular.forEach(userData,function(val,key){
				if((count == 0) && (val.username.toLowerCase() == dataField.toLowerCase() || val.email.toLowerCase() == dataField.toLowerCase() || val.phone == dataField)){
					userFound = {
							"username" : (val.username == undefined) ? "" : val.username,
							"email" : (val.email == undefined) ? "" : val.email,
							"phone" : (val.phone == undefined) ? "" : val.phone
					}
					count = 1;
				}
			});	
			
			if(count == 1){
				return userFound;	
			} else {
				return "NoUserFound";
			}
				
		}
		
		return{
			userData : userData,
			submit : submit,
			getUser : getUser
		};
	}
  
  angular.module("AngularApp.Assignment1")
  		.factory("userDataService",userDataService);

})(window.angular);
