myApp.controller("myController", function($scope){
	 $scope.customer = {
			 name: 'Rahul',
			 city: 'Pune'
	 };

	$scope.alertMe = function () {
		$scope.inputText="Hello World"
	};
});