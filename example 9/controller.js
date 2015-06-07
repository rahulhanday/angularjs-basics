myApp.controller('myController',['$scope', '$q', '$timeout', function($scope, $q, $timeout){

	function deferredTimer(timer){
		var deferred = $q.defer()

		$timeout(function(){
			deferred.resolve({
	            message: "This is great!"
	            	});
		}, timer*1000);

		return deferred.promise;
	}

	$scope.showMsg1=function(){
		deferredTimer(2).then(function(data){
			console.log(data)
			$scope.message1=data.message;
		});
	}

	$scope.showMsg2=function(){
		deferredTimer(6).then(function(data){
			console.log(data)
			$scope.message2=data.message;
		});
	}

	$scope.showMsg3=function(){
		deferredTimer(4).then(function(data){
			console.log(data)
			$scope.message3=data.message;
		});
	}

	$scope.showMsg1();
	$scope.showMsg2();
	$scope.showMsg3();
}]);