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
            var dragDelta = 20;
            element.css('width', attrs.width);
            element.css('height', attrs.height);
            element.on('mousemove', function(event) {
                var leftDelta = event.clientX - element[0].offsetLeft;
                var rightDelta = (element[0].offsetLeft + element[0].offsetWidth) - event.clientX;
                if(leftDelta <= dragDelta || rightDelta <= dragDelta) {
                    element.addClass('resizeHorizontal');
                } else {
                    element.removeClass('resizeHorizontal');
                }
            });
        }
    }
}]);