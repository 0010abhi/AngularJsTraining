/**
 * http://usejsdoc.org/
 */
app.controller("userControl",function($scope,$http){
	$scope.Message = "User Control";
	
	$scope.dateObj = new Date();

	var booksFunction = function(){
		$http.get('http://localhost:3000/userdata.json')
		.success(function success(sucRes){
			console.log(sucRes);
		});	
	}
	
	$scope.books = booksFunction();
})