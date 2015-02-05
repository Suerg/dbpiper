/**
 * Created by dp0613 on 2/5/2015.
 */
angular.module('dbpiper').directive('toolbar', [function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/toolbar.template.html',
        transclude: true,
        scope: {},
        link: function (scope, element, attrs) {
        }
    }
}]);