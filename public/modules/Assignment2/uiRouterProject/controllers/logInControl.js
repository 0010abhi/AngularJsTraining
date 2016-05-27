/**
 * http://usejsdoc.org/
 */
app.controller("logInControl",function($scope,$state){
	$scope.Message = "Log In Form";
	
	$scope.LogIn = function(data){
		console.log(data.mail + "___" + data.pass );
		if(data.mail == 1 && data.pass == 1){
			alert("suc");
			$state.go('userProfile');
		} else {
			alert("error");
			$state.go('logInPage');
			
		}
	}
})