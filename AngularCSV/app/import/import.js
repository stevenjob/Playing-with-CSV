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
            header: true,
            separator: ',',
            result: null,
            error: null
        };

        $scope.save = function () {
            saveData($scope.csv.result)
                .then(function() {
                    updateResults();
                }, function (response) {
                    console.log('problem',response.message)
                });
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
        };

        $scope.results = [];

        var getResults = function () {

            var deferred = $q.defer();

            $http({
                headers: {'Content-Type': 'application/json'},
                url: 'http://localhost:8080/csv-services',
                method: 'GET'
            })
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (response) {
                    deferred.reject(response);
                });
            return deferred.promise;
        };

        function updateResults () {
            getResults()
                .then(function(data) {
                    console.log(data);
                    $scope.results = data;
                }, function (response) {
                    console.log('problem',response.message)
                });
        }
        updateResults();

        $scope.deleteAll = function () {
            deleteAllData($scope.csv.result)
                .then(function() {
                    updateResults();
                }, function (response) {
                    console.log('problem',response.message)
                });
        };

        var deleteAllData = function () {
            var deferred = $q.defer();

            $http({
                headers: {'Content-Type': 'application/json'},
                url: 'http://localhost:8080/csv-services',
                method: 'DELETE'
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