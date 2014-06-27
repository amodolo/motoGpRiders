var riders = [
    {
        name: "Valentino Rossi",
        number: 46,
        team: "Movistar Yamaha MotoGP",
        nation: 'ita',
        height: 182,
        weight: 65,
        city: "Urbino"
    },
    {
        name: "Jorge Lorenzo",
        number: 99,
        team: "Movistar Yamaha MotoGP",
        nation: 'esp',
        height: 173,
        weight: 63,
        city: "Palma de Mallorca"
    },
    {
        name: "Marc Marquez",
        number: 93,
        team: "Repsol Honda Team",
        nation: 'esp',
        height: 168,
        weight: 59,
        city: "Cervera"
    },
    {
        name: "Dani Pedrosa",
        number: 26,
        team: "Repsol Honda Team",
        nation: 'esp',
        height: 160,
        weight: 51,
        city: "Sabadell"
    }
]

var mainController = function ($scope) {
    $scope.riders = riders;
}