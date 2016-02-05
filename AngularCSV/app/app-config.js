(function() {

    'use strict';

    angular
        .module('csvApp')
        .config(applicationConfig);

    applicationConfig.$inject = ['$routeProvider','$resourceProvider'];

    function applicationConfig($routeProvider, $resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
        $routeProvider.otherwise({redirectTo: '/import'});
    }

})();