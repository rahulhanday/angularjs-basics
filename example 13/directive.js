myApp.directive("myDir", function(){
	return {
		restrict: "E",
		template: '<div><input type="text" ng-model="inputText"><br><p>{{textMsg}}</p></div>',
		replace: true,
		link: function(scope, element){
			scope.$watch("inputText", function(value){
				if(value==="info"){
					element.children(1).addClass('alert alert-info');
				}
			});
		}
	}
});