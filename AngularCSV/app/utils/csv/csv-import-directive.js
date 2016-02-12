(function () {

    'use strict';

    angular
        .module('csvApp.utils', [])
        .directive('csvImport', csvImport);

    function csvImport() {
        return {
            template: '<input type="file" id="input">',
            restrict: 'EA',
            scope: {
                content: '=?',//optional binding
                header: '=?',
                result: '=',
                encoding: '=?',
                separator: '=?',
                error: '=?'
            },
            link: function (scope, element) {
                element.on('change', function (onChangeEvent) {
                    var reader = new FileReader();
                    scope.filename = onChangeEvent.target.files[0].name;

                    reader.onload = function (onLoadEvent) {
                        scope.$apply(function () {
                            var content = {
                                csv: onLoadEvent.target.result.replace(/\r\n|\r/g, '\n'),
                                header: scope.header,
                                separator: scope.separator
                            };
                            scope.content = content.csv;

                            if (scope.filename && scope.filename.substr(-4) != ".csv") {
                                scope.result = null;
                                scope.error = "Not a CSV file, must end with .csv";
                            } else {
                                scope.result = csvToJSON(content);
                            }
                        });
                    };

                    if ((onChangeEvent.target.type === "file") && (onChangeEvent.target.files != null || onChangeEvent.srcElement.files != null)) {
                        reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0], scope.encoding || 'ISO-8859-1');
                    } else {
                        if (scope.content != null) {
                            var content = {
                                csv: scope.content,
                                header: !scope.header,
                                separator: scope.separator
                            };
                            if (scope.filename && scope.filename.substr(-4) != ".csv") {
                                scope.result = null;
                                scope.error = "Not a CSV file, must end with .csv";
                            } else {
                                scope.result = csvToJSON(content);
                            }
                        }
                    }
                });

                var csvToJSON = function (content) {
                    var lines = content.csv.split('\n');
                    var result = [];
                    var start = 0;
                    var columnCount = lines[0].split(content.separator).length;

                    if (content.header) {
                        start = 1;
                    }

                    for (var i = start; i < lines.length; i++) {
                        var obj = {};

                        //the below regex splits at separator only if is not followed by an odd number of ".

                        //attempted explanation:
                        // (?!   stuff goes here       ) - negative lookahead  - if anything in the group matches then result is discarded
                        // [^"] - match any none " char
                        // * - 0 or more
                        // (?:   stuff goes here       ) - non capture group - groups tokens together

                        var currentline = lines[i].split(new RegExp(content.separator +
                            '(?!' +
                            '[^"]*"' +
                            '(?:(?:[^"]*"){2})*' +
                            '[^"]*' +
                            '$)'));

                        if (currentline.length === columnCount) {
                            for (var k = 0; k < currentline.length; k++) {
                                obj[k] = currentline[k];
                            }
                            result.push(obj);
                        }
                    }
                    return result;
                };
            }
        };
    }
})();