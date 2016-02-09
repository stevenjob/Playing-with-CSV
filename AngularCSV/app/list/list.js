(function () {
    'use strict';

    angular.module('csvApp.list', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/list', {
                templateUrl: 'list/list.html',
                controller: 'ListCtrl'
            });
        }])

        .controller('ListCtrl', listController);

    listController.$inject = ['$scope', '$http', '$q'];

    function listController($scope, $http, $q) {

        $scope.results = null;

        var getProfiles = function (results) {
            console.log(results);

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

        getProfiles()
            .then(function(data) {
                console.log(data);
                $scope.results = data;
            }, function (response) {
                console.log('problem',response.message)
            });
    }
})();