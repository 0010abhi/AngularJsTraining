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
			$scope.books = sucRes;
		});	
	}
	
	booksFunction();
	
	$scope.mySearch = function(item){
	    if (!$scope.query || (item.Name.toLowerCase().indexOf($scope.query) != -1) || (item.Author.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
	        return true;
	    }
	    return false;
	 };
	 
	 $scope.searchBook = {
			 'filters' : 'search'
	 }
	 
	 $scope.myFilter = $scope.searchBook.filters; 
})