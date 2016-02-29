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

        $scope.results = null;
        $scope.getHeader = function () {
            return ['year', 'jan', 'feb', 'march', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
        };

        $scope.getFilename = function () {

            var date = new Date();
            function pad(s) { return (s < 10) ? '0' + s : s; }
            return 'profile'+ '_' + [pad(date.getDate()), pad(date.getMonth()+1), date.getFullYear()].join('-') + '_' + date.toTimeString().slice(0,5).replace(':', '-') + '.csv';
        };

        $scope.getResultsForExport = function () {

            if ($scope.results) {
                return $scope.results.map(function(obj){
                    delete obj.id;
                    return obj;
                });
            } else {
                console.log('Throw error as there are no results');
            }
        };



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
                    $scope.results = data;
                }, function (response) {
                    console.log('problem', response.message)
                });
        }

        updateResults();
    }
})();