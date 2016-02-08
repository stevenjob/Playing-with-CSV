(function() {
    'use strict';

    angular.module('csvApp.import', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/import', {
                templateUrl: 'import/import.html',
                controller: 'ImportCtrl'
            });
        }])

        .controller('ImportCtrl', ImportController);

    ImportController.$inject = ['$scope'];

    function ImportController($scope) {

        $scope.csv = {
            content: null,
            header: true,
            separator: ',',
            encoding: 'ISO-8859-1',
            result: null
        };

        $scope.csv2 = {
            content: null,
            header: false,
            result: null,
            separator: ',',
            encoding: 'ISO-8859-1'
        };


    }

})();