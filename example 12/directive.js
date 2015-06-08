myApp.directive("mydir1", function(){
	return {
		restrict: "E",
		controller: function($scope){
			$scope.myName=[];
			this.setName=function(name){
				$scope.myName.push(name);
			};
			this.getName=function(){
				return $scope.myName;
			};
		},
		link: function(scope, element, attrs, mydir1Ctrl){
			mydir1Ctrl.setName('Rahul');
		}
	};
});

myApp.directive("mydir2", function(){
	return {
		require: "mydir1",
		link: function(scope, element, attrs, mydir1Ctrl){
			mydir1Ctrl.setName('Handay');
			scope.text2=mydir1Ctrl.getName();
		}
	}
});