myApp.service("myService", function($http){
	this.getData = function(){
		return $http.get('http://www.w3schools.com/angular/customers.php')
	}
});