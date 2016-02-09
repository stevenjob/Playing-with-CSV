(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular
        .module('csvApp', [
            'ngRoute',
            'ngCsv',
            'csvApp.export',
            'csvApp.import',
            'csvApp.utils'
        ]);
})();
