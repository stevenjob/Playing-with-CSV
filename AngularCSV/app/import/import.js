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

        var inputElement = document.getElementById('input');

        //inputElement.addEventListener("change", handleFile, false);

        function handleFile() {
            console.log('Import happening');

            //check that its a csv file
            //check that it is the correct format


            //console.log(selectedFile);
            //var fileList = this.files; /* now you can work with the file list */
        }


        //$scope.import = function () {
        //    var inputElement = document.getElementById('input');
        //    var selectedFile = inputElement.files[0];
        //    console.log('Import happening');
        //
        //
        //    console.log(selectedFile);
        //};
    }

})();