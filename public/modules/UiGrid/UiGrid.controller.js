/**
 * http://usejsdoc.org/
 */
(function(angular) {
	function UiGridController($scope,uiGridService,uiGridConstants){
		$scope.message = "Perform Angular ui Grid";

		$scope.gridOptions = {
	    enableFiltering: true,
			columnDefs: [
				{field: 'FirstName'},
				{
					field: 'LastName',
					filter: {
          	condition: uiGridConstants.filter.ENDS_WITH,
          	placeholder: 'ends with'
        	}
				},
				{
					field: 'Age',
					filters: [
		        {
		          condition: uiGridConstants.filter.GREATER_THAN,
		          placeholder: 'greater than'
		        },
		        {
		          condition: uiGridConstants.filter.LESS_THAN,
		          placeholder: 'less than'
		        }
		      ]
				},
				{
					field: 'Place',
					filter : {
						type : uiGridConstants.filter.SELECT,
						selectOptions: [
							{ value: 'Rajasthan', label: 'Desert Place' },
							{ value: 'Delhi', label: 'The Capital City' },
							{ value: 'Chandigarh', label: 'The City Beautiful'},
							{ value: 'Uttarakhand', label: 'Dev Bhoomi' },
							{ value: 'Kashmir', label: 'Jannat' }
						]
					}
				},
				{
					field: 'Gender',
					enableFiltering: false
				}
      ]
		}

		uiGridService.gridData.then(function(data){
				// Data i n 1st grid.
				$scope.gridData = data;
				// Data in 2nd Grid.
				$scope.gridOptions.data = data;
		});
	}

  angular.module("AngularApp.UiGrid")
  		.controller("UiGridController",UiGridController);

})(window.angular);
