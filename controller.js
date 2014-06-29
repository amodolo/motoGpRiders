var controllerManager = angular.module('controllers', []);
var riders;

module.run(function($http){
    $http.get('server/api/riders.json').
        success(function(data){
            riders=data;
        }).
        error(function(data, status){
            alert("Si è verificato un errore nel caricamento della lista dei piloti.");
        });
});

controllerManager.controller('ridersListController', function($scope){
    $scope.riders = riders;
});


controllerManager.controller('riderDetailsController', function($scope, $routeParams){
    $scope.rider = riders.filter(function(rider){
        return rider.number == $routeParams.number;
    })[0];
});