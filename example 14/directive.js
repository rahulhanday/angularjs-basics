myApp.directive("myDir", function(){
	return {
		restrict: "E",
		link: function(scope, element){
			element.children(1).addClass("alert alert-info");
		}
	}
});