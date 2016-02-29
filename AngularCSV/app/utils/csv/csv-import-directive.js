(function () {

    'use strict';

    angular
        .module('csvApp.utils', [])
        .directive('csvImport', csvImport);

    function csvImport() {
        return {
            restrict: 'EA',
            scope: {
                content: '=?',  //optional binding
                hasHeader: '=?',//does the file have a header
                useHeader: '=?',//should we use the header
                results: '=?',  //result stored as json
                encoding: '=?', //allows for change of encoding
                separator: '=?',//default is ','
                error: '=?',    //used to pass errors when reading to the controller
                filename: '=?', //used to pass the filename to the controller
                onSuccess: '=?' //callback function
            },
            template: '<input type="file" id="input">',
            link: function (scope, element) {
                scope.separator = scope.separator || ','; //set default

                element.on('change', function (onChangeEvent) {
                    var reader = new FileReader();
                    scope.filename = onChangeEvent.target.files[0].name;

                    //onload is triggered every time the reading operation has finished
                    reader.onload = function (onLoadEvent) {
                        scope.$apply(function () {
                            var content = {
                                csv: onLoadEvent.target.result.replace(/\r\n|\r/g, '\n'),
                                hasHeader: scope.hasHeader,
                                useHeader: scope.useHeader,
                                separator: scope.separator
                            };
                            scope.content = content.csv;

                            if (isCSVFile(scope.filename)) {
                                scope.results = null;
                                scope.error = 'Not a CSV file, must end with .csv';
                            } else {
                                scope.results = csvToJSON(content);
                                if (scope.onSuccess) {
                                    //the onSuccess callback function is called to handle the data from the csv and manipulate it specifically for the users needs
                                    scope.onSuccess(scope.results);
                                }
                            }
                        });
                    };

                    //if csv file has changed then read it as text. This triggers the onload event
                    if ((onChangeEvent.target.type === 'file') && (onChangeEvent.target.files !== null || onChangeEvent.srcElement.files !== null)) {
                        reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0], scope.encoding || 'ISO-8859-1');
                    } else {
                        //the csv file has not changed so we repeat the csv to json operation for the old csv file
                        if (scope.content !== null) {
                            var content = {
                                csv: scope.content,
                                hasHeader: scope.hasHeader,
                                useHeader: scope.useHeader,
                                separator: scope.separator
                            };
                            if (isCSVFile(scope.filename)) {
                                scope.results = null;
                                scope.error = 'Not a CSV file, must end with .csv';
                            } else {
                                scope.results = csvToJSON(content);
                                if (scope.onSuccess) {
                                    scope.onSuccess(scope.results);
                                }
                            }
                        }
                    }
                });

                var isCSVFile = function (filename) {
                    return filename && filename.substr(-4) !== '.csv';
                };

                var csvToJSON = function (content) {
                    var lines = content.csv.split('\n');
                    var results = [];
                    var start = 0;
                    var columnCount = lines[0].split(content.separator).length;
                    var header = [];
                    //if has a header start the parsing at the next line.
                    if (content.hasHeader) {
                        header = lines[0].split(content.separator).map(function (element) {
                            return element.toLowerCase().replace(/\s+/g, '');
                        });

                        start = 1;
                    }

                    for (var i = start; i < lines.length; i++) {
                        var result = content.useHeader ? {} : [];
                        //the below regex splits at separator only if is not followed by an odd number of ".

                        //attempted explanation:
                        // (?!   stuff goes here       ) - negative lookahead  - if anything in the group matches then result is discarded
                        // [^"] - match any none " char
                        // * - 0 or more
                        // (?:   stuff goes here       ) - non capture group - groups tokens together

                        var currentLine = lines[i].split(new RegExp(content.separator +
                            '(?!' +
                            '[^"]*"' +
                            '(?:(?:[^"]*"){2})*' +
                            '[^"]*' +
                            '$)'));

                        //if using header then we will create an array of objects else array of arrays
                        if (content.useHeader) {
                            for (var j = 0; j < header.length; j++) {
                                result[header[j]] = currentLine[j] ? currentLine[j].trim() : '';
                            }
                            results.push(result);
                        } else {

                            //if not satisfied then the row of data is skipped
                            if (currentLine.length === columnCount) {
                                for (var k = 0; k < currentLine.length; k++) {
                                    result[k] = currentLine[k]  ? currentLine[k].trim() : '';
                                }
                                results.push(result);
                            }
                        }
                    }
                    return results;
                };
            }
        };
    }
})();