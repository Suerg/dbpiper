/**
 * Created by dp0613 on 2/5/2015.
 */
angular.module('dbpiper').directive('toolbar', [function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/toolbar.template.html',
        transclude: true,
        scope: {},
        controller: function ($scope) {
            this.setHovered = function (hovered) {
                $scope.hovered = hovered;
            };
            this.setLocked = function (locked) {
                $scope.locked = locked;
            };
            this.toggleLocked = function() {
                $scope.locked = !$scope.locked;
            };
            $scope.setHovered = this.setHovered;
            $scope.setLocked = this.setLocked;
            $scope.toggleLocked = this.toggleLocked;
        },
        link: function (scope, element, attrs) {
            //scope.$watch('hovered', function (hovered) {
            //    if (hovered) {
            //        element.addClass('visible');
            //    } else if (!scope.locked) {
            //        element.removeClass('visible');
            //    }
            //});
            scope.$watch('locked', function(locked) {
                //handles case where an element was locked initially
                if(locked) {
                    element.addClass('visible');
                }
            });

            element.on('mouseover', function () {
                scope.$apply(function () {
                    scope.setHovered(true);
                    element.addClass('visible');
                });
            });
            element.on('mouseout', function () {
                scope.$apply(function () {
                    scope.setHovered(false);
                    if(!scope.locked) {

                        element.removeClass('visible');
                    }
                });
            });
        }
    }
}]);