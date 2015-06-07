myApp.directive("myDir", function(){
	return {
		template: '<h1>{{fname}} {{lname}}</h1>',
		restrict: 'EACM',
		replace: true,
	}
});