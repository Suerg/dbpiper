/**
 * Created by Suerg on 1/24/15.
 */

angular.module('dbpiper').directive('drag', ['$document', function ($document) {
    return {
        restrict: 'AE',
        link: function ($scope, element, attrs) {

            $scope.dragging = false;
            $scope.lastX = 0;
            $scope.lastY = 0;

            if (attrs.nostyle == undefined) {
                element.addClass('dragStyle');
            }
            element.addClass('drag');
            element.addClass('noselect');

            var hasChildrenDragging = function () {
                var childrenDragging = false;
                var children = element.children();
                for (var i = 0; i < children.length; i++) {
                    var child = angular.element(children[i]).data().$scope;
                    if (child.dragging) {
                        childrenDragging = true;
                    }
                }
                return childrenDragging;
            };

            element.on('mousedown', function (event) {
                if (!hasChildrenDragging()) {
                    $scope.dragging = true;
                    $scope.lastX = event.clientX;
                    $scope.lastY = event.clientY;
                }
            });
            angular.element(document).bind('mousemove', function (event) {
                if ($scope.dragging) {
                    var topString = 'top';
                    var leftString = 'left';

                    var top = parseInt(element.css(topString).slice(0, -2));
                    var left = parseInt(element.css(leftString).slice(0, -2));

                    if (top && Number.isInteger(top)) {
                        element.css(topString, top + (event.clientY - $scope.lastY));
                    } else {
                        element.css(topString, (event.clientY - $scope.lastY));
                    }

                    if (left && Number.isInteger(left)) {
                        element.css(leftString, left + (event.clientX - $scope.lastX));
                    } else {
                        element.css(leftString, (event.clientX - $scope.lastX));
                    }

                    $scope.lastX = event.clientX;
                    $scope.lastY = event.clientY;
                }
            });
            angular.element('html').on('mouseup', function (event) {
                if ($scope.dragging) {
                    $scope.dragging = false;
                }
            });
        }
    }
}]);