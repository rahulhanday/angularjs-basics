myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/route1', {
                templateUrl: 'template1.html',
                controller: 'myController1'
            }).
            when('/route2', {
                templateUrl: 'template2.html',
                controller: 'myController2'
            }).
            otherwise({
                redirectTo: '/'
            });
}]);