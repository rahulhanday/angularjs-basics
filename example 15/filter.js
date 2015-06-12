myApp.filter("myFilter", function(){
	return function(value){
		return value.toUpperCase();
	};
});