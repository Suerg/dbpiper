/**
 * Created by dp0613 on 2/5/2015.
 */
angular.module('dbpiper').directive('edit', [function () {
    return {
        restrict: 'E',
        require: '^sandbox',
        templateUrl: 'templates/edit.template.html',
        scope: {},
        link: function (scope, element, attrs, sandboxCtrl) {
            scope.sandboxCtrl = sandboxCtrl;
        }
    }
}]);