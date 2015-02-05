/**
 * Created by Suerg on 1/24/15.
 */

angular.module('dbpiper').directive('drag', ['$document', function ($document) {
    return {
        restrict: 'AE',
        scope: {
            locked: '=?'
        },
        controller: function ($scope) {
            this.toggleLock = function () {
                $scope.locked = !$scope.locked;
            };
            this.getLocked = function () {
                return $scope.locked;
            };
            $scope.$on('dragging', function (event, data) {
                if (data) {
                    $scope.childrenDragging = true;
                } else {
                    $scope.childrenDragging = false;
                }
            });
        },
        link: function (scope, element, attrs) {

            scope.locked = false;
            scope.dragging = false;
            scope.lastX = 0;
            scope.lastY = 0;
            scope.childrenDragging = false;

            if (attrs.nostyle == undefined) {
                element.addClass('dragStyle');
            }
            element.addClass('drag');
            element.addClass('noselect');

            element.on('mousedown', function (event) {
                if (scope.childrenDragging) {
                    alert("dragging");
                }
                if (!scope.childrenDragging && !scope.locked) {
                    scope.dragging = true;
                    scope.lastX = event.clientX;
                    scope.lastY = event.clientY;

                    scope.$emit('dragging', true);
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

                    scope.$emit('dragging', false);
                }
            });
        }
    }
}]);