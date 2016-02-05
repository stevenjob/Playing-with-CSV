(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular
        .module('csvApp', [
            'ngRoute',
            'csvApp.list',
            'csvApp.import',
            'csvApp.utils'
        ]);
})();
