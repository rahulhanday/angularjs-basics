myApp.controller("myController", function($scope){
	$scope.value=false;
	$scope.toggleFun=function(){
		$scope.value=!$scope.value;
	};
});