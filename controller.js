var controllerManager = angular.module('controllers', []);
var riders;

module.run(function($http){
    $http.get('riders.json').
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
    console.log($scope.rider);
});

controllerManager.controller('newRiderController', function($scope, $http){
    $scope.reset = function(){
        $scope.rider={};
    };

    $scope.createRider= function(rider){
        $http.post('riders.json', rider).
            success(function(data, status){
                alert('Salvataggio effettuato!');
                window.history.back();
            }).
            error(function(data, status){
                alert('Si è verificato un errore durante il salvataggio dei dati.!');
            });
    };
});

















