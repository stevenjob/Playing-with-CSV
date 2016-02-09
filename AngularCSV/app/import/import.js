(function () {
    'use strict';

    angular.module('csvApp.import', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/import', {
                templateUrl: 'import/import.html',
                controller: 'ImportCtrl'
            });
        }])

        .controller('ImportCtrl', importController);

    importController.$inject = ['$scope', '$http', '$q'];

    function importController($scope, $http, $q) {

        $scope.csv = {
            content: null,
            header: true,
            separator: ',',
            encoding: 'ISO-8859-1',
            result: null
        };

        $scope.save = function () {
            console.log($scope.csv.result);
            saveData($scope.csv.result);
        };

        var saveData = function (results) {
            console.log(results);

            var deferred = $q.defer();

            $http({
                headers: {'Content-Type': 'application/json'},
                url: 'http://localhost:8080/csv-services',
                method: 'POST',
                data: angular.toJson(results)
            })
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (response) {
                    deferred.reject(response);
                });
            return deferred.promise;
        }

    }

})();