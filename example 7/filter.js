myApp.filter("myFilter", function(){
	return function(name){
		return name.toUpperCase();
	};
});