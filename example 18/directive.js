myApp.directive("mydir1", function(){
	return {
		restrict: "E",
		template: '<p><input type="text" ng-model="inputText"></p><dir>{{inputText}}</dir>',
		scope: {}
	}
});

myApp.directive("mydir2", function(){
	return {
		restrict: "E",
		template: '<p><input type="text" ng-model="inputText"></p><dir>{{inputText}}</dir>'
	}
});