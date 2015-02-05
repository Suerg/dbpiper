/**
 * Created by dp0613 on 2/3/2015.
 */
angular.module('dbpiper').directive('lock', ['$document', '$compile', function ($document) {
    return {
        restrict: 'E',
        require: '^drag',
        templateUrl: 'templates/lock.template.html',
        link: function (scope, element, attrs, dragCtrl) {
            scope.dragCtrl = dragCtrl;
            scope.dragCtrl.toggleLock(); //defaults the drag directive to locked if it has a lock. otherwise it will always be draggable
        }
    }
}]);