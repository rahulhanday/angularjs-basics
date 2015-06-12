myApp.directive("myDir1", function(){
	return {
		restrict: "A",
		link: function(scope, element){
			element.css({
				'color':'red'
			});
		}
	};
});

myApp.directive("myDir2", function(){
	return {
		restrict: "A",
		link: function(scope, element){
			element.css({
				'color':'blue'
			});
		}
	};
});

myApp.directive("myDir3", function(){
	return {
		restrict: "A",
		link: function(scope, element){
			element.css({
				'color':'green'
			});
		}
	};
});

