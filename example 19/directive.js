myApp.directive("mydir", function(){
	return {
		template:'<input type="type" ng-model="name">',
		scope: {
			name:"@detail"
		}
	}
});

myApp.directive("mydir1", function(){
	return {
		template: '<input type="text" ng-model="city">',
		scope: {
			city:"=detail"
		}
	}
});

myApp.directive("mydir2", function(){
	return {
		scope: {
			action:"&clickme"
		},
		template: '<button ng-click="action()">Button</button>',
	}
});