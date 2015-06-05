myApp.controller("myController", function($scope, myService){
	myService.getData().success(function(data, status, headers, config) {
		$scope.names=data.records
		$scope.status=status
		$scope.headers=headers
		$scope.config=config
	  }).
	  error(function(data, status, headers, config) {
		  $scope.names=data.records
		  $scope.status=status
		  $scope.headers=headers
		  $scope.config=config
	  });
});