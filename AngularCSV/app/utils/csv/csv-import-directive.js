(function() {

    'use strict';

    angular
        .module('csvApp.utils', [])
        .directive('csvImport', csvImport);

    function csvImport() {
        return {
            templateUrl: './utils/csv/csv-import.html',
            restrict: 'EA',
            transclude: true,
            controller: csvController,
            controllerAs: 'csvController',
            scope: {
                action: '='
            }
        };
    }


    function csvController() {
        console.log('aaa');
        this.fileInputChanged = function() {
            console.log('hello');
        };
    }

})();