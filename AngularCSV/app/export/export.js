(function () {
    'use strict';

    angular.module('csvApp.export', ['ngRoute', 'ngCsv'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/export', {
                templateUrl: 'export/export.html',
                controller: 'ExportCtrl'
            });
        }])

        .controller('ExportCtrl', exportController);

    exportController.$inject = ['$scope', '$http', '$q'];

    function exportController($scope, $http, $q) {
        $scope.getHeader = function () {
            return ['Year', 'jan', 'feb', 'march', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
        };

        $scope.getResultsForExport = function () {
            return $scope.results.map(function(obj){
                delete obj.id;
                return obj;
            });
        };

        $scope.results = null;

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

        function updateResults() {
            getResults()
                .then(function (data) {
                    console.log(data);
                    $scope.results = data;
                }, function (response) {
                    console.log('problem', response.message)
                });
        }

        updateResults();
    }
})();