/**
 * Created by dp0613 on 1/30/2015.
 */
angular.module('dbpiper').directive('sandbox', ['$document', function ($document) {
    return {
        restrict: 'AE',
        controller: function ($scope) {
            this.edit = function () {
                //angular.element('#editModal').modal('toggle');
            };
        },
        link: function ($scope, element, attrs) {
            element.css('width', attrs.width);
            element.css('height', attrs.height);

        }
    }
}]);