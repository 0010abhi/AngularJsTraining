/**
 * http://usejsdoc.org/
 */
app.controller("userControl",function($scope,$http){
	$scope.Message = "User Control";

	$scope.dateObj = new Date();

	$scope.searchBook = [
		{"Label": "Search By Anything" ,"Value" : "SearchByAnyThing"},
		{"Label": "Search By Book Name" ,"Value" : "SearchByBook"},
		{"Label": "Search By Book/Author" ,"Value" : "SearchByBookOrAuthor"},
	]

	$scope.SelectFilter = $scope.searchBook[0].Value;
	var booksFunction = function(){
		$http.get('http://localhost:3000/userdata.json')
		.success(function success(sucRes){
			console.log(sucRes);
			$scope.books = sucRes;
		});
	}

	booksFunction()

	$scope.MySearch = function (row) {
		if($scope.SelectFilter === "SearchByAnyThing"){
			return (angular.lowercase(row.Name).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
							angular.lowercase(row.Author).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
							angular.lowercase(row.Price).indexOf(angular.lowercase($scope.query) || '') !== -1);
		} else if($scope.SelectFilter === "SearchByBook") {
			return (angular.lowercase(row.Name).indexOf(angular.lowercase($scope.query) || '') !== -1);
		} else if($scope.SelectFilter === "SearchByBookOrAuthor"){
			return (angular.lowercase(row.Name).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
							angular.lowercase(row.Author).indexOf(angular.lowercase($scope.query) || '') !== -1);
		}
    };
})
