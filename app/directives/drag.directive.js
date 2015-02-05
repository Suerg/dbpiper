/**
 * Created by Suerg on 1/24/15.
 */

angular.module('dbpiper').directive('drag', ['$q', function ($q) {
    return {
        restrict: 'AE',
        scope: {
            locked: '=?'
        },
        templateUrl: 'templates/drag.template.html',
        transclude: true,
        controller: function ($scope) {
            $scope.dragCreatedDeferred = $q.defer();
            $scope.dragCreatedPromise = $scope.dragCreatedDeferred.promise;
            this.toggleLock = function () {
                $scope.dragCreatedPromise.then(function() {
                    $scope.locked = !$scope.locked;

                    if ($scope.locked) {
                        $scope.clearCss();
                    } else {
                        $scope.setCss();
                    }
                });
            };
            this.getLocked = function () {
                return $scope.locked;
            };
            $scope.$on(Constants().EVENTS.DRAGGING, function (event, data) {
                if (data) {
                    $scope.childrenDragging = true;
                } else {
                    $scope.childrenDragging = false;
                }
            });
        },
        link: function (scope, element, attrs) {

            scope.nostyle = typeof attrs.nostyle !== 'undefined';
            scope.text = typeof attrs.text !== 'undefined';

            scope.setCss = function () {
                if (!scope.nostyle) {
                    element.addClass('dragStyle');
                }
                if(scope.text) {
                    element.addClass('textDrag')
                }
                element.addClass('interactible');
                element.addClass('noselect');
            };
            scope.clearCss = function () {
                element.removeClass('textDrag')
                element.removeClass('interactible');
            };
            scope.locked = false;
            scope.dragging = false;
            scope.lastX = 0;
            scope.lastY = 0;
            scope.childrenDragging = false;

            scope.setCss();
            element.addClass('dragFunctionality');

            element.on('mousedown', function (event) {
                if (!scope.childrenDragging && !scope.locked) {
                    scope.dragging = true;
                    scope.lastX = event.clientX;
                    scope.lastY = event.clientY;

                    scope.$emit(Constants().EVENTS.DRAGGING, true);
                }
            });
            angular.element(document).bind('mousemove', function (event) {
                if (scope.dragging) {
                    var topString = 'top';
                    var leftString = 'left';

                    var top = parseInt(element.css(topString).slice(0, -2));
                    var left = parseInt(element.css(leftString).slice(0, -2));

                    if (top && Number.isInteger(top)) {
                        element.css(topString, top + (event.clientY - scope.lastY));
                    } else {
                        element.css(topString, (event.clientY - scope.lastY));
                    }

                    if (left && Number.isInteger(left)) {
                        element.css(leftString, left + (event.clientX - scope.lastX));
                    } else {
                        element.css(leftString, (event.clientX - scope.lastX));
                    }

                    scope.lastX = event.clientX;
                    scope.lastY = event.clientY;
                }
            });
            angular.element('html').on('mouseup', function (event) {
                if (scope.dragging) {
                    scope.dragging = false;

                    scope.$emit(Constants().EVENTS.DRAGGING, false);
                }
            });

            scope.dragCreatedDeferred.resolve();
        }
    }
}]);