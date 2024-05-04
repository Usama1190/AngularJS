angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Hege', country: 'Sewden' },
        { name: 'Kai', country: 'Denmark' }
    ]
});