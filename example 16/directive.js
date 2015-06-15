myApp.directive("myDir", function(){
	return{
		restrict: "E",
		controller: function($scope, $modal){
			this.modalOpen = function() {
				var modalInstance = $modal.open({
					animation: true,
					templateUrl: 'template.html'
				});
			};
			
		},
		link: function(scope, element, attrs, myCtrl){
			scope.$watch(attrs.visible, function(val){
					myCtrl.modalOpen();
			});
		}
	}
});