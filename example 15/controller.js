myApp.controller("myController1", function($scope, myService){
	myService.getData().then(function(data){
		$scope.records=data.records;
	});
});

myApp.controller("myController2", function($scope){
	$scope.myName="Rahul Handay";
});