/**
 * http://usejsdoc.org/
 */
app.controller("userControl",function($scope,$http){
	$scope.Message = "User Control";
	
	//$scope.dateObj = new Date();

	var booksFunction = function(){
		alert("called");
//		$http.get('http://localhost:3000/userdata.json')
//		.then(function(sucRes){
//			console.log(sucRes);
//			//return sucRes.data;
//		},function(errRes){
//			console.log(errRes);
//			//return sucRes.data;
//		});	
		$http.get('http://localhost:3000/userdata.json')
		.success(function success(sucRes){
			console.log(sucRes);
			//return sucRes.data;
		});	
	}
	
	$scope.books = booksFunction();
})