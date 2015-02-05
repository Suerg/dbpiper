/**
 * Created by Suerg on 1/24/15.
 */
var HomeCtrl = function($scope) {
    this.$scope = $scope;
    this.$scope.dbpiper = this;
};

angular.module('dbpiper').controller('HomeCtrl', ['$scope', HomeCtrl]);