myApp.controller("myController", function($scope){
	$scope.count=0;
	$scope.addCount=function(){
		$scope.count=$scope.count+1;
	};
});