myApp.directive("myDir", function(){
	return {
		restrict: "E",
		link: function(scope){
			alert(scope.myName);
		}
	}
});