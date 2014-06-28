var module = angular.module('motoGpRiders', [
    'ngRoute',
    'controllers'
]);

module.config(function ($routeProvider) {
        $routeProvider.when('/riders', {
            templateUrl: 'list.html',
            controller: 'ridersListController'
        }),

        $routeProvider.when('/riders/:number', {
            templateUrl: 'details.html',
            controller: 'riderDetailsController'
        }),

        $routeProvider.otherwise({
            redirectTo: '/riders'
        })
    }
);