/**
 * Created by dp0613 on 2/3/2015.
 */
angular.module('dbpiper').directive('lock', [function () {
    return {
        restrict: 'E',
        require: ['^drag', '^toolbar'],
        templateUrl: 'templates/lock.template.html',
        scope: {
            locked: '=?'
        },
        controller: function($scope) {
            $scope.toggleLock = function() {
                $scope.dragCtrl.toggleLock();

                if(typeof $scope.locked === 'undefined') {
                    $scope.locked = false;
                }

                $scope.locked = $scope.dragCtrl.getLocked();

                if($scope.toolbarCtrl) {
                    $scope.toolbarCtrl.toggleLocked();
                }
            }
        },
        link: function (scope, element, attrs, controllers) {
            var dragCtrl = controllers[0];
            var toolbarCtrl = controllers[1];

            scope.toolbarCtrl = toolbarCtrl;
            scope.dragCtrl = dragCtrl;

            if(scope.locked) {
                if(scope.toolbarCtrl) {
                    scope.toolbarCtrl.setLocked(true);
                    scope.dragCtrl.toggleLock();
                }
            } else {
                if(scope.toolbarCtrl) {
                    scope.toolbarCtrl.setLocked(false);
                }
            }
        }
    }
}]);