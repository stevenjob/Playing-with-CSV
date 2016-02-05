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


    }

})();